import { fetchProductById } from "@/lib/contentstack";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const product = await fetchProductById("bltf46c1e88de381cfa");
  return NextResponse.json(product);
}
