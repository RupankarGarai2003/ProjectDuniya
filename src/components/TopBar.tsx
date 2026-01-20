import { Mail, MapPin, Facebook, Instagram, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 opacity-95">
            <a
              href="mailto:projectduniya.help@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">projectduniya.help@gmail.com</span>
            </a>

            <span className="hidden sm:inline-block h-4 w-px bg-white/30" />

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kolkata, India</span>
            </div>
          </div>

          {/* Center Offer */}
          <div className="hidden md:flex flex-1 justify-center">
            <span className="px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20
                             font-semibold tracking-wide shadow-sm">
              🎉 First-Time Users Get <span className="text-yellow-300">40% OFF</span> + Free Resume Checkup
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {[
              {
                href: "https://wa.me/918391808784",
                bg: "bg-[#1F9E57]",
                hover: "hover:shadow-[0_0_12px_rgba(31,158,87,0.7)]",
                icon: <FaWhatsapp className="w-4 h-4" />,
              },
              {
                href: "https://www.instagram.com/projectduniya.help",
                bg: "bg-[#C13584]",
                hover: "hover:shadow-[0_0_12px_rgba(193,53,132,0.7)]",
                icon: <Instagram className="w-4 h-4" />,
              },
              {
                href: "https://t.me/HiringAlertt",
                bg: "bg-[#1D8FBF]",
                hover: "hover:shadow-[0_0_12px_rgba(29,143,191,0.7)]",
                icon: <Send className="w-4 h-4" />,
              },
              {
                href: "https://www.facebook.com/profile.php?id=61580355323239",
                bg: "bg-[#1877F2]",
                hover: "hover:shadow-[0_0_12px_rgba(24,119,242,0.7)]",
                icon: <Facebook className="w-4 h-4" />,
              },
              {
                href: "mailto:projectduniya.help@gmail.com",
                bg: "bg-[#B42318]",
                hover: "hover:shadow-[0_0_12px_rgba(180,35,24,0.7)]",
                icon: <Mail className="w-4 h-4" />,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${item.bg} ${item.hover}
                            transition-all duration-300 hover:scale-105`}
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
