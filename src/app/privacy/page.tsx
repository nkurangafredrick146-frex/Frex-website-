import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FREX',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          FREX ("we", "us", or "our") respects your privacy. This policy explains how we handle your personal data.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and any message you send via our contact form.
        </p>
        <h2>How We Use Information</h2>
        <p>
          We use the information to respond to inquiries, improve our services, and communicate updates.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share it with trusted partners who assist in operating our website or conducting our business, as long as they agree to keep it confidential.
        </p>
        <h2>Security</h2>
        <p>
          We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have questions, contact us at <a href="mailto:privacy@frex.org" className="text-cyan-400">privacy@frex.org</a>.
        </p>
      </div>
    </div>
  );
}
