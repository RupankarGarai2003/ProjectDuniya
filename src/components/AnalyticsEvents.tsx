"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Site-wide click tracking for contact CTAs. One delegated listener covers
 * every WhatsApp / phone / email link and any element with data-track="name".
 * In GA4, mark whatsapp_click, phone_click, email_click, contact_form_submit
 * and quote_request as Key Events.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("a[href]") as HTMLAnchorElement | null;
      if (!el) return;
      const href = el.getAttribute("href") || "";
      const location = window.location.pathname;
      const label = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 60);
      if (href.includes("wa.me")) trackEvent("whatsapp_click", { page_path: location, link_text: label });
      else if (href.startsWith("tel:")) trackEvent("phone_click", { page_path: location, link_text: label });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { page_path: location, link_text: label });
      const custom = el.getAttribute("data-track");
      if (custom) trackEvent(custom, { page_path: location, link_text: label, link_url: href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
