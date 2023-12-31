// BookingList.js
import React from 'react';
import BookingCard from './bookingCard';

const BookingList = ({ bookings }) => {
  return (
    <div>
      {bookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default BookingList;
