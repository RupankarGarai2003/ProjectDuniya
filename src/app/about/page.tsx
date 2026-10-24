import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description:
    "Learn about ProjectDuniya - a team helping students worldwide with final year projects, coding help, and academic support.",
  path: "/about",
});

const values = [
  { title: "Clarity Over Copy-Paste", desc: "We explain every concept so you can defend your project confidently, not just submit it." },
  { title: "On-Time, Every Time", desc: "Deadlines are non-negotiable in academics, and we plan our timelines around yours." },
  { title: "Affordable for Students", desc: "Transparent, student-friendly pricing with no hidden charges." },
  { title: "Confidential Handling", desc: "Your personal details and project data are used only to deliver your project and are not sold or shared for marketing. See our Privacy Policy for the tools we rely on." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About ProjectDuniya"
        description="A student-first platform built to make academic and technical projects less stressful and more understandable."
        crumbs={[{ label: "About" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="badge-pill badge-secondary mb-6 inline-block">OUR STORY</span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Why We Started {siteConfig.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {siteConfig.name} started with a simple observation: most students don&apos;t struggle with their final year or academic
            projects because they lack ability — they struggle because nobody breaks the process down clearly, deadlines
            pile up alongside other coursework, and generic tutorials rarely match what a specific department or guide
            actually expects.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Headquartered in Kolkata and working with students around the world, our team combines full-stack development, data
            analytics, AI/ML, legal, and content expertise to support a wide range of academic and technical project
            needs — from a first-year mini project to a postgraduate thesis. Every engagement includes an explanation
            component, because a project you can&apos;t explain in your viva isn&apos;t truly finished.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Over the past few years, we&apos;ve worked with students across diploma, undergraduate, and postgraduate
            programs, building everything from web applications and machine learning models to research papers and
            career-ready resumes.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-light-purple/30 rounded-2xl p-8 mb-14">
            <li>
              <p className="text-3xl font-extrabold text-primary">{siteConfig.claims.projectsLabel}</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </li>
            <li>
              <p className="text-3xl font-extrabold text-primary">{siteConfig.claims.experienceLabel}</p>
              <p className="text-sm text-muted-foreground">Experience</p>
            </li>
            <li>
              <p className="text-3xl font-extrabold text-primary">Online</p>
              <p className="text-sm text-muted-foreground">Students Worldwide</p>
            </li>
            <li>
              <p className="text-3xl font-extrabold text-primary">WhatsApp</p>
              <p className="text-sm text-muted-foreground">Call &amp; Email Support</p>
            </li>
          </ul>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full px-10">
              <Link href="/contact" data-track="about_cta_click">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
