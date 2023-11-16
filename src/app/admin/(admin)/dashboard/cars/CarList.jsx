"use client";

import {useState, useEffect} from "react";
import CarCard from "../components/carCard";
import {Skeleton} from "@nextui-org/react";

const CustomSkeleton = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="gap-10 flex w-full p-4 border-b border-b-slate-400/50">
        <div className="w-1/4">
          <Skeleton className="rounded-lg">
            <div className="h-28 aspect-video" />
          </Skeleton>
        </div>
        <div className="flex flex-col justify-between w-2/5">
          <Skeleton className="rounded-full w-full h-6" />
          <div className="flex flex-col gap-2">
            <Skeleton className="rounded-full w-1/2 h-4" />
            <Skeleton className="rounded-full w-1/2 h-4" />
            <Skeleton className="rounded-full w-1/2 h-4" />
          </div>
        </div>
        <div className="flex flex-col justify-between w-3/5">
          <div className="flex flex-col gap-2">
            <Skeleton className="rounded-full w-1/3 h-4" />
            <Skeleton className="rounded-full w-1/3 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarList = () => {
  const [carData, setCarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCarData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/car/all`
      );
      const {car} = await res.json();
      setCarData(car);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);
  return (
    <div className="h-[40rem] overflow-auto">
      <div className={`${isLoading ? "" : "hidden"}` + " w-full h-full"}>
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
      </div>
      <div>
        {carData.map((item, i) => {
          return (
            <div key={i}>
              <CarCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

module.exports = CarList;
