import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected route bases (any route starting with these paths will be protected)
export const protectedRouteBases = [
  '/home',
  '/chat',
  '/admission-dashboard'
  // Add other base protected routes if needed
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the current path is a protected route
  // A path is protected if it matches exactly one of the protected bases
  // or starts with any of the protected bases followed by a slash
  const isProtectedRoute = protectedRouteBases.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  // Check if the user is authenticated by looking for the authToken cookie
  const authToken = request.cookies.get('authToken')?.value;
  
  // If accessing a protected route without authentication
  if (isProtectedRoute && !authToken) {
    // Create the URL to redirect to the login page
    const loginUrl = new URL('/login', request.url);
    
    // Redirect to login
    return NextResponse.redirect(loginUrl);
  }
  
  // Continue with the request for all other cases
  return NextResponse.next();
}

// Configure middleware to run only on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};