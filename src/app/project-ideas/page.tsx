import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Project Ideas for Students",
  description:
    "Browse final year and mini project ideas across web development, AI/ML, data analysis, and software engineering - organized by category and difficulty.",
  path: "/project-ideas",
});

const ideaGroups = [
  {
    category: "Web Development",
    ideas: [
      "Personal finance / expense tracker with data visualization",
      "Campus or hostel management system with role-based access",
      "E-commerce platform with a recommendation engine",
      "Real-time chat application with authentication",
      "Job board / internship listing platform",
    ],
  },
  {
    category: "AI & Machine Learning",
    ideas: [
      "Disease prediction using health datasets",
      "Sentiment analysis on product or movie reviews",
      "Resume-to-job-description matching tool",
      "Handwritten digit / character recognition",
      "Spam email classifier",
    ],
  },
  {
    category: "Data Analysis",
    ideas: [
      "Sales performance dashboard with regional trends",
      "Student performance factor analysis",
      "COVID-19 or public health trend visualization",
      "Movie or book rating pattern analysis",
      "Social media engagement analytics",
    ],
  },
  {
    category: "Software Engineering",
    ideas: [
      "Inventory and billing management system",
      "Library management system with UML documentation",
      "Employee attendance and payroll system",
      "Hospital appointment scheduling system",
      "Online examination and grading system",
    ],
  },
];

export default function ProjectIdeasPage() {
  return (
    <main>
      <PageHeader
        title="Final Year & Mini Project Ideas"
        description="A curated list of project ideas across web development, AI/ML, data analysis, and software engineering to help you get started."
        crumbs={[{ label: "Project Ideas" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Looking for a bigger list? Our guide to the{" "}
            <Link href="/blog/top-final-year-project-ideas-computer-science-2026" className="text-primary font-semibold hover:underline">
              top final year project ideas for computer science students in 2026
            </Link>{" "}
            covers 27 ideas across web, AI/ML, mobile, data science, cybersecurity and blockchain.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Not sure what to build? Below is a starting list organized by domain. For a deeper walkthrough of how to
            pick between them, read our guide on{" "}
            <Link href="/blog/how-to-choose-final-year-project-topic" className="text-primary font-semibold hover:underline">
              how to choose the right final year project topic
            </Link>
            . Once you&apos;ve shortlisted an idea, our team can help scope it to your exact syllabus and timeline.
          </p>

          <div className="space-y-12">
            {ideaGroups.map((group) => (
              <div key={group.category}>
                <h2 className="text-xl font-bold text-navy mb-5">{group.category}</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {group.ideas.map((idea) => (
                    <li key={idea} className="bg-card border border-border rounded-xl p-4 text-sm text-navy">
                      {idea}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold mb-3">Found an idea you like?</h2>
            <p className="text-sm text-white/90 mb-6">
              Tell us your department guidelines and timeline, and we&apos;ll help you scope it into a working project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
