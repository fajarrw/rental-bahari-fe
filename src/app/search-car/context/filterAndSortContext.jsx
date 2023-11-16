"use client";

import { createContext, useContext, useState } from "react";

export const FilterAndSortContext = createContext();

export const FilterAndSortContextFunction = ({ children }) => {
  // const sorts = [
  //   { id: 1, value: "1", label: "Price: Low to High" },
  //   { id: 2, value: "-1", label: "Price: High to Low" },
  // ];

  const [sort, setSort] = useState("1");
  const [transmission, setTransmission] = useState([]);
  const [type, setType] = useState([]);
  const [price, setPrice] = useState([100000, 1000000]);

  return (
    <FilterAndSortContext.Provider
      value={{
        sort,
        setSort,
        transmission,
        setTransmission,
        type,
        setType,
        price,
        setPrice,
        // sorts
      }}
    >
      {children}
    </FilterAndSortContext.Provider>
  );
};

export const useFilterAndSortContext = () => useContext(FilterAndSortContext);
