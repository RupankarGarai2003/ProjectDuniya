import type { BlogCategoryKey } from "@/lib/blog-hub";

export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Scope = "Mini" | "Final Year";

export interface ProjectIdea {
  title: string;
  summary: string;
  level: Level;
  scope: Scope;
  stack: string[];
}

export interface IdeaGroup {
  id: string;
  title: string;
  intro: string;
  /** Matching service page on this site. */
  serviceSlug: string;
  /** Matching category on blogs.projectduniya.com. */
  blog: BlogCategoryKey;
  ideas: ProjectIdea[];
}

const B = "Beginner" as const;
const I = "Intermediate" as const;
const A = "Advanced" as const;
const M = "Mini" as const;
const F = "Final Year" as const;
const idea = (title: string, summary: string, level: Level, scope: Scope, stack: string[]): ProjectIdea => ({
  title, summary, level, scope, stack,
});

export const ideaGroups: IdeaGroup[] = [
  {
    id: "web-development",
    title: "Web Development",
    intro: "Demo-friendly full-stack projects that show database design, authentication and clean architecture.",
    serviceSlug: "website-development-projects",
    blog: "website-design-development",
    ideas: [
      idea("Personal finance and expense tracker", "Track income and spending with category charts and monthly summaries.", B, M, ["React", "Node.js", "MongoDB"]),
      idea("Campus or hostel management system", "Room allocation, complaints and fee tracking with role-based access.", I, F, ["Next.js", "PostgreSQL"]),
      idea("E-commerce store with recommendations", "Shopping cart plus a recommendation engine based on browsing history.", A, F, ["MERN", "Python"]),
      idea("Online examination system", "Timed tests, randomised questions, auto-grading and result analytics.", I, F, ["Laravel", "MySQL"]),
      idea("Job and internship portal", "Employer and candidate roles, resume upload, search filters and application tracker.", I, F, ["React", "Express", "MongoDB"]),
      idea("Real-time chat application", "One-to-one and group chat with authentication and online presence.", I, M, ["Socket.io", "Node.js"]),
      idea("Blogging platform with CMS", "Markdown editor, comments, tags and an admin moderation panel.", B, M, ["Next.js", "Prisma"]),
      idea("Online food ordering system", "Menu, cart, order tracking and a restaurant dashboard.", I, F, ["PHP", "MySQL"]),
      idea("Event booking and ticketing website", "Seat selection, QR-code tickets and organiser analytics.", I, F, ["React", "Node.js"]),
      idea("Personal portfolio with admin dashboard", "A portfolio site whose projects and blog are editable from a private panel.", B, M, ["Next.js", "Tailwind CSS"]),
    ],
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    intro: "Show data cleaning, a justified model choice, honest metrics and a simple deployed interface.",
    serviceSlug: "data-analysis-ai-projects",
    blog: "ai-machine-learning",
    ideas: [
      idea("Disease prediction from health datasets", "Predict diabetes or heart-disease risk from patient parameters.", I, F, ["scikit-learn", "Flask"]),
      idea("Resume-to-job matching tool", "Extract skills from resumes and rank them against job descriptions.", I, F, ["spaCy", "Streamlit"]),
      idea("Credit card fraud detection", "Handle class imbalance and compare classifiers on transaction data.", A, F, ["Python", "XGBoost"]),
      idea("House price prediction", "Regression with feature engineering and model comparison.", B, M, ["Pandas", "scikit-learn"]),
      idea("Customer churn prediction", "Identify at-risk customers and explain the top churn drivers.", I, F, ["Python", "SHAP"]),
      idea("Movie recommendation system", "Content-based and collaborative filtering recommenders.", I, F, ["Python", "Surprise"]),
      idea("Loan approval prediction", "Classify applications with fairness checks across groups.", I, M, ["scikit-learn", "Pandas"]),
      idea("Crop recommendation system", "Suggest crops from soil, rainfall and temperature data.", B, M, ["Python", "Flask"]),
      idea("Stock trend forecasting dashboard", "Time-series forecasting with clear limits and backtesting.", A, F, ["LSTM", "Streamlit"]),
      idea("Spam email classifier", "Text classification with TF-IDF and a simple web form.", B, M, ["Python", "NLTK"]),
    ],
  },
  {
    id: "deep-learning-computer-vision",
    title: "Deep Learning & Computer Vision",
    intro: "Image and video projects that look impressive in a live demo.",
    serviceSlug: "data-analysis-ai-projects",
    blog: "ai-machine-learning",
    ideas: [
      idea("Face-recognition attendance system", "Mark attendance from a webcam with an admin dashboard and privacy notes.", I, F, ["OpenCV", "Python"]),
      idea("Handwritten digit and character recognition", "A CNN trained on MNIST or EMNIST with a drawing canvas.", B, M, ["TensorFlow", "Flask"]),
      idea("Plant leaf disease detection", "Classify diseased leaves with transfer learning.", I, F, ["Keras", "MobileNet"]),
      idea("Driver drowsiness detection", "Detect eye closure in real time and raise an alert.", I, F, ["OpenCV", "dlib"]),
      idea("Traffic sign recognition", "Classify road signs from the GTSRB dataset.", I, M, ["CNN", "TensorFlow"]),
      idea("Face mask detection", "Real-time mask detection from video streams.", B, M, ["OpenCV", "Keras"]),
      idea("Number plate recognition", "Detect and read vehicle number plates from images.", A, F, ["YOLO", "OCR"]),
      idea("Pneumonia detection from chest X-rays", "Medical image classification with explainability heatmaps.", A, F, ["PyTorch", "Grad-CAM"]),
      idea("Human pose and exercise tracker", "Count repetitions and correct form using pose estimation.", A, F, ["MediaPipe", "Python"]),
      idea("Object detection for a retail shelf", "Detect and count products on shelves from photos.", A, F, ["YOLOv8", "OpenCV"]),
    ],
  },
  {
    id: "nlp-generative-ai",
    title: "NLP & Generative AI",
    intro: "Language projects, from classic text classification to retrieval-augmented chatbots.",
    serviceSlug: "data-analysis-ai-projects",
    blog: "ai-machine-learning",
    ideas: [
      idea("Sentiment analysis on product or movie reviews", "Classify opinions and visualise sentiment over time.", B, M, ["NLTK", "scikit-learn"]),
      idea("Fake news detection", "Classify articles as reliable or misleading with explainable features.", I, F, ["TF-IDF", "BERT"]),
      idea("Document question-answering chatbot", "Upload PDFs and ask questions using retrieval-augmented generation.", A, F, ["LangChain", "Vector DB"]),
      idea("Text summarisation tool", "Summarise long articles with extractive and abstractive methods.", I, F, ["Transformers", "Streamlit"]),
      idea("Customer-support chatbot", "An FAQ and intent-based bot with escalation to a human.", I, F, ["Rasa", "Python"]),
      idea("Resume parser and skill extractor", "Turn unstructured resumes into structured candidate profiles.", I, M, ["spaCy", "Python"]),
      idea("Language translation web app", "Neural translation with a clean interface and history.", I, M, ["Transformers", "Flask"]),
      idea("Toxic comment classifier", "Detect abusive comments with multi-label classification.", I, F, ["BERT", "PyTorch"]),
      idea("Voice assistant for students", "Speech-to-text commands for timetable, notes and reminders.", I, M, ["Python", "SpeechRecognition"]),
      idea("AI study-notes generator", "Turn lecture text into flashcards and quiz questions.", A, F, ["LLM API", "Next.js"]),
    ],
  },
  {
    id: "data-analysis-visualization",
    title: "Data Analysis & Visualization",
    intro: "Insight-driven projects with real datasets and clear storytelling.",
    serviceSlug: "data-analysis-ai-projects",
    blog: "data-analysis-visualization",
    ideas: [
      idea("Sales performance dashboard", "Regional trends, top products and month-on-month growth.", B, M, ["Power BI", "SQL"]),
      idea("Student performance factor analysis", "Find which habits and conditions correlate with results.", B, M, ["Pandas", "Seaborn"]),
      idea("Public health trend visualisation", "Explore case trends and vaccination data across regions.", I, M, ["Python", "Plotly"]),
      idea("Movie and book rating analysis", "Patterns in genres, ratings and release years.", B, M, ["Pandas", "Matplotlib"]),
      idea("Social media engagement analytics", "Measure what content drives reach and engagement.", I, F, ["Python", "Tableau"]),
      idea("Airline delay and route analysis", "Identify delay causes and busiest routes.", I, F, ["SQL", "Power BI"]),
      idea("E-commerce customer segmentation", "RFM analysis and clustering of customer groups.", I, F, ["K-Means", "Pandas"]),
      idea("Air-quality index analysis", "City-wise pollution trends and seasonal patterns.", I, M, ["Python", "Folium"]),
      idea("HR attrition analytics", "Understand why employees leave with an interactive dashboard.", I, F, ["Power BI", "DAX"]),
      idea("Cricket or football performance analytics", "Player and team insights from open match data.", B, M, ["Python", "Plotly"]),
    ],
  },
  {
    id: "python-projects",
    title: "Python Projects",
    intro: "Approachable Python builds, from first-semester scripts to polished apps.",
    serviceSlug: "data-analysis-ai-projects",
    blog: "programming",
    ideas: [
      idea("Library management system", "Issue, return and fine calculation with a GUI.", B, M, ["Tkinter", "SQLite"]),
      idea("Quiz application with a leaderboard", "Timed multiple-choice quizzes with score history.", B, M, ["Python", "Flask"]),
      idea("Web scraper for price comparison", "Collect prices across stores and alert on drops.", I, M, ["BeautifulSoup", "Pandas"]),
      idea("Weather forecast desktop app", "Live weather from a public API with a clean UI.", B, M, ["Tkinter", "REST API"]),
      idea("Password manager with encryption", "Store credentials securely with a master password.", I, F, ["cryptography", "SQLite"]),
      idea("Personal diary with sentiment tracking", "Journal entries with mood trends over time.", I, M, ["Python", "TextBlob"]),
      idea("Automated email report sender", "Generate and send scheduled reports from data files.", B, M, ["smtplib", "Pandas"]),
      idea("Snake and Tic-Tac-Toe AI game", "Games with a minimax opponent.", B, M, ["Pygame", "Python"]),
      idea("Currency converter with historical charts", "Live rates and trend visualisation.", B, M, ["Python", "Matplotlib"]),
      idea("Student result management system", "Marks entry, grading and printable report cards.", B, M, ["Django", "SQLite"]),
    ],
  },
  {
    id: "android-mobile",
    title: "Android & Mobile Apps",
    intro: "Mobile projects with a clear user, offline support and a backend.",
    serviceSlug: "software-development-projects",
    blog: "software-development",
    ideas: [
      idea("Expense manager app", "Offline-first budgeting with reminders and charts.", B, M, ["Kotlin", "Room"]),
      idea("Student attendance and timetable app", "Class schedule, attendance percentage and low-attendance alerts.", B, M, ["Android Studio", "Firebase"]),
      idea("Food delivery app", "Restaurant listing, cart, live order status and payments.", A, F, ["Flutter", "Firebase"]),
      idea("Fitness and workout tracker", "Plans, progress logs and streaks.", I, M, ["Kotlin", "SQLite"]),
      idea("Campus event and notice app", "Push notifications for events, clubs and notices.", I, F, ["Flutter", "Firebase"]),
      idea("Doctor appointment booking app", "Slots, reminders and a doctor dashboard.", I, F, ["React Native", "Node.js"]),
      idea("Women-safety SOS app", "One-tap alert with live location sharing to contacts.", I, F, ["Android", "Maps API"]),
      idea("Study planner with Pomodoro timer", "Tasks, focus sessions and weekly insights.", B, M, ["Kotlin", "Room"]),
      idea("Bus tracking app", "Live bus location and arrival estimates.", A, F, ["Flutter", "Firebase"]),
      idea("Notes app with cloud sync", "Rich-text notes synced across devices.", B, M, ["Flutter", "Firestore"]),
    ],
  },
  {
    id: "software-engineering-management",
    title: "Software Engineering & Management Systems",
    intro: "Classic syllabus projects that pair well with UML, SRS and test documentation.",
    serviceSlug: "software-development-projects",
    blog: "software-development",
    ideas: [
      idea("Inventory and billing management system", "Stock, invoices, suppliers and low-stock alerts.", I, F, ["Java", "MySQL"]),
      idea("Library management with UML documentation", "Complete SRS, UML and working implementation.", B, F, ["Java", "MySQL"]),
      idea("Employee attendance and payroll system", "Attendance, leave and salary slip generation.", I, F, ["PHP", "MySQL"]),
      idea("Hospital appointment scheduling system", "Patients, doctors, slots and billing.", I, F, ["Laravel", "MySQL"]),
      idea("Online voting system", "Secure registration, one-vote-per-user and result tally.", I, F, ["Django", "PostgreSQL"]),
      idea("Online examination and grading system", "Question bank, timed tests and auto-grading.", I, F, ["Spring Boot", "MySQL"]),
      idea("Hotel reservation system", "Room availability, bookings and billing.", I, F, ["Java", "MySQL"]),
      idea("School management system", "Students, teachers, fees, exams and reports.", I, F, ["Laravel", "MySQL"]),
      idea("Ticket and helpdesk management", "Raise, assign and resolve tickets with SLA tracking.", I, F, ["MERN"]),
      idea("Vehicle service booking system", "Garage slots, job cards and invoices.", B, M, ["PHP", "MySQL"]),
    ],
  },
  {
    id: "cybersecurity-blockchain",
    title: "Cybersecurity & Blockchain",
    intro: "Security-focused and decentralised projects that stand out in interviews.",
    serviceSlug: "software-development-projects",
    blog: "project-ideas",
    ideas: [
      idea("Phishing URL detection", "Classify malicious links using URL and content features.", I, F, ["scikit-learn", "Python"]),
      idea("Secure file-sharing with encryption", "End-to-end encrypted uploads with expiring links.", I, F, ["AES", "Node.js"]),
      idea("Password strength analyser", "Entropy scoring with breach-pattern checks.", B, M, ["Python", "Flask"]),
      idea("Intrusion detection system", "Detect network anomalies from the NSL-KDD dataset.", A, F, ["Python", "ML"]),
      idea("Blockchain-based certificate verification", "Tamper-proof academic certificates on-chain.", A, F, ["Solidity", "Ethereum"]),
      idea("Decentralised voting application", "Transparent voting using smart contracts.", A, F, ["Solidity", "React"]),
      idea("Supply-chain tracking on blockchain", "Track goods from origin to customer.", A, F, ["Hyperledger", "Node.js"]),
      idea("Steganography image tool", "Hide and extract messages inside images.", I, M, ["Python", "OpenCV"]),
      idea("Vulnerability scanner for web apps", "Detect common issues such as XSS and SQL injection.", A, F, ["Python", "OWASP"]),
      idea("Two-factor authentication system", "TOTP-based login with backup codes.", I, M, ["Node.js", "JWT"]),
    ],
  },
  {
    id: "iot-embedded",
    title: "IoT & Embedded Systems",
    intro: "Hardware-plus-software projects that give you something physical to demonstrate.",
    serviceSlug: "software-development-projects",
    blog: "final-year-projects",
    ideas: [
      idea("Smart home automation", "Control lights and fans from a phone app.", I, F, ["ESP32", "MQTT"]),
      idea("Smart agriculture monitoring", "Soil moisture sensing with automated irrigation.", I, F, ["Arduino", "IoT"]),
      idea("Air-quality monitoring station", "Live pollution readings on a web dashboard.", I, F, ["ESP32", "MQ sensors"]),
      idea("RFID-based attendance system", "Tap-to-mark attendance with a cloud database.", B, M, ["Arduino", "RFID"]),
      idea("Smart parking system", "Detect free slots and show them online.", I, F, ["Raspberry Pi", "Sensors"]),
      idea("Health monitoring wearable", "Heart-rate and temperature tracking with alerts.", A, F, ["ESP32", "Firebase"]),
      idea("Smart energy meter", "Real-time consumption tracking and bill estimation.", I, F, ["Arduino", "Node-RED"]),
      idea("Gesture-controlled robot", "Drive a robot with hand gestures.", I, M, ["Arduino", "IMU"]),
      idea("Smart dustbin with fill alerts", "Notify staff when bins are full.", B, M, ["Arduino", "Ultrasonic"]),
      idea("Fire and gas leak alert system", "Detect hazards and send instant notifications.", B, M, ["ESP8266", "Sensors"]),
    ],
  },
  {
    id: "cloud-devops-testing",
    title: "Cloud, DevOps & Software Testing",
    intro: "Engineering-practice projects employers actually look for.",
    serviceSlug: "software-development-projects",
    blog: "software-development",
    ideas: [
      idea("CI/CD pipeline for a web app", "Automated build, test and deploy with GitHub Actions.", I, F, ["GitHub Actions", "Docker"]),
      idea("Automated test suite for an e-commerce site", "End-to-end tests covering cart, checkout and login.", I, F, ["Selenium", "Python"]),
      idea("API test automation framework", "Reusable API tests with reports and CI integration.", I, F, ["Postman", "Newman"]),
      idea("Load testing of a web application", "Measure throughput and bottlenecks under load.", A, F, ["JMeter", "k6"]),
      idea("Dockerised microservices demo", "Split an app into services and orchestrate them.", A, F, ["Docker", "Kubernetes"]),
      idea("Serverless image-processing app", "Resize and tag images on upload.", I, F, ["AWS Lambda", "S3"]),
      idea("Bug tracking tool", "Create, assign and prioritise bugs with a Kanban view.", I, F, ["MERN"]),
      idea("Security testing report for a sample app", "OWASP-based test plan, findings and fixes.", I, F, ["OWASP ZAP", "Burp Suite"]),
      idea("Monitoring dashboard with alerts", "Metrics and alerts for a running service.", A, F, ["Prometheus", "Grafana"]),
      idea("Cross-browser regression suite", "Playwright tests that run on every pull request.", I, M, ["Playwright", "TypeScript"]),
    ],
  },
  {
    id: "excel-powerbi-automation",
    title: "Excel, Power BI & Automation",
    intro: "Business-ready projects that need less code and deliver quick wins.",
    serviceSlug: "data-analysis-ai-projects",
    blog: "microsoft-excel",
    ideas: [
      idea("Student expense tracker in Excel", "Dashboard with pivot tables and monthly charts.", B, M, ["Excel", "Pivot Tables"]),
      idea("Automated attendance and report generator", "Macros that build monthly attendance reports.", I, M, ["Excel VBA"]),
      idea("Interactive Power BI sales dashboard", "Slicers, drill-through and DAX KPIs.", I, F, ["Power BI", "DAX"]),
      idea("Inventory management in Excel", "Stock levels with automatic reorder flags.", B, M, ["Excel", "Formulas"]),
      idea("Invoice generator automation", "Create PDF invoices from a spreadsheet in one click.", I, M, ["Python", "openpyxl"]),
      idea("Financial ratio analysis dashboard", "Company ratios and trends from annual reports.", I, F, ["Power BI", "Excel"]),
      idea("Email and WhatsApp bulk-notification tool", "Send personalised messages from a contact sheet.", I, M, ["Python", "APIs"]),
      idea("Data-cleaning automation pipeline", "Standardise messy files into a clean dataset.", I, F, ["Pandas", "Power Query"]),
      idea("Project management tracker with Gantt chart", "Tasks, owners and progress in one workbook.", B, M, ["Excel", "Charts"]),
      idea("Web-form to spreadsheet workflow", "Capture responses and update dashboards automatically.", B, M, ["Google Sheets", "Apps Script"]),
    ],
  },
];

export const allIdeas = ideaGroups.flatMap((g) => g.ideas.map((i) => ({ ...i, group: g.title })));
export const ideaCount = allIdeas.length;
