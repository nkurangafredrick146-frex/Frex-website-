import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
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

    // Create slug from title
    const slug =
      title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') +
      '-' +
      uuidv4().slice(0, 8);

    // --- 1) Insert into Supabase as draft ---
    const { error } = await supabaseAdmin.from('case_studies').insert({
      title,
      client,
      industry,
      summary,
      content,
      author,
      email,
      slug,
      status: 'draft',
    });

    if (error) throw error;

    // --- 2) Save as local MDX draft ---
    const filename = `${slug}.mdx`;
    const draftDir = path.join(process.cwd(), 'content/drafts');
    const filePath = path.join(draftDir, filename);

    await fs.mkdir(draftDir, { recursive: true });

    const frontmatter = `---
title: "${title}"
client: "${client}"
industry: "${industry}"
summary: "${summary}"
author: "${author}"
email: "${email}"
date: ${new Date().toISOString()}
status: draft
slug: "${slug}"
---

${content}`;

    await fs.writeFile(filePath, frontmatter, 'utf8');

    // --- Response ---
    return NextResponse.json({ success: true, slug });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
