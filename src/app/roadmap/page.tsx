import { Metadata } from 'next';
import Roadmap from '@/components/Roadmap';

export const metadata: Metadata = {
  title: 'Research Roadmap | FREX',
  description: 'Our journey from foundational research to real‑world impact.',
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
          Research Roadmap
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Key milestones in FREX's evolution.
        </p>
        <Roadmap />
      </div>
    </div>
  );
}
