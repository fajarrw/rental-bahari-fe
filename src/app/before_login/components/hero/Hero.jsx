'use client'

import { useContext } from "react"
import Search from "./Search"
import { SearchContext } from "../../context/search"

import Image from "next/image"

import {motion, easeInOut} from 'framer-motion'

import { fadeIn } from "./variants"

export default function Hero() {
  const { searchActive } = useContext(SearchContext)
  return (
  <section className="h-screen bg-[#b2b7c2]/10" id='home'>
    <div className="container mx-auto h-full pt-16">
       
       <div className="flex flex-col w-full xl:flex-row justify-center items-center xl:justify-center h-full">
            
            <div className="text-center w-full xl:w-1/2 xl:max-w-[700px]  xl:text-left">
                
                <motion.h1 
                variants={fadeIn('down', 0.2)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount:0.6}} 
                className="uppercase text-3xl md:text-4xl xl:text-[64px] text-primary xl:leading-[72px] font-extrabold mb-[18px]"> 
                    Rent Your <span className="text-[#045757]">Car</span> With US
                </motion.h1>

                <motion.p
                variants={fadeIn('down', 0.4)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount:0.6}} 
                className="text-sm text-gray-500 md:text-xl xl:leading-8 max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"> 
                    Tersedia Berbagai Pilihan Kendaraan Berkualitas untuk Petualangan Anda  
                </motion.p>

                <motion.div 
                variants={fadeIn('up', 0.6)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount:0.8}}
                className="-mt-4 w-full max-w-[1300px] mx-auto">
                    <Search />
                </motion.div>
                
            </div>

            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.6}}
            className="relative w-full xl:w-1/2 h-full max-h-[30vh] md:max-h-[35vh] md:max-w-[50vw] xl:max-w-[700px] xl:max-h-[400px] ">
                <Image 
                src={'/assets/Hero.png'} 
                fill 
                alt="" 
                style={{ objectFit: 'contain' }} 
                priority
                />
            </motion.div>
             
       </div>
       
    </div>
</section>
  )
}
