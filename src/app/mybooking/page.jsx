"use client";

import React  from 'react';
    import BookingCard from './components/mybookingCard'; 
import BookingTabs from './components/bookingTabs';

function MyBookingPage() {
    return (
        <div>
            
            <div className='flex pt-20 justify-center justify-items-center'>
                <div className='flex flex-col'>
                    <BookingTabs />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                </div>
            </div>
        </div>
    );
}

export default MyBookingPage;