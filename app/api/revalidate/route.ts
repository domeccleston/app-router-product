import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  revalidatePath("/");
  console.log("revalidated");
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    cache: "no-store",
  });
}
