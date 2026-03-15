'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const researchDivisions = [
    { title: 'Quantum Computing', description: 'Algorithms, software stacks, and quantum advantage applications.', icon: '⚛️', link: '/labs' },
    { title: 'Doctrinal Systems', description: 'AI governance, ethical frameworks, and system safety.', icon: '⚖️', link: '/doctry' },
    { title: 'Emergent Sciences', description: 'Neuromorphic computing, advanced cryptography, and frontier technologies.', icon: '🔮', link: '/labs' },
  ];

  const solutions = [
    { name: 'AI Governance Suite', tagline: 'Trustworthy AI starts here.', icon: '🤖', link: '/solutions' },
    { name: 'Quantum Readiness Framework', tagline: 'Prepare for the quantum era.', icon: '⚛️', link: '/solutions' },
    { name: 'Advanced Software Engineering', tagline: 'Resilient systems for critical applications.', icon: '💻', link: '/solutions' },
  ];

  return (
    <>
      {/* Particle Canvas Background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <img src="/frex-logo.svg" alt="Frex Logo" className="mx-auto mb-6 w-24 h-24" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Building the Foundational Layer for Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Frex converges cutting-edge software, quantum computing, and doctrinal research to engineer the core systems on which our future will be built.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/labs">Explore Frex Labs</Button>
            <Button variant="outline" size="lg" href="/solutions">Partner with Frex Solutions</Button>
          </div>
        </div>
      </section>

      {/* Research Divisions Preview */}
      <section className="py-20 px-4 bg-black/80">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Research Divisions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchDivisions.map((div, idx) => (
              <div key={idx} className="bg-gray-900/50 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition text-center">
                <div className="text-5xl mb-4">{div.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{div.title}</h3>
                <p className="text-gray-400 mb-4">{div.description}</p>
                <Button variant="outline" size="sm" href={div.link}>Learn more →</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Teaser */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Applied Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <div key={idx} className="bg-black/50 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition text-center">
                <div className="text-5xl mb-4">{sol.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{sol.name}</h3>
                <p className="text-cyan-400 italic mb-4">{sol.tagline}</p>
                <Button variant="outline" size="sm" href={sol.link}>Explore →</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to shape the future?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join us in building the foundational layer for tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="/contact">Contact us</Button>
          <Button variant="outline" size="lg" href="/about">About FREX</Button>
        </div>
      </section>
    </>
  );
      }
