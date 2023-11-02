'use client'

import { useContext } from "react"
import { SearchContext } from "../../context/cari"

import LocationFunctionx from "../hero/LocationFunctionx"
import DateFunctionx from "../hero/DateFunctionx"
import HoursFunctionx from "../hero/HoursFunctionx"

export default function Cari() {
  const { searchActive } = useContext(SearchContext)
  return (
    <div className={`${
      searchActive
      ? 'bg-white rounded-none xl:h-[80px] -mt-8'
      : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
    } hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationFunctionx />
        <DateFunctionx />
        <HoursFunctionx />

        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button className={`${
            searchActive
            ? 'btn-primary btn-sm xl:w-[164px]'
            : 'btn-primary btn-lg xl:w-[164px]'
          }`}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
