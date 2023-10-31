"use client";

import Link from "next/link";
import {FiChevronLeft} from "react-icons/fi";
import {useState} from "react";
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
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setCarInfo({...carInfo, imageData: base64Image});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = ({target}) => {
    const {name, value} = target;
    setCarInfo({...carInfo, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carInfo);
  };

  return (
    <main className="bg-[#EDEDED]">
      <header className="border-b border-main-black/20">
        <Link
          href={"/admin/dashboard/cars"}
          className="py-2 px-8 flex items-center gap-1"
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
              className="text-sm w-2/3 lg:w-1/2 cursor-pointer"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex gap-2 items-center justify-between">
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
          <div className="flex gap-2 items-center justify-between">
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
          <div className="flex gap-2 items-center justify-between">
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
          <div className="flex gap-2 items-center justify-between">
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
          <div className="flex gap-2 items-center justify-between">
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
