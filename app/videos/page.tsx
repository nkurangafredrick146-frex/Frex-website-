import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Video Library | FREX',
  description: 'Talks, lab tours, and explainer videos.',
};

const videos = [
  { title: 'Quantum Computing 101', speaker: 'Dr. Ada Nambi', youtubeId: 'dQw4w9WgXcQ' }, // replace with real IDs
  { title: 'Graphene Water Filtration', speaker: 'Dr. Grace Akello', youtubeId: '...' },
  { title: 'Doctrinal Systems Explained', speaker: 'Prof. John Mukasa', youtubeId: '...' },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Video Library
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Watch our researchers explain their work.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
              <iframe
                className="w-full aspect-video rounded"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allowFullScreen
              />
              <h3 className="text-xl font-bold mt-4">{video.title}</h3>
              <p className="text-gray-400">{video.speaker}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
