"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./styles.css";
import CarList from "./CarList";

function handleClick() {
  console.log("i got clicked");
}

export default function SearchCar() {
  const [viewMoreTypes, setViewMoreTypes] = useState(false);
  return (
    <main className="flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-col w-full md:w-max py-3 md:p-0 justify-center md:justify-start gap-10 md:gap-0 shadow-lg md:shadow-none">
        <div className="dd-filter">
          <button className="dd-btn-filter md:hidden flex flox-row gap-2 items-center text-sm">
            <Image
              src="/assets/filter.svg"
              width={16}
              height={16}
              alt="filter"
            />
            Filters
          </button>
          <div className="dd-content-filter w-64 px-4 pt-5 pb-4 gap-3">
            <div className="flex flex-row justify-between pb-2">
              <h2 className="font-semibold text-lg">Filters</h2>
              <p className="text-lg text-rb-darkgreen">Clear All</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Price per Day</h3>
              <div className="flex flex-row justify-between">
                <p className="text-sm">Rp. 50000</p>
                <p className="text-sm">Rp. 5000000</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Types</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="crossover"
                    name="crossover"
                    value="Crossover"
                  />
                  <label for="crossover">Crossover</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="hatchback"
                    name="hatchback"
                    value="Hatchback"
                  />
                  <label for="hatchback">Hatchback</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="sedan"
                    name="sedan"
                    value="Sedan"
                  />
                  <label for="suv">Sedan</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input type="checkbox" id="suv" name="suv" value="SUV" />
                  <label for="suv">SUV</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="wagon"
                    name="wagon"
                    value="Wagon"
                  />
                  <label for="wagon">Wagon</label>
                  <br />
                </div>
                <a className="text-xs text-rb-darkgreen" onClick={handleClick}>
                  + View More
                </a>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Transmission</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="automatic"
                    name="automatic"
                    value="Automatic"
                  />
                  <label for="automatic">Automatic</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="manual"
                    name="manual"
                    value="Manual"
                  />
                  <label for="manual">Manual</label>
                  <br />
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="dd-sort">
          <button className="dd-btn-sort md:hidden flex flex-row gap-2 items-center text-sm">
            <Image src="/assets/sort.svg" width={22} height={14} alt="sort" />
            Sort
          </button>
          <div className="dd-content-sort w-64 px-4 pb-4 gap-3">
            <div className="flex flex-row py-2 md:py-0 gap-2">
              <label for="sort" className="font-medium text-base">
                Sort by
              </label>
              <select id="sort" className="text-sm ">
                <option value="Price1">Price: Low to High</option>
                <option value="Price-1">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-full lg:w-max gap-4 p-5 justify-between items-center">
          <div className="hidden md:flex flex-row w-36 items-center">
            <p className="md:block font-medium">4 Cars Found</p>
          </div>
          <div className="flex flex-row w-full justify-center">
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
          </div>
        </div>
        <hr className="w-0 md:w-full" />
        <div className="flex flex-col py-6 gap-6 md:gap-0 w-full items-center max-w-[36rem]">
          <CarList />
        </div>
      </div>
    </main>
  );
}
