'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function SupportPage() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState('one-time');

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Support FREX
        </h1>
        <p className="text-gray-300 mb-8">
          Your contribution funds fundamental research and helps us build the foundational layer for tomorrow.
        </p>
        <div className="bg-gray-900/50 p-8 rounded-lg border border-cyan-500/20">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select amount (USD)</label>
            <div className="flex gap-2">
              {[25, 50, 100, 250].map(val => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`px-4 py-2 rounded ${amount === val ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                >
                  ${val}
                </button>
              ))}
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-24 px-2 py-1 bg-gray-800 border border-cyan-500/20 rounded text-white"
                min="1"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Frequency</label>
            <div className="flex gap-2">
              <button
                onClick={() => setFrequency('one-time')}
                className={`px-4 py-2 rounded ${frequency === 'one-time' ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                One time
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`px-4 py-2 rounded ${frequency === 'monthly' ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                Monthly
              </button>
            </div>
          </div>
          <Button variant="primary" size="lg" className="w-full" href="https://donate.stripe.com/your-link">
            Donate ${amount} {frequency === 'monthly' ? 'per month' : ''}
          </Button>
          <p className="text-xs text-gray-400 mt-4 text-center">
            FREX is a non‑profit organization. Donations are tax‑deductible.
          </p>
        </div>
      </div>
    </div>
  );
}
