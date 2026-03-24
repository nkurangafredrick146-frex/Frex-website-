import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | FREX',
  description: 'Upcoming conferences, workshops, and talks by FREX researchers.',
};

const events = [
  {
    title: 'Quantum Africa Conference 2025',
    date: '2025-03-15',
    location: 'Nairobi, Kenya',
    description: 'Dr. Nambi presents our latest quantum advantage results.',
  },
  {
    title: 'AI Ethics Summit',
    date: '2025-04-02',
    location: 'Online',
    description: 'Prof. Mukasa leads a workshop on the Doctrinal Compiler.',
  },
  {
    title: 'Neuromorphic Computing Workshop',
    date: '2025-05-10',
    location: 'Kampala, Uganda',
    description: 'Hands-on session with our NeuroSynth prototype.',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Events
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Join us at upcoming conferences, workshops, and talks.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
              <p className="text-cyan-400 mb-1">{new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-400 mb-3">{event.location}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
