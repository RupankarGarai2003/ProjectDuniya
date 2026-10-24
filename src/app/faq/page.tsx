import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about ProjectDuniya's academic project help, pricing, delivery timelines, confidentiality, and viva support.",
  path: "/faq",
});

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about working with ProjectDuniya."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border border-blue-100 shadow-sm px-5">
                <AccordionTrigger className="text-left font-semibold text-navy">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-2">Still have questions?</p>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
              Chat with our team on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
