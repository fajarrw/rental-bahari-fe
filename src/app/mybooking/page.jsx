"use client";

import React from "react";
import {SearchContextFunctionx} from "@/app/after_login/context/cari";
import Headerx from "@/app/after_login/components/navbar/Headerx";
import BookingList from "./components/bookingList";
import BookingTabs from "./components/bookingTabs";
import {useState, useEffect} from "react";
import {useGetUser} from "@/hooks/useCookies";
import getToken from '@/utils/cookies';

const sampleData = [
  {
    id: 1,
    car: {
      name: "Toyota Avanza",
      seats: 5,
      transmission: "Manual",
    },
    start: "20 September 2023",
    end: "23 September 2023",
    totalPrice: "Rp. 400000",
  },
  {
    id: 1,
    car: {
      name: "Wuling Air EV",
      seats: 5,
      transmission: "Manual",
    },
    start: "20 September 2023",
    end: "23 September 2023",
    totalPrice: "Rp. 400000",
  },
  // Add more booking entries as needed
];

function MyBookingPage() {
  const [RentData, setRentData] = useState(null);

  const getRentData = async (tokenValue) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/rent`,
        {
          headers: {
            'Authorization': `Bearer ${tokenValue}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setRentData(data.rents);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
      const tokenValue = getToken();
      if (tokenValue) {
        getRentData(tokenValue);
      }
    }, []);

  return (
    <SearchContextFunctionx>
      <Headerx />
      <div className="flex flex-col items-center min-h-screen pt-10">
        <div className="flex flex-col items-center">
          <BookingTabs />
          {RentData && RentData.length > 0 ? (
            <BookingList bookings={RentData} />
          ) : (
            <p className="pt-10">No bookings found.</p>
          )}
        </div>
        <div className="flex-1 w-full"></div>
      </div>
    </SearchContextFunctionx>
  );
}

export default MyBookingPage;