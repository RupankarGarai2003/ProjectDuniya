import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = pageMeta({
  title: "Blog - Guides & Ideas for Students",
  description:
    "Practical guides on final year project ideas, viva preparation, research paper writing, and academic career tips from the ProjectDuniya team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="ProjectDuniya Blog"
        description="Practical, no-fluff guides for students working on academic and technical projects."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Our Latest Blogs</h2>
            <p className="mt-2 text-sm text-slate-600">Tutorials, guides and useful articles.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
