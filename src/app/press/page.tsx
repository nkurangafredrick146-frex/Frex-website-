import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Kit | FREX',
  description: 'Logos, photos, and press releases for media.',
};

const releases = [
  { date: '2025-02-10', title: 'FREX Announces Graphene Water Filter Pilot' },
  { date: '2024-11-05', title: 'New Quantum Lab Opens in Kampala' },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Press Kit
        </h1>
        <p className="text-gray-300 mb-8">Download assets and read our latest news.</p>

        <h2 className="text-2xl font-bold mb-4">Logos</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-900/50 p-4 rounded border border-cyan-500/20 text-center">
            <img src="/frex-logo.svg" alt="FREX Logo" className="h-20 mx-auto mb-2" />
            <Button variant="outline" size="sm" href="/downloads/frex-logo.svg" download>SVG</Button>
          </div>
          <div className="bg-gray-900/50 p-4 rounded border border-cyan-500/20 text-center">
            <div className="h-20 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-2" />
            <Button variant="outline" size="sm" href="/downloads/frex-icon.png" download>PNG</Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Photos</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-900/50 p-2 rounded">
            <div className="h-32 bg-gray-800 mb-2" />
            <Button variant="outline" size="sm" href="/downloads/team-photo.jpg" download>Download</Button>
          </div>
          <div className="bg-gray-900/50 p-2 rounded">
            <div className="h-32 bg-gray-800 mb-2" />
            <Button variant="outline" size="sm" href="/downloads/lab.jpg" download>Download</Button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Press Releases</h2>
        <ul className="space-y-2 mb-8">
          {releases.map((r, i) => (
            <li key={i} className="bg-gray-900/50 p-4 rounded border border-cyan-500/20">
              <span className="text-cyan-400 mr-2">{r.date}</span>
              <span>{r.title}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-400">For media inquiries: <a href="mailto:press@frex.org" className="text-cyan-400">press@frex.org</a></p>
      </div>
    </div>
  );
}
