"use client";

import "./styles.css";
import CarList from "./components/carList";
import FilterAndSort from "./components/filterAndSort";
import SearchBar from "./components/searchBar";
import { SearchContextFunction } from "@/app/context/search";
import { SearchContextFunctionx } from "@/app/after_login/context/cari";
import Header from "@/app/components/navbar/Header";
import Headerx from "@/app/after_login/components/navbar/Headerx";
import { useGetRole, useGetToken } from "@/hooks/useCookies";
import { useState, useEffect } from "react";
import { DateContextFunction } from "./context/dateContext";
import { FilterAndSortContextFunction } from "./context/filterAndSortContext";

export default function SearchCar() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        // Wait for the promise to resolve
        const resolvedRole = await useGetToken();

        // If resolvedRole has the expected value, update the state
        if (resolvedRole?.value !== undefined) {
          setIsUser(true);
        } else {
          setIsUser(false);
        }
      } catch (error) {
        console.error('Error fetching role:', error);
        setIsUser(false); // Handle errors if needed
	  }
    };

    checkUserRole(); // Call the async function to resolve the role
  }, []); // This dependency ensures the effect runs when `role` changes

  useEffect(() => {
    console.log({ isUser }); // Logs updated value of `isUser`
  }, [isUser]);


  return (
    <FilterAndSortContextFunction>
      <DateContextFunction>
        <SearchContextFunctionx>
          <SearchContextFunction>
            {isUser ? <Headerx /> : <Header />}
            <main className="flex flex-col md:flex-row min-h-screen">
              <FilterAndSort />
              <div className="flex flex-col w-full items-center">
                <div className="flex flex-row w-max lg:w-max gap-4 justify-between items-center">
                  {/* <div className="hidden md:flex flex-row w-36 items-center">
                  <p className="md:block font-medium">4 Cars Found</p>
                </div> */}
                  {/* <div className="flex flex-row w-full justify-center">
                  <div className="flex flex-row btn-secondary-sm lg:btn-secondary px-5 py-3 gap-3 items-center">
                    <p>Fri, 20 Oct</p>
                    <div>
                      <p className="flex flex-row box-info text-rb-green text-sm px-2 py1">
                        1 day
                      </p>
                    </div>
                    <p>Sat, 21 Oct</p>
                    <button className="btn-primary-sm">
                      <Image
                        src="/assets/magnifier.svg"
                        width={18}
                        height={18}
                        alt="magnifier"
                      />
                    </button>
                  </div>
                </div> */}
                  <SearchBar />
                </div>
                <hr className="w-0 md:w-full" />
                <div className="flex flex-col py-6 gap-6 md:gap-0 w-full items-center max-w-[36rem]">
                  <CarList />
                </div>
              </div>
            </main>
          </SearchContextFunction>
        </SearchContextFunctionx>
      </DateContextFunction>
    </FilterAndSortContextFunction>
  );
}
