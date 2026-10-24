import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { pageMeta } from "@/lib/seo";

type Params = Promise<{ category: string }>;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return pageMeta({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/projects/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
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
                  <Image src={item.image} alt="" width={200} height={200} className="w-[65%] h-[65%] object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-navy text-center">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
