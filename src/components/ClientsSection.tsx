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
    desc: "B.Tech, M.Tech & Diploma Projects",
  },
  {
    title: "MCA / BCA Students",
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
          <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
            Trusted by Students & Professionals
          </h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Empowering academic and technical success across India with expert
            guidance and real-world project experience.
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

                <h4 className="font-semibold text-navy mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-primary">1000+</p>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">24/7</p>
            <p className="text-sm text-muted-foreground">Expert Support</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Confidential</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">4+ Years</p>
            <p className="text-sm text-muted-foreground">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
