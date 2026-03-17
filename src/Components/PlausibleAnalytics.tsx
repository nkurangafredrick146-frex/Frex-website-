'use client';

import Script from 'next/script';

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN; // e.g., 'frex.org'
const PLAUSIBLE_SCRIPT = 'https://plausible.io/js/script.js';

export default function PlausibleAnalytics() {
  if (!PLAUSIBLE_DOMAIN) return null;
  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src={PLAUSIBLE_SCRIPT}
      strategy="afterInteractive"
    />
  );
}
