'use client'

import Image from "next/image";

import Card1 from "./Card1";
import Card2 from "./Card2";


const Aboutx = () => {
  return (
    <section className="h-fit rounded-t-xl flex items-center bg-dark-green-2" id="aboutx">
      <div className=" container mx-auto h-full py-20 xl:py-16 flex w-full flex-col justify-center items-center overflow-hidden">
      
        <h1 className="text-white uppercase text-3xl md:text-4xl text-primary xl:leading-[72px] font-extrabold mb-12">
          Why US?
        </h1>
      
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-20">

          <div className="max-w-sm rounded-xl bg-main-white overflow-hidden shadow-lg hover:scale-105 duration-500">

            <div className="h-56 overflow-hidden text-white shadow-lg rounded-t-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <Image
              className="h-full w-full "
              src={'/assets/reg-bg.png'}
              alt="img-blur-shadow"
              width={500}
              height={500}
              />
            </div>

            <div className="p-6">

              <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Trusted For Years
              </h5>

              <p className="block text-base antialiased font-normal leading-relaxed text-black">
                Kepercayaan adalah pijakan utama kami di dunia layanan rental mobil. Kami memahami bahwa mempercayakan kendaraan Anda kepada kami 
                merupakan tanggung jawab besar, dan itulah mengapa kami mengutamakan integritas dan keandalan dalam setiap aspek layanan kami. 
              </p>

            </div>

            <Card1 />

          </div>

          <div className="max-w-sm rounded-xl bg-main-white overflow-hidden shadow-lg hover:scale-105 duration-500">

            <div className="h-56 overflow-hidden text-white shadow-lg rounded-t-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <Image
              className="h-full w-full"
              src={'/assets/user-login-bg2.png'}
              alt="img-blur-shadow"
              width={500}
              height={500}
              />
            </div>

            <div className="p-6">

              <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Easy Booking, Outstanding Vehicles
              </h5>

              <p className="block text-base antialiased font-normal leading-relaxed text-black">
                Menghadirkan pengalaman pemesanan yang mudah dan kendaraan yang luar biasa adalah komitmen utama kami 
                dalam memberikan layanan rental mobil. Proses pemesanan yang sederhana dan efisien adalah pintu gerbang 
                menuju petualangan tanpa kerumitan. 
              </p>

            </div>

            <Card2 />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Aboutx;
