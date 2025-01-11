"use client";

import Image from "next/image";
import { SearchContextFunctionx } from "@/app/after_login/context/cari";
import Headerx from "@/app/after_login/components/navbar/Headerx";
import { useState, useEffect } from "react";

async function Submit(body) {
  console.log("on Submit funct", body);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/assurance/profile`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    telp: "",
    assurance: {
      alamat: {
        jalan: "",
        kelurahan: "",
        kecamatan: "",
        kota: "",
        provinsi: "",
      },
      nik: "",
    },
  });

  const getProfileData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/users/`, {
        credentials: "include", // Include cookies in the request
      });
      const data = await res.json();
      console.log("Profile data fetched:", data);
      setProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("Fetching profile data...");
    getProfileData();
  }, []);

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (field, subField, value) => {
    setProfile((prev) => ({
      ...prev,
      assurance: {
        ...prev.assurance,
        alamat: {
          ...prev.assurance?.alamat,
          [subField]: value,
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", profile);
    Submit(profile);
  };

  return (
    <SearchContextFunctionx>
      <Headerx />
      <div className="flex py-5 justify-center">
        <div className="flex flex-col bg-slate-100 max-w-[45rem] w-full p-8 rounded-md shadow-lg mx-2 mt-5">
          <div className="flex pb-10">
            <h1 className="text-3xl font-bold pr-3">EDIT PROFILE</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pb-10">
              <h1 className="pb-3 text-lg font-semibold">NAME</h1>
              <input
                type="text"
                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                placeholder="Enter name"
                value={profile.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="pb-10">
              <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
              <input
                type="text"
                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                placeholder="Enter Phone Number"
                value={profile.telp}
                onChange={(e) => handleInputChange("telp", e.target.value)}
              />
            </div>
            <div className="pb-10 space-y-2">
              <h1 className="pb-3 text-lg font-semibold">ADDRESS</h1>
              {["jalan", "kelurahan", "kecamatan", "kota", "provinsi"].map((field) => (
                <div key={field} className="flex justify-start items-center">
                  <span className="w-24 capitalize">{field}</span>
                  <span className="pr-3">:</span>
                  <input
                    type="text"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                    placeholder={`Enter ${field}`}
                    value={profile.assurance?.alamat[field]}
                    onChange={(e) => handleNestedChange("alamat", field, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="pb-10">
              <h1 className="pb-3 text-lg font-semibold">NIK</h1>
              <input
                type="text"
                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                placeholder="Enter NIK"
                value={profile.assurance?.nik}
                onChange={(e) => handleInputChange("nik", e.target.value)}
              />
            </div>
            <div className="pb-10">
              <h1 className="pb-3 text-lg font-semibold">FOTO KTP</h1>
              <div className="flex">
                <h2 className="text-sm pr-2">foto_ktp.jpg</h2>
                <Image src="/assets/open-file.svg" width={16} height={16} alt="filter" />
              </div>
            </div>
            <div className="pb-1">
              <button className="btn-primary poppins font-normal" type="submit">
                Submit Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </SearchContextFunctionx>
  );
}
