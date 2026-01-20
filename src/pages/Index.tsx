import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Categories from "@/components/Categories";
import LatestDesign from "@/components/LatestDesign";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import QualitySection from "@/components/QualitySection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToggle from "@/components/ScrollToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        {/* <Categories /> */}
        <LatestDesign />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <FAQSection />
        <QualitySection />
        <BlogSection />
        <ClientsSection />
        <Team />
        <CTASection />
        <ScrollToggle />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
