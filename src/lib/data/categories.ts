export interface SubProject {
  name: string;
  slug: string;
  image: string;
  count: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  items: SubProject[];
}

export const categories: Category[] = [
  {
    slug: "development-and-coding",
    name: "Development & Coding",
    description:
      "Hands-on coding and development projects covering websites, software systems, and debugging support across languages and frameworks.",
    metaTitle: "Coding & Development Project Help | ProjectDuniya",
    metaDescription:
      "Explore website, software, and programming project help for students - built with modern tech stacks and explained step by step.",
    items: [
      {
        name: "Coding & Development",
        slug: "coding-and-development",
        image: "/images/coding.svg",
        count: "250+",
        description: "General-purpose coding projects across C, C++, Java, Python and more, built to your syllabus requirements.",
      },
      {
        name: "Website Design & Development",
        slug: "website-design-and-development",
        image: "/images/Website-Development.svg",
        count: "100+",
        description: "Responsive websites and web apps using React, Next.js, or classic HTML/CSS/JS stacks.",
      },
      {
        name: "Software Development",
        slug: "software-development",
        image: "/images/Software.svg",
        count: "50+",
        description: "Complete software systems with SDLC documentation, UML diagrams, and tested modules.",
      },
      {
        name: "Programming Help & Debugging",
        slug: "programming-help-and-debugging",
        image: "/images/Hand-coding-amico.svg",
        count: "350+",
        description: "Fast, explained fixes for broken code, assignment errors, and last-minute lab submissions.",
      },
    ],
  },
  {
    slug: "data-ai-and-analytics",
    name: "Data, AI & Analytics",
    description:
      "Real-dataset driven projects in data analysis, visualization, machine learning, and spreadsheet-based reporting.",
    metaTitle: "Data Analysis, AI & Excel Project Help | ProjectDuniya",
    metaDescription:
      "Machine learning, data analysis and Excel/Power BI project help for students, built with real datasets and clear explanations.",
    items: [
      {
        name: "Data Analysis & Visualization",
        slug: "data-analysis-and-visualization",
        image: "/images/Data-analysis-amico.svg",
        count: "40+",
        description: "Exploratory data analysis, dashboards, and ML models built on real or Kaggle datasets.",
      },
      {
        name: "Microsoft Excel",
        slug: "microsoft-excel",
        image: "/images/Spreadsheets-bro.svg",
        count: "500+",
        description: "Advanced Excel modelling, formulas, pivot tables, and reporting dashboards for assignments and internships.",
      },
    ],
  },
  {
    slug: "research-and-writing",
    name: "Research & Writing",
    description:
      "Academic writing support spanning research papers, thesis chapters, essays, and plagiarism-checked formatting.",
    metaTitle: "Research Paper, Thesis & Academic Writing Help | ProjectDuniya",
    metaDescription:
      "Thesis writing, research paper formatting, essay writing and plagiarism checking support for postgraduate and research students.",
    items: [
      {
        name: "Research Paper",
        slug: "research-paper",
        image: "/images/Research-paper-amico.svg",
        count: "20+",
        description: "Structured research papers with literature review, methodology, and citation formatting.",
      },
      {
        name: "Thesis Writing",
        slug: "thesis-writing",
        image: "/images/Thesis-bro.svg",
        count: "450+",
        description: "Full or chapter-wise thesis writing support for postgraduate and research scholars.",
      },
      {
        name: "Essay & Report Writing",
        slug: "essay-and-report-writing",
        image: "/images/Morning-essential-rafiki.svg",
        count: "500+",
        description: "Well-argued essays and reports written to your academic level and word count.",
      },
      {
        name: "Academic Research Paper Formatting",
        slug: "academic-research-paper-formatting",
        image: "/images/Learning-bro.svg",
        count: "5+",
        description: "IEEE, APA, and MLA formatting for papers ready for journal or conference submission.",
      },
      {
        name: "Plagiarism Checking",
        slug: "plagiarism-checking",
        image: "/images/grammar-correction-bro.svg",
        count: "250+",
        description: "Similarity reports and originality checks before you submit any academic document.",
      },
    ],
  },
  {
    slug: "academic-and-career-support",
    name: "Academic & Career Support",
    description:
      "Career-readiness services including resumes, presentations, tutoring, and organizational tools for group projects.",
    metaTitle: "Resume, Presentation & Career Support for Students | ProjectDuniya",
    metaDescription:
      "Resume writing, presentation design, tutoring, and career support services built for students entering placements and internships.",
    items: [
      {
        name: "Academic Resume Writing",
        slug: "academic-resume-writing",
        image: "/images/Resume-amico.svg",
        count: "600+",
        description: "ATS-friendly resumes tailored for academic applications, internships, and campus placements.",
      },
      {
        name: "Job / Internship Application Assistance",
        slug: "job-internship-application-assistance",
        image: "/images/Job-hunt-amico.svg",
        count: "150+",
        description: "Application support, cover letters, and profile guidance for internship and job applications.",
      },
      {
        name: "Online Tutoring Sessions",
        slug: "online-tutoring-sessions",
        image: "/images/Lesson-amico.svg",
        count: "20+",
        description: "One-on-one tutoring for tricky concepts related to your project or coursework.",
      },
      {
        name: "Study Guide Creation",
        slug: "study-guide-creation",
        image: "/images/Research-paper-pana.svg",
        count: "50+",
        description: "Condensed, exam-ready study guides built from your syllabus and notes.",
      },
      {
        name: "Note Taking & Organizing",
        slug: "note-taking-and-organizing",
        image: "/images/Notes-amico.svg",
        count: "25+",
        description: "Clean, organized notes from lectures, textbooks, or your own scattered material.",
      },
      {
        name: "Group Project Collaboration Tools",
        slug: "group-project-collaboration-tools",
        image: "/images/Group-discussion-amico.svg",
        count: "20+",
        description: "Setup and guidance for tools that make group project coordination easier.",
      },
      {
        name: "Presentation Design",
        slug: "presentation-design",
        image: "/images/presentation.svg",
        count: "350+",
        description: "Clean, professional slide decks designed for project defenses and vivas.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getAllSubProjects() {
  return categories.flatMap((c) =>
    c.items.map((i) => ({ ...i, categorySlug: c.slug, categoryName: c.name }))
  );
}

export function getSubProjectBySlug(slug: string) {
  return getAllSubProjects().find((i) => i.slug === slug);
}
