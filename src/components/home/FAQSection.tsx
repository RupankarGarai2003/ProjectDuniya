import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site";

// Uses the Radix accordion (already in the project) so aria-expanded / aria-controls,
// keyboard support and focus handling come for free.
const FAQSection = () => {
  const preview = faqs.slice(0, 8);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">FAQs</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">What Students Ask About ProjectDuniya</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clear answers to common questions about projects, pricing, delivery, and student support.
          </p>
        </div>

        <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-6 items-start">
          {preview.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="bg-white rounded-xl border border-blue-100 shadow-sm px-5 data-[state=open]:shadow-lg data-[state=open]:border-blue-300"
            >
              <AccordionTrigger className="text-left font-semibold text-navy gap-4">
                <span className="flex items-center gap-4">
                  <span aria-hidden="true" className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pl-[52px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16">
          <Link href="/faq" className="text-primary font-semibold hover:underline block mb-2">
            View All FAQs →
          </Link>
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-700 font-semibold hover:underline"
          >
            Chat with our team on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
