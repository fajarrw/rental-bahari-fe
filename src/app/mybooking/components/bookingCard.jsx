// BookingCard.js
import React from 'react';
import Image from "next/image";

function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    return formattedDate;
  }

const BookingCard = ({ booking }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-6 bg-slate-100 space-x-6 max-w-[45rem] p-8 rounded-md shadow-lg m-5 justify-center">
      <div className='h-28'>
        <Image  
          src={booking.car.imageData}
          alt="filter"
          width={500}
          height={500}
          className="w-full h-full object-contain" 
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-semibold'>{booking.car.name}</h1>
        <div className='flex space-x-2'>
          <Image
            src="/assets/profile.svg"
            width={16}
            height={16}
            alt="filter"
          />
          <h1>{booking.car.seats} Seats</h1>
        </div>
        <div className='flex space-x-2'>
          <Image
            src="/assets/gears.svg"
            width={16}
            height={16}
            alt="filter"
          />
          <h1>{booking.car.transmission}</h1>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='flex flex-col justify-center space-y-1'>
          <h1 className='text-start sm:text-center'>{formatDate(booking.start)}</h1>
          <div className="flex justify-start sm:justify-center items-center">
            <hr className="w-2/3 border-t border-black"></hr>
          </div>      
          <h1 className='text-start sm:text-center'>{formatDate(booking.end)}</h1>
        </div>
        <h1 className='text-3xl font-semibold'>Rp {booking.totalPrice}</h1>
      </div>
    </div>
  );
};

export default BookingCard;
