import { Suspense } from "react";
import { cookies, headers } from "next/headers";

import { getBaseUrl } from "@/lib/getBaseUrl";

import { Ping } from "@/ui/ping";

import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from "./components/recommended-products";
import { Reviews, ReviewsSkeleton } from "./components/reviews";
import { SingleProduct } from "./components/single-product";
import { CartCountProvider } from "./components/cart-count-context";

// Render this page at the edge, close to the user
export const runtime = "edge";

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
          <RecommendedProducts
            path="/streaming/edge/product"
            data={fetch(`${getBaseUrl()}/api/products?delay=500&filter=1`, {
              cache: "force-cache",
            })}
          />
        </Suspense>

        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews
            data={fetch(`${getBaseUrl()}/api/reviews?delay=1000`, {
              cache: "no-store",
            })}
          />
        </Suspense>
      </div>
    </CartCountProvider>
  );
}
