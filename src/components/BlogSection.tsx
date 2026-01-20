import { useState } from "react";
import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";

const blogs = [
  // add as many as you want
  { title: "Final Year Website Project Successfully Completed", date: "Feb 05, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Live Project Guidance Session on Instagram", date: "Feb 10, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "YouTube Demo: Data Analysis Project Explained", date: "Feb 15, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "AI & ML Final Year Project Completed", date: "Feb 18, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Research Paper Submission Guidance", date: "Feb 20, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "Python Programming Project Walkthrough", date: "Feb 22, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "Instagram Reel: Project Explanation Session", date: "Feb 24, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Mini Project Submission & Viva Prep", date: "Feb 26, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "LinkedIn Student Success Story", date: "Feb 28, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "Data Analytics Live Project Demo", date: "Mar 01, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Final Year Website Project Successfully Completed", date: "Feb 05, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Live Project Guidance Session on Instagram", date: "Feb 10, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "YouTube Demo: Data Analysis Project Explained", date: "Feb 15, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "AI & ML Final Year Project Completed", date: "Feb 18, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Research Paper Submission Guidance", date: "Feb 20, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "Python Programming Project Walkthrough", date: "Feb 22, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "Instagram Reel: Project Explanation Session", date: "Feb 24, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Mini Project Submission & Viva Prep", date: "Feb 26, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "LinkedIn Student Success Story", date: "Feb 28, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "Data Analytics Live Project Demo", date: "Mar 01, 2025", author: "ProjectDuniya", image: blog1 },
    { title: "Final Year Website Project Successfully Completed", date: "Feb 05, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Live Project Guidance Session on Instagram", date: "Feb 10, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "YouTube Demo: Data Analysis Project Explained", date: "Feb 15, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "AI & ML Final Year Project Completed", date: "Feb 18, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Research Paper Submission Guidance", date: "Feb 20, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "Python Programming Project Walkthrough", date: "Feb 22, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "Instagram Reel: Project Explanation Session", date: "Feb 24, 2025", author: "ProjectDuniya", image: blog1 },
  { title: "Mini Project Submission & Viva Prep", date: "Feb 26, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "LinkedIn Student Success Story", date: "Feb 28, 2025", author: "ProjectDuniya", image: blog3 },
  { title: "Data Analytics Live Project Demo", date: "Mar 01, 2025", author: "ProjectDuniya", image: blog1 },
  // page 2 examples
  { title: "Web App Final Year Project", date: "Mar 03, 2025", author: "ProjectDuniya", image: blog2 },
  { title: "Power BI Dashboard Project", date: "Mar 05, 2025", author: "ProjectDuniya", image: blog3 },
];

const BLOGS_PER_PAGE = 10;

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <section id="blog" className="py-20 bg-[#f6f8f5]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">
            Latest Projects & Posts
          </h2>
          <p className="text-muted-foreground mt-3">
            Explore recent student projects and guidance sessions
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#fdfefb] rounded-lg overflow-hidden transition hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">
                  {blog.date} · {blog.author}
                </p>

                <h3 className="text-sm font-medium text-navy mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <a
                  href="#"
                  className="text-xs font-medium text-navy hover:underline"
                >
                  Read more →
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
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
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
