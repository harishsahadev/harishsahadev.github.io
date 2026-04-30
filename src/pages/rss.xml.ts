import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";

export async function GET() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const items = posts
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
      content: post.data.description,
      categories: post.data.tags,
    }));

  const feed = await rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.url,
    items,
    customData: `<language>en-US</language>`,
  });

  return new Response(feed.body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
