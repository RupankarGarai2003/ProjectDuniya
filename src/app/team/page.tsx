import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { teamMembers } from "@/lib/data/team";

export const metadata: Metadata = pageMeta({
  title: "Our Team",
  description:
    "Meet the ProjectDuniya team - full-stack developers, AI/ML specialists, data analysts, and academic writing experts behind your project.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        title="Meet the ProjectDuniya Team"
        description="A small, focused team of developers, analysts, and writers who guide every project from start to submission."
        crumbs={[{ label: "Team" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-6 text-center border border-border card-hover">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/10">
                  <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <h2 className="font-bold text-navy mb-2">{member.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{member.desc}</p>
                <div className="flex justify-center gap-3">
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
        </div>
      </section>
    </main>
  );
}
