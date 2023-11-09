"use client";

import { useState, useEffect } from "react";
import CarCard from "./components/carCard";

const CarList = () => {
  const [carData, setCarData] = useState([]);

  const getCarData = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_RB_REST_API_URL + "/api/car/all"
      );
      const { car } = await res.json();
      setCarData(car);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);
  return (
    <div className="flex flex-col gap-6 md:gap-0">
      {carData.map((item, i) => {
        return <CarCard key={i} item={item} />;
      })}
    </div>
  );
};

module.exports = CarList;
