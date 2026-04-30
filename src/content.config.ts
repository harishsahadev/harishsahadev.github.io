import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "zod";
import { parseContentDate } from "./utils/contentDates";

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
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    date: z.union([z.string(), z.date()]).transform((value, ctx) => {
      try {
        return parseContentDate(value);
      } catch {
        ctx.addIssue({
          code: "custom",
          message: "Date must be in yyyy-mm or yyyy-mm-dd format",
        });
        return z.NEVER;
      }
    }),
    liveUrl: z.union([z.string().url(), z.literal("")]).optional(),
    repoUrl: z.union([z.string().url(), z.literal("")]).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    youtubeUrl: z.union([z.string().url(), z.literal("")]).optional(),
    featured: z.boolean().default(false),
    order: z.number().int().positive().optional(),
    learnings: z.string().optional(),
  }),
});

// ─── Certifications ───────────────────────────────────────────────────────────
const certifications = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/certifications" }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.union([z.string(), z.date()]).transform((value, ctx) => {
      try {
        return parseContentDate(value);
      } catch {
        ctx.addIssue({
          code: "custom",
          message: "Date must be in yyyy-mm or yyyy-mm-dd format",
        });
        return z.NEVER;
      }
    }),
    order: z.number().int().positive().optional(),
    tags: z.array(z.string()).default([]),
    verifyUrl: z.union([z.string().url(), z.literal("")]).optional(),
    badge: z.string().optional(),
    description: z.string().optional(),
    detailedDescription: z.string().optional(),
  }),
});

export const collections = { blog, projects, certifications };
