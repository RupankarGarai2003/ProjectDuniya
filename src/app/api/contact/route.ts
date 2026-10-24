
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_LENGTHS = {
  name: 150,
  email: 254,
  phone: 40,
  service: 150,
  due_date: 10,
  requirements: 10000,
} as const;

const ALLOWED_SERVICES = [
  "Final Year Academic Project",
  "Website / Software Development",
  "Data / AI Project",
  "Research / Thesis Writing",
  "Presentation / Viva Support",
  "Others",
];

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  try {
    const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL?.trim();
    const secret = process.env.GOOGLE_SHEETS_SECRET;

    if (!endpoint || !secret) {
      console.error("Google Sheets environment variables are missing.");
      return errorResponse("The enquiry service is not configured.", 500);
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return errorResponse("Invalid request data.", 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return errorResponse("Invalid request data.", 400);
    }

    const data = body as Record<string, unknown>;

    const fields = [
      "name",
      "email",
      "phone",
      "service",
      "due_date",
      "requirements",
    ] as const;

    for (const field of fields) {
      const value = data[field];

      if (
        typeof value !== "string" ||
        !value.trim() ||
        value.length > MAX_LENGTHS[field]
      ) {
        return errorResponse(
          `Please check the ${field.replace("_", " ")} field.`,
          400
        );
      }
    }

    const name = (data.name as string).trim();
    const email = (data.email as string).trim();
    const phone = (data.phone as string).trim();
    const service = (data.service as string).trim();
    const dueDate = (data.due_date as string).trim();
    const requirements = (data.requirements as string).trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return errorResponse("Please enter a valid email address.", 400);
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
      return errorResponse("Please select a valid due date.", 400);
    }

    const parsedDate = new Date(`${dueDate}T00:00:00.000Z`);

    if (
      Number.isNaN(parsedDate.getTime()) ||
      parsedDate.toISOString().slice(0, 10) !== dueDate
    ) {
      return errorResponse("Please select a valid due date.", 400);
    }

    if (!ALLOWED_SERVICES.includes(service)) {
      return errorResponse("Please select a valid service.", 400);
    }

    const sourcePage =
      typeof data.source_page === "string"
        ? data.source_page.slice(0, 500)
        : "";

    const upstreamResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        due_date: dueDate,
        requirements,
        source_page: sourcePage,
        secret,
      }),
      cache: "no-store",
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });

    const responseText = await upstreamResponse.text();

    let result: unknown;

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error(
        "Google Sheets returned a non-JSON response:",
        "HTTP",
        upstreamResponse.status,
        "Content type:",
        upstreamResponse.headers.get("content-type"),
        "Response preview:",
        responseText.slice(0, 500)
      );

      return errorResponse(
        "Unable to save your enquiry. Please try again.",
        502
      );
    }

    if (!upstreamResponse.ok) {
      console.error(
        "Google Sheets returned HTTP",
        upstreamResponse.status,
        "Response:",
        result
      );

      return errorResponse(
        "Unable to save your enquiry. Please try again.",
        502
      );
    }

    if (
      !result ||
      typeof result !== "object" ||
      !("success" in result) ||
      result.success !== true
    ) {
      console.error("Google Sheets did not confirm the enquiry:", result);

      return errorResponse(
        "Unable to save your enquiry. Please try again.",
        502
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Contact API error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return errorResponse(
      "Unable to save your enquiry. Please try again.",
      502
    );
  }
}
