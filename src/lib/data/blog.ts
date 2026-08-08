export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  content: string[]; // paragraphs / markdown-lite blocks
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-final-year-project-ideas-computer-science-2026",
    title: "Top Final Year Project Ideas for Computer Science Students in 2026",
    excerpt:
      "A practical shortlist of final year project ideas across web development, AI, and data — chosen for how well they demo and defend, not just how trendy they sound.",
    image: "/images/blog1.png",
    date: "2026-01-12",
    readTime: "7 min read",
    category: "Project Ideas",
    metaTitle: "Top Final Year Project Ideas for CS Students in 2026",
    metaDescription:
      "A shortlist of final year project ideas for computer science students in 2026, covering web, AI/ML, and data projects that are strong for both grading and interviews.",
    content: [
      "Picking a final year project topic is harder than it looks. Pick something too ambitious and you risk running out of time before the deadline. Pick something too simple and your evaluator may not take it seriously. The ideas below are chosen because they hit a sweet spot: they're achievable within a typical semester, they map well to common course syllabi, and they give you something concrete to talk about in placement interviews later.",
      "**1. AI-based resume and job-matching tool.** A system that parses resumes, extracts skills, and matches them against job descriptions using basic NLP techniques. It touches on text processing, matching algorithms, and a simple frontend — a good balance of AI relevance and buildable scope.",
      "**2. Attendance system using face recognition.** A classic but still well-regarded project if you go beyond the basic tutorial version. Add a proper database, an admin dashboard, and accuracy reporting to make it stand out from a copy-pasted version.",
      "**3. Personal finance / expense tracker with data visualization.** Combines full-stack development with a dashboard layer (charts, categorization, monthly summaries). It's practical, easy to demo, and gives you a natural excuse to talk about database design in your viva.",
      "**4. Disease prediction using machine learning.** A model trained on a public healthcare dataset (diabetes, heart disease, etc.) that predicts risk based on input parameters. Popular for a reason — evaluators understand the domain quickly, which makes your explanation easier to follow.",
      "**5. Campus or hostel management system.** A full-stack web application handling room allocation, complaints, and fee tracking. It demonstrates CRUD operations, authentication, and role-based access — core software engineering concepts that map directly to most syllabi.",
      "**6. Sentiment analysis on product or movie reviews.** A natural language processing project using a labelled dataset, ideal if your course has any NLP or text-mining component. Keep the scope tight: one dataset, one clear metric, and a simple UI to display results.",
      "**7. E-commerce platform with recommendation engine.** Goes beyond a typical shopping cart demo by adding a recommendation layer based on browsing or purchase history — a good way to combine full-stack skills with a lightweight ML component.",
      "Whichever topic you choose, the strongest final year projects share three traits: a clearly scoped feature set, a working demo (not just slides), and a report where you can explain every design decision without hesitation. If you'd like help scoping any of these ideas to your specific department guidelines, our team can walk through it with you before you commit to a topic.",
    ],
  },
  {
    slug: "how-to-choose-final-year-project-topic",
    title: "How to Choose the Right Final Year Project Topic: A Step-by-Step Guide",
    excerpt:
      "A framework for shortlisting, testing, and finalizing your final year project topic so you don't waste weeks second-guessing your choice.",
    image: "/images/blog2.png",
    date: "2026-01-18",
    readTime: "6 min read",
    category: "Guides",
    metaTitle: "How to Choose the Right Final Year Project Topic - Step-by-Step",
    metaDescription:
      "A step-by-step framework for choosing a final year project topic that fits your syllabus, skill level, and timeline without wasted weeks of indecision.",
    content: [
      "Most students lose two to three weeks simply deciding on a topic — time that would be far better spent building. Here's a structured way to shortlist and finalize a topic without the usual back-and-forth.",
      "**Step 1: Check your department's constraints first.** Before you get excited about an idea, read your project guidelines document. Note the required tech stack, page count for documentation, and any topic restrictions. This alone eliminates a large chunk of 'interesting but not allowed' ideas.",
      "**Step 2: Match the topic to your actual skill level, not your ambition.** It's tempting to pick something impressive-sounding like a full recommendation engine or a computer vision system. But if you're not comfortable with the underlying concepts, you'll struggle to explain it in the viva — which matters more for your grade than the topic's perceived difficulty.",
      "**Step 3: Shortlist three ideas, not one.** For each, write two sentences: what problem it solves, and what makes it demoable. If you can't clearly answer both, drop it from the shortlist.",
      "**Step 4: Test feasibility with a tiny prototype.** Before committing, spend a day building the smallest possible version — a login page, a basic model on a sample dataset, whatever proves the core concept works. This catches feasibility problems before you're three weeks in.",
      "**Step 5: Get your guide's sign-off early.** Once you've picked a direction, get written or email confirmation from your project guide. This avoids the common last-minute problem of a guide rejecting a topic close to the deadline.",
      "**Step 6: Lock the scope, then stop adding features.** Once development starts, resist the urge to keep adding 'just one more feature.' Scope creep is the single biggest reason final year projects run late.",
      "If you're stuck between a few ideas or unsure whether a topic fits your syllabus, it often helps to talk it through with someone who has seen a wide range of accepted and rejected topics — that's exactly the kind of guidance our team provides before any development work begins.",
    ],
  },
  {
    slug: "python-vs-java-for-academic-projects",
    title: "Python vs Java for Academic Projects: Which Should You Choose?",
    excerpt:
      "A practical comparison of Python and Java for student projects — covering learning curve, library support, and what evaluators actually expect to see.",
    image: "/images/blog3.png",
    date: "2026-01-24",
    readTime: "5 min read",
    category: "Guides",
    metaTitle: "Python vs Java for Academic Projects - Which is Better?",
    metaDescription:
      "Compare Python and Java for academic and final year projects across learning curve, library ecosystem, and grading expectations to pick the right one.",
    content: [
      "This question comes up in almost every project consultation we do, and the honest answer is: it depends on what kind of project you're building, not which language is objectively 'better.'",
      "**Choose Python if your project is data, AI, or automation-heavy.** Python's ecosystem — Pandas, NumPy, Scikit-learn, TensorFlow — makes data analysis and machine learning projects significantly faster to build and easier to explain, since the syntax stays readable even as the logic gets complex. If your project involves a dataset, a prediction model, or any kind of automation script, Python is almost always the right call.",
      "**Choose Java if your course emphasizes object-oriented design or enterprise-style systems.** Java is still the standard in many university syllabi for teaching OOP concepts, and it's a safer choice if your evaluator expects to see class diagrams, inheritance, and interface-based design as part of your software engineering documentation.",
      "**Consider your evaluator's background.** If your project guide or panel is more familiar with Java-based teaching (common in many core CS/IT departments), presenting a Java project can make the discussion smoother, since they'll ask questions in the vocabulary they're used to.",
      "**Development speed matters if your timeline is tight.** Python generally lets you build and iterate faster because of its concise syntax and rich standard library — useful if you're starting your final year project later than you'd planned.",
      "**Neither choice is permanent.** Many students building web or software projects blend both — Python for a data or ML backend service, Java for a core enterprise-style module — which is a completely reasonable approach if your project genuinely needs both.",
      "If you're unsure which language fits your specific project brief and department expectations, it's worth getting a second opinion before you invest weeks into one stack.",
    ],
  },
  {
    slug: "viva-voce-preparation-guide",
    title: "A Complete Guide to Viva Voce Preparation for Final Year Students",
    excerpt:
      "How to prepare for your project viva so you can answer confidently, even for the parts of the project you didn't personally code.",
    image: "/images/faq-worker.png",
    date: "2026-02-02",
    readTime: "6 min read",
    category: "Guides",
    metaTitle: "Viva Voce Preparation Guide for Final Year Project Students",
    metaDescription:
      "A complete guide to preparing for your final year project viva voce, including common questions, structure tips, and how to explain technical decisions confidently.",
    content: [
      "The viva is where projects are won or lost, regardless of how good the actual build is. A strong project with a shaky explanation often scores lower than a simpler project explained with full confidence. Here's how to prepare properly.",
      "**Know your project's 'why' before its 'how.'** Evaluators frequently open with 'why did you choose this topic?' Have a genuine, specific answer ready — not a generic line about it being 'useful and interesting.'",
      "**Prepare a one-minute summary.** Practice explaining your entire project — problem, approach, tech stack, outcome — in under 60 seconds. This is usually the first thing you'll be asked, and stumbling here sets a bad tone for the rest of the viva.",
      "**Anticipate 'what if' questions.** Evaluators love asking what would happen if a database went down, if input data was invalid, or if the dataset was ten times larger. You don't need a perfect answer — you need to show you've thought about it.",
      "**Understand every line you plan to show.** If a section of code was written with help from an external source, mentor, or tool, make sure you fully understand its logic before the viva. Being unable to explain a piece of your own submission is one of the most common ways marks are lost.",
      "**Prepare for comparison questions.** 'Why this algorithm and not another?' or 'Why this framework instead of X?' are extremely common. Have a short, honest justification for each major technical decision.",
      "**Practice out loud, not just in your head.** Explaining a technical concept silently in your mind feels much easier than saying it out loud under mild pressure. Rehearse with a friend, family member, or even just your phone's voice recorder.",
      "**Bring backup materials.** Carry a printed report, your PPT, and if possible, a version of your project that runs offline in case of any live-demo internet issues.",
      "A well-prepared five-minute viva conversation usually matters more for your final grade than an extra week spent polishing code nobody outside your evaluator will look at closely. If you'd like a structured mock viva session based on your specific project, that's something our team offers as part of presentation and viva support.",
    ],
  },
  {
    slug: "data-analysis-projects-for-beginners",
    title: "Data Analysis Projects for Beginners: Tools, Datasets and Ideas",
    excerpt:
      "Where to find good datasets, which tools to start with, and beginner-friendly project ideas that still look impressive on submission day.",
    image: "/images/Growth-analytics-rafiki.svg",
    date: "2026-02-10",
    readTime: "6 min read",
    category: "Data & AI",
    metaTitle: "Data Analysis Projects for Beginners - Tools, Datasets & Ideas",
    metaDescription:
      "A beginner's guide to data analysis projects, covering the best tools to start with, where to find datasets, and project ideas that are easy to demo.",
    content: [
      "Data analysis is one of the most accessible entry points into the broader AI/ML field, largely because the tooling is mature and the datasets are everywhere. Here's how to get started without feeling overwhelmed.",
      "**Start with the right tools.** For a first data analysis project, Python with Pandas and Matplotlib (or Seaborn) is the most practical starting point — the syntax is approachable and the community documentation is extensive. If your course leans toward business-facing tools, Power BI or Excel with pivot tables is a perfectly valid alternative and often preferred by non-CS departments.",
      "**Where to find good datasets.** Kaggle is the most commonly used source for structured, cleaned datasets across domains — sales, healthcare, sports, and more. Government open-data portals are another underused option and tend to impress evaluators since the data feels less 'templated' than a well-known Kaggle set.",
      "**Beginner-friendly project ideas:**",
      "- **Sales performance dashboard** — analyze a retail dataset to find best-selling products, seasonal trends, and regional performance, visualized in charts or a Power BI report.",
      "- **Student performance analysis** — study exam score datasets to identify factors correlated with performance, a topic that's easy for any evaluator to relate to.",
      "- **COVID-19 or public health trend analysis** — use publicly available health datasets to visualize spread patterns or vaccination trends over time.",
      "- **Movie or book rating analysis** — explore rating datasets to find patterns by genre, year, or audience segment, a lighter and highly demoable option.",
      "**Keep the scope realistic.** A beginner project doesn't need machine learning to be impressive. A clean, well-visualized exploratory data analysis with 3-4 clear insights often scores better than an overreaching model with shaky accuracy.",
      "**Document your process, not just your results.** Evaluators frequently care as much about your approach — how you cleaned the data, handled missing values, chose your visualizations — as they do about the final chart. Keep notes as you go so this is easy to write up later.",
      "If you'd like help picking a dataset and scoping a data analysis project to your exact course requirements, that's a conversation we're happy to have before you commit to a direction.",
    ],
  },
  {
    slug: "how-to-write-a-research-paper",
    title: "How to Write a Research Paper: Structure, Formatting and Common Mistakes",
    excerpt:
      "A practical breakdown of research paper structure, common formatting standards, and the mistakes that most often cost students marks.",
    image: "/images/Research-paper-pana.svg",
    date: "2026-02-18",
    readTime: "7 min read",
    category: "Research & Writing",
    metaTitle: "How to Write a Research Paper - Structure, Formatting & Mistakes to Avoid",
    metaDescription:
      "A guide to research paper writing covering standard structure, IEEE/APA formatting basics, and the most common mistakes that cost students marks.",
    content: [
      "Writing a research paper for the first time can feel intimidating mostly because the structure is unfamiliar, not because the writing itself is especially hard. Once you understand the expected sections, the process becomes far more manageable.",
      "**Standard structure to follow.** Most academic papers follow a consistent shape: Abstract, Introduction, Literature Review, Methodology, Results, Discussion, Conclusion, and References. Departments occasionally rename or merge sections, but this order rarely changes fundamentally.",
      "**The abstract is written last, even though it's read first.** Many students try to write the abstract before the paper is finished and end up rewriting it three times. Write it after your conclusion, summarizing the problem, method, and key finding in 150-250 words.",
      "**Literature review is a synthesis, not a list.** A common mistake is summarizing each prior paper one after another without connecting them. A strong literature review groups related work by theme or approach and explicitly states what gap your paper addresses.",
      "**Methodology needs to be reproducible.** Describe your approach in enough detail that another student could follow the same steps and get comparable results. Vague methodology sections are one of the most common reasons papers get sent back for revision.",
      "**Follow your citation format exactly.** IEEE, APA, and MLA each have specific rules for in-text citations and reference lists. Mixing formats, or being inconsistent within one format, is a small mistake that reviewers notice immediately and that's easy to avoid with a citation manager or careful proofreading.",
      "**Common mistakes that cost marks:**",
      "- Overly long, unfocused abstracts that summarize the whole paper instead of the key contribution.",
      "- Citing sources without ever engaging with their actual argument.",
      "- Results sections that present data without any interpretation or discussion.",
      "- Inconsistent formatting between sections, especially in citation style.",
      "- Skipping a plagiarism check before submission, even when every sentence was 'mostly' rewritten.",
      "**Plagiarism checking is not optional.** Even paraphrased content can trigger high similarity scores if the sentence structure stays too close to the source. Running your paper through a plagiarism checker before submission is one of the simplest ways to avoid an entirely preventable problem.",
      "If you're working on a thesis chapter or research paper and want a second pair of eyes on structure, formatting, or originality before you submit, that's exactly the kind of support our research and writing team provides.",
    ],
  },
  {
    slug: "capstone-project-ideas-computer-science-international-students",
    title: "Capstone Project Ideas for Computer Science Students (US, UK, Canada & Australia)",
    excerpt:
      "A shortlist of capstone project ideas for computer science and IT students at universities in the US, UK, Canada, and Australia - chosen for how well they demo, document, and defend.",
    image: "/images/blog2.png",
    date: "2026-03-05",
    readTime: "8 min read",
    category: "Project Ideas",
    metaTitle: "Capstone Project Ideas for CS Students in the US, UK, Canada & Australia",
    metaDescription:
      "Capstone project ideas for computer science and IT students at universities in the US, UK, Canada, and Australia, covering web, AI/ML, and data projects that are strong for grading and portfolios.",
    content: [
      "Capstone project requirements look a little different depending on where you're studying, but the underlying goal is the same everywhere: prove you can independently plan, build, and document a substantial piece of software. The ideas below work well across US, UK, Canadian, and Australian computer science and IT programs, and translate easily into a strong portfolio piece for job applications afterward.",
      "**1. AI-powered resume and job-matching tool.** A system that parses resumes, extracts skills, and matches them against job postings using basic NLP. It's a strong capstone choice because it touches text processing, matching logic, and a usable frontend - and doubles as a portfolio project when you're job hunting after graduation.",
      "**2. Campus or student-housing management system.** A full-stack web application handling room allocation, maintenance requests, and payments. It demonstrates CRUD operations, authentication, and role-based access - core software engineering concepts most capstone rubrics specifically look for.",
      "**3. Personal finance dashboard with data visualization.** Combines full-stack development with a charting layer - monthly summaries, category breakdowns, spending trends. Easy to demo live in a capstone presentation, and it gives you a natural way to talk through database design decisions.",
      "**4. Predictive health risk model.** A machine learning model trained on a public healthcare dataset that predicts risk based on input parameters. Supervisors and evaluators tend to understand the domain quickly, which makes your defense presentation easier to follow and question.",
      "**5. Sentiment analysis tool for product or service reviews.** An NLP project using a labeled dataset - ideal if your program includes any text-mining or natural language processing module. Keep the scope tight: one dataset, one clear evaluation metric, and a simple UI to present results.",
      "**6. E-commerce platform with a recommendation engine.** Goes beyond a standard shopping-cart demo by layering in a recommendation system based on browsing or purchase history - a good way to combine full-stack skills with a lightweight ML component for a stronger final grade.",
      "Whichever topic you pick, capstone committees in the US, UK, Canada, and Australia tend to reward the same things: a clearly scoped feature set, a working live demo (not just slides), and a report where you can explain every design decision without hesitation. If you'd like help scoping any of these ideas to your specific program's rubric, our team can walk through it with you before you commit to a topic.",
    ],
  },
  {
    slug: "dissertation-vs-thesis-structure-guide-international-students",
    title: "Dissertation vs Thesis: A Structure Guide for International Students",
    excerpt:
      "US, UK, and Commonwealth universities use \"thesis\" and \"dissertation\" differently - here's what each actually expects, and how to structure yours either way.",
    image: "/images/blog3.png",
    date: "2026-03-12",
    readTime: "6 min read",
    category: "Guides",
    metaTitle: "Dissertation vs Thesis: Structure Guide for International Students",
    metaDescription:
      "A clear guide to the difference between a dissertation and a thesis across US, UK, Canadian, and Australian universities, plus a chapter-by-chapter structure to follow.",
    content: [
      "One of the most confusing things for international students is that \"thesis\" and \"dissertation\" mean almost opposite things depending on where you study. In the US, a thesis is usually a master's-level requirement and a dissertation is doctoral-level. In the UK, Australia, and much of the Commonwealth, it's flipped - a dissertation is typically the undergraduate or master's project, and a thesis is doctoral. The good news: whichever label your program uses, the underlying structure you need to follow is nearly identical.",
      "**Standard chapter structure.** Introduction, Literature Review, Methodology, Results/Findings, Discussion, Conclusion, and References - with an Abstract at the front. Some programs merge Results and Discussion into one chapter, or add a separate Recommendations section, but this backbone holds across almost every university system.",
      "**Check your specific word count and formatting rules first.** A UK undergraduate dissertation might run 8,000-12,000 words, while a US master's thesis often runs much longer. Your department handbook - not a generic template - is always the source of truth here, so confirm the exact requirement before you start structuring chapters.",
      "**The literature review is a synthesis, not a summary list.** Whether it's called a \"literature review\" or a \"related work\" chapter, the mistake is the same everywhere: describing each source one after another instead of grouping them by theme and stating clearly what gap your own research fills.",
      "**Methodology needs to be reproducible, regardless of country.** Describe your approach in enough detail that another student could follow the same steps. This is the section most commonly sent back for revision across US, UK, and Australian programs alike.",
      "**Formatting style follows your field, not your country.** IEEE is common in engineering and computer science programs worldwide; APA is standard across US social sciences and many Commonwealth business schools; MLA appears mostly in humanities. Confirm which one your department expects rather than assuming based on where you study.",
      "**Plan your defense or viva early.** Whether it's called a \"viva voce,\" a \"defense,\" or an \"oral examination,\" you'll be expected to explain and justify every choice in your methodology and results chapters - so keep clear notes on why you made each decision as you go, not just what you did.",
      "If you're structuring a dissertation or thesis chapter and want feedback on formatting, argument flow, or referencing before you submit to your supervisor, that's exactly the kind of support our research and writing team provides - for whichever system your university follows.",
    ],
  },
  {
    slug: "how-much-does-final-year-project-help-cost",
    title: "How Much Does Final Year Project Help Cost? A Global Pricing Guide",
    excerpt:
      "A breakdown of what final year project and coding assignment help typically costs for students in the US, UK, India, and other countries, and what actually drives the price.",
    image: "/images/blog1.png",
    date: "2026-03-19",
    readTime: "6 min read",
    category: "Guides",
    metaTitle: "Final Year Project Help Cost: Global Pricing Guide for Students",
    metaDescription:
      "What does final year project or coding assignment help actually cost? A breakdown of pricing factors for students worldwide, from mini projects to full dissertations.",
    content: [
      "Pricing for academic project help varies a lot, and most of that variation comes down to a handful of clear factors rather than which country you're in. Understanding these first makes it much easier to compare quotes fairly - and to spot a price that's suspiciously low for what you're asking.",
      "**Scope is the biggest factor.** A small coding assignment with a single feature costs far less than a full final-year project with source code, a formatted report, a presentation deck, and viva/defense preparation. Always compare quotes against the same scope, not just the same project title.",
      "**Technology stack matters.** A simple static website costs less to build than a full-stack application with authentication, a database, and an admin panel, or a machine learning project that needs model training and evaluation. Be specific about your tech stack when asking for a quote so you're comparing like for like.",
      "**Documentation and formatting take real time.** A report formatted to a specific university's IEEE, APA, or MLA template, complete with a literature review and properly cited references, is its own body of work separate from the code or analysis itself - and should be priced (or at least scoped) separately.",
      "**Turnaround time affects price.** A two-week deadline costs more to deliver reliably than a six-week one, simply because of the resourcing required. If you're on a tight timeline, expect that to be reflected in the quote.",
      "**Currency and cost of living shift the sticker price, not the value.** A project quoted in USD for a US student and the same scope quoted in INR for an Indian student can represent very similar effort - the number just reflects local purchasing power, not a different quality of work.",
      "As a rough starting point, small coding assignments and mini projects tend to start in the $15-30 range (or the local equivalent), while full final-year projects with documentation and support typically start around $60-90 and scale up with complexity. Research and thesis-level work costs more due to the writing and citation effort involved. If you want an exact quote for your specific requirement, sharing your scope, tech stack, and deadline upfront gets you the most accurate number fastest.",
    ],
  },
  {
    slug: "pay-someone-to-do-my-programming-assignment-what-to-look-for",
    title: "Pay Someone to Do My Programming Assignment: What to Look For (and Red Flags to Avoid)",
    excerpt:
      "If you're considering paying for programming assignment help, here's how to vet a service properly - and the warning signs that mean you should walk away.",
    image: "/images/blog2.png",
    date: "2026-03-26",
    readTime: "7 min read",
    category: "Guides",
    metaTitle: "Paying for Programming Assignment Help: A Student's Vetting Checklist",
    metaDescription:
      "How to evaluate a programming assignment help service before you pay - what a legitimate provider offers, and the red flags that signal you should look elsewhere.",
    content: [
      "Searching \"pay someone to do my programming assignment\" turns up a huge range of services, and the quality gap between the best and worst of them is enormous. Before you commit money (or your academic standing), it's worth knowing what a legitimate provider actually looks like.",
      "**They ask about your rubric before quoting a price.** A service that quotes instantly without asking what your assignment actually requires - grading criteria, required libraries, coding style guidelines - is guessing, not scoping. Good providers ask questions first.",
      "**They can explain the code to you afterward.** If you can't get a walkthrough of how the solution works, you won't be able to answer questions about it in a viva, code review, or follow-up assignment - which defeats the point of getting help in the first place. Treat this as a non-negotiable, not a nice-to-have.",
      "**Check how they handle originality.** Ask directly whether the work is written specifically for you or adapted from an existing template. Reused solutions are far more likely to get flagged by plagiarism and code-similarity checkers that most universities now run as standard.",
      "**Red flag: no communication channel until after payment.** If you can't ask a clarifying question before paying, you have no way to confirm they've actually understood your requirement - a common source of mismatched deliverables and last-minute disputes.",
      "**Red flag: guarantees that sound too certain.** \"100% guaranteed A+ grade\" isn't something any legitimate service can promise, since grading depends on your instructor's judgment, not just code quality. Confident claims about turnaround time and code quality are reasonable; guaranteed grades are not.",
      "**Red flag: no revisions policy.** Requirements get misunderstood sometimes - it happens. A provider with zero revision policy is telling you they won't stand behind the first draft, which shifts all the risk onto you.",
      "**What a fair process looks like end to end:** you share your requirement and deadline, they confirm scope and price upfront, you get periodic updates or a draft to review, and you receive the final code with enough explanation that you could discuss it confidently if asked. If a service skips several of these steps, that's worth pausing on before you pay.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
