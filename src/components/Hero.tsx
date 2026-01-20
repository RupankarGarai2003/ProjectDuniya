import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

/* Hero Images */
import heroImg1 from "@/assets/coding.svg";
import heroImg2 from "@/assets/Final Year.svg";
import heroImg3 from "@/assets/Learning-bro.svg";
import heroImg4 from "@/assets/Notes-amico.svg";
import heroImg5 from "@/assets/Website Development.svg";
import heroImg6 from "@/assets/Video tutorial-amico.svg";
import heroImg7 from "@/assets/Spreadsheets-bro.svg";
import heroImg8 from "@/assets/school.svg";
import heroImg9 from "@/assets/Research paper-amico.svg";
import heroImg10 from "@/assets/Lesson-amico.svg";
import heroImg11 from "@/assets/Internship.svg";

const heroImages = [
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
  heroImg6,
  heroImg7,
  heroImg8,
  heroImg9,
  heroImg10,
  heroImg11,
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* Scroll to form */
  const scrollToForm = () => {
    const section = document.getElementById("form");
    if (!section) return;

    const yOffset = -90;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* Rotate images */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-200/40 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6 pt-6 lg:pt-10 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full
                             bg-green-50 text-green-700 text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full
                                 bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full
                                 bg-green-500" />
              </span>
              Built for Students • Trusted by Professionals
            </span>

            {/* Headline */}
            <h1 className="mb-6 leading-tight">
              <span className="block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
                Smart Project Solutions
              </span>

              <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                for School, College &{" "}
                <span className="text-indigo-600">Professionals</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
              We help students and professionals build real-world projects with expert guidance, clear execution, and practical outcomes.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="rounded-full px-10 py-6 font-semibold
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           shadow-lg hover:shadow-xl hover:-translate-y-0.5
                           transition-all"
              >
                Get Custom Project
              </Button>

              <button
                onClick={() => {
                  const section = document.getElementById("services");
                  if (!section) return;

                  const yOffset = -90; // sticky header offset
                  const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;

                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
              >
                View Trending Projects →
              </button>
            </div>

            {/* Trust Stats */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-600">
              <span><strong className="text-slate-900">1000+</strong> Projects</span>
              <span><strong className="text-slate-900">4+ Years</strong> Experience</span>
              <span><strong className="text-slate-900">24/7</strong> Expert Support</span>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center items-center min-h-[440px]">

            {/* Image Ring */}
            <div className="absolute w-[440px] h-[440px] rounded-full
                            bg-gradient-to-tr from-indigo-100 to-purple-100" />

            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`hero-${index}`}
                className={`absolute w-full max-w-[420px]
                            transition-all duration-700 ease-in-out
                            ${
                              index === activeIndex
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90"
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
