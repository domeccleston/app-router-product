import { NextRequest, NextResponse } from "next/server";

// run only on homepage
export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;

  console.log({ geo });

  return NextResponse.rewrite(url);
}
