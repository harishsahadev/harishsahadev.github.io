import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// ─── Blog ─────────────────────────────────────────────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

// ─── Projects ─────────────────────────────────────────────────────────────────
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    date: z.coerce.date(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    learnings: z.string().optional(),
  }),
});

// ─── Certifications ───────────────────────────────────────────────────────────
const certifications = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/certifications" }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    verifyUrl: z.string().url().optional(),
    badge: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, projects, certifications };