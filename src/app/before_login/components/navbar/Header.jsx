'use client'

import { useContext, useEffect, useState } from "react"

import { Link } from "@nextui-org/react"

import { useMediaQuery } from 'react-responsive'

import { AiFillCar } from "react-icons/ai";

import { BiMenuAltRight, BiX } from "react-icons/bi"

import { BsPersonCircle } from "react-icons/bs";

import { SearchContext } from '../../context/search'

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
        header ? 'bg-[#045757] shadow-md py-5' : 'bg-[#045757] shadow-none py-5'
        }  fixed w-full max-w-[1920px] mx-auto z-20 transition-all duation-300`}
        >

            <div className="xl:container  mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className="flex justify-between items-center px-4">

                    <Link
                    to='home' 
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
                } flex flex-col items-center w-full bg-[#045757] gap-y-8 overflow-hidden font-bold 
                xl:font-medium xl:flex-row xl:w-max xl:gap-x-4 xl:h-max xl:bg-transparent
                xl:pb-0 transition-all duration-150 text-center xl:text-left 
                text-sm xl:text-[15px]`}>

                    <BsPersonCircle className="hidden xl:block text-2xl text-[#E4E4E4]" />

                    <Link 
                    className="cursor-pointer mx-auto text-[#E4E4E4]" 
                    href="/login"
                    activeClass='active' 
                    smooth={desktopMode} 
                    spy={true}
                    > 
                        Log in 
                    </Link>

                    <Link 
                    className="hidden xl:block text-[#E4E4E4]" 
                    > 
                        | 
                    </Link>

                    <Link 
                    className="cursor-pointer mx-auto text-[#E4E4E4]" 
                    href="/register" 
                    activeClass='active' 
                    smooth={desktopMode} 
                    spy={true}
                    > 
                        Sign Up 
                    </Link>

                 </nav>
                 
            </div>
        </header>
  )
}