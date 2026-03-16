import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Publications | FREX Research',
  description: 'Browse our research papers, white papers, and technical reports.',
};

const publications = [
  {
    title: 'Quantum Advantage in Logistics: A Hybrid QAOA Approach',
    authors: 'Nambi, A., Mukasa, J., et al.',
    venue: 'Nature Quantum Information, 2025',
    pdf: '/papers/quantum-logistics.pdf',
    abstract: 'We demonstrate a 100x speedup for supply chain optimization using a hybrid quantum-classical algorithm.',
  },
  {
    title: 'The Doctrinal Compiler: Formal Verification for AI Ethics',
    authors: 'Mukasa, J., Akello, G.',
    venue: 'AIES 2024',
    pdf: '/papers/doctrinal-compiler.pdf',
    abstract: 'A framework for embedding ethical rules into AI agents with formal guarantees.',
  },
  // more
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Publications
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Peer-reviewed papers, white papers, and technical reports from our research divisions.
        </p>
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.title} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-2">{pub.title}</h2>
              <p className="text-gray-400 mb-2">{pub.authors}</p>
              <p className="text-cyan-400 text-sm mb-3">{pub.venue}</p>
              <p className="text-gray-300 mb-4">{pub.abstract}</p>
              <Button variant="outline" size="sm" href={pub.pdf} target="_blank">
                Download PDF
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
