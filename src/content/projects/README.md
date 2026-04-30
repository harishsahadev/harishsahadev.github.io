# Projects Content Guide

This folder contains one MDX file per project.

Each project file becomes:
- a card in `/projects`
- a detail page at `/projects/<filename>`
- optionally a homepage card on `/` if it is featured

`README.md` is safe here because the projects collection now only loads `*.mdx`.

## How to add a new project

1. Create a new file in this folder.
   Example: `my-project.mdx`
2. The filename becomes the URL slug.
   `my-project.mdx` -> `/projects/my-project`
3. Add frontmatter plus a detailed MDX body.

## Recommended template

```mdx
---
title: "My Project"
description: "One short summary shown in cards and page headers."
tech: ["React", "TypeScript", "Node.js"]
date: 2026-01-15
repoUrl: "https://github.com/yourusername/my-project"
liveUrl: ""
featured: true
order: 1
image: "/images/projects/my-project.gif"
imageAlt: "Short description of the project preview"
youtubeUrl: ""
learnings: "One concise takeaway from building this."
---

Write the long-form project explanation here.

Suggested sections:
- what problem it solves
- who it is for
- how it works
- architecture or workflow
- key features
- technical challenges
- what you learned
```

## Frontmatter reference

### `title`
- Required
- Full project name

### `description`
- Required
- Short summary used in cards and page headers

### `tech`
- Required
- Array of technologies used
- Example: `["Astro", "TypeScript", "PostgreSQL"]`

### `date`
- Required
- Used for sorting
- Format: `YYYY-MM-DD`

### `repoUrl`
- Optional
- GitHub or source code URL
- Can be left as `""`
- If you use `https://github.com/yourusername/...`, the site replaces `yourusername` with the GitHub username from `src/config/site.ts`

### `liveUrl`
- Optional
- Live demo URL
- Can be left as `""`

### `featured`
- Optional but recommended
- `true` means eligible for homepage projects
- `false` means it still appears on `/projects`

### `order`
- Optional
- Lower numbers appear earlier
- Useful when you want manual control over project placement
- Example: `1`, `2`, `3`
- If omitted, the site falls back to date-based ordering within the same featured group

### `image`
- Optional
- Path to an image or gif under `public/`
- Recommended location: `public/images/projects/...`
- Example: `"/images/projects/my-project.gif"`

### `imageAlt`
- Optional but recommended when using `image`
- Accessible alt text for the preview media

### `youtubeUrl`
- Optional
- YouTube URL for an embedded video on the detail page
- Supported examples:
  - `https://www.youtube.com/watch?v=...`
  - `https://youtu.be/...`
  - `https://www.youtube.com/embed/...`
  - `https://www.youtube.com/shorts/...`

### `learnings`
- Optional
- Short reflection shown on project cards and detail pages

## Media rules

Use one of these:
- `image` for image/gif previews
- `youtubeUrl` for a YouTube embed

If both are present, the detail page currently prioritizes `youtubeUrl`.

Recommended project media folder:
- `public/images/projects/`

Examples:
- `image: "/images/projects/crop-disease-assistant.gif"`
- `youtubeUrl: "https://www.youtube.com/watch?v=example"`

## Homepage behavior

The homepage only shows a limited set of project cards.

Current expectation:
- `/projects` shows all projects
- `/` should show top homepage projects based on the homepage query logic

Current sort behavior:
- `featured: true` projects are prioritized over `featured: false`
- within the same featured group, lower `order` values come first
- if `order` is missing, newer `date` values come first

If a project is missing from the homepage, first check:
- is `featured: true`?
- did the dev server refresh after save?

## Common mistakes

- Using `${SITE...}` inside frontmatter
  Frontmatter here is data, not evaluated JS templates.

- Putting media in the wrong place
  Assets should usually go in `public/images/projects/`

- Using invalid URLs
  `repoUrl`, `liveUrl`, and `youtubeUrl` should be valid URLs, or `""`

- Naming the file badly
  The filename becomes the URL slug, so prefer lowercase kebab-case

## Examples in this folder

- `crop-disease-assistant.mdx`
- `news-agent.mdx`
- `aarthik-setu.mdx`
