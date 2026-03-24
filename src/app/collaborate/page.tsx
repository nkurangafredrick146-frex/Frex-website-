'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function CollaboratePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    proposal: '',
    file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to API route that handles file upload (multipart/form-data)
    // For simplicity, we'll just simulate success.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-300">We'll review your proposal and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Propose a Collaboration
        </h1>
        <p className="text-gray-300 mb-8">
          Interested in joint research? Fill out the form below, and we'll be in touch.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white" />
          </div>
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-300 mb-2">Institution/Organization</label>
            <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white" />
          </div>
          <div>
            <label htmlFor="proposal" className="block text-sm font-medium text-gray-300 mb-2">Research Proposal / Idea *</label>
            <textarea id="proposal" name="proposal" rows={6} required value={formData.proposal} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white" />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">Supporting Document (optional)</label>
            <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-cyan-500 file:text-black hover:file:bg-cyan-600" />
          </div>
          <Button type="submit" variant="primary" size="lg" className="w-full">Submit Proposal</Button>
        </form>
      </div>
    </div>
  );
      }
