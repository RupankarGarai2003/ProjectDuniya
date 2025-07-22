import React from "react";
import "../styles/Services.css";

export default function Services() {
  const services = [
    { id: "coding-development", icon: "⚛️", label: "Coding & Development" },
    { id: "website-design", icon: "🖥️", label: "Website Design & Development" },
    { id: "software-development", icon: "📶", label: "Software Development" },
    { id: "resume-writing", icon: "📝", label: "Academic Resume Writing" },
    { id: "data-analysis", icon: "📈", label: "Data Analysis & Visualization" },
    { id: "thesis-writing", icon: "👩‍💻", label: "Thesis Writing" },
    { id: "programming-help", icon: "🖥️", label: "Programming Help & Debugging" },
    { id: "presentations", icon: "🧑‍💻", label: "Presentations" },
    { id: "microsoft-excel", icon: "📊", label: "Microsoft Excel" },
    { id: "research-paper", icon: "🔎", label: "Research Paper" },
    { id: "video-editing", icon: "🎞️", label: "Video Editing" },
    { id: "research-assistance", icon: "📝", label: "Research Assistance" },
    { id: "essay-writing", icon: "📚", label: "Essay & Report Writing" },
    { id: "presentation-design", icon: "🎤", label: "Presentation Design" },
    { id: "problem-solving", icon: "🧩", label: "Problem Solving & Critical Thinking" },
    { id: "note-taking", icon: "📒", label: "Note Taking & Organizing" },
    { id: "project-management", icon: "🗂️", label: "Project Management Tools" },
    { id: "online-tutoring", icon: "👨‍🏫", label: "Online Tutoring Sessions" },
    { id: "document-formatting", icon: "📄", label: "Document Formatting & Proofreading" },
    { id: "plagiarism-check", icon: "🔍", label: "Plagiarism Checking" },
    { id: "academic-formatting", icon: "📑", label: "Academic Research Paper Formatting" },
    { id: "group-collaboration", icon: "🤝", label: "Group Project Collaboration Tools" },
    { id: "job-application", icon: "💼", label: "Job/Internship Application Assistance" },
    { id: "study-guide", icon: "📚", label: "Study Guide Creation" },
  ];

  return (
    <section id="services" className="services-section">
      <h3 className="section-title">Our Services</h3>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index} className="service-item" id={service.id}>
            <span className="service-icon">{service.icon}</span>
            <span>{service.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
