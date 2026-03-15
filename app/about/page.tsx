import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About FREX | Fundamental Research & Evolutionary X-Systems',
  description: 'Learn about FREX’s mission, dual structure, research divisions, and partnerships.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About FREX
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            FREX (Fundamental Research & Evolutionary X-Systems) is a research organization pioneering fundamental research in quantum computing, doctrinal frameworks, and emergent technologies to develop evolutionary systems that adapt and improve over time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Dual Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">FREX Research</h3>
              <p className="text-gray-300">Fundamental research and academic collaborations.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">FREX Solutions</h3>
              <p className="text-gray-300">Commercial applications and client services.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Research Divisions</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="text-cyan-400">Quantum Computing:</span> Algorithms, software stacks, and quantum advantage applications.</li>
            <li><span className="text-cyan-400">Doctrinal Systems:</span> AI governance, ethical frameworks, and system safety.</li>
            <li><span className="text-cyan-400">Emergent Sciences:</span> Neuromorphic computing, advanced cryptography, and frontier technologies.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Partners & Acknowledgments</h2>
          <p className="text-gray-300 mb-4">
            We collaborate with leading institutions to advance research and technology.
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Makerere University College of Computing & IS</li>
            <li>Uganda National Council for Science and Technology</li>
          </ul>
        </section>

        <div className="text-center">
          <Button variant="primary" size="lg" href="/contact">Get in touch</Button>
        </div>
      </div>
    </div>
  );
}
