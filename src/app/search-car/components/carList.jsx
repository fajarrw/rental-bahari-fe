"use client";

import { useState, useEffect, useContext } from "react";
import CarCard from "./carCard";
import CarCardSkeleton from "./carCardSkeleton";
import { FilterAndSortContext } from "@/app/search-car/context/filterAndSortContext";

const CarList = () => {
  const [carData, setCarData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const filterAndSortContext = useContext(FilterAndSortContext);

  const getCarData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        process.env.NEXT_PUBLIC_RB_REST_API_URL +
          "/api/car/search?" +
          createParams(filterAndSortContext)
      );
      const { car } = await res.json();
      setCarData(car);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const createParams = (context) => {
    var params = "";
    if (context.transmission != "") {
      var allTransmission = "";
      for (let i = 0; i < context.transmission.length; i++) {
        allTransmission = allTransmission + "," + context.transmission[i];
      }
      allTransmission = allTransmission.slice(1);
      params = params + "&transmission=" + allTransmission;
    }
    if (context.type != "") {
      var allType = "";
      for (let i = 0; i < context.type.length; i++) {
        allType = allType + "," + context.type[i];
      }
      allType = allType.slice(1);
      params = params + "&type=" + allType;
    }
    if (context.price != "") {
      params =
        params +
        "&minPrice=" +
        context.price[0] +
        "&maxPrice=" +
        context.price[1];
    }
    if (params != "" && context.sort) {
      params = params + "&sortBy=price" + "&order=" + context.sort;
    }
    return params;
  };

  useEffect(() => {
    getCarData();
  }, [
    filterAndSortContext.sort,
    filterAndSortContext.transmission,
    filterAndSortContext.type,
    filterAndSortContext.price,
  ]);

  const skeleton = [1, 2, 3];

  return (
    <div className="flex flex-col gap-6 md:gap-0">
      {!isLoading
        ? carData.map((item, i) => {
            return <CarCard key={i} item={item} />;
          })
        : skeleton.map((item, i) => {
            return <CarCardSkeleton key={i} item={item} />;
          })}
    </div>
  );
};

module.exports = CarList;
