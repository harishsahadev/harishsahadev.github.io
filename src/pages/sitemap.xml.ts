import { getCollection } from "astro:content";
import { SITE } from "../config/site";

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildUrl(url: string) {
  return new URL(url, SITE.url).toString();
}

function renderItem({ loc, lastmod }: { loc: string; lastmod?: string }) {
  return `  <url>\n    <loc>${buildUrl(loc)}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""}  </url>\n`;
}

export async function GET() {
  const blogPosts = await getCollection("blog", ({ data }) => !data.draft);
  const projects = await getCollection("projects");

  const items = [
    { loc: "/" },
    { loc: "/blog/" },
    { loc: "/projects/" },
    { loc: "/certificates/" },
    ...blogPosts.map((post) => ({
      loc: `/blog/${post.id}/`,
      lastmod: formatDate(post.data.updated ?? post.data.pubDate),
    })),
    ...projects.map((project) => ({
      loc: `/projects/${project.id}/`,
      lastmod: formatDate(project.data.updated ?? project.data.pubDate ?? new Date()),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    items.map(renderItem).join("") +
    `</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
