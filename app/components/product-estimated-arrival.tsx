import { add, format, isTomorrow } from "date-fns";
import { cookies } from "next/headers";

export const ProductEstimatedArrival = ({
  leadTime,
  hasDeliveryTime = false,
}: {
  leadTime: number;
  hasDeliveryTime?: boolean;
}) => {
  const date = add(new Date(), {
    days: leadTime,
  });

  const cookieStore = cookies();

  const city = cookieStore.get("city")?.value || "London";

  return (
    <div className="text-sm text-gray-300">
      Get it{" "}
      <strong className="font-bold text-gray-100">
        {isTomorrow(date) ? "tomorrow, " : null}
        {format(date, "MMM d")}
      </strong>
      {hasDeliveryTime ? <> by 5pm</> : null}
      <div className="mt-2 text-xs">Special offer for customers in {city}</div>
    </div>
  );
};
