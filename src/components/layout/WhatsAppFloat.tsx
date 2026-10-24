import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const WhatsAppFloat = () => {
  const href = `${siteConfig.whatsapp}?text=${encodeURIComponent("Hi ProjectDuniya, I'd like help with my project.")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#128C7E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
    >
      <FaWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppFloat;
