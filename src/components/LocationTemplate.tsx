import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { getPostBySlug } from "@/lib/data/blog";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import type { Country } from "@/lib/data/countries";

export default function LocationTemplate({ country }: { country: Country }) {
  const guide = getPostBySlug("capstone-project-ideas-computer-science-international-students");
  const url = absoluteUrl(`/locations/${country.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    url,
    serviceType: "Final Year Project & Academic Help",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "Country", name: country.name },
    description: `Online final year project, coding, and academic help for students in ${country.name}.`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        title={`Final Year Project Help in ${country.name}`}
        description={`Online academic and technical project guidance for students in ${country.name}.`}
        crumbs={[{ label: "Locations", href: "/locations" }, { label: country.name }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {siteConfig.name} works with students in {country.name} entirely online, so you get the same structured
            guidance and clear explanations regardless of which college or university you attend. In {country.name},
            we&apos;re {country.blurb}.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you need help planning a final year project, debugging existing code, a data analysis assignment,
            or presentation support for your viva or defense, we coordinate over WhatsApp, call, or email, so distance
            is never a barrier.
          </p>

          {(country.regions.length > 0 || country.cities.length > 0) && (
            <>
              <h2 className="text-xl font-bold text-navy mb-4">Where students reach us from in {country.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                {[...country.regions, ...country.cities.filter((c) => !country.regions.includes(c))].join(", ")}
                {" "}- and anywhere else with an internet connection.
              </p>
            </>
          )}

          <h2 className="text-xl font-bold text-navy mb-6">Popular Services for Students in {country.name}</h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-12">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block bg-card border border-border rounded-xl p-4 hover:border-primary transition"
                >
                  <span className="text-sm font-medium text-navy">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-12">
            Not sure what to build? Start with our{" "}
            <Link href="/blog/top-final-year-project-ideas-computer-science-2026" className="text-primary font-medium underline underline-offset-2">
              final year project ideas for computer science students
            </Link>
            {guide && (
              <>
                {" "}or the{" "}
                <Link href={`/blog/${guide.slug}`} className="text-primary font-medium underline underline-offset-2">
                  capstone project ideas guide for US, UK, Canada and Australia
                </Link>
              </>
            )}
            .
          </p>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-3">Start Your Project from {country.name} Today</h2>
            <p className="text-sm text-white/90 mb-6">Get a free, no-obligation quote - no matter which college you&apos;re in.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact" data-track="location_cta_click">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
