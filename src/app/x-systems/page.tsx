import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'X‑Systems Explained | FREX',
  description: 'The “X” in FREX stands for the unknown. We explore fundamental questions across any domain to create systems that were previously unimaginable.',
};

export default function XSystemsPage() {
  const domains = [
    {
      title: 'Materials Science',
      example: 'Graphene research → ultra‑efficient water filtration systems',
      icon: '🧪',
    },
    {
      title: 'Biology',
      example: 'Synthetic biology → self‑healing materials',
      icon: '🧬',
    },
    {
      title: 'Social Systems',
      example: 'Network theory → new models of decentralized governance',
      icon: '🌐',
    },
    {
      title: 'Energy',
      example: 'Quantum dot research → next‑generation solar cells',
      icon: '☀️',
    },
    {
      title: 'Agriculture',
      example: 'Plant nanobionics → crops that monitor their own health',
      icon: '🌱',
    },
    {
      title: 'Neuroscience',
      example: 'Brain‑computer interfaces → restoring mobility',
      icon: '🧠',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          What are X‑Systems?
        </h1>

        {/* Strengthened connection to fundamental research */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The <span className="text-cyan-400 font-bold">X</span> in FREX stands for the <span className="text-cyan-400 font-bold">unknown</span>. We don't limit ourselves to technology alone. We choose fundamental questions from <em>any</em> domain – materials, biology, society, energy – and through deep, first‑principles research, we evolve systems that were previously unimaginable.
        </p>
        <p className="text-xl text-gray-300 mb-12">
          These systems can be physical (a new material), conceptual (a governance model), or biological (a modified organism). The only constant is that they emerge from fundamental research and evolve to solve real‑world problems. Our work starts at the foundation, and from there, new possibilities arise.
        </p>

        <h2 className="text-3xl font-bold mb-8 text-center">Examples Across Domains</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div key={d.title} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
              <div className="text-4xl mb-3">{d.icon}</div>
              <h3 className="text-xl font-bold mb-2">{d.title}</h3>
              <p className="text-gray-400">{d.example}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" href="/research">
            Explore Our Research
          </Button>
        </div>
      </div>
    </div>
  );
}
