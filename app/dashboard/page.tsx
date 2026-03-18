import { Metadata } from 'next';
import Dashboard from '@/components/Dashboard';

export const metadata: Metadata = {
  title: 'Research Dashboard | FREX',
  description: 'Live metrics on publications, citations, and impact.',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Research Dashboard
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Real‑time metrics on FREX research output.
        </p>
        <Dashboard />
      </div>
    </div>
  );
}
