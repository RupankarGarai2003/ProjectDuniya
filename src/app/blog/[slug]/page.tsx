import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BlogContent from "@/components/BlogContent";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { getServiceBySlug } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, pageMeta } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
  });
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const service = getServiceBySlug(post.serviceSlug);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const wordCount = post.content.join(" ").replace(/[*#\[\]()]/g, "").split(/\s+/).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    wordCount,
    articleSection: post.category,
    inLanguage: "en",
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) },
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        title={post.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" /> Published {fmt(post.date)}
            </span>
            {post.updated && post.updated !== post.date && (
              <span className="flex items-center gap-1">Updated {fmt(post.updated)}</span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" /> {post.readTime}
            </span>
            <span className="badge-pill badge-secondary text-xs">{post.category}</span>
          </div>

          <Image
            src={post.image}
            alt={post.title}
            width={768}
            height={360}
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="w-full rounded-2xl mb-10 object-cover max-h-[360px]"
          />

          <BlogContent paragraphs={post.content} />

          <div className="mt-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-3">Need hands-on help with your project?</h2>
            <p className="text-sm text-white/90 mb-6">
              Our team can guide you from topic selection to final submission
              {service ? (
                <>
                  {" "}
                  - see our{" "}
                  <Link href={`/services/${service.slug}`} className="underline font-semibold" data-track="blog_to_service_click">
                    {service.title}
                  </Link>{" "}
                  service.
                </>
              ) : (
                "."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact" data-track="quote_cta_click">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>

          <section className="mt-16" aria-labelledby="more-articles">
            <h2 id="more-articles" className="text-2xl md:text-3xl font-bold text-navy mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.slice(0, 2).map((p) => (
                <BlogCard key={p.slug} post={p} variant="related" />
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
