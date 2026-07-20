import { NextResponse, type NextRequest } from "next/server";

const UNLOCK_COOKIE = "beyondelta_unlocked";
const UNLOCK_PARAM = "key";
const STEALTH_PATH = "/coming-soon";
// Always real, gate or no gate — German law requires the Impressum (and
// by extension the linked Datenschutzerklärung) genuinely reachable from
// every page, not just linked-then-blocked by the stealth placeholder.
const ALWAYS_ALLOWED_PATHS = ["/impressum", "/datenschutz"];

/**
 * Gates the entire site behind a secret link while it's not ready for
 * general visibility. Visiting with ?key=<STEALTH_KEY> sets a long-lived
 * cookie and redirects to the clean URL; without a valid key/cookie,
 * every route is rewritten (URL stays the same) to the stealth
 * placeholder, which reveals nothing about site structure or content —
 * except the legal pages, which always render for real (see above).
 */
export function proxy(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;
  const secretKey = process.env.STEALTH_KEY;

  // No key configured: gate is effectively off (e.g. local dev without env set).
  if (!secretKey) {
    return NextResponse.next();
  }

  const providedKey = searchParams.get(UNLOCK_PARAM);
  if (providedKey === secretKey) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete(UNLOCK_PARAM);
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(UNLOCK_COOKIE, secretKey, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    return response;
  }

  const hasValidCookie = request.cookies.get(UNLOCK_COOKIE)?.value === secretKey;
  if (hasValidCookie || pathname === STEALTH_PATH) {
    return NextResponse.next();
  }

  // Real content, but still no Nav — keeps site structure (Startups/
  // Mittelstand/Portfolio/About links) out of view even here.
  if (ALWAYS_ALLOWED_PATHS.includes(pathname)) {
    const headers = new Headers(request.headers);
    headers.set("x-stealth-mode", "1");
    return NextResponse.next({ request: { headers } });
  }

  const stealthUrl = request.nextUrl.clone();
  stealthUrl.pathname = STEALTH_PATH;
  stealthUrl.search = "";
  const headers = new Headers(request.headers);
  headers.set("x-stealth-mode", "1");
  return NextResponse.rewrite(stealthUrl, { request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand).*)"],
};
