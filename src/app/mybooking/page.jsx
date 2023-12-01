"use client";

import React  from 'react';
import { SearchContextFunctionx } from '@/app/after_login/context/cari';
import Headerx from '@/app/after_login/components/navbar/Headerx';
import BookingCard from './components/mybookingCard'; 
import BookingTabs from './components/bookingTabs';

function MyBookingPage() {
    return (
        <SearchContextFunctionx>
            <Headerx />
            <div className='flex pt-20 justify-center justify-items-center'>
                <div className='flex flex-col'>
                    <BookingTabs />
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />
                </div>
            </div>
        </SearchContextFunctionx>
    );
}

export default MyBookingPage;