export const personalInfo = {
  name: "Razhmika Jayakrishnan",
  role: "Java Developer & Manual Testing Enthusiast",
  yearOfStudy: "3rd Year B.Tech IT",
  college: "KGISL Institute of Technology",
  tagline: "3rd Year B.Tech IT Student · Java Developer · Manual Testing Enthusiast",
  about:
    "I am a 3rd-year B.Tech Information Technology student at KGISL Institute of Technology with a strong passion for Java backend development, relational database systems, and meticulous manual software testing. Experienced in building robust object-oriented applications, crafting comprehensive test suites, identifying edge-case defects, and developing responsive web interfaces. Currently seeking internship and collaborative opportunities where I can apply my engineering mindset to ship reliable software.",
  phone: "9629230948",
  email: "razhmikaj@gmail.com",
  address: "Vedharanyam, Nagapattinam, Tamil Nadu – 614809",
  linkedin: "https://www.linkedin.com/in/razhmika-jayakrishnan-851572351",
  github: "https://github.com/Razhmika",
  availability: "Available for Internships & Projects",
};

export const quickStats = [
  { value: "3rd Year", label: "Academic Standing", detail: "B.Tech IT @ KGISL" },
  { value: "3+", label: "Completed Projects", detail: "Java, Web & QA Systems" },
  { value: "5+", label: "Technologies Mastered", detail: "Languages, DB & Tools" },
  { value: "100%", label: "Testing Rigor", detail: "Positive & Edge-case Coverage" },
];

export const marqueeItems = [
  "JAVA CORE & OOP",
  "MANUAL SOFTWARE TESTING",
  "TEST CASE EXECUTION",
  "MYSQL RELATIONAL DB",
  "REACT.JS FRONTEND",
  "DEFECT REPORTING",
  "BOUNDARY VALUE ANALYSIS",
  "JDBC & DATA PERSISTENCE",
  "3RD YEAR B.TECH IT",
  "ALGORITHMS & DATA STRUCTURES",
];

export const gmailComposeUrl = (subject = "Portfolio Enquiry for Razhmika", body = "Hi Razhmika,\n\nI came across your portfolio and would like to connect regarding an internship/opportunity.") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const services = [
  {
    title: "Java Backend Development",
    icon: "⚙️",
    badge: "Core Engineering",
    description: "Architecting modular, object-oriented applications with strong business logic, clean class design, and dependable data persistence.",
    keywords: ["OOP Architecture", "Multi-threading", "Exception Handling", "JDBC Integration", "Console & Business Systems"],
    color: "emerald",
  },
  {
    title: "Manual Software QA & Testing",
    icon: "🧪",
    badge: "Quality Assurance",
    description: "Designing structured test cases, validating boundary conditions, executing functional tests, and systematically documenting bug lifecycles.",
    keywords: ["Test Case Design", "Boundary Value Analysis", "Equivalence Partitioning", "Defect Logging", "Smoke & Regression Testing"],
    color: "teal",
  },
  {
    title: "Relational Database Design",
    icon: "🗄️",
    badge: "Data Architecture",
    description: "Modeling normalized schemas, writing optimized SQL queries, enforcing foreign key integrity, and managing transaction consistency.",
    keywords: ["MySQL", "Schema Normalization", "CRUD Operations", "Data Validation", "Relational Integrity"],
    color: "cyan",
  },
  {
    title: "Modern Web Interfaces",
    icon: "🌐",
    badge: "Frontend UI/UX",
    description: "Crafting intuitive, accessible, and responsive user interfaces using React, JavaScript (ES6+), and clean component architecture.",
    keywords: ["React.js", "Responsive Layouts", "JavaScript ES6+", "Tailwind CSS", "Interactive States"],
    color: "lime",
  },
];

export const skills = [
  // Backend
  {
    name: "Java",
    category: "Backend",
    level: "Advanced",
    icon: "☕",
    keywordDesc: "OOP Principles, Multithreading, Robust Architecture, Collections Framework, Business Logic",
    tags: ["OOP", "Collections", "JDBC", "Core Java"],
  },
  // Testing & QA
  {
    name: "Manual Testing",
    category: "Testing / QA",
    level: "Proficient",
    icon: "🧪",
    keywordDesc: "Test Planning, Test Case Writing, Scenario Mapping, Defect Life Cycle Tracking",
    tags: ["Test Cases", "STLC", "Bug Reporting", "Quality Metrics"],
  },
  {
    name: "Software QA Methods",
    category: "Testing / QA",
    level: "Proficient",
    icon: "📋",
    keywordDesc: "Boundary Value Analysis, Equivalence Partitioning, Regression & Sanity Verification",
    tags: ["BVA", "Black-box", "Sanity Testing", "Edge Cases"],
  },
  // Database
  {
    name: "MySQL",
    category: "Database",
    level: "Proficient",
    icon: "🗄️",
    keywordDesc: "Relational Schema Design, Foreign Keys, Complex SQL Queries, Transaction Safety",
    tags: ["RDBMS", "SQL Queries", "Normalization", "Data Integrity"],
  },
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    level: "Intermediate",
    icon: "⚛️",
    keywordDesc: "Component-Based UI, Reactive State Management, Hooks, Dynamic Views",
    tags: ["Components", "Hooks", "Virtual DOM", "SPA"],
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Proficient",
    icon: "⚡",
    keywordDesc: "DOM Manipulation, Event Handling, Modern Syntax, Async Logic, Form Validation",
    tags: ["ES6+", "Async/Await", "DOM API", "Functional"],
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: "Advanced",
    icon: "🌐",
    keywordDesc: "Semantic Markup, Document Structuring, Accessibility, Cross-Browser Support",
    tags: ["Semantic HTML", "SEO Basics", "Clean Structure"],
  },
  {
    name: "CSS3 & Tailwind",
    category: "Frontend",
    level: "Proficient",
    icon: "🎨",
    keywordDesc: "Responsive Grid & Flexbox, Utility-First Styling, Custom Transitions & Animations",
    tags: ["Flexbox", "Grid", "Tailwind CSS", "Animations"],
  },
];

export const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "KGISL Institute of Technology",
    period: "2024 – 2028",
    year: "3rd Year Active Student",
    statusBadge: "Currently Enrolled · 3rd Year",
    description:
      "Actively pursuing my 3rd year in B.Tech Information Technology. Dedicated to mastering object-oriented system design, relational database administration, and end-to-end software quality assurance practices through structured labs and project development.",
    coursework: [
      "Object Oriented Programming (Java)",
      "Database Management Systems (DBMS)",
      "Software Engineering & Testing Methodologies",
      "Data Structures & Algorithms",
      "Computer Networks & Web Systems",
    ],
  },
];

export const projects = [
  {
    title: "Stock Tracking & Vendor Management System",
    category: "Backend & Systems",
    icon: "📦",
    description:
      "A comprehensive Java & MySQL enterprise management system designed to monitor inventory flow, automate restocking alerts, and manage supplier transactions. Built with a clean 3-tier architecture ensuring ACID transactional consistency.",
    keywordDesc: "Java Core · MySQL · JDBC · 3-Tier Architecture · Inventory Tracking · Full QA Coverage",
    qaHighlight: "Tested with 40+ positive/negative test cases covering stock underflow, duplicate vendor entries, and concurrent updates.",
    tags: ["Java", "MySQL", "JDBC", "System Design", "Inventory Control", "Manual Testing"],
    gradient: "from-emerald-950 via-zinc-900 to-black",
    accent: "#10b981",
    github: "https://github.com/Razhmika",
  },
  {
    title: "Event Booking Management Platform",
    category: "Web Applications",
    icon: "🎟️",
    description:
      "A responsive, full-featured web booking portal enabling smooth event discovery, seat reservations, and administrative attendee logs. Features client-side form validations and dynamic UI states.",
    keywordDesc: "React / HTML5 · JavaScript · MySQL · Responsive UI · Form Validation · Cross-Browser Testing",
    qaHighlight: "Executed boundary tests on date pickers, ticket quota limits, and email input sanitation across Chrome, Firefox, and Safari.",
    tags: ["HTML5", "CSS3", "JavaScript", "MySQL", "UI/UX", "Quality Assurance"],
    gradient: "from-teal-950 via-zinc-900 to-black",
    accent: "#14b8a6",
    github: "https://github.com/Razhmika",
  },
  {
    title: "Music Playlist Management System",
    category: "Java & Systems",
    icon: "🎵",
    description:
      "A high-efficiency Java console application implementing custom playlist operations such as circular queuing, song search, shuffle algorithms, and metadata sorting. Leveraged clean OOP principles and custom data structures.",
    keywordDesc: "Java OOP · Custom Linked List & Queue · Search & Shuffle · Robust Exception Handling",
    qaHighlight: "Stress-tested memory usage and handled boundary scenarios including empty playlist traversal and out-of-bounds index modifications.",
    tags: ["Java", "OOP Design", "Data Structures", "Algorithms", "Unit Logic Testing"],
    gradient: "from-cyan-950 via-zinc-900 to-black",
    accent: "#06b6d4",
    github: "https://github.com/Razhmika",
  },
];

export const achievements = [
  {
    title: "CodeAlpha Certification",
    issuer: "CodeAlpha Tech",
    description:
      "Completed intensive certification in software development, demonstrating strong problem-solving abilities and receiving a formal Letter of Recommendation for exceptional dedication.",
    icon: "🏆",
    badge: "Letter of Recommendation",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
  },
  {
    title: "Cybersecurity Paper Presentation",
    issuer: "Technical Symposium",
    description:
      'Researched and presented a peer-reviewed technical paper on "Cybersecurity and Its Importance", detailing threat vectors, cryptography fundamentals, and defensive countermeasures.',
    icon: "🛡️",
    badge: "Paper Presentation Award",
    color: "from-teal-400 to-cyan-500",
    glow: "rgba(20,184,166,0.25)",
  },
  {
    title: "RABSH-25 International Conference",
    issuer: "RABSH-25 Conference Board",
    description:
      "Presented an academic abstract exploring computational mathematics using the Runge-Kutta Method and received recognition for rigorous analytical methodology.",
    icon: "🌐",
    badge: "International Conference",
    color: "from-cyan-400 to-emerald-500",
    glow: "rgba(6,182,212,0.25)",
  },
];

export const languages = [
  { name: "Tamil", level: "Native Proficiency", percent: 100, role: "Primary / Mother Tongue" },
  { name: "English", level: "Professional Working Proficiency", percent: 88, role: "Technical Documentation & Presentation" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
