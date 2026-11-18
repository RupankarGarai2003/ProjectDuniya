import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { serviceCatalog, catalogItemCount } from "@/lib/data/service-catalog";
import { ideaCount } from "@/lib/data/project-ideas";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="badge-pill badge-coral mb-6 inline-block">OUR SERVICES</span>
          <h2 className="section-title text-2xl md:text-3xl">
            Popular Project Help Services
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
                <Image src={service.image} alt="" width={128} height={128} className="w-full h-full object-contain" />
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

        <div className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-lg font-bold text-navy text-center">
            Everything we offer - {catalogItemCount} services in {serviceCatalog.length} categories
          </h3>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {serviceCatalog.map((g) => (
              <li key={g.id}>
                <Link
                  href={`/services#${g.id}`}
                  className="inline-block rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Not sure what to build?{" "}
            <Link href="/project-ideas" className="font-semibold text-primary hover:underline">
              Browse {ideaCount}+ project ideas →
            </Link>
          </p>
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
