import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogLink, blogCategoryLink, blogTopics, type BlogCategoryKey } from "@/lib/blog-hub";

interface Props {
  title?: string;
  description?: string;
  /** Extra category links to show first (e.g. the ones relevant to the current page). */
  topics?: { label: string; key: BlogCategoryKey }[];
  /** Tag used for utm_campaign so GA shows which page sent the click. */
  campaign: string;
  className?: string;
}

/**
 * Reusable "read more on our blog" panel. Links go to blogs.projectduniya.com with UTM tags.
 * Same-brand subdomain, so links are followed (no nofollow) and open in the same tab.
 */
export default function BlogBridge({
  title = "Learn more on the ProjectDuniya Blog",
  description = "Project ideas, tutorials, career guides and tech insights written for students and developers.",
  topics,
  campaign,
  className = "",
}: Props) {
  const list = (topics && topics.length ? topics : blogTopics).slice(0, 6);
  return (
    <section
      aria-labelledby={`bridge-${campaign}`}
      className={`rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 md:p-8 ${className}`}
    >
      <div className="flex items-start gap-4">
        <span className="hidden sm:flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
          <BookOpen className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <h2 id={`bridge-${campaign}`} className="text-lg md:text-xl font-bold text-navy">
            {title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {list.map((t) => (
              <li key={t.key}>
                <a
                  href={blogCategoryLink(t.key, campaign)}
                  data-track="blog_topic_click"
                  className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
                >
                  {t.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={blogLink("", campaign)}
            data-track="blog_hub_click"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Visit blogs.projectduniya.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
