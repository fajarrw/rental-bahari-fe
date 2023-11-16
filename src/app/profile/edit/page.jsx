"use client"

import Image from "next/image";
import { SearchContextFunction } from '../../after_login/context/cari';
import Headerx from '../../after_login/components/navbar/headerx';
import { useState, useEffect } from "react";

export default function Profile(){
    const [profile, setProfile] = useState(null);

    const getProfileData = async () => {
        console.log("Fetching profile data...");
        try {
            const res = await fetch("http://rentalbahari.vercel.app/api/assurance/user/6555aa8c6feff42ac8e0216f");
            console.log(res)
            const data = await res.json();
            console.log(data);
            setProfile(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        console.log("useEffect called")
        getProfileData();
    }, []);

    return (
        <SearchContextFunction>
            <Headerx />
            <div className="flex py-5 justify-center">
                <div className="flex flex-col bg-slate-100 max-w-[45rem] w-full p-8 rounded-md shadow-lg mx-2 mt-5">
                    <div className="flex pb-10">
                        <h1 className="text-3xl font-bold pr-3">EDIT PROFILE</h1>
                    </div>
                    <form>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">USERNAME</h1>
                            <input
                                type="text"
                                //onChange={handleChange}
                                name="username"
                                label="username"
                                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                placeholder="Enter username"
                                value={profile && profile.name || ""}
                            />
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
                            <input
                                type="text"
                                // onChange={handleChange}
                                name="PhoneNumber"
                                label="PhoneNumber"
                                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                placeholder="Enter Phone Number"
                                value={profile && profile.telp || ""}
                            />
                        </div>
                        <div className="pb-10 space-y-2">
                            <h1 className="pb-3 text-lg font-semibold">ADDRESS</h1>
                            <ul className="list-disc">
                                <li className="flex justify-start items-center">
                                    <span className="w-24">Street</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        //onChange={handleChange}
                                        name="Street"
                                        label="Street"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Street"
                                        value={profile && profile.assurance?.alamat.jalan || ""}
                                    />
                                </li>
                                <li className="flex justify-start ">
                                    <span className="w-24">Ward</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        //onChange={handleChange}
                                        name="Ward"
                                        label="Ward"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Ward"
                                        value={profile && profile.assurance?.alamat.kelurahan || ""}
                                    />
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Sub-District</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        //onChange={handleChange}
                                        name="SubDistrict"
                                        label="SubDistrict"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Sub-District"
                                        value={profile && profile.assurance?.alamat.kecamatan || ""}
                                    />
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">City</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        //onChange={handleChange}
                                        name="City"
                                        label="City"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter City"
                                        value={profile && profile.assurance?.alamat.kota || ""}
                                    />
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Province</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        //onChange={handleChange}
                                        name="Province"
                                        label="Province"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Province"
                                        value={profile && profile.assurance?.alamat.provinsi || ""}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">NIK</h1>
                            <input
                                type="text"
                                //onChange={handleChange}
                                name="NIK"
                                label="NIK"
                                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                placeholder="Enter NIK"
                                value={profile && profile.assurance?.nik || ""}
                            />  
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">FOTO KTP</h1>
                            <div className="flex">
                                <h2 className="text-sm pr-2">foto_ktp.jpg</h2>
                                <Image
                                    src="/assets/open-file.svg"
                                    width={16}
                                    height={16}
                                    alt="filter"
                                />
                            </div>
                        </div>
                        <div className="pb-1">
                            <button 
                                className="btn-primary poppins font-normal"
                                type="submit"
                            >
                                Submit Changes
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </SearchContextFunction>
        
            
    );
}