import createMiddleware from 'next-intl/middleware';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// --- i18n middleware setup ---
const intlMiddleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});

export async function middleware(req: NextRequest) {
  // Run i18n middleware first
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  // Prepare Supabase client
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  // Admin route protection
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = req.nextUrl.pathname === '/admin/login';

  if (isAdminRoute && !isLoginPage) {
    // Check Supabase session first
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    // Optional: also allow cookie‑based admin token
    const adminToken = req.cookies.get('admin-token');
    const isValidCookie = adminToken?.value === process.env.ADMIN_PASSWORD;

    if (!isValidCookie && !session) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return res;
}

// --- Matcher config: merge i18n + admin ---
export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)', // i18n matcher
    '/admin/:path*'               // admin matcher
  ],
};
