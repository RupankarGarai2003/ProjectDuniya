import { useState } from "react";
import { Button } from "@/components/ui/button";
import Coding from "@/assets/coding.svg";
import Website from "@/assets/Website Development.svg";
import Software from "@/assets/Software.svg";
import Programming from "@/assets/Hand coding-amico.svg";
import Data from "@/assets/Data analysis-amico.svg";
import Excel from "@/assets/Spreadsheets-bro.svg";
import Research from "@/assets/Research paper-amico.svg";
import Thesis from "@/assets/Thesis-bro.svg";
import Essay from "@/assets/Morning essential-rafiki.svg";
import Academic from "@/assets/Learning-bro.svg";
import Plagiarism from "@/assets/grammar correction-bro.svg";
import Resume from "@/assets/Resume-amico.svg";
import Job from "@/assets/Job hunt-amico.svg";
import Tutoring from "@/assets/Lesson-amico.svg";
import Study from "@/assets/Research paper-pana.svg";
import Note from "@/assets/Notes-amico.svg";
import Group from "@/assets/Group discussion-amico.svg";
import Presentation from "@/assets/presentation.svg";

/* Categories (High-level grouping for ProjectDuniya) */
const categories = [
  "Development & Coding",
  "Data, AI & Analytics",
  "Research & Writing",
  "Academic & Career Support",
];

/* Services (Mapped from ALL your shared categories) */
const products = [
  {
    name: "Coding & Development",
    category: "Development & Coding",
    image: Coding,
    count: "250+",
  },
  {
    name: "Website Design & Development",
    category: "Development & Coding",
    image: Website,
    count: "100+",
  },
  {
    name: "Software Development",
    category: "Development & Coding",
    image: Software,
    count: "50+",
  },
  {
    name: "Programming Help & Debugging",
    category: "Development & Coding",
    image: Programming,
    count: "350+",
  },

  {
    name: "Data Analysis & Visualization",
    category: "Data, AI & Analytics",
    image: Data,
    count: "40+",
  },
  {
    name: "Microsoft Excel",
    category: "Data, AI & Analytics",
    image: Excel,
    count: "500+",
  },

  {
    name: "Research Paper",
    category: "Research & Writing",
    image: Research,
    count: "20+",
  },
  {
    name: "Thesis Writing",
    category: "Research & Writing",
    image: Thesis,
    count: "450+",

  },
  {
    name: "Essay & Report Writing",
    category: "Research & Writing",
    image: Essay,
    count: "500+",
  },
  {
    name: "Academic Research Paper Formatting",
    category: "Research & Writing",
    image: Academic,
    count: "5+",
  },
  {
    name: "Plagiarism Checking",
    category: "Research & Writing",
    image: Plagiarism,
    count: "250+",
  },

  {
    name: "Academic Resume Writing",
    category: "Academic & Career Support",
    image: Resume,
    count: "600+",
  },
  {
    name: "Job / Internship Application Assistance",
    category: "Academic & Career Support",
    image: Job,
    count: "150+",
  },
  {
    name: "Online Tutoring Sessions",
    category: "Academic & Career Support",
    image: Tutoring,
    count: "20+",
  },
  {
    name: "Study Guide Creation",
    category: "Academic & Career Support",
    image: Study,
    count: "50+",
  },
  {
    name: "Note Taking & Organizing",
    category: "Academic & Career Support",
    image: Note,
    count: "25+",
  },
  {
    name: "Group Project Collaboration Tools",
    category: "Academic & Career Support",
    image: Group,
    count: "20+",
  },
  {
    name: "Presentation Design",
    category: "Academic & Career Support",
    image: Presentation,
    count: "350+",
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  /* Filter products by selected category */
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="badge-pill badge-coral mb-6 inline-block">
            OUR SERVICES
          </span>
          <h2 className="section-title mb-8">
            Explore Our All Services
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category
                    ? "bg-coral hover:bg-coral/90"
                    : "border-border text-foreground hover:bg-muted"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
            <div className="relative mb-4 aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[75%] h-[75%] object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>




              <h3 className="font-semibold text-navy text-center">
                {product.name}
              </h3>

              <div className="flex justify-center items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-green-600 font-semibold">
                  {product.count} Projects Completed
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
