import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, FileText, PhoneCall, Wallet, Settings, CheckCircle } from "lucide-react";

const qualityFeatures = [
  "Expert-Guided Learning",
  "Concept Clarity & Explanation",
  "Similarity-Checked Deliverables",
  "On-Time Project Delivery",
  "Practical Implementation",
  "Confidential Handling of Your Details",
];

const howItWorks = [
  { step: "01", title: "Submit Your Project Requirement", description: "Submit your project details through our form or contact us via WhatsApp, Instagram, Telegram, or email.", icon: FileText },
  { step: "02", title: "We Contact You", description: "Our team contacts you via call or WhatsApp to clearly understand your requirements and doubts.", icon: PhoneCall },
  { step: "03", title: "Affordable Pricing Discussion", description: "After reviewing your project, we share a student-friendly and affordable pricing structure.", icon: Wallet },
  { step: "04", title: "Project Execution & Regular Updates", description: "Once approved, we start working on your project and provide regular updates and expert guidance.", icon: Settings },
  { step: "05", title: "Project Delivery & Explanation", description: "After completion, we deliver the full project and explain every concept so you understand it confidently.", icon: CheckCircle },
];

const QualitySection = () => {
  return (
    <section className="py-24 bg-light-purple/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-28">
          <div>
            <Image src="/images/Growth-analytics-rafiki.svg" alt="Illustration of growth analytics and project guidance" width={512} height={512} className="w-full max-w-lg h-auto mx-auto animate-float" />
          </div>

          <div className="animate-fade-in-up">
            <span className="badge-pill bg-green-100 text-green-800 mb-6 inline-block">QUALITY YOU CAN TRUST</span>
            <h2 className="section-title text-xl md:text-2xl mb-4">What Does Quality Mean at ProjectDuniya?</h2>
            <p className="text-muted-foreground mb-10 max-w-lg">
              At ProjectDuniya, quality means guided learning, clear explanations, practical implementation, and timely delivery — ensuring students truly understand their projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-navy">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6">
              <Link href="/contact" data-track="quality_cta_click">GET PROJECT GUIDANCE</Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="section-title text-2xl md:text-3xl mb-3">How ProjectDuniya Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent, and student-friendly process from project submission to final delivery.
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-5">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative z-10 bg-white rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-bold text-primary mb-1">STEP {step.step}</p>
                  <h3 className="font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button className="mt-16 px-10 py-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition" asChild>
              <Link href="/contact">Start Your Project Now</Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Quote confirmed before work starts • Student-friendly pricing • Confidential handling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
