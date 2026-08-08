import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

const CTASection = () => {
  return (
    <section id="form" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white max-w-xl animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug mb-5">
              Need a{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Custom</span>{" "}
              Project?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-4 max-w-md">
              Share your project requirements and get expert guidance tailored to your academic or technical needs.
            </p>
            <p className="text-sm text-emerald-200 font-medium mb-6">
              ✔ 1000+ Projects Completed • ✔ 100% Confidential • ✔ Expert Mentorship
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur rounded-full px-8 py-5 font-semibold transition-all hover:scale-105"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </a>
            </Button>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
