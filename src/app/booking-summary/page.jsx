"use client"

import Link from "next/link";
import SummaryCard from "./components/summaryCard";
import { SearchContextFunction } from "../before_login/context/search";
import { SearchContextFunctionx } from "../after_login/context/cari";
import Header from "../before_login/components/navbar/header";
import Headerx from "../after_login/components/navbar/headerx";
import { useGetRole } from "@/hooks/useCookies";
import { useState, useEffect } from "react";

export default function BookingSummary() {
  const [isUser, setIsUser] = useState(false);

  const getRole = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const role = await useGetRole();
    if (role?.value == "user") {
      setIsUser(true);
    }
    console.log({ isUser });
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
            <Link href="/search-car" className="font-poppins font-medium">
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
