"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Slider, CheckboxGroup, Checkbox } from "@nextui-org/react";
import useCurrency from "@/hooks/useCurrency";
import { FilterAndSortContext } from "@/app/search-car/context/filterAndSortContext";

const FilterAndSort = () => {
  const filterAndSortContext = useContext(FilterAndSortContext);

  return (
    <div className="flex flex-row md:flex-col w-full md:w-max py-3 md:p-0 justify-center md:justify-start gap-10 md:gap-0 shadow-lg md:shadow-none">
      <div className="dd-filter">
        <button className="dd-btn-filter md:hidden flex flox-row gap-2 items-center text-sm">
          <Image src="/assets/filter.svg" width={16} height={16} alt="filter" />
          Filters
        </button>
        <div className="dd-content-filter w-64 px-4 pt-5 pb-4 gap-3">
          <div className="flex flex-row justify-between pb-2">
            <h2 className="font-semibold text-lg">Filters</h2>
            <p className="text-lg text-rb-darkgreen">Clear All</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base">Price per Day</h3>
            <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
              <Slider
                aria-label="price slider"
                size="sm"
                step={10000}
                maxValue={1000000}
                minValue={100000}
                value={filterAndSortContext.price}
                onChange={filterAndSortContext.setPrice}
                classNames={{
                  base: "max-w-md gap-3",
                  track: "border-s-secondary-100",
                  filler: "bg-rb-green",
                }}
                renderThumb={({ index, ...props }) => (
                  <div
                    {...props}
                    className="group p-2 top-1/2 bg-rb-white border border-rb-black dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                  ></div>
                )}
              />
              <div className="flex flex-col gap-1/2 text-rb-black text-small">
                <p className="text-rb-black text-xs font-medium">
                  Selected budget:{" "}
                </p>
                {Array.isArray(filterAndSortContext.price) &&
                  filterAndSortContext.price
                    .map(
                      (b) =>
                        `${
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          useCurrency(b)
                        }`
                    )
                    .join(" – ")}
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base">Types</h3>
            <div className="flex flex-col gap-2 text-sm">
              <CheckboxGroup
                defaultValue={[]}
                value={filterAndSortContext.type}
                onValueChange={filterAndSortContext.setType}
              >
                <Checkbox size="sm" color="success" value="hatchback">
                  Hatchback
                </Checkbox>
                <Checkbox size="sm" color="success" value="minivan">
                  Minivan
                </Checkbox>
                <Checkbox size="sm" color="success" value="sedan">
                  Sedan
                </Checkbox>
                <Checkbox size="sm" color="success" value="wagon">
                  Wagon
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base">Transmission</h3>
            <div className="flex flex-col gap-2 text-sm">
              <CheckboxGroup
                defaultValue={[]}
                value={filterAndSortContext.transmission}
                onValueChange={filterAndSortContext.setTransmission}
              >
                <Checkbox size="sm" color="success" value="automatic">
                  Automatic
                </Checkbox>
                <Checkbox size="sm" color="success" value="manual">
                  Manual
                </Checkbox>
              </CheckboxGroup>
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
          <div className="flex flex-col py-2 md:py-0 gap-2 items-start">
            <label for="sort" className="font-medium text-base w-20">
              Sort by
            </label>
            <select
              id="sort"
              className="text-sm py-2"
              value={filterAndSortContext.sort}
              onChange={(e) => {
                filterAndSortContext.setSort(e.target.value);
              }}
            >
              <option value="1">Price: Low to High</option>
              <option value="-1">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = FilterAndSort;
