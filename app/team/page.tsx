'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Team & Organization | FREX',
  description: 'Meet the leaders, researchers, and operational team behind FREX.',
};

const leadership = [
  { title: 'Founder & Chief Visionary', name: 'Fredrick Nkuranga', email: 'f.nkuranga@frex.org' },
  { title: 'Chief Executive Officer', name: 'Dr. Ada Nambi', email: 'a.nambi@frex.org' },
  { title: 'Chief Financial Officer', name: 'Michael Okello', email: 'm.okello@frex.org' },
  { title: 'Chief Operating Officer', name: 'Sarah Kisakye', email: 's.kisakye@frex.org' },
];

const researchHeads = [
  { department: 'Quantum Computing', head: 'Dr. Ada Nambi', email: 'a.nambi@frex.org' },
  { department: 'Doctrinal Systems', head: 'Prof. John Mukasa', email: 'j.mukasa@frex.org' },
  { department: 'Emergent Sciences', head: 'Dr. Grace Akello', email: 'g.akello@frex.org' },
];

const researchers = [
  { name: 'Dr. Peter Wasswa', field: 'Quantum Algorithms' },
  { name: 'Dr. Susan Nabatanzi', field: 'AI Ethics' },
  { name: 'Eng. David Kibuuka', field: 'Neuromorphic Hardware' },
  { name: 'Dr. Rita Atuhaire', field: 'Materials Science' },
];

const operations = [
  { role: 'Head of Finance', name: 'Michael Okello' },
  { role: 'Accountant', name: 'Patience Nambi' },
  { role: 'HR Manager', name: 'Esther Akello' },
  { role: 'IT Manager', name: 'Brian Ssentongo' },
  { role: 'Communications Lead', name: 'Cynthia Nakato' },
];

const investorRelations = {
  contact: 'invest@frex.org',
  description: 'For inquiries about investing in FREX Research (non‑profit) or partnering with FREX Solutions.',
};

// Helper to get image path from name
const getImagePath = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/dr\.|prof\.|eng\./g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
  return `/team/${slug}.jpg`; // assumes jpg, you can add .png fallback
};

// ProfileImage component with fallback
function ProfileImage({ name }: { name: string }) {
  const [imgSrc, setImgSrc] = useState(getImagePath(name));

  return (
    <div className="relative w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-2 border-cyan-500">
      <Image
        src={imgSrc}
        alt={name}
        fill
        className="object-cover"
        onError={() => setImgSrc('/team/default-avatar.png')} // fallback
      />
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Our People & Organization
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          The minds and roles driving FREX forward – from foundational research to commercial solutions.
        </p>

        {/* Leadership */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/20 pb-2">Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.title} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 text-center">
                <ProfileImage name={person.name} />
                <h3 className="text-xl font-bold text-cyan-400 mt-2">{person.title}</h3>
                <p className="text-lg text-white mt-1">{person.name}</p>
                <a href={`mailto:${person.email}`} className="text-gray-400 hover:text-cyan-400 text-sm break-all">
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Research Department Heads */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/20 pb-2">Research Department Heads</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {researchHeads.map((dept) => (
              <div key={dept.department} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 text-center">
                <ProfileImage name={dept.head} />
                <h3 className="text-xl font-bold text-cyan-400 mt-2">{dept.department}</h3>
                <p className="text-lg text-white mt-1">{dept.head}</p>
                <a href={`mailto:${dept.email}`} className="text-gray-400 hover:text-cyan-400 text-sm break-all">
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Researchers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/20 pb-2">Researchers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchers.map((researcher) => (
              <div key={researcher.name} className="bg-gray-900/30 p-4 rounded border border-cyan-500/10 flex items-center gap-3">
                <ProfileImage name={researcher.name} />
                <div>
                  <p className="font-semibold">{researcher.name}</p>
                  <p className="text-sm text-gray-400">{researcher.field}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-4 italic">
            And many more – we're always looking for passionate researchers. <a href="/careers" className="text-cyan-400 underline">Join us</a>.
          </p>
        </section>

        {/* Operations & Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/20 pb-2">Operations & Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operations.map((op) => (
              <div key={op.role} className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20 flex items-center gap-3">
                <ProfileImage name={op.name} />
                <div>
                  <h3 className="font-bold text-cyan-400">{op.role}</h3>
                  <p className="text-white">{op.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/20 pb-2">Investor Relations</h2>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
            <p className="text-gray-300 mb-4">{investorRelations.description}</p>
            <p className="text-lg">
              <span className="text-cyan-400">Contact: </span>
              <a href={`mailto:${investorRelations.contact}`} className="text-white hover:text-cyan-400 underline">
                {investorRelations.contact}
              </a>
            </p>
            <Button variant="outline" size="sm" href="/invest" className="mt-4">
              Learn About Investing
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
        }
