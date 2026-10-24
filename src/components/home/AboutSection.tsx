"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

const features = [
  "Clear concept explanation",
  "Timelines agreed up front",
  "Budget-friendly student pricing",
  "Confidential handling of your details",
];

// Illustrative examples of how typical requests are scoped. These are NOT live client
// data - the panel is labelled as an example so nobody mistakes it for real-time activity.
const workflows = [
  {
    tab: "Web app",
    title: "Final-year web application",
    lines: [
      "Typical stack: React, Node.js, MongoDB",
      "Typical features: login, dashboard, admin panel",
      "Deliverables: source code, report, PPT",
      "Viva / defense preparation included",
      "Typical timeline: 2-4 weeks, scoped per request",
    ],
  },
  {
    tab: "Data analysis",
    title: "Data analysis project",
    lines: [
      "Typical tools: Python, Pandas, NumPy",
      "Visualization: Power BI or Python dashboards",
      "Dataset: your data or a public dataset",
      "Deliverables: insights report and explanation session",
      "Typical timeline: 1-2 weeks, scoped per request",
    ],
  },
  {
    tab: "AI / ML",
    title: "AI / ML mini project",
    lines: [
      "Typical methods: Random Forest, Decision Tree, regression",
      "Dataset: public datasets such as Kaggle",
      "Model tuning and evaluation metrics",
      "Deliverables: code, report, PPT",
      "Typical timeline: 1-3 weeks, scoped per request",
    ],
  },
  {
    tab: "Python",
    title: "Python programming project",
    lines: [
      "Typical concepts: file handling, OOP, functions",
      "Example use case: student management system",
      "Code explanation session",
      "Deliverables: documented code",
      "Typical timeline: about a week, scoped per request",
    ],
  },
  {
    tab: "Website",
    title: "Responsive website project",
    lines: [
      "Typical technology: HTML, CSS, JavaScript",
      "Design: responsive and mobile-friendly",
      "Typical pages: Home, About, Services, Contact",
      "Basic SEO applied",
      "Typical timeline: under a week, scoped per request",
    ],
  },
];

const AboutSection = () => {
  const [active, setActive] = useState(0);
  const current = workflows[active];

  return (
    <section id="about" className="py-24 bg-light-purple/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-full max-w-xl lg:max-w-2xl bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 px-5 py-3 bg-[#020617] border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                <h2 className="ml-3 text-xs font-medium text-slate-200 tracking-wide">
                  Typical Project Workflow
                </h2>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-slate-300 border border-slate-600 rounded px-2 py-0.5">
                  Example
                </span>
              </div>

              <div role="tablist" aria-label="Example project types" className="flex flex-wrap gap-2 px-5 pt-4 bg-gradient-to-br from-[#0f172a] to-[#020617]">
                {workflows.map((w, i) => (
                  <button
                    key={w.tab}
                    role="tab"
                    id={`workflow-tab-${i}`}
                    aria-selected={i === active}
                    aria-controls="workflow-panel"
                    onClick={() => setActive(i)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300 ${
                      i === active ? "bg-sky-300 text-slate-900" : "bg-white/10 text-slate-200 hover:bg-white/20"
                    }`}
                  >
                    {w.tab}
                  </button>
                ))}
              </div>

              <div
                id="workflow-panel"
                role="tabpanel"
                aria-labelledby={`workflow-tab-${active}`}
                className="p-6 font-mono text-sm leading-relaxed text-slate-200 min-h-[300px] bg-gradient-to-br from-[#0f172a] to-[#020617]"
              >
                <p className="mb-4 text-sky-300 font-semibold">{current.title}</p>
                <ul className="space-y-2">
                  {current.lines.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="text-emerald-400 select-none" aria-hidden="true">›</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-600 text-center">
              Illustrative examples of how we scope common requests - not live client activity. Final scope and timeline are confirmed in your quote.
            </p>
          </div>

          <div>
            <span className="badge-pill badge-secondary mb-6 inline-block">ABOUT US</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy leading-[1.2] mb-6">
              A Smarter Way to Build Academic &amp; Technical Projects
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              We guide students step-by-step to build real-world projects that meet academic standards, industry expectations, and tight deadlines — with clarity and confidence.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-10">
              <Link href="/about" className="relative w-48 h-32 rounded-xl overflow-hidden block flex-shrink-0 bg-white border border-border" aria-label="Learn more about ProjectDuniya">
                <Image src="/images/Group-discussion-amico.svg" alt="Illustration of students discussing a project" fill sizes="192px" className="object-contain p-2" />
              </Link>

              <ul className="grid gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-secondary" aria-hidden="true" />
                    <span className="text-sm font-medium text-navy">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild><Link href="/services">All Services</Link></Button>
              <Button asChild><Link href="/contact" data-track="about_cta_click">Get Custom Project</Link></Button>
              <Button asChild variant="outline">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
