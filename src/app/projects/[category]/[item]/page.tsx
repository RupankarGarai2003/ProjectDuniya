import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { categories, getCategoryBySlug, getSubProjectBySlug, subProjectServiceMap } from "@/lib/data/categories";
import { getServiceBySlug } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

type Params = Promise<{ category: string; item: string }>;

export function generateStaticParams() {
  return categories.flatMap((c) => c.items.map((i) => ({ category: c.slug, item: i.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category: categorySlug, item: itemSlug } = await params;
  const item = getSubProjectBySlug(itemSlug);
  if (!item || item.categorySlug !== categorySlug) return {};
  return pageMeta({
    title: `${item.name} Help for Students`,
    description: `${item.description} Get ${item.name.toLowerCase()} help from ProjectDuniya: a free quote with scope and timeline confirmed before work starts.`,
    path: `/projects/${categorySlug}/${item.slug}`,
  });
}

export default async function SubProjectPage({ params }: { params: Params }) {
  const { category: categorySlug, item: itemSlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const item = getSubProjectBySlug(itemSlug);
  if (!category || !item || item.categorySlug !== category.slug) notFound();

  const otherItems = category.items.filter((i) => i.slug !== item.slug);
  const service = getServiceBySlug(subProjectServiceMap[item.slug] ?? "");

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
            <Image src={item.image} alt="" width={160} height={160} className="w-40 h-40 object-contain flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">{item.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {item.description} Our team scopes every {item.name.toLowerCase()} request individually so the final
                deliverable matches your course requirements, timeline, and skill level - with a full explanation
                included so you can present it confidently.
              </p>
              {service && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Related service:{" "}
                  <Link href={`/services/${service.slug}`} className="text-primary font-semibold underline underline-offset-2">
                    {service.title}
                  </Link>
                  . Need ideas first? Read our{" "}
                  <Link href="/blog/top-final-year-project-ideas-computer-science-2026" className="text-primary font-semibold underline underline-offset-2">
                    final year project ideas guide
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-14">
            <h2 className="text-xl font-bold mb-3">Need help with a {item.name.toLowerCase()} project?</h2>
            <p className="text-sm text-white/90 mb-6">Get a free, no-obligation quote tailored to your requirements.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-white text-indigo-700 hover:bg-white/90">
                <Link href="/contact" data-track="project_quote_click">Get Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>

          <h2 className="text-xl font-bold text-navy mb-6">More in {category.name}</h2>
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
