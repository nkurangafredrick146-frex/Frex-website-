'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function SubmitCaseStudy() {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    industry: '',
    summary: '',
    content: '',
    author: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/submit-case-study', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError('Submission failed. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
          <p className="text-gray-300">Your case study has been submitted for review. We'll notify you when it's published.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Submit a Case Study
        </h1>
        <p className="text-gray-300 mb-8">For FREX researchers and partners. Fill out the form below. Our team will review and publish it.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">Case Study Title *</label>
            <input type="text" id="title" name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" />
          </div>
          <div>
            <label htmlFor="client" className="block text-sm font-medium mb-2">Client/Partner *</label>
            <input type="text" id="client" name="client" required value={formData.client} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" />
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium mb-2">Industry *</label>
            <select id="industry" name="industry" required value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded">
              <option value="">Select industry</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Defense">Defense</option>
              <option value="Energy">Energy</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="summary" className="block text-sm font-medium mb-2">Short Summary *</label>
            <textarea id="summary" name="summary" rows={3} required value={formData.summary} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">Full Case Study (Markdown) *</label>
            <textarea id="content" name="content" rows={10} required value={formData.content} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" placeholder="# Title&#10;&#10;Write your case study in Markdown..." />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-2">Your Name *</label>
            <input type="text" id="author" name="author" required value={formData.author} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/20 rounded" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" variant="primary" size="lg" className="w-full">Submit for Review</Button>
        </form>
      </div>
    </div>
  );
}
