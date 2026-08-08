import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [{ url: `${siteConfig.url}${service.image}` }],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: "Worldwide",
    description: service.metaDescription,
  };

  return (
    <main>
      <Script id={`service-jsonld-${service.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader title={service.title} description={service.shortDescription} crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.image} alt={service.title} className="w-40 h-40 object-contain mb-8" />
              <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">{service.description}</p>

              <h2 className="text-2xl font-bold text-navy mb-6">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-4 mb-12">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-navy">{h}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-navy mb-6">How It Works</h2>
              <div className="space-y-4 mb-12">
                {service.process.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((f) => (
                  <div key={f.question} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-navy mb-2">{f.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-8">
                <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-sm text-white/90 mb-6">
                  Share your requirements and get a free, no-obligation quote for your {service.title.toLowerCase()}.
                </p>
                <Button asChild className="w-full bg-white text-indigo-700 hover:bg-white/90 mb-3">
                  <Link href="/contact">Get Custom Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20">
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-navy mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm font-medium text-navy hover:text-primary transition">
                        <ArrowRight className="w-3 h-3" /> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
