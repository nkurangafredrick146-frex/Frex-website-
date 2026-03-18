export interface Project {
  slug: string;
  title: string;
  domain: string;
  lead: string;
  description: string;
  longDescription: string;
  timeline: string;
  image?: string;
  publications: { title: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: 'frex-sos',
    title: 'FREX SOS: Systems of Systems',
    domain: 'Cross-Domain Research',
    lead: 'FREX Internal',
    description: 'Building a modular discovery engine that integrates quantum, doctrinal, and emergent sciences.',
    longDescription: `
      <p>FREX SOS is our flagship initiative: a modular discovery engine integrating quantum, doctrinal, and emergent sciences. 
      It connects imagination with engineering reality, enabling breakthroughs across multiple domains.</p>
      <p>By building FREX SOS, we are creating the foundation for scalable, evolutionary research that adapts and evolves. 
      This initiative positions FREX as a global hub for futuristic breakthroughs, bridging science, technology, and innovation.</p>
    `,
    timeline: '2024–present',
    image: '/projects/frex-sos.jpg',
    publications: [
      { title: 'FREX SOS: A Modular Discovery Engine', url: '/pubs/frex-sos.pdf' },
    ],
  },
  // ➕ Add more projects here as needed
];
