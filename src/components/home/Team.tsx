"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/lib/data/team";

const Team = () => {
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const visibleMembers = teamMembers.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-pill badge-secondary mb-6 inline-block">OUR TEAM</span>
          <h2 className="section-title text-2xl md:text-3xl">Meet the People Behind ProjectDuniya</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMembers.map((member) => (
            <div key={member.name} className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/10">
                <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-navy mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.desc}</p>
              <div className="flex justify-center gap-3 min-h-4">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label={`${member.name} on LinkedIn`}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" aria-label={`${member.name} on GitHub`}>
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
              aria-label="Previous team members"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div key={i} aria-hidden="true" className={`w-8 h-2 rounded-full ${i === page ? "bg-primary" : "bg-navy/30"}`} />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
              aria-label="Next team members"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/team" className="text-primary font-semibold hover:underline">
            Meet the Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
