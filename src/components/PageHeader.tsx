import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";

interface Crumb {
  label: string;
  /** Link target. Omit on the current (last) page. */
  href?: string;
}

const PageHeader = ({
  title,
  description,
  crumbs,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
}) => {
  const jsonLd = breadcrumbJsonLd(crumbs.map((c) => ({ name: c.label, path: c.href })));
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="container relative mx-auto px-4 text-center">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center justify-center gap-1 text-xs text-white/80 flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white transition">{c.label}</Link>
                ) : (
                  <span className="text-white" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-3">{title}</h1>
        {description && <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base">{description}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
