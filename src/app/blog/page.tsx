import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | FREX Research',
};

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((fn) => fn.endsWith('.mdx'))
    .map((fn) => {
      const filePath = path.join(postsDirectory, fn);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: fn.replace(/\.mdx$/, ''),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        author: data.author,
        category: data.category,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          FREX Research Blog
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Insights, breakthroughs, and news from our labs.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition"
            >
              <div className="text-sm text-cyan-400 mb-2">{post.category}</div>
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-cyan-400">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
