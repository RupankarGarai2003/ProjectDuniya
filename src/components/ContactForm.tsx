
"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

// Use the visitor's local calendar date instead of UTC.
function getLocalDateString(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const fieldClass =
  "w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition aria-[invalid=true]:border-red-500";

const labelClass = "text-sm font-semibold text-slate-700 block mb-1";

const services = [
  "Final Year Academic Project",
  "Website / Software Development",
  "Data / AI Project",
  "Research / Thesis Writing",
  "Presentation / Viva Support",
  "Others",
];

const ContactForm = () => {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [today, setToday] = useState<string | undefined>(undefined);

  const started = useRef(false);
  const submitting = useRef(false);

  const onStart = () => {
    if (!today) setToday(getLocalDateString());

    if (!started.current) {
      started.current = true;
      trackEvent("contact_form_start", {
        page_path: window.location.pathname,
      });
    }
  };

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const get = (key: string) => String(data.get(key) ?? "").trim();

    if (!get("service")) {
      errs.service = "Please choose a service.";
    }

    if (get("name").length < 2) {
      errs.name = "Please enter your name.";
    }

    if (!/^[+()\d][\d\s()+-]{6,19}$/.test(get("phone"))) {
      errs.phone = "Enter a valid phone number (digits, +, spaces).";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) {
      errs.email = "Enter a valid email address.";
    }

    const due = get("due_date");

    if (!due) {
      errs.due_date = "Please pick a due date.";
    } else if (due < getLocalDateString()) {
      errs.due_date = "Due date cannot be in the past.";
    }

    if (get("requirements").length < 10) {
      errs.requirements =
        "Please describe your requirements (at least 10 characters).";
    }

    return errs;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (submitting.current) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots filling this field are not submitted.
    if (String(data.get("_gotcha") ?? "")) {
      setStatus("success");
      return;
    }

    const errs = validate(data);
    setFieldErrors(errs);

    if (Object.keys(errs).length > 0) {
      setError("");

      const firstInvalid = form.querySelector<HTMLElement>(
        "[aria-invalid='true'], :invalid"
      );

      const firstErrorKey = Object.keys(errs)[0];

      (document.getElementById(id(firstErrorKey)) ?? firstInvalid)?.focus();

      return;
    }

    submitting.current = true;
    setStatus("submitting");
    setError("");

    const service = String(data.get("service") ?? "").trim();

    try {
      // Send the enquiry to our server-side API, not directly to Google.
      // The Google Sheets secret must never be included in client-side code.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          service,
          due_date: String(data.get("due_date") ?? "").trim(),
          requirements: String(data.get("requirements") ?? "").trim(),
          source_page: window.location.href,
        }),
      });

      let result: { success?: boolean; message?: string };

      try {
        result = await response.json();
      } catch {
        throw new Error("The server returned an invalid response.");
      }

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || `Form submission failed: HTTP ${response.status}`
        );
      }

      trackEvent("contact_form_submit", {
        service,
        page_path: window.location.pathname,
      });

      trackEvent("quote_request", { service });

      setStatus("success");
      setFieldErrors({});
      form.reset();
    } catch (submissionError) {
      trackEvent("contact_form_error", {
        page_path: window.location.pathname,
      });

      setStatus("error");

      setError(
        submissionError instanceof Error &&
          submissionError.message !== "Failed to fetch"
          ? `Sorry, we couldn't send your enquiry. Please try again, or message us on WhatsApp (${siteConfig.phoneDisplay}) or email ${siteConfig.email}.`
          : `Sorry, we couldn't send your enquiry. Please try again, or message us on WhatsApp (${siteConfig.phoneDisplay}) or email ${siteConfig.email}.`
      );
    } finally {
      submitting.current = false;
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8 md:p-10 text-center shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
      >
        <p className="text-4xl mb-3" aria-hidden="true">
          ✅
        </p>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Thanks - your enquiry is in!
        </h3>

        <p className="text-slate-600 mb-6 text-sm">
          We&apos;ll review your requirements and contact you by phone,
          WhatsApp or email. For anything urgent, message us on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-6 py-3 text-sm font-semibold text-white bg-green-700 hover:bg-green-800 transition"
          >
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setError("");
              setFieldErrors({});
              started.current = false;
            }}
            className="rounded-xl px-6 py-3 text-sm font-semibold text-indigo-700 border border-indigo-200 hover:bg-indigo-50 transition"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const err = (key: string) =>
    fieldErrors[key] ? (
      <p id={id(`${key}-err`)} className="text-xs text-red-600 mt-1">
        {fieldErrors[key]}
      </p>
    ) : null;

  const a11y = (key: string) => ({
    id: id(key),
    "aria-invalid": fieldErrors[key] ? (true as const) : undefined,
    "aria-describedby": fieldErrors[key] ? id(`${key}-err`) : undefined,
  });

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
      <form
        onSubmit={onSubmit}
        onFocus={onStart}
        noValidate
        className="space-y-4"
      >
        <div>
          <label htmlFor={id("service")} className={labelClass}>
            What service may we assist you with? *
          </label>

          <select
            name="service"
            required
            defaultValue=""
            className={fieldClass}
            {...a11y("service")}
          >
            <option value="">Select a Service</option>

            {services.map((serviceOption) => (
              <option key={serviceOption} value={serviceOption}>
                {serviceOption}
              </option>
            ))}
          </select>

          {err("service")}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={id("name")} className={labelClass}>
              Name *
            </label>

            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Enter your name"
              className={fieldClass}
              {...a11y("name")}
            />

            {err("name")}
          </div>

          <div>
            <label htmlFor={id("phone")} className={labelClass}>
              Phone (with country code) *
            </label>

            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className={fieldClass}
              {...a11y("phone")}
            />

            {err("phone")}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={id("email")} className={labelClass}>
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className={fieldClass}
              {...a11y("email")}
            />

            {err("email")}
          </div>

          <div>
            <label htmlFor={id("due_date")} className={labelClass}>
              Due Date (Timeline) *
            </label>

            <input
              type="date"
              name="due_date"
              required
              min={today ?? getLocalDateString()}
              className={fieldClass}
              {...a11y("due_date")}
            />

            {err("due_date")}
          </div>
        </div>

        <div>
          <label htmlFor={id("requirements")} className={labelClass}>
            Mention your Requirements / Guidelines *
          </label>

          <textarea
            name="requirements"
            required
            rows={4}
            placeholder="Describe your project requirements..."
            className={`${fieldClass} resize-none`}
            {...a11y("requirements")}
          />

          {err("requirements")}
        </div>

        {/* Honeypot field for basic bot detection. */}
        <div className="hidden" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-xl py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Submit Enquiry"}
        </button>

        <p className="text-xs text-center text-slate-600 mt-3">
          We use your details only to respond to this enquiry and keep them
          confidential. By submitting you agree to our{" "}
          <Link href="/privacy" className="underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
