import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialMugs from "@/assets/testimonial-mugs.png";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Final Year B.Tech Student",
    rating: 5,
    content:
      "ProjectDuniya guided me throughout my final year project with clear explanations. The mentors were supportive and ensured timely delivery.",
  },
  {
    name: "Anjali Mehta",
    role: "MCA Student",
    rating: 4.5,
    content:
      "I was struggling with my software project, but the guidance I received here made everything simple and understandable.",
  },
  {
    name: "Amit Patel",
    role: "BCA Student",
    rating: 4,
    content:
      "Excellent platform for student projects. The team helped me understand concepts instead of just giving solutions.",
  },
  {
    name: "Sneha Roy",
    role: "MBA Student",
    rating: 4.5,
    content:
      "They helped me with reports and presentation design. Communication was smooth and delivery was on time.",
  },
  {
    name: "Rahul Das",
    role: "Data Science Student",
    rating: 5,
    content:
      "Great support for data analysis projects using real datasets. I gained practical knowledge that helped in my viva.",
  },
  {
    name: "Pooja Sharma",
    role: "Final Year Student",
    rating: 5,
    content:
      "Very professional service with proper guidance. I felt confident during my project submission.",
  },
  {
    name: "Siddharth Jain",
    role: "Engineering Student",
    rating: 4.5,
    content:
      "The mentors explained every step patiently. This platform genuinely focuses on student learning.",
  },
  {
    name: "Neha Verma",
    role: "M.Tech Student",
    rating: 5,
    content:
      "My thesis work became much easier with their structured guidance and timely feedback.",
  },
  {
    name: "Arjun Singh",
    role: "B.Sc Student",
    rating: 5,
    content:
      "Highly recommended for academic projects. Clear explanations and excellent support.",
  },
  {
    name: "Kavya Nair",
    role: "MBA Student",
    rating: 4.5,
    content:
      "Friendly team and professional guidance. They helped me prepare confidently for my presentation.",
  },
  {
    name: "Rohit Mishra",
    role: "Computer Science Student",
    rating: 5,
    content:
      "Quick and accurate debugging support. Saved me a lot of time before my deadline.",
  },
  {
    name: "Ishita Kapoor",
    role: "Final Year Student",
    rating: 4.5,
    content:
      "Good quality work with proper explanations. I would definitely recommend ProjectDuniya.",
  },
  {
    name: "Manish Gupta",
    role: "BCA Student",
    rating: 5,
    content:
      "One of the best platforms for student projects. Very supportive and knowledgeable team.",
  },
  {
    name: "Priya Sen",
    role: "M.Sc Student",
    rating: 4.5,
    content:
      "They provided clear guidance and answered all my questions patiently.",
  },
  {
    name: "Vikas Yadav",
    role: "Engineering Student",
    rating: 5,
    content:
      "Helped me prepare confidently for my viva. The explanations were simple and practical.",
  },
];


const ITEMS_PER_PAGE = 2;

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.ceil(testimonials.length / ITEMS_PER_PAGE) - 1;

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    index * ITEMS_PER_PAGE,
    index * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="py-20 bg-light-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Decorative Image */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <img
              src={testimonialMugs}
              alt="Student feedback"
              className="w-full animate-float"
            />
          </div>

          <div className="flex-1">
            <div className="text-center mb-12">
              <span className="badge-pill badge-coral mb-6 inline-block">
                STUDENT REVIEWS
              </span>
              <h2 className="section-title text-2xl md:text-3xl">
                What Students Say About<br />ProjectDuniya
              </h2>

            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
              {visibleTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl p-6 shadow-lg card-hover animate-fade-in-up"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-navy">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star < Math.floor(t.rating)
                                ? "fill-yellow-500 text-yellow-500"
                                : "fill-yellow-500/30 text-yellow-500"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-navy">
                        {t.rating}
                      </span>
                    </div>

                  </div>

                  <p className="text-muted-foreground italic line-clamp-4">
                    “{t.content}”
                  </p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
              >
                <ChevronLeft className="w-5 h-5 text-navy" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-2 rounded-full ${
                      i === index ? "bg-primary" : "bg-navy/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
              >
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
