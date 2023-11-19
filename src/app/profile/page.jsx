"use client"

import Image from "next/image";
import { SearchContextFunction } from '../after_login/context/cari';
import Headerx from '../after_login/components/navbar/headerx';
import {useState, useEffect} from "react";
import {useGetUser} from "@/hooks/useCookies";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    
    const getProfileData = async () => {
        let name = await useGetUser();
        name = await name?name.value:"fajar";
        console.log(name)

        try {
        const res = await fetch(`http://rentalbahari.vercel.app/api/assurance/user/${name}`);
        const data = await res.json();
        console.log(data)
        setProfile(data);    
        } catch (err) {
        console.error(err);
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);


    return (
        <SearchContextFunction>
            <Headerx />
            <div>
                <div className="flex py-5 justify-center">
                    <div className="flex flex-col bg-slate-100 max-w-[45rem] w-full p-8 rounded-md shadow-lg mt-5">
                        <div className="flex pb-10 items-baseline">
                            <h1 className="text-3xl font-bold pr-3">{profile && profile.username}'s Profile</h1>
                            <a href="/profile/edit">
                                <Image
                                    src="/assets/edit_icon.svg"
                                    width={16}
                                    height={16}
                                    alt="filter"
                                />
                            </a>
                            
                        </div>
                        <div>
                            <div className="pb-10">
                                <h1 className="pb-3 text-lg font-semibold">NAME</h1>
                                <h2 className="text-sm">{profile && profile.name}</h2>
                            </div>
                            <div className="pb-10">
                                <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
                                <h2 className="text-sm">{profile && profile.telp}</h2>
                            </div>
                            <div className="pb-10 space-y-2">
                                <h1 className="pb-3 text-lg font-semibold">ADDRESS</h1>
                                <ul className="list-disc">
                                    <li className="flex justify-start">
                                        <span className="w-24">Street</span>
                                        <span>: {profile && profile.assurance?.alamat.jalan}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">Ward</span>
                                        <span>: {profile && profile.assurance?.alamat.kelurahan}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">Sub-District</span>
                                        <span>: {profile && profile.assurance?.alamat.kecamatan}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">City</span>
                                        <span>: {profile && profile.assurance?.alamat.kota}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">Province</span>
                                        <span>: {profile && profile.assurance?.alamat.provinsi}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pb-10">
                                <h1 className="pb-3 text-lg font-semibold">NIK</h1>
                                <h2 className="text-sm">{profile && profile.assurance?.nik}</h2>
                            </div>
                            <div className="pb-1">
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
                        </div>

                    </div>
                </div>
            </div>
        </SearchContextFunction>
    );
}

export default Profile;