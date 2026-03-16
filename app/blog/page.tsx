import Link from 'next/link';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | FREX Research',
  description: 'Latest updates, research insights, and news from FREX.',
};

// Sample blog posts – replace with CMS or markdown
const posts = [
  {
    slug: 'quantum-advantage-demonstration',
    title: 'Quantum Advantage Demonstrated in Logistics Optimization',
    excerpt: 'Our quantum team achieved a 100x speedup for a real-world supply chain problem.',
    date: '2025-02-15',
    author: 'Dr. Ada Nambi',
    category: 'Quantum',
  },
  {
    slug: 'ai-governance-framework-v2',
    title: 'Introducing the Doctrinal Compiler v2.0',
    excerpt: 'A major update to our AI governance tool, now with formal verification.',
    date: '2025-01-22',
    author: 'Prof. John Mukasa',
    category: 'Doctrinal',
  },
  {
    slug: 'neuromorphic-breakthrough',
    title: 'Neuromorphic Chip Prototype Achieves Record Efficiency',
    excerpt: 'Our emergent sciences division unveils a new architecture for edge AI.',
    date: '2024-12-10',
    author: 'Dr. Grace Akello',
    category: 'Emergent',
  },
];

export default function BlogPage() {
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
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/blog/archive">
            View All Posts
          </Button>
        </div>
      </div>
    </div>
  );
}
