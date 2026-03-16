 'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Theme toggle setup
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Locale switcher setup
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="bg-black text-white border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/frex-logo.svg" alt="FREX" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FREX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/labs">Labs</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/doctry">Doctry</NavLink>
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-lg transition-colors"
            >
              Contact
            </a>

            {/* Theme toggle button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-800 text-cyan-400"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            )}

            {/* Locale switcher */}
            <select
              onChange={(e) => switchLocale(e.target.value)}
              value={locale}
              className="bg-gray-800 text-cyan-400 p-2 rounded-lg"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="/labs" onClick={() => setIsOpen(false)}>
                Labs
              </MobileNavLink>
              <MobileNavLink href="/solutions" onClick={() => setIsOpen(false)}>
                Solutions
              </MobileNavLink>
              <MobileNavLink href="/doctry" onClick={() => setIsOpen(false)}>
                Doctry
              </MobileNavLink>
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-lg text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              {/* Theme toggle for mobile */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-gray-800 text-cyan-400"
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              )}

              {/* Locale switcher for mobile */}
              <select
                onChange={(e) => switchLocale(e.target.value)}
                value={locale}
                className="bg-gray-800 text-cyan-400 p-2 rounded-lg"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Helper components
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-cyan-400 transition-colors">
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
               }
