import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { connect } from "@/db/dbConfig";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  //    const isPrivatePath = path === "/profile" || path == "/dashboard";

  const isPublicPath = path.includes("/login") || path.includes("/signup");
  const token = request.cookies.get("token")?.value || "";

  // if token is there you should not see public path
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  // if token isn't there you should not see private path
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  //   matcher: "/about/:path*",
  matcher: ["/", "/profile/:path*", "/login", "/signup"],
};
