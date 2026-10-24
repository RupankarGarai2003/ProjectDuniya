import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";
import { categories } from "@/lib/data/categories";
import { blogPosts } from "@/lib/data/blog";
import { countries } from "@/lib/data/countries";

// Only canonical, indexable, 200-status URLs belong here. City/state location URLs
// permanently redirect to their country page (see next.config.mjs) and are excluded.
// lastModified is only set where a real modification date exists (blog posts).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const entry = (path: string, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    ...(lastModified ? { lastModified } : {}),
  });

  return [
    entry("/"),
    entry("/about"),
    entry("/services"),
    entry("/projects"),
    entry("/project-ideas"),
    entry("/blog"),
    entry("/pricing"),
    entry("/faq"),
    entry("/team"),
    entry("/testimonials"),
    entry("/locations"),
    entry("/contact"),
    entry("/privacy"),
    entry("/terms"),
    entry("/refund-policy"),
    entry("/academic-integrity"),
    ...services.map((s) => entry(`/services/${s.slug}`)),
    ...categories.map((c) => entry(`/projects/${c.slug}`)),
    ...categories.flatMap((c) => c.items.map((i) => entry(`/projects/${c.slug}/${i.slug}`))),
    ...blogPosts.map((p) => entry(`/blog/${p.slug}`, p.updated ?? p.date)),
    ...countries.map((c) => entry(`/locations/${c.slug}`)),
  ];
}
