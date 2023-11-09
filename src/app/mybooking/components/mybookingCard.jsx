import React from 'react';
import Image from "next/image";

export default function bookingCard(){
    return (
        <div className="flex bg-slate-100 space-x-6 max-w-[45rem] w-full p-8 rounded-md shadow-lg m-5 justify-center">
            <div className='h-28'>
                <Image
                    src="/assets/2023-EQE350-SEDAN-AVP-DR.png"
                    alt="filter"
                    width="500" height="500"
                    class="w-full h-full object-contain" 
                />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>Toyota Avanza</h1>
                <div className='flex space-x-2'>
                    <Image
                                src="/assets/profile.svg"
                                width={16}
                                height={16}
                                alt="filter"
                            />
                    <h1>5 Seats</h1>
                </div>
                <div className='flex space-x-2'>
                    <Image
                                src="/assets/gears.svg"
                                width={16}
                                height={16}
                                alt="filter"
                            />
                    <h1>Manual</h1>
                </div>
            </div>
            <div className='space-y-4'>
                <div className='flex flex-col justify-center space-y-1'>
                    <h1 className='text-center'>20 September 2023</h1>
                    <div class=" flex justify-center items-center">
                    <hr class="w-2/3 border-t border-black"></hr>
                    </div>      
                    <h1 className='text-center'>23 September 2023</h1>
                </div>
                <h1 className='text-3xl font-semibold'>Rp. 400000</h1>
            </div>
            
        </div>
    );
}
