'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Replace with your actual form endpoint (e.g., Formspree, API route)
    const res = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
          Contact Us
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Reach out to discuss collaborations, research, or solutions.
        </p>

        {status === 'success' && (
          <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded mb-6">
            Thank you! Your message has been sent.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded mb-6">
            Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className="w-full"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>

        <div className="mt-12 text-center text-gray-400">
          <p>Email: <a href="mailto:research@frex.org" className="text-cyan-400 hover:underline">research@frex.org</a></p>
          <p>X: <a href="#" className="text-cyan-400 hover:underline">@FREX_Research</a></p>
          <p>LinkedIn: <a href="#" className="text-cyan-400 hover:underline">FREX Research</a></p>
        </div>
      </div>
    </div>
  );
}
