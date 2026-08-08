import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

const BlogSection = () => {
  const preview = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-light-purple/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-pill badge-secondary mb-6 inline-block">FROM OUR BLOG</span>
          <h2 className="section-title text-2xl md:text-3xl">Guides & Ideas for Students</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {preview.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover group block"
            >
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="text-primary font-semibold hover:underline">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
