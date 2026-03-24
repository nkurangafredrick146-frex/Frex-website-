import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Our Approach | FREX – Fundamental Research',
  description: 'How we conduct foundational research across domains to evolve unknown systems.',
};

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Our Approach: From Foundations to X‑Systems
        </h1>
        <div className="space-y-8 text-gray-300 text-lg">
          <p>
            FREX is built on a simple but powerful idea: to create truly novel systems, you must first understand the fundamental principles of the domain. We call this <span className="text-cyan-400 font-semibold">foundational research</span>.
          </p>
          <p>
            Foundational research means we go back to first principles. We ask: What are the basic building blocks? What laws govern their interactions? We are not satisfied with surface‑level understanding or incremental improvements. We want to know how things work at the deepest level – whether it's the quantum behavior of electrons, the cognitive architecture of the brain, or the dynamics of social cooperation.
          </p>
          <p>
            Once we have that foundational understanding, we can then <span className="text-cyan-400 font-semibold">evolve systems</span> that were previously unknown. These are the <span className="text-cyan-400 font-semibold">X‑systems</span> – solutions, materials, models, or frameworks that emerge from the foundation. Because they are built on deep understanding, they are often transformative, robust, and adaptable.
          </p>
          <p>
            This approach applies across all domains: materials science, biology, artificial intelligence, social systems, energy, and beyond. We are not constrained by traditional boundaries; we follow the questions wherever they lead.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-2">Example: Graphene Water Filtration</h2>
            <p>
              Our work on graphene began with fundamental questions about 2D materials: How do electrons move in a single layer of carbon? How do layers interact? From that foundational research, we discovered that by precisely controlling the spacing between graphene oxide sheets, we could create membranes that filter water at unprecedented speeds. The X‑system – a novel water filter – emerged from deep understanding, not trial and error.
            </p>
          </div>
          <p>
            This is the FREX way: start at the foundation, evolve the unknown.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" href="/research">Explore Our Research</Button>
        </div>
      </div>
    </div>
  );
}
