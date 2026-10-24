"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const heroImages = [
  { src: "/images/coding.svg", alt: "Illustration of a student writing code" },
  { src: "/images/Final-Year.svg", alt: "Illustration of a final year project plan" },
  { src: "/images/Learning-bro.svg", alt: "Illustration of a student learning online" },
  { src: "/images/Notes-amico.svg", alt: "Illustration of organised study notes" },
  { src: "/images/Website-Development.svg", alt: "Illustration of website development" },
  { src: "/images/Video-tutorial-amico.svg", alt: "Illustration of a video tutorial session" },
  { src: "/images/Spreadsheets-bro.svg", alt: "Illustration of spreadsheet analysis" },
  { src: "/images/school.svg", alt: "Illustration of a school building" },
  { src: "/images/Research-paper-amico.svg", alt: "Illustration of writing a research paper" },
  { src: "/images/Lesson-amico.svg", alt: "Illustration of a one-to-one lesson" },
  { src: "/images/Internship.svg", alt: "Illustration of an internship project" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Respect users who prefer reduced motion: keep the first illustration static.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Warm the cache for the NEXT illustration only (instead of loading all 11 up front).
  useEffect(() => {
    const next = heroImages[(activeIndex + 1) % heroImages.length];
    const img = new window.Image();
    img.src = next.src;
  }, [activeIndex]);

  const current = heroImages[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-200/40 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-200/40 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-6 pt-6 lg:pt-10 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-green-50 text-green-800 text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
              </span>
              Built for students worldwide
            </span>

            <h1 className="mb-6 leading-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
                Final Year Project Help
              </span>
              <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                for School, College &amp;{" "}
                <span className="text-indigo-600">Professionals</span>
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
              From final year projects to coding assignments and research papers, we help students and professionals get real-world work done - entirely online, wherever you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-6 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Link href="/contact" data-track="hero_cta_click">Get Custom Project</Link>
              </Button>

              <Link
                href="/blog/top-final-year-project-ideas-computer-science-2026"
                data-track="hero_ideas_click"
                className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition self-center"
              >
                Browse Final Year Project Ideas →
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-600">
              <li><strong className="text-slate-900">{siteConfig.claims.projectsLabel}</strong> Projects</li>
              <li><strong className="text-slate-900">{siteConfig.claims.experienceLabel}</strong> Experience</li>
              <li><strong className="text-slate-900">100% Online</strong> Worldwide</li>
            </ul>
          </div>

          <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[440px]">
            <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100" aria-hidden="true" />
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={420}
              height={420}
              priority={activeIndex === 0}
              sizes="(max-width: 1024px) 80vw, 420px"
              className="relative w-full max-w-[300px] sm:max-w-[420px] h-auto animate-fade-in-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
