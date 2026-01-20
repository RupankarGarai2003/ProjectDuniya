import { Button } from "@/components/ui/button";
import schoolImg from "@/assets/school.svg";
import collegeImg from "@/assets/college.svg";
import professionalImg from "@/assets/coding.svg";

const LatestDesign = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  const cards = [
    {
      tag: "For School Students",
      title: "School Projects",
      desc: "Simple, creative and syllabus-aligned projects with clear explanations.",
      image: schoolImg,
      accent: "from-emerald-400 to-teal-400",
    },
    {
      tag: "For College Students",
      title: "College Projects",
      desc: "Final year, mini & major projects with documentation and viva prep.",
      image: collegeImg,
      accent: "from-indigo-500 to-purple-500",
    },
    {
      tag: "For Professionals",
      title: "Professional Projects",
      desc: "Career-focused solutions for working professionals & startups.",
      image: professionalImg,
      accent: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
            From Classrooms to Careers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
            Project Solutions for Every Stage
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            From school students to professionals — we guide, build, and deliver
            projects that actually work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                group relative
                rounded-3xl
                bg-white
                p-6
                shadow-sm
                hover:shadow-xl
                transition-all
                border border-slate-200
              "
            >
              {/* Gradient top border */}
              {/* <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${card.accent}`}
              /> */}

              {/* Tag */}
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                {card.tag}
              </span>

              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    h-36 object-contain
                    group-hover:scale-105
                    transition-transform
                  "
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                {card.desc}
              </p>

              {/* CTA */}
              <Button
              id="#form"
                onClick={scrollToForm}
                className="
                  w-full rounded-full
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  text-white font-semibold
                  hover:shadow-lg
                "
              >
                Contact Now
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestDesign;
