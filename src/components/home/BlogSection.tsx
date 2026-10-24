import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";

const BlogSection = () => {
  const preview = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-pill badge-secondary mb-6 inline-block">FROM OUR BLOG</span>
          <h2 className="section-title text-2xl md:text-3xl">Our Latest Blogs</h2>
          <p className="mt-2 text-sm text-slate-600">Tutorials, guides and useful articles for students.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {preview.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="text-blue-700 font-semibold hover:underline">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
