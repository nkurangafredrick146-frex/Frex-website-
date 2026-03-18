import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  // Check authentication
  const cookieStore = cookies();
  const token = cookieStore.get('admin-token');
  if (token?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const filename = formData.get('filename') as string;
  if (!filename) {
    return NextResponse.json({ error: 'Missing filename' }, { status: 400 });
  }

  const draftPath = path.join(process.cwd(), 'content/drafts', filename);
  const publishedPath = path.join(process.cwd(), 'content/case-studies', filename);

  try {
    // Ensure published directory exists
    await fs.mkdir(path.join(process.cwd(), 'content/case-studies'), { recursive: true });
    
    // Move file from drafts to case-studies
    await fs.rename(draftPath, publishedPath);

    // Optional: update frontmatter to change status from draft to published
    const content = await fs.readFile(publishedPath, 'utf8');
    const updated = content.replace(/status: draft/, 'status: published');
    await fs.writeFile(publishedPath, updated, 'utf8');

    return NextResponse.redirect(new URL('/admin/case-studies', request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to publish' }, { status: 500 });
  }
}
