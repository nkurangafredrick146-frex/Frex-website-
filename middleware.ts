 import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// First, set up the i18n middleware
const intlMiddleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
  // Run the i18n middleware first
  const response = intlMiddleware(request);
  if (response) return response;

  // Then handle admin route protection
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/admin/login';

  if (isAdminRoute && !isLoginPage) {
    const adminToken = request.cookies.get('admin-token');
    const isValid = adminToken?.value === process.env.ADMIN_PASSWORD;
    if (!isValid) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// Merge matcher configs so both apply
export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)', // i18n matcher
    '/admin/:path*'               // admin matcher
  ],
};
