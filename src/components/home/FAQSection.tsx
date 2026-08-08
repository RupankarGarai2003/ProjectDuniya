"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { faqs } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const preview = faqs.slice(0, 8);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">FAQs</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">What Students Ask About ProjectDuniya</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clear answers to common questions about projects, pricing, delivery, and student support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {preview.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-blue-100 shadow-sm transition-all duration-300 ${
                openIndex === index ? "shadow-lg border-blue-300" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-navy">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0 animate-accordion-down">
                  <p className="text-muted-foreground leading-relaxed pl-13">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/faq" className="text-primary font-semibold hover:underline block mb-2">
            View All FAQs →
          </Link>
          <p className="text-muted-foreground mb-2">Still confused?</p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            Chat with our experts on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
