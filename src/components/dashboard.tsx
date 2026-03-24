'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const publicationData = [
  { year: '2020', count: 5 },
  { year: '2021', count: 8 },
  { year: '2022', count: 12 },
  { year: '2023', count: 19 },
  { year: '2024', count: 27 },
];

const citationData = [
  { year: '2020', citations: 120 },
  { year: '2021', citations: 340 },
  { year: '2022', citations: 890 },
  { year: '2023', citations: 2100 },
  { year: '2024', citations: 4300 },
];

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-4">Publications per Year</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={publicationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#06B6D4' }} />
            <Legend />
            <Bar dataKey="count" fill="#06B6D4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
        <h3 className="text-xl font-bold mb-4">Citations Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={citationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#06B6D4' }} />
            <Legend />
            <Line type="monotone" dataKey="citations" stroke="#06B6D4" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
