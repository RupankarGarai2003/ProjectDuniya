import { Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const TopBar = () => {
  const socials = [
    { href: siteConfig.whatsapp, bg: "bg-[#1F9E57]", icon: <FaWhatsapp className="w-4 h-4" />, label: "WhatsApp" },
    { href: siteConfig.instagram, bg: "bg-[#C13584]", icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
    { href: siteConfig.telegram, bg: "bg-[#1D8FBF]", icon: <Send className="w-4 h-4" />, label: "Telegram" },
    { href: siteConfig.facebook, bg: "bg-[#1877F2]", icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
    { href: `mailto:${siteConfig.email}`, bg: "bg-[#B42318]", icon: <Mail className="w-4 h-4" />, label: "Email" },
  ];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 opacity-95">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{siteConfig.email}</span>
            </a>
            <span className="hidden sm:inline-block h-4 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.address}</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <span className="px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 font-semibold tracking-wide shadow-sm">
              First-Time Users Get <span className="text-yellow-300">40% OFF</span> + Free Resume Checkup
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`p-2 rounded-full ${item.bg} transition-all duration-300 hover:scale-105`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
