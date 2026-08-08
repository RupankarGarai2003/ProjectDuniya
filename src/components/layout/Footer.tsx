import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "@/lib/site";
import { categories } from "@/lib/data/categories";
import { countries } from "@/lib/data/countries";

const Footer = () => {
  return (
    <footer className="bg-background pt-10 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral via-secondary to-primary flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-navy">{siteConfig.name}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              {siteConfig.name} is a trusted platform providing expert academic and technical project assistance with quality, confidentiality, and on-time delivery.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white hover:scale-110 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-110 transition">
                <FaTelegramPlane className="w-5 h-5" />
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Useful Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Custom Project?</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/projects/${c.slug}`} className="hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Countries We Serve</h4>
            <ul className="space-y-3 text-muted-foreground">
              {countries.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="hover:text-primary transition-colors">
                    Project Help in {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="hover:text-primary transition-colors font-semibold text-primary">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:-ml-4">
            <h4 className="font-bold text-navy mb-6">Contact {siteConfig.name}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-navy">{siteConfig.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Mail Us</p>
                  <p className="font-semibold text-navy break-all">{siteConfig.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold text-navy">{siteConfig.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-4 mt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. Built for students & professionals.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
