import { notFound } from 'next/navigation';
import Button from '@/components/Button';
import { Metadata } from 'next';

// This would typically come from a CMS or markdown files
const posts = {
  'quantum-advantage-demonstration': {
    title: 'Quantum Advantage Demonstrated in Logistics Optimization',
    content: `
      <p>Our quantum computing team, led by Dr. Ada Nambi, has achieved a significant milestone: a 100x speedup for a real-world supply chain optimization problem using a hybrid quantum-classical algorithm. The work, published in <em>Nature Quantum Information</em>, demonstrates practical quantum advantage for the first time in logistics.</p>
      <h2>Methodology</h2>
      <p>We developed a custom QAOA variant that leverages problem structure to reduce circuit depth. The algorithm was run on IBM's 127-qubit Eagle processor, combined with classical reinforcement learning for parameter optimization.</p>
      <h2>Impact</h2>
      <p>This breakthrough opens the door for quantum-assisted logistics in industries like shipping, retail, and manufacturing. We are now partnering with几家 major freight companies to pilot the technology.</p>
    `,
    date: '2025-02-15',
    author: 'Dr. Ada Nambi',
  },
  // ... other posts
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/blog" className="text-cyan-400 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-400 mb-8">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
