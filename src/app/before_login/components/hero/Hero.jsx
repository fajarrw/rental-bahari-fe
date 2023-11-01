'use client'

import { useContext } from "react"
import Search from "../navbar/Search"
import { SearchContext } from "../../context/search"

import Image from "next/image"

export default function Hero() {
  const { searchActive } = useContext(SearchContext)
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id='home'>
        <div className="container mx-auto h-full xl:pt-10">
           
        </div>
    {searchActive ? (
            <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
                <Search />
            </div>
        ) : (
            <div className="-mt-12 w-full max-w-[1300px] mx-auto">
                <Search />
            </div>
        )
    }
    </section>
  )
}
