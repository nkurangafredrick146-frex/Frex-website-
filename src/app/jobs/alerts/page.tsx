'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function JobAlertsPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call your newsletter API
    await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, tags: ['job-alerts'] }),
    });
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">You're subscribed!</h1>
          <p className="text-gray-300">We'll notify you when new positions open.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl font-bold mb-4">Job Alerts</h1>
        <p className="text-gray-300 mb-6">Get notified when we post new openings.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Your email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" />
          <Button type="submit" variant="primary" size="lg" className="w-full">Subscribe</Button>
        </form>
      </div>
    </div>
  );
}
