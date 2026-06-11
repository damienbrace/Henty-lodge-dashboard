import { NextRequest, NextResponse } from "next/server";
import { authCookieName, hasAllowedRole } from "@/lib/auth";

const protectedPrefixes = [
  "/dashboard",
  "/bookings",
  "/guests",
  "/marketing",
  "/reviews",
  "/tasks",
  "/finance",
  "/local-guide",
  "/reports",
  "/ai-assistant",
  "/settings"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api") || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const role = request.cookies.get(authCookieName)?.value;
  const canAccessDashboard = hasAllowedRole(role);

  if (pathname === "/" && canAccessDashboard) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  const isProtected = protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isProtected && !canAccessDashboard) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
