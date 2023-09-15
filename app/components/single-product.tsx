import { Pricing } from "./pricing";
import type { Product } from "../../types";
import { ProductRating } from "./product-rating";
import { StaticProductData } from "./static-product-data";
import { cookies } from "next/headers";
import Image from "next/image";

export const SingleProduct = async () => {
  const data = fetch(
    `https://app-router-product-six.vercel.app/api/contentstack`
  );
  const product = (await data.then((res) => res.json())) as Product;

  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = cookies().get("_cart_count")?.value || "0";

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-full lg:col-span-1">
        <div className="space-y-2">
          <Image
            src={`/${StaticProductData.image}`}
            className="hidden rounded-lg grayscale lg:block"
            alt={product.title as string}
            height={400}
            width={400}
          />

          <div className="flex gap-x-2">
            <div className="w-1/3">
              <Image
                src={`/${StaticProductData.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${StaticProductData.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${StaticProductData.image}`}
                className="rounded-lg grayscale"
                alt={product.name}
                height={180}
                width={180}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full space-y-4 lg:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {product.title}
        </div>

        <ProductRating rating={Number(product.rating)} />

        <div className="space-y-4 text-sm text-gray-200">
          <p>{product.product_description}</p>
        </div>
      </div>

      <div className="col-span-full lg:col-span-1">
        <Pricing product={StaticProductData} cartCount={cartCount} />
      </div>
    </div>
  );
};
