"use client";

// import { useContext } from "react";
import DateFunctionx from "./DateFunctionx";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex flex-row w-max lg:w-max gap-4 p-5 justify-between items-center">
      {/* <div className="hidden md:flex flex-row w-36 items-center">
        <p className="md:block font-medium">4 Cars Found</p>
      </div> */}
      <DateFunctionx />
      <button className="btn-primary-sm">
        <Image
          src="/assets/magnifier.svg"
          width={18}
          height={18}
          alt="magnifier"
        />
      </button>
    </div>
  );
};

module.exports = SearchBar;
