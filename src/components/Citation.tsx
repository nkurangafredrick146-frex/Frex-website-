'use client';

import { useState } from 'react';
import Button from './Button';

interface CitationProps {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
}

export default function Citation({ title, authors, venue, year, url }: CitationProps) {
  const [copied, setCopied] = useState(false);

  const bibtex = `@article{frex${year},
  title={${title}},
  author={${authors}},
  journal={${venue}},
  year={${year}},
  url={${url}}
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900/50 p-4 rounded border border-cyan-500/20">
      <pre className="text-sm text-gray-300 overflow-x-auto">{bibtex}</pre>
      <Button variant="outline" size="sm" onClick={copyToClipboard} className="mt-2">
        {copied ? 'Copied!' : 'Copy BibTeX'}
      </Button>
    </div>
  );
}
