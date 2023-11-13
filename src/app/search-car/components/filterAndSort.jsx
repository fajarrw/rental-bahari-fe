"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import {
  Slider,
  Select,
  SelectItem,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import useCurrency from "../../../hooks/useCurrency";
import { FilterAndSortContext } from "../context/filterAndSortContext";

function handleClick() {
  console.log("i got clicked");
}

const FilterAndSort = () => {
  const [value, setValue] = useState([100000, 1000000]);
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
                value={value}
                onChange={setValue}
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
                {Array.isArray(value) &&
                  value.map((b) => `${useCurrency(b)}`).join(" – ")}
              </div>
            </div>
            {/* <div className="flex flex-row justify-between">
              <p className="text-sm">Rp. 50000</p>
              <p className="text-sm">Rp. 5000000</p>
            </div> */}
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base">Types</h3>
            <div className="flex flex-col gap-2 text-sm">
              {/* <div className="flex flex-row gap-2">
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
                <input type="checkbox" id="sedan" name="sedan" value="Sedan" />
                <label for="suv">Sedan</label>
                <br />
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" id="suv" name="suv" value="SUV" />
                <label for="suv">SUV</label>
                <br />
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" id="wagon" name="wagon" value="Wagon" />
                <label for="wagon">Wagon</label>
                <br />
              </div> */}
              <CheckboxGroup
                // label="Select cities"
                defaultValue={[]}
                value={filterAndSortContext.type}
                onValueChange={filterAndSortContext.setType}
              >
                <Checkbox size="sm" color="success" value="minivan">
                  Minivan
                </Checkbox>
                <Checkbox size="sm" color="success" value="hatchback">
                  Hatchback
                </Checkbox>
                <Checkbox size="sm" color="success" value="wagon">
                  Wagon
                </Checkbox>
              </CheckboxGroup>
              <a className="text-xs text-rb-darkgreen" onClick={handleClick}>
                + View More
              </a>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-base">Transmission</h3>
            <div className="flex flex-col gap-2 text-sm">
              {/* <div className="flex flex-row gap-2">
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
              </div> */}
              <CheckboxGroup
                // label="Select cities"
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
              {/* <p className="text-default-500 text-small">
                Selected: {filterAndSortContext.transmission}
              </p> */}
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
            {/* <select id="sort" className="text-sm">
              <option value="Price1">Price: Low to High</option>
              <option value="Price-1">Price: High to Low</option>
            </select> */}
            <Select
              // labelPlacement="outside-left"
              // label="Sort by"
              aria-label="sort selection"
              selectionMode="single"
              selectedKeys={filterAndSortContext.sort}
              onSelectionChange={filterAndSortContext.setSort}
              className="max-w-xs"
              radius="sm"
            >
              <SelectItem key="1" value="1">
                Price: Low to High
              </SelectItem>
              <SelectItem key="-1" value="-1">
                Price: High to Low
              </SelectItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = FilterAndSort;
