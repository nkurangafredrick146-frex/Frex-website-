import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  cookies().delete('admin-token');
  return NextResponse.redirect(new URL('/admin/login', request.url));
}
