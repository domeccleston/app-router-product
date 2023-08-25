import { NextRequest, NextResponse } from "next/server";

// run only on homepage
export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;

  const city = geo?.city || "London";

  const response = NextResponse.next();

  response.cookies.set("city", city);

  return response;
}
