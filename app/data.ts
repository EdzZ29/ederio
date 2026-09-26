// All portfolio content lives here. Edit text, links and image paths in this file.
// Image paths are relative to /public. A missing image shows a placeholder
// with the expected path, so you can drop files in without touching the code.

export const profile = {
  name: "Edmundo Ederio",
  shortName: "Edmundo",
  role: "Full-Stack & Mobile App Developer",
  location: "Butuan City, Philippines",
  phone: "09458573462",
  email: "jrederio01@gmail.com",
  resume: "/Ederio-Resume.pdf",
  photo: "/images/profile.webp",
  available: true,
};

export const socials = {
  github: "https://github.com/EdzZ29",
  linkedin: "https://www.linkedin.com/in/edmundo-ederio-125208386/",
  facebook: "https://www.facebook.com/JrEderio",
  instagram: "https://www.instagram.com/edzlds/",
  tiktok: "https://www.tiktok.com/@jrederio",
};

export const heroStats = [
  { value: "BSIT", label: "Caraga State University" },
  { value: "Web & Mobile", label: "Platforms I build for" },
  { value: "Front to back", label: "UI, APIs & databases" },
  { value: "Butuan City", label: "Based in PH" },
];

export const marquee = [
  "Full-Stack Development • Mobile Apps • APIs • Databases",
  "Software Developer",
  "Based in Butuan City, Philippines — Working Worldwide",
];

export const about = [
  "I’m Edmundo Ederio, a Full-Stack Developer and Mobile App Developer. I build web apps, mobile apps, APIs and databases, and I take pride in software that is reliable, secure and easy to use.",
  "I develop secure, well-structured systems, from clean, responsive interfaces to reliable back-end logic and well-modeled data. My work is detailed, accurate, and built around the real needs of the people who use it.",
  "I am focused, organized, and collaborative, someone you can count on to deliver quality work, maintain trust, and go beyond what is expected.",
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  note?: string;
  badge?: string;
  summary?: string;
};

// Ordered for a developer role: most relevant first.
export const experience: Experience[] = [
  {
    period: "June 2026 – Present",
    role: "Full Stack Developer / App Developer",
    company: "BizFrend",
    companyUrl: "https://bizfrend.com/",
    badge: "Part-time",
    summary:
      "Building and shipping features for the BizFrend web platform and mobile app, across front-end and back-end.",
  },
  {
    period: "2025 – 2026",
    role: "Lead Developer / Programmer",
    company: "AI-Integrated OBE Grading System (Capstone Project)",
    note: "Caraga State University – Cabadbaran Campus",
    summary:
      "Led development of an AI-integrated, outcome-based education grading system, from architecture and database to a working build.",
  },
  {
    period: "2024 – 2025",
    role: "MIS Intern / On-the-Job Trainee (OJT)",
    company: "Caraga State University – Cabadbaran Campus",
    summary: "Management Information System office: supported the campus’s day-to-day information systems.",
  },
];

export const education: { period: string; title: string; school: string; note: string; logo?: string }[] = [
  {
    period: "2022 – 2026",
    title: "BS in Information Technology",
    school: "Caraga State University – Cabadbaran Campus",
    note: "Major in Information Technology",
    logo: "/images/education/csu-seal.webp",
  },
  {
    period: "2014 – 2019",
    title: "Technical Vocational Livelihood",
    school: "Father Urios Institute of Technology of Ampayon Inc.",
    note: "Computer System Servicing",
  },
];

export type Project = {
  title: string;
  type: string;
  year?: string;
  summary: string;
  image?: string; // leave out to show a "coming soon" placeholder
  tags: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "AI-Integrated OBE Grading System",
    type: "Full-Stack Web App · Capstone",
    year: "2025 – 2026",
    summary:
      "Outcome-based education grading system with AI integration, built as Lead Developer for Caraga State University.",
    image: "/images/work/csucc-grading.webp",
    tags: ["Full-Stack", "AI", "Lead Developer"],
  },
  {
    title: "BizFrend",
    type: "Web Platform & Mobile App",
    year: "2026 – Present",
    summary:
      "Building and shipping features for the BizFrend web platform and mobile app as a Full Stack / App Developer.",
    tags: ["Full-Stack", "Mobile", "Production"],
    link: { label: "bizfrend.com", href: "https://bizfrend.com/" },
  },
];

export const capabilities = [
  {
    title: "Full-Stack Web Development",
    body: "End-to-end web apps: Vue, Nuxt and React front-ends, NestJS and Laravel back-ends, PostgreSQL and Supabase for data.",
  },
  {
    title: "Mobile App Development",
    body: "Cross-platform mobile apps with React Native and Expo, taken from a rough idea to a working, tested build.",
  },
  {
    title: "APIs & Databases",
    body: "REST APIs with NestJS and Laravel, PostgreSQL schemas and Supabase auth, storage and row-level security.",
  },
];

export const stack = [
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react_light.svg" },
      { name: "Vue", icon: "vue.svg" },
      { name: "Nuxt", icon: "nuxt.svg" },
      { name: "Tailwind", icon: "tailwindcss.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "HTML", icon: "html5.svg" },
      { name: "CSS", icon: "css_old.svg" },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      { name: "NestJS", icon: "nestjs.svg" },
      { name: "Laravel", icon: "laravel.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "Supabase", icon: "supabase.svg" },
    ],
  },
  {
    group: "Mobile",
    items: [
      { name: "React Native", icon: "react_light.svg" },
      { name: "Expo", icon: "expo.svg" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "VS Code", icon: "vscode.svg" },
      { name: "Claude", icon: "claude-ai-icon.svg" },
    ],
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#build", label: "Start a project" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

// ---- "Start a project" builder -------------------------------------------

export type BuildOption = {
  id: string;
  name: string;
  icon?: string; // file in /public/icons
  pitch: string; // one line: what it's best for
  note: string; // shown in the brief as "how I'd approach it"
};

export const projectTypes = ["Website", "Web App", "Mobile App", "Web + Mobile", "API / Backend"];

export const buildLayers: { id: "frontend" | "backend" | "database"; label: string; question: string; options: BuildOption[] }[] = [
  {
    id: "frontend",
    label: "Frontend",
    question: "What will your users see and tap?",
    options: [
      {
        id: "react",
        name: "React / Next.js",
        icon: "react_light.svg",
        pitch: "SEO-friendly sites, dashboards and web apps.",
        note: "React with Next.js for fast, search-friendly pages and a rich dashboard experience.",
      },
      {
        id: "vue",
        name: "Vue / Nuxt",
        icon: "nuxt.svg",
        pitch: "Lightweight, quick to iterate, great for admin panels.",
        note: "Vue with Nuxt: lightweight, quick to iterate on and easy to hand over.",
      },
      {
        id: "rn",
        name: "React Native + Expo",
        icon: "expo.svg",
        pitch: "One codebase for iOS and Android.",
        note: "React Native + Expo, so iOS and Android ship from one codebase with over-the-air updates.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    question: "What runs the logic, auth and APIs?",
    options: [
      {
        id: "nest",
        name: "NestJS",
        icon: "nestjs.svg",
        pitch: "Structured TypeScript APIs that scale with your team.",
        note: "A NestJS API in TypeScript: modular, typed end to end and easy to extend.",
      },
      {
        id: "laravel",
        name: "Laravel",
        icon: "laravel.svg",
        pitch: "Batteries included: auth, queues, admin, mail.",
        note: "Laravel for built-in auth, queues and mail, which makes it quick for business systems.",
      },
      {
        id: "supabase",
        name: "Supabase",
        icon: "supabase.svg",
        pitch: "Managed auth, storage and realtime. Fastest to launch.",
        note: "Supabase for managed auth, storage and realtime, so we spend time on features, not servers.",
      },
    ],
  },
  {
    id: "database",
    label: "Database",
    question: "Where does your data live?",
    options: [
      {
        id: "postgres",
        name: "PostgreSQL",
        icon: "postgresql.svg",
        pitch: "Reliable relational data with strong integrity.",
        note: "PostgreSQL with a normalized schema, indexes and migrations from day one.",
      },
      {
        id: "supabase-db",
        name: "Supabase Postgres",
        icon: "supabase.svg",
        pitch: "Hosted Postgres with row-level security built in.",
        note: "Hosted Postgres on Supabase with row-level security, so each user only sees their own data.",
      },
    ],
  },
];

export const buildFeatures = [
  "Login & user roles",
  "Admin dashboard",
  "Payments",
  "Real-time updates",
  "File uploads",
  "AI integration",
  "Push notifications",
  "Reports & analytics",
];

export const timelines = ["ASAP", "1–3 months", "3+ months", "Flexible"];

export const faqs = [
  {
    q: "Do you handle both the frontend and the backend?",
    a: "Yes. I build the frontend, write the API and set up the database, so there’s one person accountable for the whole thing working together.",
  },
  {
    q: "Which database should I choose?",
    a: "For most apps, PostgreSQL. It’s reliable, handles relationships between data well and scales a long way. If you want auth, file storage and realtime without running servers, Supabase gives you Postgres with all of that built in.",
  },
  {
    q: "Can you build for both iOS and Android?",
    a: "Yes, with React Native and Expo. One codebase runs on both platforms, which keeps cost and maintenance down, and it can share logic with your web app.",
  },
  {
    q: "Not sure what stack you need?",
    a: "That’s normal. Pick “Not sure” in the builder above, describe what you want to achieve, and I’ll recommend a stack that fits your budget and timeline.",
  },
];
