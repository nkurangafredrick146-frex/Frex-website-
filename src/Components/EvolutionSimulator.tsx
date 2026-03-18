'use client';

import { useState, useEffect, useRef } from 'react';
import Button from './Button';

export default function EvolutionSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [population, setPopulation] = useState<{ x: number; y: number }[]>([]);
  const [generation, setGeneration] = useState(0);
  const [running, setRunning] = useState(false);
  const target = { x: 300, y: 200 };

  useEffect(() => {
    // Initialize random population
    const initial = [];
    for (let i = 0; i < 50; i++) {
      initial.push({ x: Math.random() * 600, y: Math.random() * 400 });
    }
    setPopulation(initial);
  }, []);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      // Simple evolution: select top 20% closest to target, mutate
      const scored = population.map(ind => ({
        ...ind,
        fitness: 1 / (Math.abs(ind.x - target.x) + Math.abs(ind.y - target.y) + 0.1),
      }));
      scored.sort((a, b) => b.fitness - a.fitness);
      const parents = scored.slice(0, 10);
      const newPop = [];
      for (let i = 0; i < 50; i++) {
        const parent = parents[Math.floor(Math.random() * parents.length)];
        const child = {
          x: parent.x + (Math.random() - 0.5) * 20,
          y: parent.y + (Math.random() - 0.5) * 20,
        };
        // Clamp to canvas
        child.x = Math.max(0, Math.min(600, child.x));
        child.y = Math.max(0, Math.min(400, child.y));
        newPop.push(child);
      }
      setPopulation(newPop);
      setGeneration(g => g + 1);
    }, 200);
    return () => clearInterval(interval);
  }, [running, population]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = '#06B6D4';
    population.forEach(ind => {
      ctx.fillRect(ind.x - 2, ind.y - 2, 4, 4);
    });
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(target.x, target.y, 8, 0, 2 * Math.PI);
    ctx.fill();
  }, [population]);

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
      <h3 className="text-2xl font-bold mb-4">Evolutionary Algorithm Demo</h3>
      <p className="text-gray-300 mb-4">
        Watch a population evolve toward the white target. Each generation selects the fittest individuals (closest to target) and mutates them.
      </p>
      <canvas ref={canvasRef} width={600} height={400} className="border border-cyan-500/20 rounded mb-4" />
      <div className="flex justify-between items-center">
        <span className="text-cyan-400">Generation: {generation}</span>
        <div className="space-x-2">
          <Button variant="primary" size="sm" onClick={() => setRunning(!running)}>
            {running ? 'Pause' : 'Start'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
      }
