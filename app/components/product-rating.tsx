"use client";

import { StarIcon } from "@heroicons/react/solid";
import clsx from "clsx";

export const ProductRating = ({ rating }: { rating: number }) => {
  console.log("logging from client");

  return (
    <div className="flex gap-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <StarIcon
            key={i}
            className={clsx("w-4", i < rating ? "text-white" : "text-gray-500")}
          />
        );
      })}
    </div>
  );
};
