import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/data/services";

export const metadata: Metadata = pageMeta({
  title: "Our Services",
  description:
    "Explore all ProjectDuniya services - final year projects, website & software development, data/AI projects, research writing, and presentation support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        description="From final year projects to career-ready resumes - explore every way ProjectDuniya can help."
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="bg-card rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-6 card-hover border border-border group"
              >
                <div className="w-28 h-28 flex-shrink-0">
                  <Image src={service.image} alt="" width={112} height={112} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{service.category}</span>
                  <h2 className="text-xl font-bold text-navy mt-1 mb-3">{service.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-navy font-semibold group-hover:text-primary transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
