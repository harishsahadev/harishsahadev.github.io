# Notes Content Guide

## How to add a new note

1. Create a new folder under `src/content/notes`.
   Example: `src/content/notes/my-new-note`
2. Add one or more `.md` or `.mdx` files inside that folder.
3. Add frontmatter metadata at the top of each note page.
4. If you want a note root page at `/notes/<note-name>`, create an `index.md` or `index.mdx` file inside the note folder.

## Required frontmatter

```yaml
---
title: "Page title"
description: "Short summary for the note page."
pubDate: "2026-06-10"
pageNumber: 1
tags:
  - notes
  - topic
---
```

- `title`: used as the page heading and note index title.
- `description`: used for the note list and page links.
- `pubDate`: used for sorting within Astro content.
- `pageNumber`: controls ordering inside the note.
- `tags`: optional labels for filtering or metadata.

## Page ordering

Notes are grouped by folder. Pages inside a note are ordered by `pageNumber`. If two pages have the same number, they fall back to alphabetical order.

## Root note page

- If your note folder contains an `index.md` or `index.mdx`, that file will be treated as the root note landing page.
- If no `index` file exists, the first page in order becomes the root note link.

## Example structure

```
src/content/notes/my-first-note/
  index.mdx
  introduction.mdx
  advanced-concepts.mdx
```

This gives you:

- `/notes`
- `/notes/my-first-note`
- `/notes/my-first-note/introduction`
- `/notes/my-first-note/advanced-concepts`

## Notes UI behavior

- The `/notes` page shows only the main note heading.
- If a note has multiple pages, a down arrow expands the subpage list.
- If a note has a root `index` page, that page is used as the note link.
