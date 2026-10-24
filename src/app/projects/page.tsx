import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { categories } from "@/lib/data/categories";

export const metadata: Metadata = pageMeta({
  title: "Project Categories",
  description:
    "Browse ProjectDuniya's project categories - Development & Coding, Data/AI & Analytics, Research & Writing, and Academic & Career Support.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Explore Our Project Categories"
        description="Discover high-impact academic and professional project solutions, trusted by students across disciplines."
        crumbs={[{ label: "Projects" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Link
                href={`/projects/${category.slug}`}
                key={category.slug}
                className="group relative rounded-3xl bg-card p-8 border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <h2 className="text-xl font-bold text-navy mb-2">{category.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <p className="text-xs text-primary font-semibold mb-6">{category.items.length} services in this category</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  Explore Category <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
