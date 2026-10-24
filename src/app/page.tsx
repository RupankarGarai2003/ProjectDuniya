import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import QualitySection from "@/components/home/QualitySection";
import BlogSection from "@/components/home/BlogSection";
import ClientsSection from "@/components/home/ClientsSection";
import Team from "@/components/home/Team";
import CTASection from "@/components/home/CTASection";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({ title: siteConfig.title, description: siteConfig.description, path: "/" }),
  title: { absolute: siteConfig.title },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <QualitySection />
      <BlogSection />
      <Team />
      <CTASection />
    </main>
  );
}
