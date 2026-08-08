import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 py-16">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="container relative mx-auto px-4 text-center">
        <nav className="flex items-center justify-center gap-1 text-xs text-white/70 mb-4 flex-wrap">
          <Link href="/" className="hover:text-white transition">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white transition">{c.label}</Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-3">{title}</h1>
        {description && <p className="text-white/85 max-w-2xl mx-auto text-sm md:text-base">{description}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
