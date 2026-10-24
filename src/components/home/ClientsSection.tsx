import { siteConfig } from "@/lib/site";
import {
  GraduationCap,
  Code2,
  Briefcase,
  Rocket,
  Users,
} from "lucide-react";

const clients = [
  {
    title: "Engineering Students",
    icon: GraduationCap,
    desc: "B.Tech, B.Eng, M.Tech & Diploma Projects",
  },
  {
    title: "CS / IT Students",
    icon: Code2,
    desc: "Web, Software & Coding Projects",
  },
  {
    title: "Final Year Projects",
    icon: Users,
    desc: "End-to-end project guidance",
  },
  {
    title: "Freelancers",
    icon: Briefcase,
    desc: "Technical & client support",
  },
  {
    title: "Startups",
    icon: Rocket,
    desc: "MVPs, websites & automation",
  },
];

const ClientsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy">
            Who We Help
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Academic and technical project guidance for students worldwide, plus freelancers and startups who need dependable technical support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {clients.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  group relative
                  rounded-2xl
                  bg-background
                  p-6
                  text-center
                  shadow-sm
                  border border-border
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                "
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-semibold text-navy mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Facts - edit the values in src/lib/site.ts (claims) and keep only what you can substantiate */}
        <ul className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <li>
            <p className="text-3xl font-extrabold text-primary">{siteConfig.claims.projectsLabel}</p>
            <p className="text-sm text-muted-foreground">Projects Delivered</p>
          </li>
          <li>
            <p className="text-3xl font-extrabold text-primary">{siteConfig.claims.experienceLabel}</p>
            <p className="text-sm text-muted-foreground">Experience</p>
          </li>
          <li>
            <p className="text-3xl font-extrabold text-primary">WhatsApp</p>
            <p className="text-sm text-muted-foreground">Call &amp; Email Support</p>
          </li>
          <li>
            <p className="text-3xl font-extrabold text-primary">Confidential</p>
            <p className="text-sm text-muted-foreground">Handling of Your Details</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ClientsSection;
