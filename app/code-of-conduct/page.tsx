import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code of Conduct | FREX',
};

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1>Code of Conduct</h1>
        <p>FREX is committed to providing a harassment‑free environment for all participants in our events and online spaces.</p>
        <h2>Our Standards</h2>
        <p>Examples of behavior that contributes to a positive environment:</p>
        <ul>
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints</li>
          <li>Gracefully accepting constructive criticism</li>
        </ul>
        <p>Examples of unacceptable behavior:</p>
        <ul>
          <li>Sexualized language or imagery</li>
          <li>Trolling, insulting comments</li>
          <li>Harassment of any kind</li>
        </ul>
        <h2>Reporting</h2>
        <p>If you experience or witness unacceptable behavior, please contact <a href="mailto:conduct@frex.org" className="text-cyan-400">conduct@frex.org</a>.</p>
        <p>Last updated: March 2025</p>
      </div>
    </div>
  );
}
