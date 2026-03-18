import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Reports | FREX',
  description: 'Download our yearly reports on research progress.',
};

const reports = [
  { year: 2024, pdf: '/reports/frex-annual-2024.pdf' },
  { year: 2023, pdf: '/reports/frex-annual-2023.pdf' },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Annual Reports
        </h1>
        <p className="text-gray-300 mb-8">
          Our yearly reports summarize research achievements, partnerships, and financials.
        </p>
        <div className="space-y-4">
          {reports.map(r => (
            <div key={r.year} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 flex justify-between items-center">
              <span className="text-xl font-bold">FREX Annual Report {r.year}</span>
              <Button variant="outline" size="sm" href={r.pdf} download>Download PDF</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
