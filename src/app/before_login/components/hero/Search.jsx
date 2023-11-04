'use client'

import { useContext } from "react"

import DateFunction from "./DateFunction"

import { BiSearchAlt } from "react-icons/bi"

export default function Search() {

  return (
    <div className="py-6 max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center items-center xl:justify-start gap-4 relative lg:shadow-1 bg-main-white lg:bg-transparent rounded-lg">
        
        <div className="mx-0">
          <DateFunction />
        </div>

        <button className="bg-[#045757] hover:bg-[#044343] mx-auto md:mx-0 transition w-full max-w-[100px] xl:max-w-[162px] h-12 xl:h-16 rounded-lg flex justify-center items-center text-white text-lg">
          <BiSearchAlt />
        </button>
        
    </div>
  )
}
