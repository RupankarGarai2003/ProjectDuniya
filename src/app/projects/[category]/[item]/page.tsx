import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { categories, getCategoryBySlug, getSubProjectBySlug } from "@/lib/data/categories";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return categories.flatMap((c) => c.items.map((i) => ({ category: c.slug, item: i.slug })));
}

export function generateMetadata({ params }: { params: { category: string; item: string } }): Metadata {
  const item = getSubProjectBySlug(params.item);
  if (!item) return {};
  return {
    title: `${item.name} Project Help`,
    description: `${item.description} Get expert ${item.name.toLowerCase()} project help from ProjectDuniya - ${item.count} projects completed.`,
    alternates: { canonical: `/projects/${params.category}/${item.slug}` },
  };
}

export default function SubProjectPage({ params }: { params: { category: string; item: string } }) {
  const category = getCategoryBySlug(params.category);
  const item = getSubProjectBySlug(params.item);
  if (!category || !item || item.categorySlug !== category.slug) notFound();

  const otherItems = category.items.filter((i) => i.slug !== item.slug);

  return (
    <main>
      <PageHeader
        title={`${item.name} Project Help`}
        description={item.description}
        crumbs={[{ label: "Projects", href: "/projects" }, { label: category.name, href: `/projects/${category.slug}` }, { label: item.name }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.name} className="w-40 h-40 object-contain flex-shrink-0" />
            <div>
              <span className="inline-flex items-center gap-1 text-sm text-green-600 font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500" /> {item.count} Projects Completed
              </span>
              <h2 className="text-2xl font-bold text-navy mb-3">{item.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {item.description} Our team scopes every {item.name.toLowerCase()} request individually so the final
                deliverable matches your course requirements, timeline, and skill level - with a full explanation
                included so you can present it confidently.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-14">
            <h3 className="text-xl font-bold mb-3">Need help with a {item.name.toLowerCase()} project?</h3>
            <p className="text-sm text-white/90 mb-6">Get a free, no-obligation quote tailored to your requirements.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>

          <h3 className="text-xl font-bold text-navy mb-6">More in {category.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {otherItems.map((i) => (
              <Link key={i.slug} href={`/projects/${category.slug}/${i.slug}`} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary transition">
                <span className="text-sm font-medium text-navy">{i.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
