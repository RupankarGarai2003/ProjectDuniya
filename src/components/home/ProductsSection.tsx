"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data/categories";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].slug);
  const current = categories.find((c) => c.slug === activeCategory)!;

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge-pill badge-coral mb-6 inline-block">ALL CATEGORIES</span>
          <h2 className="section-title mb-8">Explore All Our Services</h2>

          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Service categories">
            {categories.map((category) => (
              <Button
                key={category.slug}
                variant={activeCategory === category.slug ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category.slug ? "bg-coral hover:bg-coral/90" : "border-border text-foreground hover:bg-muted"
                }`}
                aria-pressed={activeCategory === category.slug}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {current.items.map((product, index) => (
            <Link
              href={`/projects/${current.slug}/${product.slug}`}
              key={product.slug}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative mb-4 aspect-square flex items-center justify-center">
                <Image
                  src={product.image}
                  alt=""
                  width={240}
                  height={240}
                  className="w-[75%] h-[75%] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-navy text-center">{product.name}</h3>
              <p className="text-sm text-muted-foreground text-center mt-1">Get a quote →</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects" className="text-primary font-semibold hover:underline transition">
            Browse All Project Categories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
