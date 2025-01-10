"use client";

import Link from "next/link";
import {FiChevronLeft} from "react-icons/fi";
import {useState} from "react";
import {useGetToken} from "@/hooks/useCookies";
import {useImage} from "@/hooks/useImage";
import {Toaster, toast} from "sonner";

export default function AddCar() {
  const [carInfo, setCarInfo] = useState({
    imageData: "",
    name: "",
    type: "",
    model: "",
    transmission: "",
    price: "",
    seatNumber: "",
  });
  const {name, type, model, transmission, price, seatNumber} = carInfo;
  const handleFileChange = (e) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useImage(e, (base64Image) =>
      setCarInfo({...carInfo, imageData: base64Image})
    );
  };

  const postCarData = async (carData) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const {value} = await useGetToken();
      await fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/car/create`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${value}`,
        },
        body: JSON.stringify(carData),
      });
      toast.success("Car added successfully");
      setCarInfo({
        imageData: "",
        name: "",
        type: "",
        model: "",
        transmission: "",
        price: "",
        seatNumber: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = ({target}) => {
    const {name, value} = target;
    setCarInfo({...carInfo, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Adding car...");
    postCarData(carInfo);
  };

  return (
    <main className="bg-[#EDEDED]">
      <Toaster richColors />
      <header className="border-b border-main-black/20">
        <Link
          href={"/admin/dashboard/cars"}
          className="py-2 px-8 flex items-center gap-1 w-fit"
        >
          <FiChevronLeft size={25} />
          <button className="text-xl font-semibold py-2 font-poppins">
            Back
          </button>
        </Link>
      </header>
      <section className="px-8 py-6 w-full lg:w-1/2">
        <h1 className="text-xl">Add new car</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <div className="flex justify-between">
            <p>Upload Image</p>
            <input
              className="text-sm w-1/2 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-poppins">Name</label>
            <input
              className="border focus:border-dark-green-1 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none w-1/2"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-poppins">Model</label>
            <input
              className="border focus:border-dark-green-1 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none w-1/2"
              type="text"
              name="model"
              value={model}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-poppins">Type</label>
            <input
              className="border focus:border-dark-green-1 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none w-1/2"
              type="text"
              name="type"
              value={type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-poppins">Transmission</label>
            <select
              className="border focus:border-dark-green-1 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none w-1/2"
              type="text"
              name="transmission"
              value={transmission}
              onChange={handleChange}
              required
            >
              <option value="" className="text-slate-500/50">
                Choose transmission type
              </option>
              <option value="manual">Manual</option>
              <option value="matic">Matic</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-poppins">Price(IDR)</label>
            <input
              className="border focus:border-dark-green-1 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none w-1/2"
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              placeholder="ex: 250000"
              required
            />
          </div>
          <div className="flex gap-2 items-center justify-between">
            <label className="font-poppins">Seats</label>
            <input
              className="border focus:border-dark-green-1 font-poppins text-sm rounded-md px-4 py-2 focus:outline-none w-1/2"
              type="number"
              name="seatNumber"
              value={seatNumber}
              onChange={handleChange}
              placeholder="ex: 4"
              required
            />
          </div>
          <div className="flex justify-end">
            <button className="btn-primary">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}
