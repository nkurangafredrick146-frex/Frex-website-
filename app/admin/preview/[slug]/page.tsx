 import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Button from '@/components/Button';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function PreviewPage({ params }: { params: { slug: string } }) {
  // --- Try Supabase first ---
  const supabase = createServerComponentClient({ cookies });
  const { data: caseStudy } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button variant="outline" size="sm" href="/admin/case-studies">← Back to Admin</Button>
          <h1 className="text-4xl font-bold mt-4 mb-6">{caseStudy.title} (Preview)</h1>
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={caseStudy.content} />
          </div>
        </div>
      </div>
    );
  }

  // --- Fallback: check local MDX files ---
  const filename = `${params.slug}.mdx`;
  const draftPath = path.join(process.cwd(), 'content/drafts', filename);
  const publishedPath = path.join(process.cwd(), 'content/case-studies', filename);

  let filePath = draftPath;
  let fileExists = await fs.access(filePath).then(() => true).catch(() => false);
  if (!fileExists) {
    filePath = publishedPath;
    fileExists = await fs.access(filePath).then(() => true).catch(() => false);
  }
  if (!fileExists) notFound();

  const source = await fs.readFile(filePath, 'utf8');
  const parts = source.split('---');
  const frontmatter = parts[1];
  const content = parts.slice(2).join('---');

  const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : 'Untitled';

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Button variant="outline" size="sm" href="/admin/case-studies">← Back to Admin</Button>
        <h1 className="text-4xl font-bold mt-4 mb-6">{title} (Preview)</h1>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}
