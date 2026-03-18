import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Research Map | FREX',
  description: 'Explore FREX research sites and partners around the world.',
};

// Dynamically import map to avoid SSR issues with Leaflet
const ResearchMap = dynamic(() => import('@/components/ResearchMap'), { ssr: false });

export default function ResearchMapPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Global Research Map
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Our research spans the globe. Click on a marker to learn more.
        </p>
        <ResearchMap />
      </div>
    </div>
  );
}
