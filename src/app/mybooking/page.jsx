"use client";

import React  from 'react';
    import BookingCard from './components/mybookingCard'; 
import BookingTabs from './components/bookingTabs';

function MyBookingPage() {
    return (
<<<<<<< Updated upstream
        <div>
            
            <div className='flex pt-20 justify-center justify-items-center'>
                <div className='flex flex-col'>
                    <BookingTabs />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
=======
        <SearchContextFunctionx>
            <Headerx />
            <div className='flex flex-col items-center min-h-screen pt-10'>
                <div className='flex flex-col items-center'>
                    <BookingTabs />
                    {RentData && RentData.length > 0 ? (
                    <BookingList bookings={RentData} />
                    ) : (
                    <p className='pt-10'>No bookings found.</p>
                    )}
>>>>>>> Stashed changes
                </div>
                <div className='flex-1w-full'></div>
            </div>
<<<<<<< Updated upstream
        </div>
=======
            
        </SearchContextFunctionx>
>>>>>>> Stashed changes
    );
}

export default MyBookingPage;