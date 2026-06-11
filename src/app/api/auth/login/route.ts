import { NextResponse } from "next/server";
import { authCookieName, demoUsers } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string; remember?: boolean }
    | null;

  const email = body?.email?.trim().toLowerCase();
  const password = body?.password ?? "";

  const user = demoUsers.find(
    (candidate) => candidate.email === email && candidate.password === password
  );

  if (!user) {
    return NextResponse.json(
      { error: "Use an owner or manager account to access the dashboard." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true, role: user.role });
  response.cookies.set(authCookieName, user.role, {
    httpOnly: true,
    maxAge: body?.remember ? 60 * 60 * 24 * 14 : 60 * 60 * 8,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });

  return response;
}
