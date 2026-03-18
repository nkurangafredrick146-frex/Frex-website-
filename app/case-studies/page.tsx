import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | FREX Solutions',
  description: 'Real-world applications of FREX technologies.',
};

export default async function CaseStudiesPage() {
  const publishedDir = path.join(process.cwd(), 'content/case-studies');
  let published: {
    slug: string;
    title: string;
    client: string;
    industry: string;
    summary: string;
  }[] = [];

  try {
    const files = await fs.readdir(publishedDir);
    published = await Promise.all(
      files.filter(f => f.endsWith('.mdx')).map(async (f) => {
        const content = await fs.readFile(path.join(publishedDir, f), 'utf8');
        const titleMatch = content.match(/title:\s*"([^"]+)"/);
        const clientMatch = content.match(/client:\s*"([^"]+)"/);
        const industryMatch = content.match(/industry:\s*"([^"]+)"/);
        const summaryMatch = content.match(/summary:\s*"([^"]+)"/);

        return {
          slug: f.replace('.mdx', ''),
          title: titleMatch ? titleMatch[1] : 'Untitled',
          client: clientMatch ? clientMatch[1] : '',
          industry: industryMatch ? industryMatch[1] : '',
          summary: summaryMatch ? summaryMatch[1] : '',
        };
      })
    );
  } catch (e) {
    // gracefully handle missing folder
    console.warn('No case studies found:', e);
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Case Studies
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          See how FREX solutions drive real-world impact.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {published.map((cs) => (
            <div
              key={cs.slug}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-500/20"
            >
              <div className="h-48 bg-gray-800 relative">
                {/* Placeholder for image – replace with Next/Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-400 mb-2">{cs.industry}</div>
                <h2 className="text-2xl font-bold mb-2">{cs.title}</h2>
                <p className="text-gray-400 mb-1">Client: {cs.client}</p>
                <p className="text-gray-300 mb-4">{cs.summary}</p>
                <Button variant="outline" size="sm" href={`/case-studies/${cs.slug}`}>
                  Read Full Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
