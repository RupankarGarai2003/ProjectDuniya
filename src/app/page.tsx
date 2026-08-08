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
