import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { serviceCatalog, catalogItemCount, catalogPricingNote, catalogTagline } from "@/lib/data/service-catalog";
import { blogCategoryLink } from "@/lib/blog-hub";

/** Full structured catalog of all ProjectDuniya services, grouped, with anchor navigation. */
export default function ServiceCatalog() {
  return (
    <section id="all-services" aria-labelledby="catalog-title" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <span className="badge-pill badge-coral mb-6 inline-block">COMPLETE SERVICE LIST</span>
          <h2 id="catalog-title" className="section-title text-2xl md:text-3xl">
            All {catalogItemCount} ProjectDuniya Services
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">{catalogTagline}</p>
        </div>

        <nav aria-label="Service categories" className="mb-12 flex flex-wrap justify-center gap-2">
          {serviceCatalog.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
            >
              {g.title} <span className="opacity-60">({g.items.length})</span>
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {serviceCatalog.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <h3 className="text-xl font-bold text-navy">{group.title}</h3>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">{group.intro}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <li key={item.no} className="flex flex-col rounded-xl border border-border bg-card p-5 transition hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                        {item.no}
                      </span>
                      <h4 className="text-sm font-bold leading-snug text-navy">{item.title}</h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs font-semibold">
                      <Link href={`/services/${item.serviceSlug}`} className="text-primary hover:underline" data-track="catalog_service_click">
                        Details →
                      </Link>
                      {item.blog && (
                        <a
                          href={blogCategoryLink(item.blog, "service_catalog")}
                          className="inline-flex items-center gap-0.5 text-indigo-600 hover:underline"
                          data-track="catalog_blog_click"
                        >
                          Read on blog <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-center text-white">
          <p className="flex items-center gap-2 text-sm text-white/95">
            <Check className="h-4 w-4" aria-hidden="true" /> {catalogPricingNote}
          </p>
          <Link href="/contact" data-track="catalog_quote_click" className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-white/90">
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
