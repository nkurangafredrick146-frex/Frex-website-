import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Join FREX',
  description: 'Work at the forefront of quantum computing, AI governance, and emergent technologies.',
};

const jobs = [
  {
    title: 'Quantum Research Scientist',
    location: 'Kampala, Uganda (Hybrid)',
    type: 'Full-time',
    description: 'Develop novel quantum algorithms and collaborate with hardware partners.',
  },
  {
    title: 'AI Governance Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build tools for AI alignment, interpretability, and safety.',
  },
  {
    title: 'Neuromorphic Hardware Engineer',
    location: 'Kampala, Uganda',
    type: 'Full-time',
    description: 'Design and test neuromorphic chips for edge AI.',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Join the FREX Team
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Help us build the foundational layer for tomorrow. We're looking for passionate researchers and engineers.
        </p>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.title} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <div className="flex gap-4 text-sm text-cyan-400 mb-4">
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <Button variant="outline" size="sm" href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
