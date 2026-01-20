import coverPrinting from "@/assets/Website Development.svg";
import stickerPrinting from "@/assets/Data analysis.svg";
import stamps from "@/assets/coding.svg";
import tshirt from "@/assets/Category4.png";
import packaging from "@/assets/Category5.jpg";

const categories = [
  {
    name: "Website Development",
    projects: "80+ Projects",
    image: coverPrinting,
    description: "Responsive, production-ready websites using modern tech stacks.",
  },
  {
    name: "Data Analysis",
    projects: "30+ Projects",
    image: stickerPrinting,
    description: "Dashboards, insights & real-world datasets for decision-making.",
  },
  {
    name: "Coding Projects",
    projects: "145+ Projects",
    image: stamps,
    description: "Logic-driven projects across multiple programming languages.",
  },
  {
    name: "Presentation Design",
    projects: "235+ Projects",
    image: tshirt,
    description: "Viva-ready presentations with professional storytelling.",
  },
  {
    name: "Resume Writing",
    projects: "278+ Projects",
    image: packaging,
    description: "ATS-optimized academic & career resumes that stand out.",
  },
];

const Categories = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5">
            Explore Our Project Categories
          </h2>
          <p className="text-lg text-slate-600">
            Discover high-impact academic and professional project solutions,
            trusted by students across disciplines.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative rounded-3xl bg-white p-8
                         border border-slate-200
                         shadow-sm
                         hover:shadow-2xl
                         hover:-translate-y-2
                         transition-all duration-500"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl
                              bg-gradient-to-r from-indigo-500 to-purple-500
                              opacity-0 group-hover:opacity-100
                              transition-opacity" />
              <div className="absolute inset-[1px] rounded-3xl bg-white" />

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute w-24 h-24 rounded-full
                                  bg-indigo-100 opacity-0
                                  group-hover:opacity-100
                                  transition-opacity blur-xl" />
                  <div className="w-24 h-24 rounded-full bg-white
                                  shadow-lg flex items-center justify-center
                                  group-hover:scale-110 transition-transform">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-slate-900 text-center mb-1">
                  {category.name}
                </h3>
                <p className="text-sm font-medium text-indigo-600 text-center mb-3">
                  {category.projects}
                </p>
                <p className="text-sm text-slate-600 text-center leading-relaxed">
                  {category.description}
                </p>

                {/* Hover CTA */}
                <div className="mt-6 flex justify-center opacity-0
                                translate-y-2
                                group-hover:opacity-100
                                group-hover:translate-y-0
                                transition-all">
                  <span className="text-sm font-semibold text-indigo-600">
                    Explore Category →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
