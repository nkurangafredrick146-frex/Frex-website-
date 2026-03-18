import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import Button from '@/components/Button';

// Helper to read drafts and published
async function getCaseStudies() {
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
  const { drafts, published } = await getCaseStudies();

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Manage Case Studies
          </h1>
          {/* Logout button */}
          <form action="/api/admin/logout" method="POST">
            <Button type="submit" variant="outline" size="sm">
              Logout
            </Button>
          </form>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Drafts ({drafts.length})</h2>
          {drafts.length === 0 ? (
            <p className="text-gray-400">No drafts pending.</p>
          ) : (
            <div className="space-y-4">
              {drafts.map((d) => (
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

        <section>
          <h2 className="text-2xl font-bold mb-4">Published ({published.length})</h2>
          {published.length === 0 ? (
            <p className="text-gray-400">No published case studies.</p>
          ) : (
            <div className="space-y-2">
              {published.map((p) => (
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
      </div>
    </div>
  );
              }
