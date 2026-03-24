import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility | FREX',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1>Accessibility Statement</h1>
        <p>FREX is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience and applying relevant accessibility standards.</p>
        <h2>Conformance status</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. We aim for AA level conformance.</p>
        <h2>Feedback</h2>
        <p>If you encounter any barriers, please contact us at <a href="mailto:accessibility@frex.org" className="text-cyan-400">accessibility@frex.org</a>.</p>
      </div>
    </div>
  );
}
