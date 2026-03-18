import { Metadata } from 'next';
import EvolutionSimulator from '@/components/EvolutionSimulator';

export const metadata: Metadata = {
  title: 'Simulation Playground | FREX',
  description: 'Interactive demos of evolutionary algorithms.',
};

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Simulation Playground
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Explore evolutionary systems in action.
        </p>
        <EvolutionSimulator />
      </div>
    </div>
  );
}
