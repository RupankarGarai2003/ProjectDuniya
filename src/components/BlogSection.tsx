import { useState } from "react";

const projects = [
  {
    title: "Final Year Website Project",
    date: "Completed on Feb 05, 2025",
    type: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "AI & ML Student Project",
    date: "Completed on Feb 18, 2025",
    type: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Python Student Management System",
    date: "Completed on Feb 22, 2025",
    type: "Python Project",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    title: "Data Analytics Dashboard",
    date: "Completed on Mar 01, 2025",
    type: "Data Analysis",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Power BI Dashboard Project",
    date: "Completed on Mar 05, 2025",
    type: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    title: "Web App Final Year Project",
    date: "Completed on Mar 03, 2025",
    type: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Research Paper Submission",
    date: "Completed on Feb 20, 2025",
    type: "Academic Writing",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  },
  {
    title: "Mini Project & Viva Prep",
    date: "Completed on Feb 26, 2025",
    type: "Academic Support",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  },
  {
    title: "LinkedIn Student Success Case",
    date: "Completed on Feb 28, 2025",
    type: "Career Support",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    title: "Instagram Project Explanation Session",
    date: "Completed on Feb 24, 2025",
    type: "Live Guidance",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

const PROJECTS_PER_PAGE = 10;

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  return (
    <section id="projects" className="py-20 bg-[#f6f8f5]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">
            Projects Completed This Month 🚀
          </h2>
          <p className="text-muted-foreground mt-3">
            Real projects successfully delivered with expert guidance & support
          </p>

          <p className="text-sm text-green-600 font-medium mt-4">
            ✔ 50+ Projects Delivered This Month
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#fdfefb] rounded-lg overflow-hidden transition hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] px-2 py-1 rounded">
                  Completed
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-1">
                  {project.date}
                </p>

                <p className="text-[11px] text-green-600 font-medium mb-2">
                  ✔ {project.type}
                </p>

                <h3 className="text-sm font-medium text-navy mb-3 line-clamp-2">
                  {project.title}
                </h3>

                <a
                  href="#"
                  className="text-xs font-medium text-navy hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-5 py-2 rounded-full border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted transition"
          >
            ← Prev
          </button>

          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) =>
              Math.min(p + 1, totalPages)
            )}
            disabled={currentPage === totalPages}
            className="px-5 py-2 rounded-full border border-border text-sm font-medium disabled:opacity-40 hover:bg-muted transition"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;