import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { categories, getCategoryBySlug } from "@/lib/data/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `/projects/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  return (
    <main>
      <PageHeader
        title={category.name}
        description={category.description}
        crumbs={[{ label: "Projects", href: "/projects" }, { label: category.name }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {category.items.map((item) => (
              <Link href={`/projects/${category.slug}/${item.slug}`} key={item.slug} className="group cursor-pointer">
                <div className="relative mb-4 aspect-square flex items-center justify-center bg-card rounded-2xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="w-[65%] h-[65%] object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-navy text-center">{item.name}</h3>
                <div className="flex justify-center items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-green-600 font-semibold">{item.count} Projects Completed</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
