"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

const ITEMS_PER_PAGE = 2;

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.ceil(testimonials.length / ITEMS_PER_PAGE) - 1;

  const handlePrev = () => setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));

  const visible = testimonials.slice(index * ITEMS_PER_PAGE, index * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section className="py-20 bg-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="hidden lg:block w-48 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/testimonial-mugs.png" alt="Student feedback" className="w-full animate-float" />
          </div>

          <div className="flex-1">
            <div className="text-center mb-12">
              <span className="badge-pill badge-coral mb-6 inline-block">STUDENT REVIEWS</span>
              <h2 className="section-title text-2xl md:text-3xl">
                What Students Say About<br />ProjectDuniya
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {visible.map((t, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-lg card-hover animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-navy">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star < Math.floor(t.rating) ? "fill-yellow-500 text-yellow-500" : "fill-yellow-500/30 text-yellow-500"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-navy">{t.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic line-clamp-4">&ldquo;{t.content}&rdquo;</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-10">
              <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition" aria-label="Previous testimonials">
                <ChevronLeft className="w-5 h-5 text-navy" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <div key={i} className={`w-8 h-2 rounded-full ${i === index ? "bg-primary" : "bg-navy/30"}`} />
                ))}
              </div>
              <button onClick={handleNext} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition" aria-label="Next testimonials">
                <ChevronRight className="w-5 h-5 text-navy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
