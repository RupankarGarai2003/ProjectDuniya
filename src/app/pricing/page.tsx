import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing - Affordable Project Help for Students",
  description:
    "Transparent, student-friendly pricing for final year projects, coding help, data analysis, thesis writing, and presentation design. Get a free custom quote.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "Mini Project",
    range: "Starting $15",
    rangeSub: "(₹999 for students in India)",
    desc: "Short-timeline mini and internship projects for beginners and quick assignments.",
    features: ["3-10 day delivery", "Working source code", "Basic documentation", "1 revision round", "Email/WhatsApp support"],
  },
  {
    name: "Final Year Project",
    range: "Starting $69",
    rangeSub: "(₹4,999 for students in India)",
    desc: "Our most popular tier - complete final year project with full guidance.",
    features: ["Full source code + explanation", "IEEE-format report & synopsis", "PPT + viva question prep", "Unlimited clarification calls", "Priority support till submission"],
    highlighted: true,
  },
  {
    name: "Research & Thesis",
    range: "Starting $89",
    rangeSub: "(₹6,999 for students in India)",
    desc: "For postgraduate research work needing structured academic writing.",
    features: ["Literature review & methodology", "IEEE / APA / MLA formatting", "Plagiarism check report", "Chapter-wise revisions", "Confidential handling"],
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        title="Simple, Student-Friendly Pricing"
        description="Every project is scoped individually, so the numbers below are starting points - your final quote depends on complexity, tech stack, and timeline."
        crumbs={[{ label: "Pricing" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border card-hover flex flex-col ${
                  plan.highlighted ? "border-primary shadow-xl scale-[1.02] bg-card" : "border-border bg-card"
                }`}
              >
                {plan.highlighted && (
                  <span className="badge-pill badge-coral self-start mb-4 text-xs">MOST POPULAR</span>
                )}
                <h3 className="text-xl font-bold text-navy mb-1">{plan.name}</h3>
                <p className="text-2xl font-extrabold text-primary mb-0">{plan.range}</p>
                <p className="text-xs text-muted-foreground mb-3">{plan.rangeSub}</p>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Exact Quote</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <h2 className="text-xl font-bold text-navy mb-3">Why isn&apos;t pricing fixed?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every academic project differs in scope - a simple CRUD web app and a full machine learning pipeline with a
              custom dashboard require very different amounts of work. We share an exact, transparent quote after a short
              conversation about your requirements, so you never pay for more (or less) than what your project actually
              needs. There are no hidden charges once a quote is confirmed.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 mt-8">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp for a Quick Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
