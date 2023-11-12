"use client";

import { useState, useEffect, useContext } from "react";
import CarCard from "./carCard";
import CarCardSkeleton from "./carCardSkeleton";
import { FilterAndSortContext } from "../context/filterAndSortContext";

const CarList = () => {
  const [carData, setCarData] = useState();
  const filterAndSortContext = useContext(FilterAndSortContext);

  const getCarData = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_RB_REST_API_URL + "/api/car/search?" + createParams(filterAndSortContext)
      );
      const { car } = await res.json();
      setCarData(car);
    } catch (err) {
      console.error(err);
    }
  };

  const createParams = (context) => {
    var params="";
    if (context.sort) {
      params=params+"&sortBy=price"+"&order="+context.sort.anchorKey;
    }
    return params;
  }

  useEffect(() => {
    getCarData();
  }, [filterAndSortContext.sort]);

  const skeleton = [1, 2, 3];

  return (
    <div className="flex flex-col gap-6 md:gap-0">
      {carData
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
