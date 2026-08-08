"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/images/coding.svg",
  "/images/Final-Year.svg",
  "/images/Learning-bro.svg",
  "/images/Notes-amico.svg",
  "/images/Website-Development.svg",
  "/images/Video-tutorial-amico.svg",
  "/images/Spreadsheets-bro.svg",
  "/images/school.svg",
  "/images/Research-paper-amico.svg",
  "/images/Lesson-amico.svg",
  "/images/Internship.svg",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-200/40 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6 pt-6 lg:pt-10 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div className="max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Built for Students - Trusted by Professionals
            </span>

            <h1 className="mb-6 leading-tight">
              <span className="block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
                Smart Project Solutions
              </span>
              <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                for School, College &{" "}
                <span className="text-indigo-600">Professionals</span>
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
              We help students and professionals build real-world projects with expert guidance, clear execution, and practical outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-6 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Link href="/contact">Get Custom Project</Link>
              </Button>

              <Link
                href="/services"
                className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition self-center"
              >
                View Trending Projects →
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-600">
              <span><strong className="text-slate-900">1000+</strong> Projects</span>
              <span><strong className="text-slate-900">4+ Years</strong> Experience</span>
              <span><strong className="text-slate-900">24/7</strong> Expert Support</span>
            </div>
          </div>

          <div className="relative flex justify-center items-center min-h-[440px]">
            <div className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100" />
            {heroImages.map((img, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={img}
                src={img}
                alt={`ProjectDuniya student project illustration ${index + 1}`}
                className={`absolute w-full max-w-[420px] transition-all duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
