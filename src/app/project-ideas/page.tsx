import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import IdeasExplorer from "@/components/IdeasExplorer";
import BlogBridge from "@/components/BlogBridge";
import { Button } from "@/components/ui/button";
import { pageMeta, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { blogCategoryLink } from "@/lib/blog-hub";
import { ideaGroups, ideaCount, allIdeas } from "@/lib/data/project-ideas";

export const metadata: Metadata = pageMeta({
  title: `${ideaCount}+ Final Year & Mini Project Ideas for Students (2027)`,
  description: `Browse ${ideaCount}+ project ideas for B.Tech, BCA, MCA and diploma students - web development, AI/ML, deep learning, NLP, Python, Android, IoT, cybersecurity, cloud/testing and Power BI - with tech stack and difficulty level.`,
  path: "/project-ideas",
  keywords: [
    "final year project ideas",
    "mini project ideas",
    "project ideas for computer science students",
    "BCA project ideas",
    "MCA project topics",
    "B.Tech project ideas 2027",
    "python project ideas",
    "AI ML project ideas",
    "web development project ideas",
  ],
});

const faqs = [
  {
    q: "How many project ideas does ProjectDuniya list?",
    a: `This page lists ${ideaCount} project ideas across ${ideaGroups.length} domains, each tagged with a difficulty level, project type (mini or final year) and a suggested tech stack. New articles with fresh ideas are published regularly on our blog.`,
  },
  {
    q: "How do I choose the right project idea for my level?",
    a: "Pick an idea that matches your syllabus, fits your timeline and that you can explain in full during your viva. Use the level and project-type filters above, then read our guide on how to choose a final year project topic.",
  },
  {
    q: "Can ProjectDuniya help me build one of these ideas?",
    a: "Yes. Select any idea, share your department guidelines and deadline, and we will scope it to your syllabus, build it with you, and prepare the report, PPT and viva questions.",
  },
  {
    q: "Are these ideas suitable for B.Tech, BCA, MCA and diploma students?",
    a: "Yes. Beginner and mini-project ideas suit diploma and early-semester BCA work, while intermediate and advanced ideas suit B.Tech, MCA and M.Tech final-year submissions.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${absoluteUrl("/project-ideas")}#page`,
      url: absoluteUrl("/project-ideas"),
      name: `${ideaCount}+ Final Year & Mini Project Ideas`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: "Final year and mini project ideas for students",
    },
    {
      "@type": "ItemList",
      name: "Project ideas for students",
      numberOfItems: ideaCount,
      itemListElement: allIdeas.map((i, n) => ({
        "@type": "ListItem",
        position: n + 1,
        name: i.title,
        description: `${i.summary} (${i.group})`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ProjectIdeasPage() {
  const blogUrls = Object.fromEntries(ideaGroups.map((g) => [g.id, blogCategoryLink(g.blog, "project_ideas")]));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader
        title={`${ideaCount}+ Final Year & Mini Project Ideas`}
        description="Search and filter project ideas by domain, difficulty and type - then get help scoping and building the one you pick."
        crumbs={[{ label: "Project Ideas" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8 grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Not sure what to build? These {ideaCount} ideas are grouped into {ideaGroups.length} domains and are chosen for how well
              they demo and defend in a viva. Read our guide to the{" "}
              <Link href="/blog/top-final-year-project-ideas-computer-science-2026" className="font-semibold text-primary hover:underline">
                top final year project ideas for computer science students
              </Link>{" "}
              or learn{" "}
              <Link href="/blog/how-to-choose-final-year-project-topic" className="font-semibold text-primary hover:underline">
                how to choose the right topic
              </Link>
              .
            </p>
          </div>

          <nav aria-label="Idea domains" className="mb-8 flex flex-wrap gap-2">
            {ideaGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
              >
                {g.title}
              </a>
            ))}
          </nav>

          <IdeasExplorer groups={ideaGroups} blogUrls={blogUrls} />

          <BlogBridge
            className="mt-16"
            campaign="project_ideas_page"
            title="Want deeper write-ups of these ideas?"
            description="Our blog publishes step-by-step project ideas, tech stacks and tutorials every week."
            topics={[
              { label: "Project Ideas", key: "project-ideas" },
              { label: "Final Year Projects", key: "final-year-projects" },
              { label: "AI & Machine Learning", key: "ai-machine-learning" },
              { label: "Programming", key: "programming" },
              { label: "Data Analysis", key: "data-analysis-visualization" },
            ]}
          />

          <section className="mt-16" aria-labelledby="ideas-faq">
            <h2 id="ideas-faq" className="mb-6 text-2xl font-bold text-navy">Project idea FAQs</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 font-semibold text-navy">{f.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-center text-white">
            <h2 className="mb-3 text-xl font-bold">Found an idea you like?</h2>
            <p className="mb-6 text-sm text-white/90">
              Tell us your department guidelines and timeline, and we&apos;ll help you scope it into a working project.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact" data-track="ideas_cta_click">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
