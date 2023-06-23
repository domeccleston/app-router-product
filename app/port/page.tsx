import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from "./_components/recommended-products";
import { Reviews, ReviewsSkeleton } from "./_components/reviews";
import { SingleProduct } from "./_components/single-product";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { Ping } from "./ui/ping";
import { Suspense } from "react";
import { CartCountProvider } from "./_components/cart-count-context";
import { cookies } from "next/headers";

export const runtime = "experimental-edge";

export default async function Page() {
  const cartCount = Number(cookies().get("_cart_count")?.value || "0");
  return (
    <CartCountProvider initialCartCount={cartCount}>
      <div className="space-y-8 lg:space-y-14">
        <SingleProduct data={fetch(`${getBaseUrl()}/api/products?id=1`)} />

        <div className="relative">
          <div className="absolute -left-4 top-2">
            <Ping />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-2">
            <Ping />
          </div>
        </div>

        <Suspense fallback={<RecommendedProductsSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <RecommendedProducts
            path="/streaming/edge/product"
            data={fetch(
              // We intentionally delay the reponse to simulate a slow data
              // request that would benefit from streaming
              `${getBaseUrl()}/api/products?delay=500&filter=1`,
              {
                // We intentionally disable Next.js Cache to better demo
                // streaming
                cache: "no-store",
              }
            )}
          />
        </Suspense>

        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews
            data={fetch(
              // We intentionally delay the reponse to simulate a slow data
              // request that would benefit from streaming
              `${getBaseUrl()}/api/reviews?delay=1000`,
              {
                // We intentionally disable Next.js Cache to better demo
                // streaming
                cache: "no-store",
              }
            )}
          />
        </Suspense>
      </div>
    </CartCountProvider>
  );
}
