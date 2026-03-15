import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FREX',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          By accessing or using the FREX website, you agree to be bound by these terms.
        </p>
        <h2>Use License</h2>
        <p>
          Permission is granted to temporarily view the materials on FREX's website for personal, non-commercial use. This is a license, not a transfer of title.
        </p>
        <h2>Disclaimer</h2>
        <p>
          The materials on the site are provided "as is". FREX makes no warranties, expressed or implied, and hereby disclaims all warranties.
        </p>
        <h2>Limitations</h2>
        <p>
          In no event shall FREX be liable for any damages arising out of the use or inability to use the materials.
        </p>
        <h2>Revisions</h2>
        <p>
          FREX may revise these terms at any time without notice. By using this site, you agree to be bound by the current version.
        </p>
        <h2>Governing Law</h2>
        <p>
          Any claim relating to FREX's website shall be governed by the laws of Uganda without regard to its conflict of law provisions.
        </p>
        <h2>Contact</h2>
        <p>
          For questions, contact <a href="mailto:legal@frex.org" className="text-cyan-400">legal@frex.org</a>.
        </p>
      </div>
    </div>
  );
}
