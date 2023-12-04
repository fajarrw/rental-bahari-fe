"use client";

import React  from 'react';
    import BookingCard from './components/mybookingCard'; 
import BookingTabs from './components/bookingTabs';

function MyBookingPage() {
    return (
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
                </div>
                <div className='flex-1w-full'></div>
            </div>
            
        </SearchContextFunctionx>
    );
}

export default MyBookingPage;