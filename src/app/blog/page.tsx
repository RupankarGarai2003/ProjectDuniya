import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog - Guides & Ideas for Students",
  description:
    "Practical guides on final year project ideas, viva preparation, research paper writing, and academic career tips from the ProjectDuniya team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="ProjectDuniya Blog"
        description="Practical, no-fluff guides for students working on academic and technical projects."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="py-20 bg-light-purple/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="bg-card rounded-2xl overflow-hidden border border-border card-hover group block">
                <div className="aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground my-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
