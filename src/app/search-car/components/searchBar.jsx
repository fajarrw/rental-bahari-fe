"use client";

import DateFunctionx from "./DateFunctionx";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex flex-row w-max lg:w-max gap-4 p-5 justify-between items-center">
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
