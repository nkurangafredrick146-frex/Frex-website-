 // app/layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  title: 'FREX - Fundamental Research & Evolutionary X-Systems',
  description:
    'Building the foundational layer for tomorrow through quantum computing, doctrinal systems, and emergent technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Global Google Analytics script */}
        <GoogleAnalytics />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* Global cookie consent banner */}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
