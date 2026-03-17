import { notFound } from 'next/navigation';
import Button from '@/components/Button';

// ✅ Centralized case studies data
// You can later move this to a JSON file or MDX content folder
const cases = [
  {
    slug: 'ai-governance-for-autonomous-vehicles',
    title: 'AI Governance for Autonomous Vehicles',
    client: 'AutoDrive Inc.',
    industry: 'Automotive',
    content: (
      <>
        <p>
          Implemented our Doctrinal Compiler to ensure safety and regulatory compliance in autonomous fleets.
        </p>
        <h2>The Science</h2>
        <p>
          Our compiler embeds ethical rules directly into decision-making logic, ensuring transparency and safety.
        </p>
      </>
    ),
  },
  {
    slug: 'quantum-ready-cryptography-for-fintech',
    title: 'Quantum-Ready Cryptography for FinTech',
    client: 'SecureBank',
    industry: 'Finance',
    content: (
      <>
        <p>
          Assisted in migrating to post-quantum cryptographic standards ahead of regulations.
        </p>
        <h2>Impact</h2>
        <p>
          This project positioned SecureBank as a leader in quantum-safe financial systems.
        </p>
      </>
    ),
  },
  {
    slug: 'neuromorphic-sensors-for-predictive-maintenance',
    title: 'Neuromorphic Sensors for Predictive Maintenance',
    client: 'MineCorp',
    industry: 'Mining',
    content: (
      <>
        <p>
          Deployed edge AI sensors that reduced downtime by 30%.
        </p>
        <h2>Impact</h2>
        <p>
          Predictive maintenance improved safety and efficiency across mining operations.
        </p>
      </>
    ),
  },
  {
    slug: 'frex-sos',
    title: 'FREX SOS: Systems of Systems',
    client: 'FREX Internal',
    industry: 'Cross-Domain Research',
    content: (
      <>
        <p>
          FREX SOS is our flagship initiative: a modular discovery engine integrating quantum, doctrinal, and emergent sciences.
        </p>
        <h2>The Vision</h2>
        <p>
          FREX SOS connects imagination with engineering reality, enabling breakthroughs across domains.
        </p>
        <h2>Impact</h2>
        <p>
          By building FREX SOS, we’re creating the foundation for scalable, evolutionary research that adapts and evolves.
        </p>
      </>
    ),
  },
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = cases.find((c) => c.slug === params.slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {cs.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Client: {cs.client} | Industry: {cs.industry}
        </p>
        <div className="prose prose-invert max-w-none">{cs.content}</div>
        <div className="mt-8">
          <Button variant="outline" href="/case-studies">
            ← Back to Case Studies
          </Button>
        </div>
      </div>
    </div>
  );
}
