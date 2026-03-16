'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Button from './Button';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShow(false);
  };

  const decline = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-cyan-500/20 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies to enhance your experience. By continuing, you agree to our{' '}
          <a href="/privacy" className="text-cyan-400 underline">privacy policy</a>.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
