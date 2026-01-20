import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-10 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral via-secondary to-primary flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-navy">ProjectDuniya</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              ProjectDuniya is a trusted platform providing expert academic and technical project assistance with quality, confidentiality, and on-time delivery.
            </p>
              <div className="flex items-center gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918391808784"
                  className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/projectduniya.help?igsh=aGl6aDdtbzFmaHJs"
                  className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white hover:scale-110 transition"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/HiringAlertt"
                  className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-110 transition"
                >
                  <FaTelegramPlane className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61580355323239"
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>

                {/* Email */}
                <a
                  href="mailto:projectduniya.help@gmail.com"
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-navy mb-6">Useful Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#form" className="hover:text-primary transition-colors">Custom Project?</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Work With Us</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:-ml-4">
            <h4 className="font-bold text-navy mb-6">Contact ProjectDuniya</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-navy">8391808784</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Mail Us</p>
                  <p className="font-semibold text-navy">projectduniya.help@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold text-navy">Kolkata, West Bengal, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-navy mb-6">Our Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Data Analysis</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Coding Projects</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Presentation Design</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Resume Writing</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-4 mt-6 text-center text-muted-foreground text-sm">
          © 2025 ProjectDuniya. Built for students & professionals.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
