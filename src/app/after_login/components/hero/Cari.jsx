"use client";

import { useContext } from "react";
import DateFunctionx from "./DateFunctionx";
import { BiSearchAlt } from "react-icons/bi";
import { DateContext } from "@/app/search-car/context/dateContext";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function Cari() {
  const dateContext = useContext(DateContext);
  const router = useRouter();

  return (
    <div className=" py-6 max-w-[1170px] mx-auto flex flex-col xl:flex-row justify-center xl:justify-start gap-4  relative  lg:shadow-1 bg-main-white rounded-lg">
      <div className="mx-0 md:mx-auto xl:mx-0">
        <DateFunctionx />
      </div>

      <button
        className="bg-dark-green-1 hover:bg-dark-green-2 mx-auto xl:mx-0 transition w-full max-w-[100px] xl:max-w-[162px] h-12 xl:h-16 rounded-lg flex justify-center items-center text-white text-lg"
        onClick={() =>
          router.push(
            "/search-car?" +
              "&start=" +
              format(dateContext.date[0].startDate, "dd-MM-yyyy") +
              "&end=" +
              format(dateContext.date[0].endDate, "dd-MM-yyyy")
          )
        }
      >
        <BiSearchAlt />
      </button>
    </div>
  );
}
