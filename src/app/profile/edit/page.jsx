"use client"

import Image from "next/image";
import { SearchContextFunctionx } from '../../after_login/context/cari';
import Headerx from '../../after_login/components/navbar/headerx';
import { useState, useEffect } from "react";
import {useGetUser} from "@/hooks/useCookies";
import update from 'immutability-helper';

async function Submit(body) {
    console.log("on Submit funct", body)
    try {
      const res = await fetch("http://localhost:3001/api/assurance/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  }

export default function Profile(){
    const [profile, setProfile] = useState(({
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
        name: "",
        telp: ""
      })
      );
    
    const getProfileData = async () => {
        let name = await useGetUser();
        name = await name?name.value:"fajar";
        console.log(name)
        try {
            const res = await fetch(`http://rentalbahari.vercel.app/api/assurance/user/${name}`);
            const data = await res.json();
            console.log('data')
            setProfile(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        console.log("useEffect called")
        getProfileData();
        
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for handling form submission here
        console.log('Form submitted:', profile);
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
                            <h1 className="pb-3 text-lg font-semibold">USERNAME</h1>
                            <input
                                type="text"
                                name="username"
                                label="username"
                                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                placeholder="Enter username"
                                value={profile && profile.name || ""}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            />
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
                            <input
                                type="text"
                                name="PhoneNumber"
                                label="PhoneNumber"
                                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                placeholder="Enter Phone Number"
                                value={profile && profile.telp || ""}
                                onChange={(e) => setProfile({ ...profile, telp: e.target.value })}
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
                                        name="Street"
                                        label="Street"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Street"
                                        value={profile && profile.assurance?.alamat.jalan || ""}
                                        onChange={(e) => {
                                            setProfile(update(profile, {assurance: {alamat: {jalan: { $set: e.target.value },},},}))
                                        }}
                                    />
                                </li>
                                <li className="flex justify-start ">
                                    <span className="w-24">Ward</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        name="Ward"
                                        label="Ward"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Ward"
                                        value={profile && profile.assurance?.alamat.kelurahan || ""}
                                        onChange={(e) => {
                                            setProfile(update(profile, {assurance: {alamat: {kelurahan: { $set: e.target.value },},},}))
                                        }}
                                    />
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Sub-District</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        name="SubDistrict"
                                        label="SubDistrict"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Sub-District"
                                        value={profile && profile.assurance?.alamat.kecamatan || ""}
                                        onChange={(e) => {
                                            setProfile(update(profile, {assurance: {alamat: {kecamatan: { $set: e.target.value },},},}))
                                        }}
                                    />
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">City</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        name="City"
                                        label="City"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter City"
                                        value={profile && profile.assurance?.alamat.kota || ""}
                                        onChange={(e) => {
                                            setProfile(update(profile, {assurance: {alamat: {kota: { $set: e.target.value },},},}))
                                        }}
                                    />
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Province</span>
                                    <span className="pr-3">:</span>
                                    <input
                                        type="text"
                                        name="Province"
                                        label="Province"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                        placeholder="Enter Province"
                                        value={profile && profile.assurance?.alamat.provinsi || ""}
                                        onChange={(e) => {
                                            setProfile(update(profile, {assurance: {alamat: {provinsi: { $set: e.target.value },},},}))
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">NIK</h1>
                            <input
                                type="text"
                                name="NIK"
                                label="NIK"
                                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-1 w-1/2 bg-transparent"
                                placeholder="Enter NIK"
                                value={profile && profile.assurance?.nik || ""}
                                onChange={(e) => {
                                    setProfile(update(profile, {assurance: {nik: { $set: e.target.value },},}))
                                }}
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
        </SearchContextFunctionx>
        
            
    );
}