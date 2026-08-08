import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="badge-pill badge-coral mb-6 inline-block">OUR SERVICES</span>
          <h2 className="section-title text-2xl md:text-3xl">
            Trending Project Requests (Students&apos; Choice)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="bg-card rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-6 card-hover border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-primary transition-colors group"
                >
                  Read More
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-secondary-foreground" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="text-primary font-semibold hover:underline transition">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
