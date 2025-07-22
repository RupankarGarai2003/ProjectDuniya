import React, { useRef } from "react";
import "../styles/Team.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
  { name: "Rupankar Garai", role: "4 Years of Freelancing Experience | Full-Stack Developer | Empowering Projects with Code & Creativity | Tech + Academic Partner", imgSrc: "profile/Rupankar.jpg", linkedin: "#", github: "https://github.com/RupankarGarai2003" },
  { name: "Sayan Maity", role: "Diverse Skills in AI and Web Development | Intern at Edunet Foundation | Intern at Webstack Academy - WSA| Advanced Data Analytics & ML Intern", imgSrc: "/profile/Sayan.jpg", linkedin: "#", github: "#" },
  { name: "Tridib Kamal", role: "DATA ANALYTICS || SQL || ETL || POWER BI | Full-Stack Developer", imgSrc: "/profile/tridib.jpg", linkedin: "#", github: "#" },
  { name: "Eman Roy", role: "Web Developer | Photography & Creative Editing | Time & Deadline Management | Communication & Team Collaboration", imgSrc: "/profile/Eman.png", linkedin: "#" },
  { name: "Arnab Halder", role: "Web  Developer | Crafting Scalable Web Solutions with React, Java & Modern Web Tech", imgSrc: "/profile/Arnab.png", linkedin: "#" },
  
];

export default function Team() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const cardWidth = 300 + 32; // card + gap (2rem)
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "next" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="team-section">
      <h2>Our Team (20+)</h2>
      <p>Your Project, Our Team: Skilled Minds, Quality You Can Trust</p>

      <div className="team-carousel" ref={carouselRef}>
        {teamMembers.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="image-container">
              <img src={member.imgSrc} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <div className="social-icons">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FaLinkedin />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-nav">
        <button onClick={() => scroll("prev")}>&larr; Previous</button>
        <button onClick={() => scroll("next")}>Next &rarr;</button>
      </div>
    </section>
  );
}