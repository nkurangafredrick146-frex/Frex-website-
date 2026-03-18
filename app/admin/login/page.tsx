'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/admin/case-studies');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900/50 p-8 rounded-lg border border-cyan-500/20">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 bg-black border border-cyan-500/20 rounded focus:outline-none focus:border-cyan-500"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" variant="primary" size="lg" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
