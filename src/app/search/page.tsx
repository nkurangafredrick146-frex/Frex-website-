'use client';

import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

// This would come from a central search index
const searchData = [
  { title: 'Quantum Computing', url: '/labs', category: 'Labs' },
  { title: 'Doctrinal Systems', url: '/doctry', category: 'Doctry' },
  { title: 'Emergent Sciences', url: '/labs', category: 'Labs' },
  { title: 'AI Governance Suite', url: '/solutions', category: 'Solutions' },
  { title: 'Quantum Readiness Framework', url: '/solutions', category: 'Solutions' },
  { title: 'About FREX', url: '/about', category: 'About' },
  { title: 'Contact', url: '/contact', category: 'Contact' },
  // ... add all pages and blog posts
];

const fuse = new Fuse(searchData, {
  keys: ['title'],
  threshold: 0.3,
});

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchData>([]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const res = fuse.search(query).map(r => r.item);
    setResults(res);
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Search
        </h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-6 py-4 text-xl bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white mb-8"
          autoFocus
        />
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((item, idx) => (
              <li key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
                <Link href={item.url} className="block hover:text-cyan-400">
                  <span className="text-sm text-cyan-400">{item.category}</span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        ) : query.length >= 2 ? (
          <p className="text-gray-400">No results found.</p>
        ) : null}
      </div>
    </div>
  );
}
