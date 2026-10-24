import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

/**
 * Blog card used on /blog, the homepage and "Related Articles".
 * - variant "list":    category pill + date under the image, "Read More →"
 * - variant "related": category pill over the image, calendar icon + date, "Read Article →"
 */
export default function BlogCard({
  post,
  variant = "list",
  priority = false,
}: {
  post: BlogPost;
  variant?: "list" | "related";
  priority?: boolean;
}) {
  const related = variant === "related";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative aspect-[1200/630] overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt=""
          width={600}
          height={315}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {related && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
            {post.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {related ? (
          <p className="mb-3 flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="h-4 w-4 text-indigo-500" aria-hidden="true" />
            {fmt(post.date)}
          </p>
        ) : (
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{post.category}</span>
            <span className="text-xs text-slate-600">{fmt(post.date)}</span>
          </div>
        )}

        <h3 className="mb-2 text-lg font-bold leading-snug text-navy line-clamp-2">{post.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-600 line-clamp-2">{post.excerpt}</p>

        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
          {related ? "Read Article" : "Read More"}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
