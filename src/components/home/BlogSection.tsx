import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog";
import { blogLink, getLatestHubPosts } from "@/lib/blog-hub";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

/**
 * Homepage blog block:
 *  1) "Fresh from the Blog Hub" - newest posts pulled live from blogs.projectduniya.com (hourly ISR)
 *  2) "Student guides" - evergreen on-site guides
 * Both link to each other so link equity flows between www and the blog subdomain.
 */
const BlogSection = async () => {
  const hubPosts = await getLatestHubPosts(3);
  const guides = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-pill badge-secondary mb-6 inline-block">FROM OUR BLOG</span>
          <h2 className="section-title text-2xl md:text-3xl">Fresh from the ProjectDuniya Blog</h2>
          <p className="mt-2 text-sm text-slate-600">Project ideas, tutorials and tech insights for students.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hubPosts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              data-track="home_blog_hub_post_click"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                {post.image && (
                  <Image
                    src={post.image}
                    alt=""
                    width={600}
                    height={338}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{post.category}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-600">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {fmt(post.date)}
                  </span>
                </div>
                <h3 className="mb-4 text-lg font-bold leading-snug text-navy line-clamp-3">{post.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  Read Article <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={blogLink("", "home_latest")}
            data-track="home_blog_hub_click"
            className="inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow hover:shadow-lg transition"
          >
            Explore the Blog Hub →
          </a>
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex items-end justify-between mb-8 gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-navy">Student Guides</h3>
            <Link href="/blog" className="text-blue-700 font-semibold hover:underline text-sm">
              View All Guides →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
