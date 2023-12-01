
'use client'

import { useContext, useEffect, useState } from "react"

import { Link } from "react-scroll"

import { useMediaQuery } from 'react-responsive'

import { AiFillCar } from "react-icons/ai";

import { BiMenuAltRight, BiX } from "react-icons/bi"

import { SearchContext } from '@/app/after_login/context/cari'

import Person from "./Person"
import Sign from "./Sign";
import { BsPersonCircle } from "react-icons/bs";


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
    <header id="navbarx" className="bg-[#045757] shadow-md py-5 w-full max-w-[1920px] mx-auto z-20 transition-all duation-300">

    <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">

            <Link
            to='home' 
            smooth={desktopMode} 
            spy={true} 
            className="xl:max-w-[203px] cursor-pointer flex flex-row items-center gap-3">

                <AiFillCar className="text-[#E4E4E4] text-4xl"/>

                <div className="text-xl hidden md:block font-bold text-[#E4E4E4] cursor-pointer">
                    Rental Bahari
                </div>
            </Link>
            

            <div className="xl:hidden flex flex-row justify-center gap-2">
            <div className="h-[36px] flex flex-row items-center px-2">
            
            <Link 
            className="h-[36px] cursor-pointer mx-auto text-[#E4E4E4]" 
            to='/' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                <Person />
            </Link>
            
        </div>

                

                <div 
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer xl:hidden">
                    {nav ? (<BiX className="text-4xl text-white" />) : (<BiMenuAltRight className="text-4xl text-white" />)}
                </div>
            </div>
        </div>

        <nav 
        onClick={() => setNav(!nav)}
        className={`${
        nav ? ' max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
        }  flex absolute top-16 -left-0 z-30 xl:static w-full flex-col items-center w-full bg-dark-green-1 gap-y-8 overflow-hidden xl:overflow-visible font-bold 
        xl:font-medium xl:flex-row xl:w-max xl:gap-x-12 xl:h-max xl:bg-transparent
        xl:pb-0 transition-all duration-150 text-center xl:text-left 
        text-sm xl:text-[15px] xl:normal-case`}>

            <Link
            onClick={() => setNav(!nav)} 
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500" 
            to='homex' 
            activeClass='active' 
            smooth={desktopMode}
            spy={true}
            > 
                Home 
            </Link>

            <Link
            onClick={() => setNav(!nav)} 
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500" 
            to='aboutx' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                Why Us 
            </Link>

            <a
            onClick={() => setNav(!nav)} 
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500" 
            href="/search-car" 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                Cars 
            </a>

        </nav>

        <div className="flex w-[203px] h-[36px] flex-row items-center gap-4 hidden xl:flex ">
            
            <Link 
            className="h-[36px] cursor-pointer hidden xl:block ml-auto text-[#E4E4E4]" 
            to='/' 
            activeClass='active' 
            smooth={desktopMode} 
            spy={true}
            > 
                <Person />
            </Link>
            
        </div>

    </div>
</header>
  )
}

