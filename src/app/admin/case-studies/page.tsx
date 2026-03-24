 import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import Button from '@/components/Button';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Helper to read MDX drafts/published
async function getLocalCaseStudies() {
  const draftsDir = path.join(process.cwd(), 'content/drafts');
  const publishedDir = path.join(process.cwd(), 'content/case-studies');

  let drafts: { filename: string; title: string; author: string; date: string }[] = [];
  let published: { filename: string; title: string; author: string; date: string }[] = [];

  try {
    const draftFiles = await fs.readdir(draftsDir);
    drafts = await Promise.all(
      draftFiles.filter(f => f.endsWith('.mdx')).map(async (f) => {
        const content = await fs.readFile(path.join(draftsDir, f), 'utf8');
        const titleMatch = content.match(/title:\s*"([^"]+)"/);
        const authorMatch = content.match(/author:\s*"([^"]+)"/);
        const dateMatch = content.match(/date:\s*([^\n]+)/);
        return {
          filename: f,
          title: titleMatch ? titleMatch[1] : 'Untitled',
          author: authorMatch ? authorMatch[1] : 'Unknown',
          date: dateMatch ? dateMatch[1] : new Date().toISOString(),
        };
      })
    );
  } catch (e) { /* no drafts folder */ }

  try {
    const pubFiles = await fs.readdir(publishedDir);
    published = await Promise.all(
      pubFiles.filter(f => f.endsWith('.mdx')).map(async (f) => {
        const content = await fs.readFile(path.join(publishedDir, f), 'utf8');
        const titleMatch = content.match(/title:\s*"([^"]+)"/);
        const authorMatch = content.match(/author:\s*"([^"]+)"/);
        const dateMatch = content.match(/date:\s*([^\n]+)/);
        return {
          filename: f,
          title: titleMatch ? titleMatch[1] : 'Untitled',
          author: authorMatch ? authorMatch[1] : 'Unknown',
          date: dateMatch ? dateMatch[1] : new Date().toISOString(),
        };
      })
    );
  } catch (e) { /* no published folder */ }

  return { drafts, published };
}

export default async function AdminCaseStudies() {
  // Supabase client
  const supabase = createServerComponentClient({ cookies });

  // Supabase drafts/published
  const { data: supabaseDrafts } = await supabase
    .from('case_studies')
    .select('*')
    .eq('status', 'draft')
    .order('created_at', { ascending: false });

  const { data: supabasePublished } = await supabase
    .from('case_studies')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  // Local drafts/published
  const { drafts: localDrafts, published: localPublished } = await getLocalCaseStudies();

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Manage Case Studies
          </h1>
          <form action="/auth/signout" method="post">
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
              Logout
            </button>
          </form>
        </div>

        {/* Local Drafts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Local Drafts ({localDrafts.length})</h2>
          {!localDrafts.length ? (
            <p className="text-gray-400">No local drafts pending.</p>
          ) : (
            <div className="space-y-4">
              {localDrafts.map((d) => (
                <div key={d.filename} className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{d.title}</h3>
                    <p className="text-gray-400">by {d.author} • {new Date(d.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" href={`/admin/preview/${d.filename.replace('.mdx', '')}`}>
                      Preview
                    </Button>
                    <form action={`/api/admin/publish-case-study`} method="POST">
                      <input type="hidden" name="filename" value={d.filename} />
                      <Button type="submit" variant="primary" size="sm">Publish</Button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Supabase Drafts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Supabase Drafts ({supabaseDrafts?.length || 0})</h2>
          {!supabaseDrafts?.length ? (
            <p className="text-gray-400">No Supabase drafts pending.</p>
          ) : (
            <div className="space-y-4">
              {supabaseDrafts.map((cs) => (
                <div key={cs.id} className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{cs.title}</h3>
                    <p className="text-gray-400">by {cs.author} • {new Date(cs.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" href={`/admin/preview/${cs.slug}`}>
                      Preview
                    </Button>
                    <form action="/api/admin/publish-case-study" method="POST">
                      <input type="hidden" name="id" value={cs.id} />
                      <Button type="submit" variant="primary" size="sm">Publish</Button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Local Published */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Local Published ({localPublished.length})</h2>
          {!localPublished.length ? (
            <p className="text-gray-400">No local published case studies.</p>
          ) : (
            <div className="space-y-2">
              {localPublished.map((p) => (
                <div key={p.filename} className="bg-gray-900/30 p-3 rounded border border-cyan-500/10 flex justify-between">
                  <div>
                    <span className="font-semibold">{p.title}</span>
                    <span className="text-gray-500 text-sm ml-4">by {p.author}</span>
                  </div>
                  <Link href={`/case-studies/${p.filename.replace('.mdx', '')}`} className="text-cyan-400 hover:underline">
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Supabase Published */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Supabase Published ({supabasePublished?.length || 0})</h2>
          {!supabasePublished?.length ? (
            <p className="text-gray-400">No Supabase published case studies.</p>
          ) : (
            <div className="space-y-2">
              {supabasePublished.map((cs) => (
                <div key={cs.id} className="bg-gray-900/30 p-3 rounded border border-cyan-500/10 flex justify-between">
                  <div>
                    <span className="font-semibold">{cs.title}</span>
                    <span className="text-gray-500 text-sm ml-4">by {cs.author}</span>
                  </div>
                  <Link href={`/case-studies/${cs.slug}`} className="text-cyan-400 hover:underline">
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}
