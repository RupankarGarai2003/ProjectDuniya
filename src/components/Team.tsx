import { useState } from "react";
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Rupankar Garai",
    image: "src/assets/Rupankar.jpg",
    desc:
      "4+ Years of Freelancing Experience | Full-Stack Developer | Client Communication & End-to-End Project Delivery | Empowering Academic & Technical Projects with Quality and Clarity",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sayan Maity",
    image: "src/assets/sayan.jpg",
    desc:
      "AI & Web Development Specialist | Strong Client Coordination | Requirement Analysis, Regular Updates & Reliable Project Execution | Data Analytics & ML Intern Experience",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Tridib Kamal",
    image: "/src/assets/tridib.jpg",
    desc:
      "Data Analytics & Full-Stack Developer | SQL • ETL • Power BI | Client-Focused Reporting, Clear Insights & On-Time Project Delivery",
    linkedin: "#",
    github: "#",
  },
    {
    name: "Mrinmay Karmakr",
    image: "src/assets/Mrinmay.jpg",
    desc:
      "Legal Expertise Contract Drafting & Review, Compliance Management, Intellectual Property Rights (IPR), and Labour Law",
    linkedin: "#",
  },
  {
    name: "Eman Roy",
    image: "/src/assets/Eman.png",
    desc:
      "Web Developer | Photography & Creative Editing | Team Collaboration",
    linkedin: "#",
  },
  {
    name: "Arnab Halder",
    image: "/src/assets/arnab.png",
    desc:
      "Web Developer | React, Java & Modern Web Technologies",
    linkedin: "#",
  },
];

const Team = () => {
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const visibleMembers = teamMembers.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-black">
            Our Team (20+)
          </h2>
          <p className="text-muted-foreground mt-2">
            Your Project, Our Team: Skilled Minds, Quality You Can Trust
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[#E9F7F8] rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-all"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-5">
                <div className="w-28 h-28 rounded-full border-4 border-red-400 overflow-hidden bg-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-black mb-3">
                {member.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                {member.desc}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-[#0A0A23] flex items-center justify-center hover:scale-110 transition"
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-[#0A0A23] flex items-center justify-center hover:scale-110 transition"
                  >
                    <Github className="w-5 h-5 text-cyan-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-6 mt-14">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold disabled:opacity-40 hover:bg-red-600 transition"
          >
            ← Previous
          </button>

          <button
            disabled={page === totalPages - 1}
            onClick={() => setPage(page + 1)}
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold disabled:opacity-40 hover:bg-red-600 transition"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Team;
