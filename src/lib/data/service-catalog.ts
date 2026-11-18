import type { BlogCategoryKey } from "@/lib/blog-hub";

/**
 * "Our Services (Add-On)" - the full 46-service ProjectDuniya catalog, grouped for navigation.
 * `no` keeps the original numbering from the owner's list.
 * `serviceSlug` links to the detailed service page that covers it (internal link for SEO).
 * `blog` links to the most relevant category on blogs.projectduniya.com.
 */
export interface CatalogItem {
  no: number;
  title: string;
  summary: string;
  serviceSlug: string;
  blog?: BlogCategoryKey;
}

export interface CatalogGroup {
  id: string;
  title: string;
  intro: string;
  items: CatalogItem[];
}

export const catalogTagline = "ProjectDuniya – Your Technology, Software Development & Testing Partner.";
export const catalogPricingNote = "Pricing depends on the project requirements. Share your brief for a custom quote.";

export const serviceCatalog: CatalogGroup[] = [
  {
    id: "academic-projects",
    title: "Academic & Final-Year Projects",
    intro: "Planned, built and documented for your syllabus, with viva-ready explanations.",
    items: [
      { no: 1, title: "B.Tech, M.Tech, MCA, BCA & Diploma Projects", summary: "Course-aligned projects for every degree level, with source code and report.", serviceSlug: "final-year-academic-projects", blog: "final-year-projects" },
      { no: 2, title: "Final-Year Projects", summary: "End-to-end final-year project planning, development and defence preparation.", serviceSlug: "final-year-academic-projects", blog: "final-year-projects" },
      { no: 3, title: "Mini Projects & Internship Projects", summary: "Right-sized mini and internship projects delivered on short deadlines.", serviceSlug: "internship-mini-projects", blog: "project-ideas" },
    ],
  },
  {
    id: "web-software-development",
    title: "Web, App & Software Development",
    intro: "Production-quality builds across modern stacks, from portfolios to full management systems.",
    items: [
      { no: 4, title: "Website Design & Development", summary: "Responsive, fast, SEO-friendly websites for students and businesses.", serviceSlug: "website-development-projects", blog: "website-design-development" },
      { no: 5, title: "E-commerce Website Development", summary: "Online stores with catalogue, cart, payments and an admin panel.", serviceSlug: "website-development-projects", blog: "website-design-development" },
      { no: 6, title: "Custom Software Development", summary: "Bespoke software built around your exact workflow and requirements.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 7, title: "Web Application Development", summary: "Full-stack web apps with authentication, dashboards and databases.", serviceSlug: "website-development-projects", blog: "website-design-development" },
      { no: 8, title: "Android Application Development", summary: "Native and cross-platform Android apps with clean UI and backend integration.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 17, title: "React.js & Node.js Development", summary: "Modern JavaScript full-stack builds with React front ends and Node back ends.", serviceSlug: "website-development-projects", blog: "website-design-development" },
      { no: 18, title: "PHP & Laravel Development", summary: "PHP and Laravel applications with MySQL, ideal for syllabus-driven projects.", serviceSlug: "website-development-projects", blog: "website-design-development" },
      { no: 19, title: "API Development & Integration", summary: "REST APIs and third-party integrations, documented and tested.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 41, title: "Portfolio & Resume Website Development", summary: "Personal portfolio and resume sites that present your work professionally.", serviceSlug: "website-development-projects", blog: "academic-resume-writing" },
      { no: 42, title: "Business Website Development", summary: "Clear, conversion-focused websites for small businesses and startups.", serviceSlug: "website-development-projects", blog: "website-design-development" },
      { no: 43, title: "Management System Development", summary: "Library, hospital, inventory, hostel and similar management systems.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 45, title: "Startup MVP Development", summary: "Lean MVPs to validate your startup idea quickly with real users.", serviceSlug: "software-development-projects", blog: "software-development" },
    ],
  },
  {
    id: "ai-data-analytics",
    title: "AI, Data & Analytics",
    intro: "Machine learning, data science and business-intelligence work you can explain end to end.",
    items: [
      { no: 9, title: "AI & Machine Learning Projects", summary: "Classification, prediction, NLP and recommendation projects with honest metrics.", serviceSlug: "data-analysis-ai-projects", blog: "ai-machine-learning" },
      { no: 10, title: "Deep Learning Projects", summary: "CNN, RNN and transformer-based projects with training and deployment.", serviceSlug: "data-analysis-ai-projects", blog: "ai-machine-learning" },
      { no: 11, title: "Python Projects", summary: "Python projects from beginner scripts to advanced applications.", serviceSlug: "data-analysis-ai-projects", blog: "programming" },
      { no: 12, title: "Data Science & Data Analytics", summary: "Data cleaning, analysis, visualisation and insight reporting.", serviceSlug: "data-analysis-ai-projects", blog: "data-analysis-visualization" },
      { no: 13, title: "Power BI Dashboard Development", summary: "Interactive Power BI dashboards with DAX measures and clear storytelling.", serviceSlug: "data-analysis-ai-projects", blog: "data-analysis-visualization" },
      { no: 14, title: "Excel Automation & Data Analysis", summary: "Excel models, pivots, formulas and macros that save hours of manual work.", serviceSlug: "data-analysis-ai-projects", blog: "microsoft-excel" },
      { no: 15, title: "Database Design & Management", summary: "Normalised schemas, SQL queries and database administration support.", serviceSlug: "software-development-projects", blog: "software-development" },
    ],
  },
  {
    id: "programming-debugging",
    title: "Programming & Debugging",
    intro: "Get unstuck fast and actually understand the fix.",
    items: [
      { no: 16, title: "Java, Python, C & C++ Programming", summary: "Programming help in core languages, from assignments to larger projects.", serviceSlug: "programming-debugging-projects", blog: "programming" },
      { no: 29, title: "Coding & Debugging Support", summary: "Find and fix bugs with a clear explanation of the root cause.", serviceSlug: "programming-debugging-projects", blog: "programming-help-debugging" },
    ],
  },
  {
    id: "research-documentation",
    title: "Research, Reports & Documentation",
    intro: "Structured, correctly formatted academic and technical documents.",
    items: [
      { no: 20, title: "Research Paper Assistance", summary: "Guidance from topic and literature review to a submission-ready paper.", serviceSlug: "research-paper-thesis-projects", blog: "research-paper" },
      { no: 21, title: "Thesis & Dissertation Support", summary: "Chapter structure, methodology and review support for theses and dissertations.", serviceSlug: "research-paper-thesis-projects", blog: "thesis-writing" },
      { no: 22, title: "IEEE Research Paper Formatting", summary: "Accurate IEEE templates, citations and reference formatting.", serviceSlug: "research-paper-thesis-projects", blog: "academic-research-paper-formatting" },
      { no: 23, title: "Project Synopsis Preparation", summary: "Concise, approval-ready synopsis with objectives, scope and methodology.", serviceSlug: "research-paper-thesis-projects", blog: "final-year-projects" },
      { no: 24, title: "Project Report & Documentation", summary: "Complete project reports and technical documentation in your university format.", serviceSlug: "research-paper-thesis-projects", blog: "essay-report-writing" },
      { no: 25, title: "SRS Documentation", summary: "Software Requirements Specification documents following standard structure.", serviceSlug: "research-paper-thesis-projects", blog: "essay-report-writing" },
      { no: 26, title: "UML Diagrams & Flowcharts", summary: "Use case, class, sequence, ER diagrams and flowcharts drawn cleanly.", serviceSlug: "research-paper-thesis-projects", blog: "essay-report-writing" },
      { no: 27, title: "PPT & Presentation Preparation", summary: "Clear, well-designed slides for project reviews and final presentations.", serviceSlug: "presentation-viva-projects", blog: "presentation-design" },
      { no: 28, title: "Project Viva Preparation", summary: "Mock viva, likely questions and confident explanations of your own project.", serviceSlug: "presentation-viva-projects", blog: "study-guide-creation" },
    ],
  },
  {
    id: "testing-qa",
    title: "Software Testing & Quality Assurance",
    intro: "Manual and automated QA so your software works before anyone else sees it.",
    items: [
      { no: 30, title: "Software Testing & Quality Assurance (QA)", summary: "Complete QA coverage for web, mobile and desktop software.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 31, title: "Manual Testing", summary: "Exploratory and scripted manual testing with detailed findings.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 32, title: "Automation Testing", summary: "Selenium, Playwright and Cypress automation suites for repeatable checks.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 33, title: "Functional & Non-Functional Testing", summary: "Verify features and quality attributes such as usability and reliability.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 34, title: "API Testing", summary: "Postman and automated API tests for status, schema and error handling.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 35, title: "Performance & Load Testing", summary: "Measure speed and stability under load with JMeter or k6 style tests.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 36, title: "Security Testing", summary: "Check common vulnerabilities such as injection, XSS and weak authentication.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 37, title: "Regression & Integration Testing", summary: "Make sure new changes do not break what already works.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 38, title: "Bug Tracking & Reporting", summary: "Clear, reproducible bug reports tracked to closure.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 39, title: "User Acceptance Testing (UAT)", summary: "Structured UAT plans and sign-off with real user scenarios.", serviceSlug: "software-development-projects", blog: "software-development" },
      { no: 40, title: "Test Case & Test Plan Preparation", summary: "Professional test plans and test cases mapped to requirements.", serviceSlug: "software-development-projects", blog: "software-development" },
    ],
  },
  {
    id: "automation-consulting",
    title: "Automation & Consultation",
    intro: "Remove repetitive work and get expert direction before you build.",
    items: [
      { no: 44, title: "Automation Solutions", summary: "Scripts and workflows that automate repetitive technical and business tasks.", serviceSlug: "software-development-projects", blog: "coding-development" },
      { no: 46, title: "Technical Consultation & Project Guidance", summary: "One-to-one guidance on stack, architecture, scope and planning.", serviceSlug: "final-year-academic-projects", blog: "project-ideas" },
    ],
  },
];

export const catalogItemCount = serviceCatalog.reduce((n, g) => n + g.items.length, 0);

export const catalogSlug = (item: CatalogItem) =>
  item.title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
