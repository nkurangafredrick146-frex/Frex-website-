 import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Button from '@/components/Button';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';

// --- Hardcoded fallback cases ---
const staticCases = [
  {
    slug: 'ai-governance-for-autonomous-vehicles',
    title: 'AI Governance for Autonomous Vehicles',
    client: 'AutoDrive Inc.',
    industry: 'Automotive',
    summary: 'Ensuring safety and compliance in autonomous fleets.',
    content: (
      <>
        <p>Implemented our Doctrinal Compiler to ensure safety and regulatory compliance in autonomous fleets.</p>
        <h2>The Science</h2>
        <p>Our compiler embeds ethical rules directly into decision-making logic, ensuring transparency and safety.</p>
      </>
    ),
  },
  {
    slug: 'frex-sos',
    title: 'FREX SOS: Systems of Systems',
    client: 'FREX Internal',
    industry: 'Cross-Domain Research',
    summary: 'Our flagship modular discovery engine.',
    content: (
      <>
        <p>FREX SOS is our flagship initiative: a modular discovery engine integrating quantum, doctrinal, and emergent sciences.</p>
        <h2>The Vision</h2>
        <p>FREX SOS connects imagination with engineering reality, enabling breakthroughs across domains.</p>
      </>
    ),
  },
  // ... add other static cases here
];

// --- Metadata from Supabase ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from('case_studies')
    .select('title, summary')
    .eq('slug', params.slug)
    .single();

  if (data) {
    return { title: data.title, description: data.summary };
  }

  const staticCase = staticCases.find(c => c.slug === params.slug);
  if (staticCase) {
    return { title: staticCase.title, description: staticCase.summary };
  }

  return { title: 'Case Study Not Found' };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {caseStudy.title}
          </h1>
          <p className="text-gray-400 mb-2">Client: {caseStudy.client} | Industry: {caseStudy.industry}</p>
          <p className="text-gray-300 mb-8 italic">{caseStudy.summary}</p>
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={caseStudy.content} />
          </div>
          <div className="mt-8">
            <Button variant="outline" href="/case-studies">← Back to Case Studies</Button>
          </div>
        </div>
      </div>
    );
  }

  // --- Fallback: Local MDX file ---
  const filename = `${params.slug}.mdx`;
  const publishedPath = path.join(process.cwd(), 'content/case-studies', filename);
  try {
    const source = await fs.readFile(publishedPath, 'utf8');
    const parts = source.split('---');
    const frontmatter = parts[1];
    const content = parts.slice(2).join('---');

    const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
    const clientMatch = frontmatter.match(/client:\s*"([^"]+)"/);
    const industryMatch = frontmatter.match(/industry:\s*"([^"]+)"/);
    const summaryMatch = frontmatter.match(/summary:\s*"([^"]+)"/);

    return (
      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {titleMatch ? titleMatch[1] : 'Untitled'}
          </h1>
          <p className="text-gray-400 mb-2">
            Client: {clientMatch ? clientMatch[1] : ''} | Industry: {industryMatch ? industryMatch[1] : ''}
          </p>
          <p className="text-gray-300 mb-8 italic">{summaryMatch ? summaryMatch[1] : ''}</p>
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
          <div className="mt-8">
            <Button variant="outline" href="/case-studies">← Back to Case Studies</Button>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    // --- Fallback: Static hardcoded case ---
    const staticCase = staticCases.find(c => c.slug === params.slug);
    if (!staticCase) notFound();

    return (
      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {staticCase.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Client: {staticCase.client} | Industry: {staticCase.industry}
          </p>
          <div className="prose prose-invert max-w-none">{staticCase.content}</div>
          <div className="mt-8">
            <Button variant="outline" href="/case-studies">← Back to Case Studies</Button>
          </div>
        </div>
      </div>
    );
  }
            }
