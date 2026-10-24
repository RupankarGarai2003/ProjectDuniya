// Single source of truth for site-wide constants.
// NOTE: the live site is served from the www host, so the canonical URL uses www.
// If you ever move the primary domain, change it here only.
export const siteConfig = {
  name: "ProjectDuniya",
  title: "ProjectDuniya | Final Year Project Ideas, Coding Help & Academic Guidance",
  description:
    "Final year project ideas, coding help, AI, web development, thesis and data analysis guidance for students worldwide - delivered online with clear explanations and viva preparation.",
  url: "https://www.projectduniya.com",
  ogImage: "/og-default.jpg", // 1200x630
  logo: "/logo-512.png",
  phone: "+918391808784",
  phoneDisplay: "8391808784",
  email: "projectduniya.help@gmail.com",
  whatsapp: "https://wa.me/918391808784",
  instagram: "https://www.instagram.com/projectduniya.help?igsh=aGl6aDdtbzFmaHJs",
  telegram: "https://t.me/HiringAlertt",
  facebook: "https://www.facebook.com/profile.php?id=61580355323239",
  address: "Kolkata, West Bengal, India",
  areaServed: "Worldwide",
  gaId: "G-5FWVS9WJXT",
  formEndpoint: "https://formspree.io/f/meoarbod",
  // Owner-editable business claims. Keep only what you can substantiate.
  claims: {
    projectsLabel: "1000+",
    experienceLabel: "4+ Years",
  },
  // Set active:false (or edit the text) when the offer ends - it controls the top bar.
  promo: {
    active: true,
    text: "First-time users: 40% off + free resume checkup",
  },
  keywords: [
    "final year project ideas",
    "fyp ideas for computer science",
    "final year project help online",
    "coding help for students",
    "capstone project help",
    "python projects for students",
    "web development projects",
    "AI and machine learning projects",
    "thesis writing help",
    "data analysis projects",
    "viva preparation",
  ],
};

export type SiteConfig = typeof siteConfig;
