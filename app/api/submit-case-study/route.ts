import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { title, client, industry, summary, content, author, email } = data;

    // Validate required fields
    if (!title || !client || !industry || !summary || !content || !author || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Create a slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + uuidv4().slice(0, 8);
    const filename = `${slug}.mdx`;
    const draftDir = path.join(process.cwd(), 'content/drafts');
    const filePath = path.join(draftDir, filename);

    // Ensure drafts directory exists
    await fs.mkdir(draftDir, { recursive: true });

    // Create MDX content with frontmatter
    const frontmatter = `---
title: "${title}"
client: "${client}"
industry: "${industry}"
summary: "${summary}"
author: "${author}"
email: "${email}"
date: ${new Date().toISOString()}
status: draft
---

${content}`;

    await fs.writeFile(filePath, frontmatter, 'utf8');

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
