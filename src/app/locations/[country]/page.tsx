import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationTemplate from "@/components/LocationTemplate";
import { countries, getCountryBySlug, getPlacesForCountry } from "@/lib/data/countries";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const country = getCountryBySlug(params.country);
  if (!country) return {};
  return {
    title: `Final Year Project Help in ${country.name} | ${siteConfig.name}`,
    description: `Looking for final year project or academic project help in ${country.name}? ProjectDuniya offers online guidance for coding, web development, data analysis, and thesis writing.`,
    alternates: { canonical: `/locations/${country.slug}` },
  };
}

export default function CountryPage({ params }: { params: { country: string } }) {
  const country = getCountryBySlug(params.country);
  if (!country) notFound();
  const places = getPlacesForCountry(country);
  return <LocationTemplate country={country} places={places} />;
}
