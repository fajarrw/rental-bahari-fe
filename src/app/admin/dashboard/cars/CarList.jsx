"use client";

import {useState, useEffect} from "react";

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
    <div>
      <h1>
        {carData.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

module.exports = CarList;
