 import Button from '@/components/Button';
import { Metadata } from 'next';

// ✅ Metadata for SEO
export const metadata: Metadata = {
  title: 'Case Studies | FREX Solutions',
  description: 'Real-world applications of FREX technologies.',
};

// ✅ Centralized case studies data
// Later you can move this to a JSON file or MDX content folder
const cases = [
  {
    slug: 'ai-governance-for-autonomous-vehicles',
    title: 'AI Governance for Autonomous Vehicles',
    client: 'AutoDrive Inc.',
    industry: 'Automotive',
    summary:
      'Implemented our Doctrinal Compiler to ensure safety and regulatory compliance in autonomous fleets.',
    image: '/case-studies/autodrive.jpg',
  },
  {
    slug: 'quantum-ready-cryptography-for-fintech',
    title: 'Quantum-Ready Cryptography for FinTech',
    client: 'SecureBank',
    industry: 'Finance',
    summary:
      'Assisted in migrating to post-quantum cryptographic standards ahead of regulations.',
    image: '/case-studies/securebank.jpg',
  },
  {
    slug: 'neuromorphic-sensors-for-predictive-maintenance',
    title: 'Neuromorphic Sensors for Predictive Maintenance',
    client: 'MineCorp',
    industry: 'Mining',
    summary:
      'Deployed edge AI sensors that reduced downtime by 30%.',
    image: '/case-studies/minecorp.jpg',
  },
  {
    slug: 'frex-sos',
    title: 'FREX SOS: Systems of Systems',
    client: 'FREX Internal',
    industry: 'Cross-Domain Research',
    summary:
      'Building a modular discovery engine that integrates quantum, doctrinal, and emergent sciences into one unified platform.',
    image: '/case-studies/frex-sos.jpg',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Case Studies
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          See how FREX solutions drive real-world impact.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((cs) => (
            <div
              key={cs.slug}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-500/20"
            >
              <div className="h-48 bg-gray-800 relative">
                {/* Placeholder for image – replace with Next/Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-400 mb-2">{cs.industry}</div>
                <h2 className="text-2xl font-bold mb-2">{cs.title}</h2>
                <p className="text-gray-400 mb-1">Client: {cs.client}</p>
                <p className="text-gray-300 mb-4">{cs.summary}</p>
                <Button variant="outline" size="sm" href={`/case-studies/${cs.slug}`}>
                  Read Full Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
