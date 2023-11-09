"use client";

import Image from "next/image";
import useCurrency from "@/hooks/useCurrency";
import { useRouter } from "next/navigation";

const CarCard = ({ item }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded border-2 md:border-0 border-gray-300 border-opacity-20 md:border-opacity-0 md:flex-row w-64 md:w-full gap-6 md:gap-0 py-4 px-5 justify-between items-center md:items-start shadow-xl md:shadow-none">
      <div className="relative h-28 aspect-video">
        <Image
          src={item.imageData}
          fill
          alt={`${item.name}_image`}
          style={{
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </div>
      <div className="flex flex-col w-52 ml-8 gap-2 px-2">
        <h4 className="text-xl font-medium">{item.name}</h4>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/profile.svg"
              width={18}
              height={18}
              alt="seats"
            />
            <p className="text-sm">{item.seatNumber} seats</p>
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/gears.svg"
              width={18}
              height={18}
              alt="transmission"
            />
            <p className="text-sm">{item.transmission}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-36 items-end gap-2">
        <div className="flex flex-col w-36 items-end">
          <p className="text-xs">Price per day</p>
          <p className="text-xl font-bold">{useCurrency(item.price)}</p>
        </div>
        <button
          className="btn-primary"
          onClick={() => router.push("/booking-summary" + "?" + "carId=" + item._id)}
        >
          Order
        </button>
      </div>
    </div>
  );
};

module.exports = CarCard;
