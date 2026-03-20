import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function POST(request: Request) {
  try {
    // --- Auth check ---
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    const { data: { session } } = await supabase.auth.getSession();

    const adminToken = cookieStore.get('admin-token');
    const isValidCookie = adminToken?.value === process.env.ADMIN_PASSWORD;

    if (!session && !isValidCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // --- Form data ---
    const formData = await request.formData();
    const id = formData.get('id') as string | null;
    const filename = formData.get('filename') as string | null;

    // --- Supabase publish ---
    if (id) {
      const { error } = await supabase
        .from('case_studies')
        .update({ status: 'published', published_at: new Date().toISOString() })
        .eq('id', id);

      if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    // --- Local file publish ---
    if (filename) {
      const draftPath = path.join(process.cwd(), 'content/drafts', filename);
      const publishedPath = path.join(process.cwd(), 'content/case-studies', filename);

      try {
        await fs.mkdir(path.join(process.cwd(), 'content/case-studies'), { recursive: true });
        await fs.rename(draftPath, publishedPath);

        const content = await fs.readFile(publishedPath, 'utf8');
        const updated = content.replace(/status:\s*draft/, 'status: published');
        await fs.writeFile(publishedPath, updated, 'utf8');
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Failed to publish file' }, { status: 500 });
      }
    }

    // --- Redirect back to admin dashboard ---
    return NextResponse.redirect(new URL('/admin/case-studies', request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
      } 
