import { projects } from '@/data/projects';
import { publications } from '@/data/publications'; // you'll need a similar data file

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://frex.org';

  const items = [
    ...projects.map(p => ({
      title: p.title,
      description: p.description,
      link: `${siteUrl}/projects/${p.slug}`,
      pubDate: new Date().toUTCString(), // you'd want a real date
    })),
    // ...publications
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>FREX Research</title>
    <link>${siteUrl}</link>
    <description>Latest research from FREX</description>
    ${items.map(item => `
      <item>
        <title>${item.title}</title>
        <description>${item.description}</description>
        <link>${item.link}</link>
        <pubDate>${item.pubDate}</pubDate>
      </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
