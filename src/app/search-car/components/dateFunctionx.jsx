"use client";

import React, { useState, useEffect, useContext } from "react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCalendar2Fill,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateContext } from "@/app/search-car/context/dateContext";
import { useSearchParams } from "next/navigation";

export default function DateFunctionx() {
  const dateContext = useContext(DateContext);
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const getDateParams = () => {
    if (searchParams.get("start") && searchParams.get("end")) {
      const start = new Date(
        searchParams.get("start").slice(6, 10),
        searchParams.get("start").slice(3, 5),
        searchParams.get("start").slice(0, 2)
      );
      const end = new Date(
        searchParams.get("end").slice(6, 10),
        searchParams.get("end").slice(3, 5),
        searchParams.get("end").slice(0, 2)
      );
      dateContext.setDate([
        {
          startDate: start,
          endDate: end,
          key: "selection",
        },
      ]);
    }
  };

  useEffect(() => {
    getDateParams();
  }, []);

  // console.log(format(dateContext.date[0].startDate, "dd-MM-yy"));
  // console.log(format(dateContext.date[0].endDate, "dd-MM-yy"));

  return (
    <Menu as="div" className="w-full xl:max-w-[296px] cursor-pointer relative">
      <Menu.Button
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
        className="flex h-[64px] items-center px-[18px] gap-x-2 border-2 border-[#cdcdcd] rounded-lg w-full text-left"
      >
        <RiCalendar2Fill className="text-2xl mr-[18px] text-[#045757] " />
        <div>
          <div className="flex items-center gap-x-3">
            <div className="text-[15px] font-medium leading-tight">
              {" "}
              {format(dateContext.date[0].startDate, "dd/MM/yy")}
            </div>
            <FaArrowRightLong className="text-[#045757] text-[12px]" />
            {dateContext.date[0].endDate ? (
              <div>{format(dateContext.date[0].endDate, "dd/MM/yy")}</div>
            ) : (
              <div>{format(dateContext.date[0].startDate, "dd/MM/yy")}</div>
            )}
          </div>
          <div className="text-[13px]">Select Your Date</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-2xl ml-auto text-[#045757] " />
        ) : (
          <RiArrowDownSLine className="text-2xl ml-auto text-[#045757] " />
        )}
      </Menu.Button>
      <Menu.Items className="text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg">
        <DateRange
          onChange={(item) => dateContext.setDate([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={dateContext.date}
          rangeColors={["#045757"]}
          minDate={addDays(new Date(), 0)}
        />
      </Menu.Items>
    </Menu>
  );
}
