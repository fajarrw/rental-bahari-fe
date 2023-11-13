"use client";

import { createContext, useContext, useState } from "react";

export const FilterAndSortContext = createContext();

export const FilterAndSortContextFunction = ({ children }) => {
  const [sort, setSort] = useState(["1"]);
  const [transmission, setTransmission] = useState([]);
  const [type, setType] = useState([]);

  return (
    <FilterAndSortContext.Provider value={{ sort, setSort, transmission, setTransmission, type, setType }}>
      {children}
    </FilterAndSortContext.Provider>
  );
};

export const useFilterAndSortContext = () => useContext(FilterAndSortContext);
