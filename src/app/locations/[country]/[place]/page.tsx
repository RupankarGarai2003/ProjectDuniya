import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationTemplate from "@/components/LocationTemplate";
import { countries, getCountryBySlug, getPlacesForCountry, getPlaceBySlug } from "@/lib/data/countries";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return countries.flatMap((c) => getPlacesForCountry(c).map((p) => ({ country: c.slug, place: p.slug })));
}

export function generateMetadata({ params }: { params: { country: string; place: string } }): Metadata {
  const country = getCountryBySlug(params.country);
  if (!country) return {};
  const place = getPlaceBySlug(country, params.place);
  if (!place) return {};
  return {
    title: `Final Year Project Help in ${place.name}, ${country.name} | ${siteConfig.name}`,
    description: `Looking for final year project or academic project help in ${place.name}, ${country.name}? ProjectDuniya offers online guidance for coding, web development, data analysis, and thesis writing.`,
    // Canonical points to the parent country page: this URL targets a specific
    // local search term, but the substantive content lives at the country level,
    // so ranking signals consolidate there instead of splitting across near-duplicate pages.
    alternates: { canonical: `/locations/${country.slug}` },
  };
}

export default function PlacePage({ params }: { params: { country: string; place: string } }) {
  const country = getCountryBySlug(params.country);
  if (!country) notFound();
  const place = getPlaceBySlug(country, params.place);
  if (!place) notFound();
  const places = getPlacesForCountry(country);
  return <LocationTemplate country={country} places={places} activePlace={place} />;
}
