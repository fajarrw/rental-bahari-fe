"use client";

import {useState, useEffect} from "react";
import CarCard from "../components/carCard";

const CarList = () => {
  const [carData, setCarData] = useState([]);

  const getCarData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/car/all");
      const {car} = await res.json();
      setCarData(car);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);
  return (
    <div className="max-h-[40rem] overflow-auto">
      <h1>
        {carData.map((item, i) => {
          return (
            <div key={i}>
              <CarCard item={item} />
            </div>
          );
        })}
      </h1>
    </div>
  );
};

module.exports = CarList;
