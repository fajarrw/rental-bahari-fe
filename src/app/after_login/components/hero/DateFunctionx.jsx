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

export default function DateFunctionx() {
  const [isOpen, setIsOpen] = useState(false);
  const dateContext = useContext(DateContext);

  return (
    <Menu as="div" className="w-full xl:max-w-[296px] cursor-pointer relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[64px] items-center px-[18px] gap-x-2 border-2 border-[#045757] rounded-lg w-full text-left"
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
