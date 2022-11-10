// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// I list out the paths because of some static paths issues... notes later
// _next is not in the path!
// const SIGNED_IN_PAGES = ['/myaccount/*'];
// const SIGNED_OUT_PAGES = ['/signin', '/signup'];

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const signedInPage = request.nextUrl.pathname.startsWith('/myaccount');
  const indexPage = request.nextUrl.pathname == '/';

  const sessionID = request.cookies.get('session')?.value ?? "";
  // TODO: Sanitize!

  // If user is signed in
  const userSignedIn = sessionID == "valid";

  console.log(signedInPage, userSignedIn);

  if ((indexPage && userSignedIn) || userSignedIn && !signedInPage) {
    // Signed in but accessing a signed out page redirect:
    return NextResponse.redirect(new URL('/myaccount', request.url));
  }

  if ((indexPage && !userSignedIn) || !userSignedIn && signedInPage) {
    // Signed out but accessing a signed in page redirect:
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // const response = NextResponse.rewrite(new URL('/signin', request.url));
  // response.cookies.set('session', 'invalid');
  // return response;

}