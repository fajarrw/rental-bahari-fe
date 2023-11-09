import React from 'react';
import { SearchContextFunction } from '../after_login/context/cari';
import Headerx from '../after_login/components/navbar/headerx';
import BookingCard from './components/mybookingCard'; 

function MyBookingPage() {
    return (
        <SearchContextFunction>
            <Headerx />
            <div className='flex pt-20 justify-center'>
                <div className='flex flex-col'>
                    <BookingCard />
                    <BookingCard />
                </div>
                
            </div>
        </SearchContextFunction>
    );
}

export default MyBookingPage;