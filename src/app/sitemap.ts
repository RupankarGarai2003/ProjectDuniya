import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";
import { categories } from "@/lib/data/categories";
import { blogPosts } from "@/lib/data/blog";
import { countries } from "@/lib/data/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/projects`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${base}/project-ideas`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${base}/pricing`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/team`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${base}/testimonials`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${base}/locations`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/projects/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const subProjectRoutes: MetadataRoute.Sitemap = categories.flatMap((c) =>
    c.items.map((i) => ({
      url: `${base}/projects/${c.slug}/${i.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: p.date,
  }));

  // Only country-level pages go in the sitemap. The state/city sub-pages
  // (/locations/[country]/[place]) canonicalize back to their parent country
  // page, so they're intentionally left out here - Google recommends not
  // listing non-canonical URLs in a sitemap. They're still fully crawlable
  // via the internal links on each country page.
  const locationRoutes: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${base}/locations/${c.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...categoryRoutes,
    ...subProjectRoutes,
    ...blogRoutes,
    ...locationRoutes,
  ];
}
