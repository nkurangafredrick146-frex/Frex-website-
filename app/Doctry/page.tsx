 'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function DoctryPage() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      title: 'Transparency',
      description: 'All autonomous decisions must be auditable and explainable to human operators.',
      icon: '🔍',
    },
    {
      title: 'Alignment',
      description: 'System goals must reliably match human values and intentions.',
      icon: '🎯',
    },
    {
      title: 'Robustness',
      description: 'Systems must maintain safe operation under distributional shift and adversarial inputs.',
      icon: '🛡️',
    },
    {
      title: 'Accountability',
      description: 'Clear lines of responsibility must be maintained for autonomous actions.',
      icon: '⚖️',
    },
  ];

  const frameworks = [
    {
      name: 'Doctrinal Compiler',
      description: 'Translates ethical guidelines into machine‑checkable constraints.',
      useCase: 'Used in autonomous vehicle planning to enforce safety rules.',
    },
    {
      name: 'Value Learning Toolkit',
      description: 'Learns human preferences from feedback to align AI objectives.',
      useCase: 'Applied in content recommendation to avoid filter bubbles.',
    },
    {
      name: 'Safety Case Framework',
      description: 'Structured argumentation for certifying AI systems.',
      useCase: 'Adopted by aerospace companies for certifying autopilots.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Doctry: The Science of Systems Governance
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Building the ethical and logical foundations for autonomous technologies. Our research ensures that AI systems are safe, aligned, and trustworthy.
        </p>
        <Button variant="primary" size="lg">
          Explore our research
        </Button>
      </section>

      {/* Core Principles (Cards) */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Principles</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition text-center"
              >
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Tools (Interactive Tabs) */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frameworks & Tools</h2>
          <div className="flex justify-center mb-6 space-x-2">
            {frameworks.map((fw, idx) => (
              <button
                key={idx}
                onClick={() => setActivePrinciple(idx)}
                className={`px-4 py-2 rounded-t-lg transition ${
                  activePrinciple === idx
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {fw.name}
              </button>
            ))}
          </div>
          <div className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-2">{frameworks[activePrinciple].name}</h3>
            <p className="text-gray-300 mb-4">{frameworks[activePrinciple].description}</p>
            <div className="bg-gray-900 p-4 rounded border border-cyan-500/20">
              <span className="text-cyan-400 font-semibold">Use case:</span>{' '}
              <span className="text-gray-300">{frameworks[activePrinciple].useCase}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Partner with us</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Help shape the future of AI governance. Collaborate with our researchers to build safer systems.
        </p>
        <Button variant="primary" size="lg">
          Contact our Doctry team
        </Button>
      </section>
    </div>
  );
            }
