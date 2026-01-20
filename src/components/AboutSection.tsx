import { Button } from "@/components/ui/button";
import { Check, Play } from "lucide-react";
import { useEffect, useState } from "react";
import productCard1 from "@/assets/product-card1.png";

const features = [
  "Clear Concept Explanation",
  "On-Time Project Completion",
  "Budget-Friendly Student Pricing",
  "Confidential & Original Deliverables",
];

/* ================= LIVE PROJECT NOTES ================= */
const projectNotes = [
  [
    "Connected with student via WhatsApp",
    "Project Type: Final Year Web Application",
    "University: MAKAUT",
    "Tech Stack: React, Node.js, MongoDB",
    "Features: Login, Dashboard, Admin Panel",
    "Documentation & Viva Support included",
    "Deadline: 3 Weeks",
    "Status: In Progress",
  ],
  [
    "Requirement received through website form",
    "Project Type: Data Analysis Project",
    "Tools Used: Python, Pandas, NumPy",
    "Visualization: Power BI Dashboard",
    "Dataset: Sales & Customer Data",
    "Insights report prepared",
    "Deadline: 10 Days",
    "Status: Working on Dashboard",
  ],
  [
    "Client discussion completed via call",
    "Project Type: AI / ML Mini Project",
    "Algorithm: Random Forest & Decision Tree",
    "Dataset: Kaggle Dataset",
    "Accuracy optimization in progress",
    "Report & PPT included",
    "Deadline: 2 Weeks",
    "Status: Ready for Review",
  ],
  [
    "Student contacted through Instagram DM",
    "Project Type: Python Programming Project",
    "Concepts: File Handling, OOP, Functions",
    "Use Case: Student Management System",
    "Code explanation session scheduled",
    "Documentation prepared",
    "Deadline: 7 Days",
    "Status: In Development",
  ],
  [
    "Requirement shared via Telegram",
    "Project Type: Web Design Project",
    "Technology: HTML, CSS, JavaScript",
    "Design: Responsive & Mobile-Friendly",
    "Pages: Home, About, Services, Contact",
    "SEO basics applied",
    "Deadline: 5 Days",
    "Status: Layout Completed",
  ],
];

const AboutSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);

  /* ================= SMOOTH SCROLL ================= */
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* ================= TYPING EFFECT ================= */
  useEffect(() => {
    const currentProject = projectNotes[projectIndex];
    const currentLine = currentProject[lineIndex];

    const typingSpeed = 55;
    const lineDelay = 900;
    const projectDelay = 1500;

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] =
            (updated[lineIndex] || "") + currentLine[charIndex];
          return updated;
        });
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (lineIndex < currentProject.length - 1) {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        } else {
          setTimeout(() => {
            setDisplayLines([]);
            setLineIndex(0);
            setCharIndex(0);
            setProjectIndex((projectIndex + 1) % projectNotes.length);
          }, projectDelay);
        }
      }, lineDelay);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, projectIndex]);

  return (
    <section id="about" className="py-24 bg-light-purple/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LIVE PROJECT SCREEN ================= */}
          <div>
            <div className="w-full max-w-xl lg:max-w-2xl bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[0_0_60px_rgba(16,185,129,0.15)]">

              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-3 bg-[#020617] border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-dot" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 animate-dot [animation-delay:0.2s]" />
                <span className="w-3 h-3 rounded-full bg-green-500 animate-dot [animation-delay:0.4s]" />

                <span className="ml-3 text-xs font-medium text-slate-300 tracking-wide">
                  ProjectDuniya — Live Project Notes
                </span>

                <span className="ml-auto flex items-center gap-1 text-[10px] text-emerald-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Typing Area */}
              <div className="p-6 font-mono text-sm leading-relaxed text-slate-200 min-h-[320px] bg-gradient-to-br from-[#0f172a] to-[#020617] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-sky-500/5 pointer-events-none" />

                <div className="relative z-10">
                  {displayLines.map((line, i) => {
                    const isStatus = line.toLowerCase().includes("status");
                    const isTitle = line.toLowerCase().includes("project type");
                    const isStack =
                      line.toLowerCase().includes("tech") ||
                      line.toLowerCase().includes("tools");

                    return (
                      <p
                        key={i}
                        className={`mb-2 flex items-start gap-3 ${
                          isStatus
                            ? "text-emerald-400 font-semibold"
                            : isTitle
                            ? "text-sky-300 font-semibold"
                            : isStack
                            ? "text-indigo-300"
                            : "text-slate-200"
                        }`}
                      >
                        <span className="text-emerald-400 select-none">›</span>
                        <span>
                          {line}
                          {i === lineIndex && (
                            <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse rounded-sm" />
                          )}
                        </span>
                      </p>
                    );
                  })}
                </div>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-0 left-0 w-full px-6 py-3 border-t border-white/10 bg-black/30 backdrop-blur flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live project update in progress
                  </div>
                  <span className="text-emerald-400 font-medium">
                    REAL STUDENT PROJECT
                  </span>
                </div>
              </div>
            </div>

            {/* ✅ INFO LINE UNDER SCREEN */}
            <p className="mt-3 text-xs text-slate-500 text-center">
              Showing real, anonymized student project progress in real time.
            </p>
          </div>

          {/* ================= CONTENT ================= */}
          <div>
            <span className="badge-pill badge-secondary mb-6 inline-block">
              ABOUT US
            </span>

            <h2 className="text-2xl lg:text-3xl font-bold text-navy leading-[1.2] mb-6">
              A Smarter Way to Build Academic & Technical Projects
            </h2>

            <p className="text-muted-foreground mb-8 max-w-lg">
              We guide students step-by-step to build real-world projects that meet academic standards, industry expectations, and tight deadlines — with clarity and confidence.
            </p>

            <div className="flex items-center gap-10 mb-10">
              <a
                href="#"
                className="relative w-48 h-32 rounded-xl overflow-hidden group block"
              >
                <img
                  src={productCard1}
                  alt="Project guidance preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </a>

              <div className="grid gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-navy">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection("products")}>
                All Services
              </Button>
              <Button onClick={() => scrollToSection("form")}>
                Get Custom Project
              </Button>
              <Button
                onClick={() =>
                  window.open("https://wa.me/918391808784", "_blank")
                }
              >
                WhatsApp
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
