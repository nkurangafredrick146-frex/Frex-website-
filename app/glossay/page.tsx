import { Metadata } from 'next';
import GlossaryTerm from '@/components/GlossaryTerm';

export const metadata: Metadata = {
  title: 'Glossary | FREX',
  description: 'Key terms in our research.',
};

const terms = [
  { term: 'Quantum Computing', definition: 'Computation using quantum-mechanical phenomena like superposition and entanglement.' },
  { term: 'Doctrinal Systems', definition: 'Frameworks for AI governance, ethics, and safety.' },
  { term: 'Graphene', definition: 'A single layer of carbon atoms with exceptional strength and conductivity.' },
  // more
];

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Glossary
        </h1>
        <p className="text-gray-300 mb-8">
          Hover over underlined terms on any page to see definitions, or browse the full list below.
        </p>
        <dl className="space-y-4">
          {terms.map((t) => (
            <div key={t.term} className="bg-gray-900/50 p-4 rounded border border-cyan-500/20">
              <dt className="text-xl font-bold text-cyan-400">{t.term}</dt>
              <dd className="text-gray-300">{t.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
