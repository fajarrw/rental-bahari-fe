"use client";

import {useState} from "react";

export default function AsideSearchCar({searchSetter}) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = ({target}) => {
    setSearchInput(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchSetter(searchInput);
  };

  return (
    <div className="bg-white p-4 rounded-lg drop-shadow-md h-fit">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label>Search cars:</label>
          <input
            type="text"
            onChange={handleChange}
            value={searchInput}
            name="search"
            label="Search"
            className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-full bg-transparent"
            placeholder="Enter car name"
          />
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-dark-green-1 px-6 py-2 rounded-lg text-main-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
