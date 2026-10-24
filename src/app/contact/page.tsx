import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Get in touch with ProjectDuniya for final year project help, coding support, and academic guidance. Call, WhatsApp, or fill our enquiry form for a fast response.",
  path: "/contact",
});

const contactCards = [
  { icon: Phone, label: "Call Us", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
  { icon: Mail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Location", value: siteConfig.address, href: undefined },
  { icon: Clock, label: "Support", value: "WhatsApp, call & email", href: undefined },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact ProjectDuniya"
        description="Have a project in mind? Reach out and our team will get back to you as soon as possible."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-navy break-all">{c.value}</p>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block hover:opacity-80 transition">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}

              <div className="flex items-center gap-4 pt-2">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white hover:scale-110 transition">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center text-white hover:scale-110 transition">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white hover:scale-110 transition">
                  <FaTelegramPlane className="w-5 h-5" />
                </a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition">
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
