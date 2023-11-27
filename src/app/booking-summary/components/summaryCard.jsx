"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useCurrency from "@/hooks/useCurrency";
import SummaryCardSkeleton from "./summaryCardSkeleton";
import { format, formatISO, differenceInCalendarDays } from "date-fns";
import { useRouter } from "next/navigation";
import { useGetRole, useGetToken } from "@/hooks/useCookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SummaryCard = () => {
  const [carData, setCarData] = useState();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [payable, setPayable] = useState(0);
  const [isUser, setIsUser] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  var interval = 0;
  const intervalCalendar = differenceInCalendarDays(
    new Date(
      searchParams.get("end").slice(6, 10),
      searchParams.get("end").slice(3, 5),
      searchParams.get("end").slice(0, 2)
    ),
    new Date(
      searchParams.get("start").slice(6, 10),
      searchParams.get("start").slice(3, 5),
      searchParams.get("start").slice(0, 2)
    )
  );
  var dayOrDays = "days";
  const start = formatISO(
    new Date(
      searchParams.get("start").slice(6, 10),
      searchParams.get("start").slice(3, 5) - 1,
      searchParams.get("start").slice(0, 2),
      7,
      0,
      0
    )
  );
  const end = formatISO(
    new Date(
      searchParams.get("end").slice(6, 10),
      searchParams.get("end").slice(3, 5) - 1,
      searchParams.get("end").slice(0, 2),
      7,
      0,
      0
    )
  );
  const rentData = {
    carID: searchParams.get("carId"),
    start: start,
    end: end,
    status: "on",
  };

  if (intervalCalendar == 0) {
    interval = 1;
    dayOrDays = "day";
  } else if (intervalCalendar == 1) {
    interval = intervalCalendar;
    dayOrDays = "day";
  } else {
    interval = intervalCalendar;
  }

  const getCarData = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_RB_REST_API_URL +
          "/api/car/id/" +
          searchParams.get("carId")
      );
      const { car } = await res.json();
      setCarData(car);
    } catch (err) {
      console.error(err);
    }
  };

  const postRentData = async (rentData) => {
    try {
      toast.info("Creating a booking...");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { value } = await useGetToken();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/rent/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${value}`,
          },
          body: JSON.stringify(rentData),
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.status == 201) {
        toast.success("A new booking is created");
      } else {
        toast.warn("Error while creating a booking");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const calculateDiscount = async () => {
    try {
      const carPrice = carData?.price; // Safely access the price property

      if (carPrice !== undefined) {
        setPrice(carPrice * interval);
        setDiscount(price / 4);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const calculatePayable = async () => {
    try {
      const carPrice = carData?.price; // Safely access the price property
      if (carPrice !== undefined) {
        setPayable(price - discount);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRole = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const role = await useGetRole();
    if (role?.value == "user") {
      setIsUser(true);
    }
  };

  useEffect(() => {
    getCarData();
    getRole();
  }, []);

  useEffect(() => {
    calculateDiscount();
  }, [carData]);

  useEffect(() => {
    calculatePayable();
  }, [discount]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {carData ? (
        <div className="flex flex-col max-w-[25rem] w-full items-stretch gap-3 md:shadow-xl pt-4 pb-10 px-6">
          {/* <div className="flex flex-col items-center box-info py-3 text-base">
            Congrats! You just saved{" "}
            {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useCurrency(discount)
            }
          </div> */}
          <div className="flex flex-row gap-16 justify-between items-center pt-8">
            <div className="relative h-20 aspect-video">
              <Image
                src={carData.imageData}
                fill
                alt={`${carData.name}_image`}
                style={{
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
            <h2 className="text-lg">{carData.name}</h2>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-xs font-semibold">Start</p>
              <p>
                {format(
                  new Date(
                    searchParams.get("start").slice(6, 10),
                    searchParams.get("start").slice(3, 5) - 1,
                    searchParams.get("start").slice(0, 2)
                  ),
                  "E, dd MMM yyyy"
                )}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xs font-semibold">End</p>
              <p>
                {format(
                  new Date(
                    searchParams.get("end").slice(6, 10),
                    searchParams.get("end").slice(3, 5) - 1,
                    searchParams.get("end").slice(0, 2)
                  ),
                  "E, dd MMM yyyy"
                )}
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-row justify-between text-sm py-1">
            <p>
              Price ({interval} {dayOrDays})
            </p>
            <p className="font-semibold">
              {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCurrency(price)
              }
            </p>
          </div>
          {/* <div className="flex flex-row justify-between text-sm py-1">
            <p>Discount</p>
            <p className="font-semibold">
              -{" "}
              {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCurrency(discount)
              }
            </p>
          </div> */}
          <hr />
          <div className="flex flex-row justify-between items-center py-1">
            <p>Payable Amount</p>
            <p className="font-semibold text-lg">
              {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useCurrency(price)
              }
            </p>
          </div>
          {isUser ? (
            <div className="flex flex-row justify-center gap-4 py-2">
              <button
                className="btn-primary font-normal flex flex-row gap-4 items-center"
                onClick={() => postRentData(rentData)}
              >
                Confirm Order
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center py-1">
                <p>You aren&apos;t logged in. Please log in or sign up</p>
              </div>
              <div className="flex flex-row justify-center gap-4 py-2">
                <button
                  className="btn-secondary font-normal"
                  onClick={() => router.push("/register")}
                >
                  Sign Up
                </button>
                <button
                  className="btn-primary font-normal"
                  onClick={() => router.push("/login")}
                >
                  Log In
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <SummaryCardSkeleton />
      )}
    </div>
  );
};

module.exports = SummaryCard;
