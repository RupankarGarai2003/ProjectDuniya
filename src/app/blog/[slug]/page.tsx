import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BlogContent from "@/components/BlogContent";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: `${siteConfig.url}${post.image}` }],
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    image: `${siteConfig.url}${post.image}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <main>
      <Script id={`blog-jsonld-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader title={post.title} crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span className="badge-pill badge-secondary text-xs">{post.category}</span>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-10 object-cover max-h-[360px]" />

          <BlogContent paragraphs={post.content} />

          <div className="mt-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-3">Need hands-on help with your project?</h3>
            <p className="text-sm text-white/90 mb-6">Our team can guide you from topic selection to final submission.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-navy mb-6">More Articles</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="bg-card border border-border rounded-xl p-4 hover:border-primary transition">
                  <p className="text-sm font-semibold text-navy line-clamp-3">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
