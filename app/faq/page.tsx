'use client';

import { useState } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | FREX',
  description: 'Frequently asked questions about FREX research and solutions.',
};

const faqs = [
  {
    question: 'What is FREX?',
    answer: 'FREX (Fundamental Research & Evolutionary X-Systems) is a research organization focused on quantum computing, doctrinal AI systems, and emergent technologies.',
  },
  {
    question: 'How can I collaborate with FREX?',
    answer: 'We welcome academic and industry partnerships. Please visit our Contact page to reach out.',
  },
  {
    question: 'Do you offer commercial solutions?',
    answer: 'Yes, through FREX Solutions we provide AI governance tools, quantum readiness assessments, and custom software engineering.',
  },
  {
    question: 'Where are you located?',
    answer: 'Our headquarters is in Kampala, Uganda, with team members working remotely worldwide.',
  },
  // more
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-lg border border-cyan-500/20">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                <span className="text-2xl text-cyan-400">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
