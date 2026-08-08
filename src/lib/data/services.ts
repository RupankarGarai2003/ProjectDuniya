export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  highlights: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "final-year-academic-projects",
    title: "Final Year Academic Projects",
    shortDescription:
      "Complete final year project support for diploma, undergraduate, and postgraduate students with proper documentation and guidance.",
    description:
      "Your final year project decides a big part of your overall academic score, and we know how much pressure that brings. ProjectDuniya works with diploma, B.Tech, BCA, MCA, and M.Tech students to plan, build, and document a final year project that is technically sound and easy to defend in your viva. We start by understanding your department's guidelines, your comfort level with the tech stack, and your deadline, then build a project plan around it instead of handing you a generic template. Every project includes working source code, a structured report, and a walkthrough session so you understand exactly how your project works before you submit it.",
    image: "/images/Final-Year.svg",
    category: "Development & Coding",
    metaTitle: "Final Year Project Help for B.Tech, BCA, MCA & Diploma Students",
    metaDescription:
      "Get complete final year project guidance with source code, documentation, and viva preparation. Trusted by 1000+ engineering and diploma students worldwide.",
    highlights: [
      "Covers B.Tech, BCA, MCA, M.Tech, and diploma syllabi",
      "Full source code with in-line explanation of logic",
      "IEEE-format project report and synopsis",
      "PPT and viva question preparation included",
      "Unlimited clarification calls until submission",
    ],
    process: [
      { title: "Share your requirement", description: "Send your topic, department guidelines, and deadline over WhatsApp, call, or our enquiry form." },
      { title: "Get a project plan", description: "We confirm the tech stack, modules, and timeline before any work begins so there are no surprises later." },
      { title: "Development & check-ins", description: "You get progress updates at each milestone, not just a final file at the deadline." },
      { title: "Documentation & viva prep", description: "We prepare your report, PPT, and likely viva questions so you can present with confidence." },
    ],
    faqs: [
      {
        question: "Will I understand the project well enough to answer viva questions?",
        answer:
          "Yes. Every final year project includes a dedicated explanation session covering the logic, architecture, and commonly asked viva questions for your specific topic.",
      },
      {
        question: "Can I request changes after the first draft?",
        answer:
          "Absolutely. We build in revision rounds so the final submission matches your guide's feedback and department format.",
      },
      {
        question: "Do you support MAKAUT, AKTU, VTU, and other university formats?",
        answer:
          "Yes. We regularly work with MAKAUT, AKTU, VTU, and Anna University formatting guidelines, as well as IEEE, APA, and MLA styles used by universities in the US, UK, Canada, and Australia, so your report matches whatever format your institution requires.",
      },
    ],
    keywords: ["final year project help", "B.Tech project", "MCA project", "diploma project", "capstone project help online", "senior year project help"],
  },
  {
    slug: "website-development-projects",
    title: "Website Development Projects",
    shortDescription:
      "Student-requested website projects using modern technologies, responsive design, and real-world use cases.",
    description:
      "Web development projects are one of the most requested categories on ProjectDuniya because they combine visible, demo-friendly output with strong learning value. We build responsive, production-quality websites and web apps using stacks like React, Next.js, Node.js, and MongoDB, or simpler HTML/CSS/JavaScript builds for school and early-college submissions. Whether you need a portfolio site, an e-commerce demo, a booking system, or a full-stack dashboard, we match the complexity to your syllabus level and explain every component so it holds up under questioning.",
    image: "/images/Website-Development.svg",
    category: "Development & Coding",
    metaTitle: "Website Development Project Help - React, Next.js & MERN Stack",
    metaDescription:
      "Custom website development projects for students using React, Next.js, Node.js and MongoDB. Responsive, well-documented, and viva-ready.",
    highlights: [
      "Frontend frameworks: React, Next.js, or plain HTML/CSS/JS",
      "Backend & database integration (Node.js, Express, MongoDB, MySQL)",
      "Fully responsive, mobile-first design",
      "Deployment guidance included (Vercel, Netlify, or hosting of choice)",
      "Clean, commented codebase you can actually read",
    ],
    process: [
      { title: "Define scope", description: "We list out pages, features, and login/admin requirements based on your assignment brief." },
      { title: "Design & build", description: "UI is built first for approval, then wired up to backend logic and the database." },
      { title: "Testing", description: "We test across devices and browsers to avoid last-minute bugs during your demo." },
      { title: "Handover", description: "You receive the full codebase, a setup guide, and a recorded walkthrough." },
    ],
    faqs: [
      {
        question: "Can I choose the tech stack myself?",
        answer:
          "Yes. If your course specifies React, Next.js, PHP, or plain JavaScript, we build within that requirement.",
      },
      {
        question: "Do you help deploy the website live?",
        answer:
          "Yes, we can deploy it to Vercel, Netlify, or your preferred host and walk you through the process.",
      },
    ],
    keywords: ["website development project", "react project for students", "MERN stack project", "web app college project"],
  },
  {
    slug: "software-development-projects",
    title: "Software Development Projects",
    shortDescription:
      "End-to-end software project assistance including design, development, testing, and implementation support.",
    description:
      "Software development projects for engineering and computer application students usually need more than code — they need a design document, a testing plan, and a clear explanation of software engineering concepts like SDLC, UML diagrams, and modular architecture. We assist with desktop applications, management systems, inventory and billing software, and Java/Python/C++-based systems, structured the way your evaluator expects to see them: requirement analysis, design, implementation, and testing, all documented.",
    image: "/images/Software.svg",
    category: "Development & Coding",
    metaTitle: "Software Development Project Help with SDLC Documentation",
    metaDescription:
      "Software engineering project help covering design, development, testing and complete SDLC documentation for college submissions.",
    highlights: [
      "Java, Python, C++, or .NET based systems",
      "UML diagrams: use-case, class, sequence, ER diagrams",
      "Full SDLC documentation matching your syllabus",
      "Unit-tested, working software modules",
      "Database design (SQL/NoSQL) included where needed",
    ],
    process: [
      { title: "Requirement analysis", description: "We map out the modules and data flow needed for your management or utility software." },
      { title: "Design documentation", description: "UML diagrams and system architecture are prepared before coding starts." },
      { title: "Build & test", description: "Modules are built, integrated, and tested against real use cases." },
      { title: "Report & demo prep", description: "You get a complete report plus a working demo script for your evaluation." },
    ],
    faqs: [
      {
        question: "Do you provide UML diagrams as part of the project?",
        answer:
          "Yes, use-case, class, sequence, and ER diagrams are included wherever your syllabus requires SDLC documentation.",
      },
      {
        question: "Can this be a group project?",
        answer:
          "Yes, we can structure modules so each group member has a clearly defined, explainable part of the system.",
      },
    ],
    keywords: ["software engineering project", "SDLC project help", "java project college", "management system project"],
  },
  {
    slug: "data-analysis-ai-projects",
    title: "Data Analysis & AI Projects",
    shortDescription:
      "Trending projects in data analysis, visualization, artificial intelligence, and machine learning using real datasets.",
    description:
      "Data, AI, and machine learning projects are currently the most requested category on ProjectDuniya, and for good reason — they're highly valued in placements and viva panels alike. We work with real or Kaggle-sourced datasets to build projects in Python (Pandas, NumPy, Scikit-learn), Power BI dashboards, and classic ML algorithms like Random Forest, Decision Trees, and regression models. Every project includes a clear explanation of the algorithm choice, accuracy metrics, and a visual dashboard or report so your findings are easy to present.",
    image: "/images/Data-analysis-amico.svg",
    category: "Data, AI & Analytics",
    metaTitle: "Data Analysis, Machine Learning & AI Project Help for Students",
    metaDescription:
      "Machine learning, AI and data analysis project help using Python, Power BI and real datasets, with accuracy reports and viva-ready explanations.",
    highlights: [
      "Python (Pandas, NumPy, Scikit-learn) or R based analysis",
      "Power BI / Tableau dashboards on request",
      "Classic ML models: regression, classification, clustering",
      "Model accuracy report with confusion matrix & metrics",
      "Explained in plain language, not just code",
    ],
    process: [
      { title: "Dataset selection", description: "We source or use your provided dataset, checking it's clean enough for meaningful analysis." },
      { title: "Analysis & modelling", description: "Exploratory analysis is followed by model building and tuning for accuracy." },
      { title: "Visualization", description: "Findings are turned into charts, dashboards, or a Power BI report." },
      { title: "Explanation session", description: "We walk you through why each method was chosen so you can defend it confidently." },
    ],
    faqs: [
      {
        question: "Can you use a dataset provided by my professor?",
        answer:
          "Yes, send us the dataset and requirement, and we'll build the analysis or model around it directly.",
      },
      {
        question: "Will you explain how the algorithm actually works?",
        answer:
          "Yes, every AI/ML project includes a plain-language explanation of the algorithm, not just working code.",
      },
    ],
    keywords: ["machine learning project", "data analysis project", "AI project for students", "python data science project"],
  },
  {
    slug: "programming-debugging-projects",
    title: "Programming Debugging Projects",
    shortDescription:
      "Get expert help with debugging, fixing errors, and optimizing code across multiple programming languages.",
    description:
      "Sometimes you don't need a project built from scratch — you need someone to look at code that isn't working and explain why. ProjectDuniya offers focused debugging support across C, C++, Java, Python, JavaScript, and more. We don't just fix the error; we walk you through the root cause so you avoid repeating it, which matters a lot when your guide asks you to explain your own code in the viva.",
    image: "/images/coding.svg",
    category: "Development & Coding",
    metaTitle: "Programming & Code Debugging Help - C, C++, Java, Python",
    metaDescription:
      "Fast, explained debugging help for student code in C, C++, Java, Python and JavaScript. Fix errors and understand exactly what went wrong.",
    highlights: [
      "Support across C, C++, Java, Python, JavaScript and more",
      "Root-cause explanation, not just a quick patch",
      "Code optimization and best-practice suggestions",
      "Fast turnaround for urgent lab and assignment deadlines",
      "Live screen-share sessions available on request",
    ],
    process: [
      { title: "Send your code", description: "Share your file, error message, or assignment brief with us directly." },
      { title: "Diagnosis", description: "We identify the exact line and logic causing the failure." },
      { title: "Fix & explain", description: "The bug is corrected and explained so you understand the underlying issue." },
      { title: "Verification", description: "We re-test to confirm the fix works across your required test cases." },
    ],
    faqs: [
      {
        question: "How fast can urgent bugs be fixed?",
        answer:
          "Most single-file debugging requests are resolved within a few hours depending on complexity and current load.",
      },
      {
        question: "Do you explain the fix or just send corrected code?",
        answer:
          "We always explain the root cause of the bug — this is core to how we help students actually learn.",
      },
    ],
    keywords: ["code debugging help", "fix programming errors", "python debugging help", "java bug fix student"],
  },
  {
    slug: "research-paper-thesis-projects",
    title: "Research Paper & Thesis Projects",
    shortDescription:
      "Academic research, thesis writing, formatting, and plagiarism-checked documentation support.",
    description:
      "Research papers and thesis work require a very different skill set from coding projects — structured argumentation, correct citation format, and academic writing tone. ProjectDuniya assists postgraduate and research-oriented students with literature review, methodology sections, formatting to IEEE/APA/MLA standards, and plagiarism checking, so your submission is original, well-structured, and ready for review.",
    image: "/images/Research-paper-amico.svg",
    category: "Research & Writing",
    metaTitle: "Research Paper & Thesis Writing Help with Plagiarism Checking",
    metaDescription:
      "Thesis and research paper assistance covering literature review, methodology, IEEE/APA formatting and plagiarism checks for postgraduate students.",
    highlights: [
      "Literature review and methodology support",
      "IEEE, APA, and MLA formatting",
      "Plagiarism checked before delivery",
      "Guidance on journal or conference submission structure",
      "Confidential handling of your research data",
    ],
    process: [
      { title: "Topic & structure", description: "We align on your research question and required paper structure." },
      { title: "Drafting", description: "Sections are drafted with proper citations and academic tone." },
      { title: "Formatting", description: "The paper is formatted to your required citation style." },
      { title: "Plagiarism check", description: "A similarity report is generated before final delivery." },
    ],
    faqs: [
      {
        question: "Is the content checked for plagiarism before delivery?",
        answer:
          "Yes, every research paper and thesis section is plagiarism-checked and a similarity report is shared with you.",
      },
      {
        question: "Can you help format a paper for conference submission?",
        answer:
          "Yes, we format according to the specific conference or journal's submission guidelines you provide.",
      },
    ],
    keywords: ["thesis writing help", "research paper help", "plagiarism free thesis", "IEEE format paper"],
  },
  {
    slug: "presentation-viva-projects",
    title: "Presentation & Viva Projects",
    shortDescription:
      "Professional presentation design and viva preparation support for academic and technical projects.",
    description:
      "How you present a project often matters as much as the project itself. We design clean, well-structured PPTs for project defenses and prepare you for viva with a list of likely questions and model answers based on your specific topic. This service works well alongside any other ProjectDuniya project, or standalone if you've built the project yourself and just need presentation support.",
    image: "/images/presentation.svg",
    category: "Academic & Career Support",
    metaTitle: "Presentation Design & Viva Voce Preparation for Students",
    metaDescription:
      "Get a professionally designed project PPT and structured viva preparation with likely questions and model answers.",
    highlights: [
      "Clean, professional slide design",
      "Content structured for a 10-15 minute defense",
      "Mock viva question list with model answers",
      "Delivery coaching tips on request",
      "Fast turnaround for last-minute defenses",
    ],
    process: [
      { title: "Content gathering", description: "We review your project or report to extract the key points worth presenting." },
      { title: "Slide design", description: "Slides are designed for clarity, not clutter, with visuals where useful." },
      { title: "Viva question prep", description: "We prepare a realistic list of questions your evaluator is likely to ask." },
      { title: "Final review", description: "You get a final walkthrough before your submission date." },
    ],
    faqs: [
      {
        question: "Can you make a PPT for a project I built myself?",
        answer:
          "Yes, this service works independently — just share your report or project details and we'll design the presentation.",
      },
      {
        question: "Do you help with mock viva practice?",
        answer:
          "Yes, we provide a structured Q&A list, and mock sessions are available on request for an additional slot.",
      },
    ],
    keywords: ["project presentation design", "viva preparation help", "PPT for final year project"],
  },
  {
    slug: "internship-mini-projects",
    title: "Internship & Mini Projects",
    shortDescription:
      "Industry-oriented mini and internship projects designed to build practical skills and experience.",
    description:
      "Mini projects and internship assignments are usually shorter in scope but expected to reflect real, industry-style thinking. We help you build practical, portfolio-worthy mini projects — from simple automation scripts to small full-stack apps — that you can talk about confidently in interviews and internship reports, complete with clean code and a short write-up of what you learned.",
    image: "/images/Internship.svg",
    category: "Academic & Career Support",
    metaTitle: "Internship & Mini Project Help for Students and Freshers",
    metaDescription:
      "Practical mini projects and internship assignment help designed to build real, interview-ready skills for students and freshers.",
    highlights: [
      "Short-timeline mini projects (3-10 days)",
      "Portfolio-ready code you can showcase on GitHub",
      "Internship report write-up support",
      "Interview-ready explanation of what you built",
      "Wide range of domains: web, automation, data, apps",
    ],
    process: [
      { title: "Scope the mini project", description: "We match the project size to your internship timeline and skill level." },
      { title: "Build", description: "A focused, working mini project is developed with clean code." },
      { title: "Report", description: "We help draft the internship completion report if required." },
      { title: "Interview prep", description: "You get a short brief on how to talk about the project in interviews." },
    ],
    faqs: [
      {
        question: "Can this double as a portfolio project for job applications?",
        answer:
          "Yes, our mini projects are built with clean, presentable code specifically so you can showcase them on GitHub or in interviews.",
      },
      {
        question: "How quickly can a mini project be delivered?",
        answer:
          "Most mini projects are delivered within 3 to 10 days depending on scope and complexity.",
      },
    ],
    keywords: ["mini project help", "internship project help", "portfolio project for students"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
