import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationTemplate from "@/components/LocationTemplate";
import { countries, getCountryBySlug } from "@/lib/data/countries";
import { pageMeta } from "@/lib/seo";

type Params = Promise<{ country: string }>;

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return pageMeta({
    title: `Final Year Project Help in ${country.name}`,
    description: `Final year project, coding and academic project help for students in ${country.name}: online guidance for web development, AI, data analysis and thesis writing.`,
    path: `/locations/${country.slug}`,
  });
}

export default async function CountryPage({ params }: { params: Params }) {
  const { country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();
  return <LocationTemplate country={country} />;
}
