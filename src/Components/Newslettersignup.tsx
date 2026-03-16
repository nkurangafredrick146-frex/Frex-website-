'use client';

import { useState } from 'react';
import Button from './Button';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Replace with your actual endpoint (e.g., Mailchimp, ConvertKit, API route)
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
      <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-gray-400 mb-4">Get the latest research and news from FREX.</p>
      {status === 'success' && (
        <p className="text-green-400 mb-4">Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 mb-4">Something went wrong. Please try again.</p>
      )}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 bg-black border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
        />
        <Button type="submit" variant="primary" size="sm" disabled={status === 'loading'}>
          {status === 'loading' ? '...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
}
