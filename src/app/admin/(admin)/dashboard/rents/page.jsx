"use client";

import RentTable from "./RentTable";
import {useState} from "react";
import {Radio, RadioGroup} from "@nextui-org/react";

export default function CarList() {
  const [query, setQuery] = useState({
    order: "-1",
    status: "on",
    sortBy: "start",
  });
  const handleChange = ({target}) => {
    const {name, value} = target;
    setQuery({...query, [name]: value});
  };
  const {order, status, sortBy} = query;
  return (
    <main className="bg-[#EDEDED]">
      <header className="border-b border-main-black/20">
        <h1 className="text-xl font-semibold px-8 py-4">Rent List</h1>
        <div></div>
      </header>
      <section className="px-8 py-6">
        <div className="flex flex-row gap-20">
          <RadioGroup
            label="Sort"
            color="success"
            orientation="horizontal"
            name="order"
            value={order}
            onChange={(e) => handleChange(e)}
          >
            <Radio value={"-1"}>Newest</Radio>
            <Radio value={"1"}>Oldest</Radio>
          </RadioGroup>
          <RadioGroup
            label="Sorted by"
            color="success"
            orientation="horizontal"
            name="sortBy"
            value={sortBy}
            onChange={(e) => handleChange(e)}
          >
            <Radio value="start">Rent Started</Radio>
            <Radio value="end">Rent Ended</Radio>
          </RadioGroup>
          <RadioGroup
            label="Rent status"
            color="success"
            orientation="horizontal"
            name="status"
            value={status}
            onChange={(e) => handleChange(e)}
          >
            <Radio value="on">On</Radio>
            <Radio value="off">Off</Radio>
            <Radio value="">All</Radio>
          </RadioGroup>
        </div>
        <RentTable queries={query} />
      </section>
    </main>
  );
}
