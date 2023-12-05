"use client";

import Link from "next/link";
import SummaryCard from "./components/summaryCard";
import {SearchContextFunction} from "@/app/context/search";
import {SearchContextFunctionx} from "@/app/after_login/context/cari";
import Header from "@/app/components/navbar/Header";
import Headerx from "@/app/after_login/components/navbar/Headerx";
import {useGetRole} from "@/hooks/useCookies";
import {useState, useEffect} from "react";
import {useSearchParams} from "next/navigation";

export default function BookingSummary() {
  const [isUser, setIsUser] = useState(false);
  const searchParams = useSearchParams();

  const getRole = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const role = await useGetRole();
    if (role?.value == "user") {
      setIsUser(true);
    }
    console.log({isUser});
  };

  useEffect(() => {
    getRole();
  }, []);

  return (
    <SearchContextFunctionx>
      <SearchContextFunction>
        {isUser ? <Headerx /> : <Header />}
        <main className="flex flex-col items-center pt-2 min-h-screen">
          <div className="flex flex-row px-16 py-3 gap-3 w-full">
            <Link
              href={
                "/search-car?" +
                "&start=" +
                searchParams.get("start") +
                "&end=" +
                searchParams.get("end")
              }
              className="font-poppins font-medium"
            >
              &lt;
            </Link>
            <h1 className="font-poppins font-medium">Booking Summary</h1>
          </div>
          <div className="flex flex-row">
            <SummaryCard />
          </div>
        </main>
      </SearchContextFunction>
    </SearchContextFunctionx>
  );
}
