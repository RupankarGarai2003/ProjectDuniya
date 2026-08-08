import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { countries } from "@/lib/data/countries";

export const metadata: Metadata = {
  title: "Countries We Serve",
  description:
    "ProjectDuniya provides online final year project and academic help to students across 30 countries worldwide, including the US, UK, Canada, Australia, UAE, Singapore, and India.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <main>
      <PageHeader
        title="Countries We Serve"
        description="We work with students online, wherever they are - here are the countries where we have an especially active student community."
        crumbs={[{ label: "Locations" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {countries.map((c) => (
              <Link
                href={`/locations/${c.slug}`}
                key={c.slug}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition group"
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                <h2 className="font-bold text-navy mb-1">{c.name}</h2>
                <p className="text-xs text-muted-foreground mb-4">
                  {c.cities.length} {c.cities.length === 1 ? "city" : "cities"}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
                  View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

