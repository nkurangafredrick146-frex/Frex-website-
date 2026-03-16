import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | FREX',
  description: 'Meet the researchers and leaders behind FREX.',
};

const team = [
  {
    name: 'Dr. Ada Nambi',
    role: 'Director of Quantum Research',
    bio: 'Former IBM quantum researcher, PhD in Physics from MIT.',
    image: '/team/ada.jpg',
  },
  {
    name: 'Prof. John Mukasa',
    role: 'Head of Doctrinal Systems',
    bio: 'Professor of Computer Science at Makerere University, expert in AI safety.',
    image: '/team/john.jpg',
  },
  {
    name: 'Dr. Grace Akello',
    role: 'Lead, Emergent Sciences',
    bio: 'PhD in Neuroscience from Cambridge, pioneered neuromorphic architectures.',
    image: '/team/grace.jpg',
  },
  // add more
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
          Our Team
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          The brilliant minds driving our research and solutions.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-cyan-400 mb-2">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
