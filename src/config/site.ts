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
  title: "Harish Sahadev — Full-Stack Developer",
  description:
    "Full-stack developer with a bias toward clean APIs, fast UIs, and things that actually ship. Based in Kerala — building globally.",

  // The value you set in astro.config.mjs → site: "..."
  url: "https://harishsahadev.github.io",

  // Hero section
  tagline: "I build software people remember.",
  bio: "Full-stack developer with a bias toward clean APIs, fast UIs, and things that actually ship. Based in Kerala — building globally.",
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
  stack: ["TypeScript", "React", "Astro", "Node.js", "PostgreSQL", "Docker"],

  // Nav resume link
  resumeUrl: "/resume.pdf",

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
    // Add more as needed:
    // devto: "https://dev.to/harishsahadev",
    // devtoHandle: "@harishsahadev",
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
