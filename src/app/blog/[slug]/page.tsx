import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const fullPath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  if (!fs.existsSync(fullPath)) return { title: 'Post Not Found' };
  const source = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(source);
  return { title: data.title };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  if (!fs.existsSync(fullPath)) notFound();
  const source = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(source);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/blog" className="text-cyan-400 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <div className="flex items-center text-gray-400 mb-8">
          <span>{data.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(data.date).toLocaleDateString()}</span>
        </div>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
    }
