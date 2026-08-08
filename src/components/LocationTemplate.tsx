import Link from "next/link";
import Script from "next/script";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";
import type { Country, Place } from "@/lib/data/countries";

export default function LocationTemplate({
  country,
  places,
  activePlace,
}: {
  country: Country;
  places: Place[];
  activePlace?: Place | null;
}) {
  const displayName = activePlace ? activePlace.name : country.name;
  const areaServedName = activePlace ? `${activePlace.name}, ${country.name}` : country.name;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Final Year Project & Academic Help",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "Place", name: areaServedName },
    description: `Online final year project, coding, and academic help for students in ${areaServedName}.`,
  };

  const crumbs = activePlace
    ? [
        { label: "Locations", href: "/locations" },
        { label: country.name, href: `/locations/${country.slug}` },
        { label: activePlace.name },
      ]
    : [{ label: "Locations", href: "/locations" }, { label: country.name }];

  const otherPlaces = places.filter((p) => p.slug !== activePlace?.slug);

  return (
    <main>
      <Script
        id={`location-jsonld-${country.slug}-${activePlace?.slug ?? "root"}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={`Final Year Project Help in ${displayName}`}
        description={`Online academic and technical project guidance for students in ${areaServedName}.`}
        crumbs={crumbs}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {activePlace && (
            <p className="text-sm text-muted-foreground mb-6">
              {activePlace.name} is part of our{" "}
              <Link href={`/locations/${country.slug}`} className="text-primary hover:underline font-medium">
                {country.name} coverage
              </Link>
              .
            </p>
          )}

          <p className="text-muted-foreground leading-relaxed mb-6">
            {siteConfig.name} works with students in {displayName} entirely online, which means you get the same
            structured guidance, clear explanations, and on-time delivery regardless of which college or university
            you attend. In {country.name}, we're {country.blurb}, covering everything from final year projects to
            mini assignments and research writing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you need a complete final year project, help debugging existing code, a data analysis assignment,
            or presentation support for your viva or defense, our team coordinates over WhatsApp, call, or email so
            distance is never a barrier to getting clear, reliable help.
          </p>

          <h2 className="text-xl font-bold text-navy mb-6">Popular Services for Students in {displayName}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary transition"
              >
                <span className="text-sm font-medium text-navy">{s.title}</span>
              </Link>
            ))}
          </div>

          {otherPlaces.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-navy mb-6">
                {activePlace ? `Other States & Cities in ${country.name}` : `Popular States & Cities in ${country.name}`}
              </h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {otherPlaces.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/locations/${country.slug}/${p.slug}`}
                    className="text-sm bg-card border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition text-muted-foreground"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-3">Start Your Project from {displayName} Today</h3>
            <p className="text-sm text-white/90 mb-6">
              Get a free, no-obligation quote - no matter which college you're in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
