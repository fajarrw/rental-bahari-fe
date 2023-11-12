"use client";

import { createContext, useContext, useState } from "react";

export const DateContext = createContext();

export const DateContextFunction = ({ children }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);
