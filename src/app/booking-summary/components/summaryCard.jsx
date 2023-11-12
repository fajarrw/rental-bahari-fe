"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useCurrency from "@/hooks/useCurrency";
import SummaryCardSkeleton from "./summaryCardSkeleton";
import { format } from "date-fns";

const SummaryCard = () => {
  const [carData, setCarData] = useState();
  const [discount, setDiscount] = useState(0);
  const [payable, setPayable] = useState(0);
  const searchParams = useSearchParams();

  const getCarData = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_RB_REST_API_URL +
          "/api/car/" +
          searchParams.get("carId")
      );
      const { car } = await res.json();
      setCarData(car);
    } catch (err) {
      console.error(err);
    }
  };

  const calculateDiscount = async () => {
    try {
      const carPrice = carData?.price; // Safely access the price property

      if (carPrice !== undefined) {
        console.log("Car Price:", carPrice);
        setDiscount(carPrice / 4);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const calculatePayable = async () => {
    try {
      const carPrice = carData?.price; // Safely access the price property
      if (carPrice !== undefined) {
        setPayable(carPrice - discount);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);

  useEffect(() => {
    calculateDiscount();
  }, [carData]);

  useEffect(() => {
    calculatePayable();
  }, [discount]);

  return (
    <div>
      {carData ? (
        <div className="flex flex-col max-w-[25rem] w-full items-stretch gap-3 md:shadow-xl pt-4 pb-10 px-6">
          <div className="flex flex-col items-center box-info py-3 text-base">
            Congrats! You just saved {useCurrency(discount)}
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="relative h-20 aspect-video">
              <Image
                src={carData.imageData}
                fill
                alt={`${carData.name}_image`}
                style={{
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
            <h2 className="text-lg">{carData.name}</h2>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-xs font-semibold">Start</p>
              <p>
                {format(
                  new Date(
                    searchParams.get("start").slice(6, 10),
                    searchParams.get("start").slice(3, 5),
                    searchParams.get("start").slice(0, 2)
                  ),
                  "E, dd MMM yyyy"
                )}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-semibold">End</p>
              <p>
                {format(
                  new Date(
                    searchParams.get("end").slice(6, 10),
                    searchParams.get("end").slice(3, 5),
                    searchParams.get("end").slice(0, 2)
                  ),
                  "E, dd MMM yyyy"
                )}
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row justify-between text-sm py-1">
            <p>Price</p>
            <p className="font-semibold">{useCurrency(carData.price)}</p>
          </div>
          <div className="flex flex-row justify-between text-sm py-1">
            <p>Discount</p>
            <p className="font-semibold">{useCurrency(discount)}</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between items-center py-1">
            <p>Payable Amount</p>
            <p className="font-semibold text-lg">{useCurrency(payable)}</p>
          </div>
          <div className="flex flex-col items-center py-1">
            <p>You aren't logged in. Please log in or sign up</p>
          </div>
          <div className="flex flex-row justify-center gap-4 py-2">
            <button className="btn-secondary font-normal">Sign Up</button>
            <button className="btn-primary font-normal">Log In</button>
          </div>
        </div>
      ) : (
        <SummaryCardSkeleton />
      )}
    </div>
  );
};

module.exports = SummaryCard;
