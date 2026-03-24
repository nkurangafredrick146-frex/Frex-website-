import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img src="/frex-logo.svg" alt="FREX" className="h-12 w-12 mb-4" />
            <p className="text-sm max-w-md">
              Fundamental Research & Evolutionary X-Systems – building the foundational layer for tomorrow through quantum computing, doctrinal systems, and emergent technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/labs" className="hover:text-cyan-400">Labs</Link></li>
              <li><Link href="/solutions" className="hover:text-cyan-400">Solutions</Link></li>
              <li><Link href="/doctry" className="hover:text-cyan-400">Doctry</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-cyan-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400">GitHub</a></li>
              <li><a href="mailto:research@frex.org" className="hover:text-cyan-400">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FREX. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-cyan-400 mx-2">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-400 mx-2">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
