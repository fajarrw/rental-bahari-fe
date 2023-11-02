
'use client'

import { useContext, useEffect, useState } from "react"


import { Link } from "react-scroll"

import Cari from "./Cari"

import { useMediaQuery } from 'react-responsive'

import { AiFillCar } from "react-icons/ai";

import { BiMenuAltRight, BiX } from "react-icons/bi"

import { SearchContext } from '../../context/cari'

import Person from "./Person"

import SearchModelx from "../hero/SearchModelx"


export default function Header() {
    const { setSearchActive } = useContext(SearchContext)

    const [nav, setNav] = useState(false)
    const [header, setHeader] = useState(false)

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40){
                setHeader(true);
            } else {
                setHeader(false)
            }

            if (window.scrollY > 800 ){
                setSearchActive(true)
            } else {
                setSearchActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    console.log(header)

  return (
  <header 
  className={`${
    header ? 'bg-[#045757] shadow-md py-2' : 'bg-[#045757] shadow-none py-4'
  }  fixed w-full max-w-[1920px] mx-auto z-20 transition-all duation-300`}
  >

    <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">

            <Link 
            to='homex' 
            smooth={desktopMode} 
            spy={true} 
            className="cursor-pointer flex flex-row items-center gap-3">

                <AiFillCar className="text-[#E4E4E4] h-8 w-8"/>

                <div className="text-xl font-bold text-[#E4E4E4] cursor-pointer">
                    Rental Bahari
                </div>
            </Link> 

            <div 
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden">
                {nav ? (<BiX className="text-4xl" />) : (<BiMenuAltRight className="text-4xl" />)}
            </div>

        </div>

        <nav className={`${
            nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
            } flex flex-col items-center w-full bg-[#045757] gap-y-8 overflow-hidden xl:overflow-visible font-bold 
            xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent
            xl:pb-0 transition-all duration-150 text-center xl:text-left 
            text-sm xl:text-[15px] xl:normal-case`}>


            <Link 
            className="cursor-pointer text-[#E4E4E4]" 
            to='homex' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                Home 
            </Link>

            <Link 
            className="cursor-pointer text-[#E4E4E4]" 
            to='aboutx' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                About 
            </Link>

            <Link 
            className="cursor-pointer mx-auto text-[#E4E4E4]" 
            to='cars' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                Cars 
            </Link>

            <Link 
            className="xl:hidden cursor-pointer mx-auto text-[#E4E4E4]" 
            to='faq' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                Edit Profile 
            </Link>

            <Link 
            className="xl:hidden cursor-pointer mx-auto text-[#E4E4E4]" 
            to='faq' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                My Booking 
            </Link>

            <Link 
            className="xl:hidden cursor-pointer mx-auto text-red-500" 
            to='faq' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                Sign Out 
            </Link>

            <Link 
            className="cursor-pointer hidden xl:block mx-auto text-[#E4E4E4]" 
            to='/' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                <Person />
            </Link>

            <SearchModelx />

        </nav>

         
    </div>
  </header>
  )
}
