'use client';

import { useEffect, useRef } from 'react';

export default function XFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load X (Twitter) widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/20">
      <h3 className="text-2xl font-bold mb-4">Latest from X (formerly Twitter)</h3>
      <div ref={containerRef}>
        <a
          className="twitter-timeline"
          data-theme="dark"
          href="https://twitter.com/FREX_Research?ref_src=twsrc%5Etfw"
        >
          Posts by @FREX_Research
        </a>
      </div>
    </div>
  );
    }
