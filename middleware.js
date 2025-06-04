// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next(); // Token valid, proceed
  } catch (err) {
    // Token invalid or expired
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Apply this middleware to specific paths
export const config = {
  matcher: ["/dashboard", "/chat", "/ask-doubt", "/profile"], // secure pages
};