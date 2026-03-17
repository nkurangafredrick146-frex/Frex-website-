'use client';

import { useState } from 'react';
import Button from './Button';

export default function QuantumDemo() {
  const [qubits, setQubits] = useState(2);
  const [result, setResult] = useState<string | null>(null);

  const runSimulation = () => {
    // Simulate a quantum circuit – replace with real logic
    setResult(`Simulation with ${qubits} qubits completed. Result: 42 (placeholder).`);
  };

  return (
    <div className="bg-gray-900/50 p-8 rounded-lg border border-cyan-500/20">
      <h3 className="text-2xl font-bold mb-4">Quantum Circuit Simulator (Demo)</h3>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Number of qubits:</label>
        <input
          type="range"
          min="1"
          max="5"
          value={qubits}
          onChange={(e) => setQubits(parseInt(e.target.value))}
          className="w-full"
        />
        <span className="text-cyan-400">{qubits}</span>
      </div>
      <Button variant="primary" onClick={runSimulation}>
        Run Simulation
      </Button>
      {result && <p className="mt-4 text-gray-300">{result}</p>}
    </div>
  );
}
