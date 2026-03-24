 'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function SolutionsPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const solutions = [
    {
      name: 'AI Governance Suite',
      tagline: 'Trustworthy AI starts here.',
      description:
        'A comprehensive platform for auditing, monitoring, and governing AI systems. Includes bias detection, explainability modules, and compliance reporting.',
      features: [
        'Automated bias testing',
        'Explainability dashboards',
        'Regulatory compliance templates',
        'Continuous monitoring',
      ],
      icon: '🤖',
    },
    {
      name: 'Quantum Readiness Framework',
      tagline: 'Prepare your organization for the quantum era.',
      description:
        'Assessment tools and migration paths for integrating quantum‑resistant cryptography and quantum algorithms into existing infrastructure.',
      features: [
        'Post‑quantum crypto audits',
        'Quantum algorithm prototyping',
        'Hybrid cloud integration',
        'Workforce upskilling programs',
      ],
      icon: '⚛️',
    },
    {
      name: 'Advanced Software Engineering',
      tagline: 'Resilient systems for critical applications.',
      description:
        'Custom software development for high‑assurance systems, leveraging formal methods, secure coding, and next‑gen architectures.',
      features: [
        'Formal verification',
        'Secure by design',
        'Real‑time systems',
        'Edge AI deployment',
      ],
      icon: '💻',
    },
  ];

  const industries = ['Finance', 'Healthcare', 'Defense', 'Energy'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frex Solutions: Tomorrow&apos;s Technology, Applied Today
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Translating groundbreaking research into enterprise‑ready solutions that drive competitive advantage.
        </p>
        <Button variant="primary" size="lg">
          Request a consultation
        </Button>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{sol.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{sol.name}</h3>
                <p className="text-cyan-400 italic mb-3">{sol.tagline}</p>
                <p className="text-gray-400 mb-4">{sol.description}</p>
                <ul className="mb-6 space-y-1 text-sm">
                  {sol.features.map((feat, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm">
                  Learn more
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications (Interactive selector) */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Industry Applications</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {industries.map((ind, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndustry(idx)}
                className={`px-6 py-2 rounded-full transition ${
                  activeIndustry === idx
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-4">{industries[activeIndustry]} Solutions</h3>
            <p className="text-gray-300 mb-4">
              {activeIndustry === 0 &&
                'AI‑driven fraud detection, quantum‑safe encryption for transactions, and regulatory compliance tools.'}
              {activeIndustry === 1 &&
                'Explainable AI for diagnosis, privacy‑preserving analytics, and neuromorphic sensors for patient monitoring.'}
              {activeIndustry === 2 &&
                'Secure communication protocols, autonomous systems verification, and doctrinal AI for command decisions.'}
              {activeIndustry === 3 &&
                'Smart grid optimization, predictive maintenance, and quantum simulation for materials science.'}
            </p>
            <Button variant="outline" size="sm">
              See case studies →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
