import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FREX SOS | FREX Case Study',
};

export default function FrexSOSCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          FREX SOS: scientific operating Systems
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          How FREX is building a discovery engine that connects imagination with engineering reality.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>
            FREX SOS (scientific operating Systems) is our flagship initiative. It’s designed as a modular discovery engine that integrates research across domains — quantum computing, doctrinal frameworks, emergent sciences — into a unified platform.
          </p>
          <p>
            The foundation is already being built: a few critical steps in architecture, workflow automation, and modular integration are underway. Once complete, FREX SOS will allow researchers and partners to explore unknowns (“X‑systems”) and evolve them into practical solutions.
          </p>
          <h2>The Vision</h2>
          <p>
            FREX SOS isn’t just a research tool. It’s a framework for cross‑disciplinary breakthroughs. Imagine a system where insights from materials science can inform AI governance, or where neuromorphic computing can accelerate biological modeling. That’s the power of SOS.
          </p>
          <h2>Impact</h2>
          <p>
            By building FREX SOS, we’re creating the foundation for scalable, evolutionary research. It will empower collaborations, accelerate discovery, and position FREX as a hub for systems that were previously unimaginable.
          </p>
        </div>
        <div className="mt-8">
          <Button variant="outline" href="/case-studies">← Back to Case Studies</Button>
        </div>
      </div>
    </div>
  );
}
