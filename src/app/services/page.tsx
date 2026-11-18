import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/data/services";
import ServiceCatalog from "@/components/ServiceCatalog";
import BlogBridge from "@/components/BlogBridge";
import { serviceCatalog, catalogItemCount } from "@/lib/data/service-catalog";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Services - Projects, Development, AI, Testing & Research Help",
  description:
    "All 46 ProjectDuniya services in one place: B.Tech/MCA/BCA final-year projects, web & Android development, AI/ML, Power BI, software testing & QA, research papers, SRS, UML and viva preparation.",
  path: "/services",
  keywords: [
    "final year project help",
    "software development services for students",
    "software testing services",
    "AI machine learning projects",
    "website development services",
    "research paper assistance",
    "Power BI dashboard development",
  ],
});

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "OfferCatalog",
      "@id": `${absoluteUrl("/services")}#catalog`,
      name: "ProjectDuniya Services",
      numberOfItems: catalogItemCount,
      itemListElement: serviceCatalog.map((g) => ({
        "@type": "OfferCatalog",
        name: g.title,
        itemListElement: g.items.map((i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: i.title,
            description: i.summary,
            url: absoluteUrl(`/services/${i.serviceSlug}`),
            provider: { "@id": `${siteConfig.url}/#organization` },
            areaServed: "Worldwide",
          },
        })),
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }} />
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

      <ServiceCatalog />

      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <BlogBridge
            campaign="services_page"
            title="Guides behind every service"
            description="Read practical tutorials and project ideas on our blog before you start."
          />
        </div>
      </section>
    </main>
  );
}
