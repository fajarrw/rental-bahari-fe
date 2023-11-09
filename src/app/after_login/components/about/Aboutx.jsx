'use client'

import Image from "next/image";

import Card1 from "./Card1";
import Card2 from "./Card2";


const Aboutx = () => {
  return (
    <section className=" h-fit xl:h-screen flex items-center
    bg-dark-green-2" id="aboutx">
      <div className=" container mx-auto h-full py-20 xl:py-16 flex w-full flex-col justify-center items-center">
      
        <h1 className="text-white uppercase text-3xl md:text-4xl text-primary xl:leading-[72px] font-extrabold mb-12">
          Why US?
        </h1>
      
    <div 
  
    className="flex flex-col xl:flex-row items-center justify-center gap-12">
      <div class="max-w-sm rounded-xl  bg-white overflow-hidden shadow-lg">
  <Image 
  className="w-full h-64" 
  src={'/assets/reg-bg.png'}
  width={500}
  height={500} 
  alt=""  />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Terpercaya</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 flex justify-end items-center ">
  <div type="button" className=" bg-dark-green-1 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm text-white font-semibold text-gray-900 shadow-sm hover:bg-dark-green-2 sm:w-auto">
      <Card1 />
  </div>
  </div>
</div>

<div class="max-w-sm rounded-xl bg-white  overflow-hidden shadow-lg">
  <Image 
  className="w-full h-64" 
  src={'/assets/user-login-bg2.png'}
  width={500}
  height={500} 
  alt=""  />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Pilihan Mobil Banyak</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 flex justify-end items-center ">
  <div type="button" className=" bg-dark-green-1 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm text-white font-semibold text-gray-900 shadow-sm hover:bg-dark-green-2 sm:w-auto">
      <Card2 />
  </div>
  </div>
</div>
</div>
</div>
    </section>
  )
}

export default Aboutx;
