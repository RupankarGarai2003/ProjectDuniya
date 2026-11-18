import { siteConfig } from "@/lib/site";

/**
 * Connection layer between www.projectduniya.com (this Next.js app) and
 * blogs.projectduniya.com (the WordPress blog hub).
 *
 * - Every link to the blog goes through blogLink() so UTM tags are consistent
 *   and the host can be changed in ONE place (siteConfig.blogUrl).
 * - Category slugs below match the live WordPress categories.
 */

export type BlogCategoryKey =
  | "project-ideas"
  | "final-year-projects"
  | "ai-machine-learning"
  | "programming"
  | "tutorials"
  | "technology-news"
  | "career-guides"
  | "research-reports"
  | "coding-development"
  | "website-design-development"
  | "software-development"
  | "programming-help-debugging"
  | "data-analysis-visualization"
  | "microsoft-excel"
  | "research-paper"
  | "thesis-writing"
  | "essay-report-writing"
  | "academic-research-paper-formatting"
  | "plagiarism-checking"
  | "academic-resume-writing"
  | "job-internship-application-assistance"
  | "online-tutoring-sessions"
  | "study-guide-creation"
  | "note-taking-organizing"
  | "presentation-design";

/** Link into the blog hub. `path` is "" (home), or "/category/<slug>/", etc. */
export function blogLink(path = "", campaign = "main_site"): string {
  const clean = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  // WordPress here uses the /index.php/ permalink prefix for categories and posts.
  const wpPath = clean === "/" || clean.startsWith("/index.php") ? clean : `/index.php${clean}`;
  const qs = `utm_source=projectduniya.com&utm_medium=site&utm_campaign=${encodeURIComponent(campaign)}`;
  return `${siteConfig.blogUrl}${wpPath}${wpPath.includes("?") ? "&" : "?"}${qs}`;
}

export function blogCategoryLink(key: BlogCategoryKey, campaign = "main_site"): string {
  return blogLink(`/category/${key}/`, campaign);
}

/** Top-level blog topics shown in the nav/footer/blog bridge. */
export const blogTopics: { label: string; key: BlogCategoryKey }[] = [
  { label: "Project Ideas", key: "project-ideas" },
  { label: "Final Year Projects", key: "final-year-projects" },
  { label: "AI & Machine Learning", key: "ai-machine-learning" },
  { label: "Programming", key: "programming" },
  { label: "Career Guides", key: "career-guides" },
  { label: "Research & Reports", key: "research-reports" },
];

/** Which blog category best supports each main-site service page. */
export const serviceBlogMap: Record<string, { label: string; key: BlogCategoryKey }[]> = {
  "final-year-academic-projects": [
    { label: "Final Year Project guides", key: "final-year-projects" },
    { label: "Project Ideas", key: "project-ideas" },
  ],
  "website-development-projects": [
    { label: "Website Design & Development articles", key: "website-design-development" },
    { label: "Programming tutorials", key: "programming" },
  ],
  "software-development-projects": [
    { label: "Software Development articles", key: "software-development" },
    { label: "Coding & Development", key: "coding-development" },
  ],
  "data-analysis-ai-projects": [
    { label: "AI & Machine Learning", key: "ai-machine-learning" },
    { label: "Data Analysis & Visualization", key: "data-analysis-visualization" },
    { label: "Microsoft Excel tips", key: "microsoft-excel" },
  ],
  "programming-debugging-projects": [
    { label: "Programming Help & Debugging", key: "programming-help-debugging" },
    { label: "Programming tutorials", key: "programming" },
  ],
  "research-paper-thesis-projects": [
    { label: "Research Paper guides", key: "research-paper" },
    { label: "Thesis Writing", key: "thesis-writing" },
    { label: "Paper Formatting", key: "academic-research-paper-formatting" },
  ],
  "presentation-viva-projects": [
    { label: "Presentation Design", key: "presentation-design" },
    { label: "Study Guides", key: "study-guide-creation" },
  ],
  "internship-mini-projects": [
    { label: "Career Guides", key: "career-guides" },
    { label: "Internship Application tips", key: "job-internship-application-assistance" },
  ],
};

/** Latest articles on the blog hub, shown on the homepage and /blog. */
export interface HubPost {
  title: string;
  url: string;
  image?: string;
  date: string; // ISO
  category: string;
}

/**
 * Fallback used when the WordPress REST API is unreachable at build/revalidate time,
 * so the section never renders empty. Refresh occasionally (OWNER-TODO.md).
 */
export const fallbackHubPosts: HubPost[] = [
  {
    title: "How to Create an Interactive Power BI Dashboard: A Beginner’s Step-by-Step Guide",
    url: "https://blogs.projectduniya.com/index.php/2026/11/17/how-to-create-an-interactive-power-bi-dashboard-a-beginners-step-by-step-guide/",
    image: "https://blogs.projectduniya.com/wp-content/uploads/2026/11/resized-image-4-800x450.jpeg",
    date: "2026-11-17",
    category: "Data Analysis & Visualization",
  },
  {
    title: "Machine Learning vs Deep Learning: Differences, Examples, and Career Opportunities",
    url: "https://blogs.projectduniya.com/index.php/2026/11/16/machine-learning-vs-deep-learning-differences-examples-and-career-opportunities/",
    image: "https://blogs.projectduniya.com/wp-content/uploads/2026/11/resized-image-2-1-800x450.jpeg",
    date: "2026-11-16",
    category: "AI & Machine Learning",
  },
  {
    title: "Top 10 Web Development Projects for Students in 2027",
    url: "https://blogs.projectduniya.com/index.php/2026/11/14/top-10-web-development-projects-for-students-in-2027/",
    image: "https://blogs.projectduniya.com/wp-content/uploads/2026/11/resized-image.jpeg",
    date: "2026-11-14",
    category: "Final Year Projects",
  },
];

const decode = (s: string) =>
  s
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#038;|&amp;/g, "&")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/<[^>]+>/g, "");

/**
 * Pulls the newest posts from WordPress via the REST API (?rest_route works with any
 * permalink structure). Cached 1 hour (ISR). Never throws - falls back to a static list.
 */
export async function getLatestHubPosts(limit = 3): Promise<HubPost[]> {
  try {
    const res = await fetch(
      `${siteConfig.blogUrl}/?rest_route=/wp/v2/posts&per_page=${limit}&_embed=wp:featuredmedia,wp:term`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(6000) },
    );
    if (!res.ok) return fallbackHubPosts.slice(0, limit);
    const data = (await res.json()) as Array<{
      link: string;
      date: string;
      title: { rendered: string };
      _embedded?: {
        "wp:featuredmedia"?: Array<{
          source_url?: string;
          media_details?: { sizes?: Record<string, { source_url: string }> };
        }>;
        "wp:term"?: Array<Array<{ name: string; taxonomy: string }>>;
      };
    }>;
    const posts = data.map((p) => {
      const media = p._embedded?.["wp:featuredmedia"]?.[0];
      const image =
        media?.media_details?.sizes?.medium_large?.source_url ?? media?.source_url ?? undefined;
      const cat = p._embedded?.["wp:term"]?.flat().find((t) => t.taxonomy === "category")?.name;
      return {
        title: decode(p.title.rendered),
        url: `${p.link}${p.link.includes("?") ? "&" : "?"}utm_source=projectduniya.com&utm_medium=site&utm_campaign=latest_posts`,
        image,
        date: p.date.slice(0, 10),
        category: cat ? decode(cat) : "Blog",
      } satisfies HubPost;
    });
    return posts.length ? posts : fallbackHubPosts.slice(0, limit);
  } catch {
    return fallbackHubPosts.slice(0, limit);
  }
}
