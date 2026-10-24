import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetaInput {
  /** Page title WITHOUT the brand suffix - the layout template adds " | ProjectDuniya". */
  title: string;
  description: string;
  /** Path starting with "/" e.g. "/pricing" */
  path: string;
  image?: string; // path or absolute URL
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  noindex?: boolean;
}

/** Strip a trailing brand suffix so the title template never doubles it. */
export function cleanTitle(title: string): string {
  return title.replace(/\s*\|\s*ProjectDuniya\s*$/i, "").trim();
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Builds complete, consistent metadata (canonical + Open Graph + Twitter) for a page. */
export function pageMeta(input: PageMetaInput): Metadata {
  const title = cleanTitle(input.title);
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(input.path);
  const image = absoluteUrl(input.image ?? siteConfig.ogImage);
  return {
    title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: input.path },
    robots: input.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: input.type ?? "website",
      url,
      title: fullTitle,
      description: input.description,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(input.type === "article"
        ? { publishedTime: input.publishedTime, modifiedTime: input.modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: absoluteUrl(it.path) } : {}),
    })),
  };
}
