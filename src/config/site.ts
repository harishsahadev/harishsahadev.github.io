// src/config/site.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all personal info used across the site.
// Update this file — everything else pulls from here.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  // Personal
  firstName: "Harish",
  lastName: "Sahadev M",
  get fullName() { return `${this.firstName} ${this.lastName}`; },

  // Used in <title> and meta tags
  title: "Harish Sahadev M — Applied AI & Full-Stack Engineer",
  description: "Applied AI and full-stack engineer building scalable systems with LLMs, modern web technologies, and cloud infrastructure.",

  // The value you set in astro.config.mjs → site: "..."
  url: "https://harishsahadev.github.io",

  // Hero section
  tagline: "I build software people remember.",
  bio: "I build real-world AI systems across the stack—from model design to deployment—combining LLMs, full-stack development, and scalable infrastructure.",
  availableForWork: true,
  currentlyLearning: "Distributed systems & Rust",

  // Typewriter roles on hero
  roles: [
  "Applied AI Engineer",
  "Full-Stack Developer",
  "Frontend Lead",
  "ML Operations Engineer",
  "System Designer",
  "Lifelong Learner",
  ],

  // Tech stack badges on hero
  stack: ["Python", "TypeScript", "FastAPI", "RAG", "LLMs", "React", "Docker", "Kubernetes", "JAVA", "DBMS", "Go"],

  // Social links — used in contact section + footer
  // Set a value to "" to hide that link
  social: {
    email: "harishsahadev@gmail.com",
    githubUsername: "harishsahadev",
    github: "https://github.com/harishsahadev",
    githubHandle: "@harishsahadev",
    linkedin: "https://linkedin.com/in/harishsahadev",
    linkedinName: "Harish Sahadev",
    twitter: "https://twitter.com/harishsahadev",
    twitterHandle: "@harishsahadev",
    kaggle: "https://www.kaggle.com/harishsahadevm",
    kaggleHandle: "@harishsahadevm",
    kaggleIcon: "/images/logos/kaggle.svg",
    huggingFace: "https://huggingface.co/harishsahadev",
    huggingFaceHandle: "@harishsahadev",
    huggingFaceIcon: "/images/logos/huggingface.svg",
    devto: "https://dev.to/harishsahadev",
    devtoHandle: "@harishsahadev",
    devtoIcon: "/images/logos/devto.svg",
  },

  // Footer
  builtWith: "Astro",

  // Blog comments
  giscus: {
    repo: "",
    repoId: "",
    category: "Announcements",
    categoryId: "",
  },
} as const;
