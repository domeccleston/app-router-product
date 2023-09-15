import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  revalidatePath("/");
  console.log("revalidated");
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    cache: "no-store",
  });
}
