import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const res = new NextResponse(JSON.stringify({ message: "Logged out successfully" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

  // ✅ Get cookie store first
  const cookieStore = cookies();

  // ✅ Clear the token cookie
  res.cookies.set("auth_token", "", {
    maxAge: 0,
    path: "/",
  });

  return res;
}
