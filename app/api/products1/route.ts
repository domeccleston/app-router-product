import { fetchProduct } from "@/lib/contentstack";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const product = await fetchProduct();
  return NextResponse.json(product);
}
