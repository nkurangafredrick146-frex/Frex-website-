import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | FREX',
  description: 'Our academic and industry collaborators.',
};

const partners = [
  { name: 'Makerere University', logo: '/partners/makerere.png', url: 'https://cis.mak.ac.ug' },
  { name: 'Uganda National Council for Science and Technology', logo: '/partners/uncst.png', url: 'https://uncst.go.ug' },
  { name: 'IBM Quantum', logo: '/partners/ibm.png', url: 'https://quantum-computing.ibm.com' },
  // add more
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Our Partners
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          We collaborate with leading institutions worldwide.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition text-center">
                <div className="relative h-16 w-full mb-2">
                  <Image src={p.logo} alt={p.name} fill className="object-contain" />
                </div>
                <span className="text-sm text-gray-300">{p.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
