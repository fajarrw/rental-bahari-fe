"use client";

import { createContext, useContext, useState } from "react";

export const FilterAndSortContext = createContext();

export const FilterAndSortContextFunction = ({ children }) => {
  const [sort, setSort] = useState(["1"]);

  return (
    <FilterAndSortContext.Provider value={{ sort, setSort }}>
      {children}
    </FilterAndSortContext.Provider>
  );
};

export const useFilterAndSortContext = () => useContext(FilterAndSortContext);
