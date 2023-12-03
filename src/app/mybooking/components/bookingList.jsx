// BookingList.js
import React from 'react';
import BookingCard from './BookingCard';

const BookingList = ({ bookings }) => {
  return (
    <div>
      {bookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  );
};

export default BookingList;
