import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Integrity | FREX',
};

export default function ResearchIntegrityPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1>Research Integrity</h1>
        <p>FREX is committed to the highest standards of research ethics and integrity.</p>
        <h2>Policies</h2>
        <ul>
          <li>All research involving human subjects is reviewed by an independent ethics board.</li>
          <li>We require data management plans that ensure privacy and reproducibility.</li>
          <li>Authorship is determined based on significant intellectual contribution.</li>
        </ul>
        <h2>Conflict of Interest</h2>
        <p>Researchers must disclose any financial or personal interests that could influence their work.</p>
        <h2>Reporting Concerns</h2>
        <p>If you suspect a violation, contact <a href="mailto:integrity@frex.org" className="text-cyan-400">integrity@frex.org</a>.</p>
      </div>
    </div>
  );
}
