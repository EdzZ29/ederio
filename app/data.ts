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
    role: "App Developer",
    company: "BizFrend",
    companyUrl: "https://bizfrend.com/",
    badge: "Part-time",
    summary: "Building and shipping mobile app features, from the screens users tap to the APIs behind them.",
  },
  {
    period: "June 2026 – Present",
    role: "Website Developer",
    company: "BizFrend",
    companyUrl: "https://bizfrend.com/",
    badge: "Part-time",
    summary: "Building web platform features across front-end and back-end, from UI to database.",
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
    title: "Rank & Render",
    type: "Website · Developer & Deployment",
    summary:
      "Marketing site for a digital growth studio that builds websites, SEO, AI automation and apps for businesses. I developed it end to end and deployed it on Vercel.",
    image: "/images/work/rankandrender.webp",
    tags: ["Website", "Business", "Vercel"],
    link: { label: "Visit site", href: "https://rankandrender.com/" },
  },
  {
    title: "Zap Zone Booking Platform",
    type: "Website · Team project",
    summary:
      "Online booking for 12 Zap Zone locations across Michigan: a location map and search, packages, attractions and events. Built as part of the development team.",
    image: "/images/work/zapzone-booking.webp",
    tags: ["Web App", "Booking", "Team"],
    link: { label: "Visit site", href: "https://booking.zap-zone.com/" },
  },
  {
    title: "Zap Zone Analytics App",
    type: "Mobile App",
    summary: "The analytics app I developed for Zap Zone, putting the business’s numbers in the team’s pocket.",
    tags: ["Mobile App", "Analytics", "Developer"],
  },
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
      "Building and shipping features for the BizFrend web platform and mobile app as an App Developer and Website Developer.",
    tags: ["Full-Stack", "Mobile", "Production"],
    link: { label: "Visit site", href: "https://bizfrend.com/" },
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
    body: "REST APIs with NestJS and Laravel, PostgreSQL with Prisma, Redis caching, and Supabase auth, storage and row-level security.",
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
      { name: "Prisma", icon: "prisma.svg" },
      { name: "Redis", icon: "redis.svg" },
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
    group: "Deployment",
    items: [
      { name: "Vercel", icon: "vercel.svg" },
      { name: "Cloudflare", icon: "cloudflare.svg" },
      { name: "Render", icon: "render.svg" },
      { name: "Supabase", icon: "supabase.svg" },
      { name: "GitHub", icon: "github.svg" },
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
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];
