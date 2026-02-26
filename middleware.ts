import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // allow sign-in, sign-up pages without auth
    if (["/sign-in", "/sign-up"].includes(pathname)) {
      return NextResponse.next();
    }

    // Check for session cookie
    let hasSession = false;
    try {
      const sessionCookie = getSessionCookie(request);
      hasSession = !!sessionCookie;
    } catch {
      const cookies = request.cookies;
      hasSession =
        cookies.has("better-auth.session_token") ||
        cookies.has("better-auth.session");
    }

    // secure other routes under /dashboard
    if (pathname.startsWith("/dashboard")) {
      if (!hasSession) {
        const signUpUrl = new URL("/sign-up", request.url);
        if (pathname !== "/dashboard") {
          signUpUrl.searchParams.set("redirect", pathname);
        }
        return NextResponse.redirect(signUpUrl);
      }
    }

    return NextResponse.next();
  } catch {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/sign-up"],
};