import { useState } from "react";
import { ArrowRight } from "lucide-react";
import FinalYear from "@/assets/Final Year.svg";
import WebsiteDevelopment from "@/assets/Website Development.svg";
import Software from "@/assets/Software.svg";
import DataAnalysis from "@/assets/Data analysis-amico.svg";
import Programming from "@/assets/coding.svg";
import Research from "@/assets/Research paper-amico.svg";
import Presentation from "@/assets/presentation.svg";
import Internship from "@/assets/Internship.svg";

const services = [
  {
    title: "Final Year Academic Projects",
    description:
      "Complete final year project support for diploma, undergraduate, and postgraduate students with proper documentation and guidance.",
    image: FinalYear,
  },
  {
    title: "Website Development Projects",
    description:
      "Student-requested website projects using modern technologies, responsive design, and real-world use cases.",
    image: WebsiteDevelopment,
  },
  {
    title: "Software Development Projects",
    description:
      "End-to-end software project assistance including design, development, testing, and implementation support.",
    image: Software,
  },
  {
    title: "Data Analysis & AI Projects",
    description:
      "Trending projects in data analysis, visualization, artificial intelligence, and machine learning using real datasets.",
    image: DataAnalysis,
  },
  {
    title: "Programming Debugging Projects",
    description:
      "Get expert help with debugging, fixing errors, and optimizing code across multiple programming languages.",
    image: Programming,
  },
  {
    title: "Research Paper & Thesis Projects",
    description:
      "Academic research, thesis writing, formatting, and plagiarism-checked documentation support.",
    image: Research,
  },
  {
    title: "Presentation & Viva Projects",
    description:
      "Professional presentation design and viva preparation support for academic and technical projects.",
    image: Presentation,
  },
  {
    title: "Internship & Mini Projects",
    description:
      "Industry-oriented mini and internship projects designed to build practical skills and experience.",
    image: Internship,
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="badge-pill badge-coral mb-6 inline-block">
            OUR SERVICES
          </span>
          <h2 className="section-title text-2xl md:text-3xl">
            Trending Project Requests (Students’ Choice)
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {visibleServices.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-6 card-hover border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-primary transition-colors group"
                >
                  Read More
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-secondary-foreground" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary font-semibold hover:underline transition"
          >
            {showAll ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
