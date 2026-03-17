 'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import QuantumDemo from '@/components/QuantumDemo';   // ✅ Import the demo

export default function LabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const researchDivisions = [
    {
      title: 'Quantum Computing',
      icon: '⚛️',
      description:
        'Pushing the boundaries of quantum algorithms, error correction, and hardware-software co-design. Our researchers collaborate with leading quantum hardware providers to demonstrate quantum advantage.',
      focus: [
        'Quantum algorithm development',
        'Error mitigation techniques',
        'Hybrid quantum-classical systems',
        'Quantum machine learning',
      ],
    },
    {
      title: 'Doctrinal Systems',
      icon: '⚖️',
      description:
        'Building the ethical and logical foundations for autonomous systems. We develop frameworks for AI alignment, transparency, and value learning that ensure safe deployment.',
      focus: [
        'AI governance frameworks',
        'Value alignment',
        'Interpretability & explainability',
        'Safety cases for autonomous systems',
      ],
    },
    {
      title: 'Emergent Sciences',
      icon: '🔮',
      description:
        'Exploring frontiers beyond conventional computing: neuromorphic architectures, post‑quantum cryptography, and bio‑inspired systems.',
      focus: [
        'Neuromorphic computing',
        'Post‑quantum cryptography',
        'Reservoir computing',
        'Self‑organising systems',
      ],
    },
  ];

  const featuredProjects = [
    {
      name: 'Project QuASAR',
      division: 'Quantum',
      description: 'A quantum approximate optimization algorithm for logistics and supply chain.',
    },
    {
      name: 'Doctrinal Compiler',
      division: 'Doctrinal',
      description: 'A formal verification tool for embedding ethical rules into AI agents.',
    },
    {
      name: 'NeuroSynth',
      division: 'Emergent',
      description: 'A neuromorphic accelerator prototype for real‑time sensor processing.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frex Labs: The Frontier of Possible
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Where theoretical research meets tangible prototypes. Our labs are dedicated to pushing the boundaries of science and technology.
        </p>
        <Button variant="primary" size="lg">
          Join our research network
        </Button>
      </section>

      {/* Research Divisions */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Divisions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchDivisions.map((div, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{div.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{div.title}</h3>
                <p className="text-gray-400 mb-4">{div.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Focus areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {div.focus.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" size="sm">
                  Explore {div.title} →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects (Interactive Tabs) */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Research Projects</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 space-x-2">
              {featuredProjects.map((proj, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-t-lg transition ${
                    activeTab === idx
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {proj.name}
                </button>
              ))}
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-2">{featuredProjects[activeTab].name}</h3>
              <p className="text-cyan-400 mb-4">{featuredProjects[activeTab].division}</p>
              <p className="text-gray-300">{featuredProjects[activeTab].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Quantum Demo Embed */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-3xl">
          <QuantumDemo />
        </div>
      </section>
    </div>
  );
}
