"use client"

import Image from "next/image";
import { SearchContextFunctionx } from '@/app/after_login/context/cari';
import Headerx from '@/app/after_login/components/navbar/Headerx';
import { useState, useEffect} from "react";
import getToken from '@/utils/cookies';
// import { useGetToken } from "@/hooks/useCookies";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [assurance, setAssurance] = useState(null);
    const [isUser, setIsUser] = useState(false);
  
    const getProfileData = async (tokenValue) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/users/`, {
                headers: {
                    'Authorization': `Bearer ${tokenValue}`,
                },
            });
            const data = await res.json();
            setProfile(data);
        } catch (err) {
            console.error(err);
        }
    };
  
    const getAssuranceData = async (tokenValue) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/assurance/`, {
                headers: {
                'Authorization': `Bearer ${tokenValue}`,
                },
            });
            const data = await res.json();
            setAssurance(data);
        } catch (err) {
            console.error(err);
        }
    };
  
    useEffect(() => {
        const tokenValue = getToken();
        if (tokenValue) {
            setIsUser(true);
            getProfileData(tokenValue);
            getAssuranceData(tokenValue);
        } else {
            setIsUser(false);
        }
  }, []);

    return (
        <SearchContextFunctionx>
            <Headerx />
            <div>
                <div className="flex py-5 justify-center">
                    <div className="flex flex-col bg-slate-100 max-w-[45rem] w-full p-8 rounded-md shadow-lg mt-5">
                        <div className="flex pb-10 items-baseline">
                            <h1 className="text-3xl font-bold pr-3">{profile && profile.user.name}&apos;s Profile</h1>
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
                                <h2 className="text-sm">{profile && profile.user.name}</h2>
                            </div>
                            <div className="pb-10">
                                <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
                                <h2 className="text-sm">{profile && profile.user.telp}</h2>
                            </div>
                            <div className="pb-10 space-y-2">
                                <h1 className="pb-3 text-lg font-semibold">ADDRESS</h1>
                                <ul className="list-disc">
                                    <li className="flex justify-start">
                                        <span className="w-24">Street</span>
                                        <span>: {assurance && assurance.assurance.alamat?.jalan}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">Ward</span>
                                        <span>: {assurance && assurance.assurance.alamat?.kelurahan}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">Sub-District</span>
                                        <span>: {assurance && assurance.assurance.alamat?.kecamatan}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">City</span>
                                        <span>: {assurance && assurance.assurance.alamat?.kota}</span>
                                    </li>
                                    <li className="flex justify-start">
                                        <span className="w-24">Province</span>
                                        <span>: {assurance && assurance.assurance.alamat?.provinsi}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pb-10">
                                <h1 className="pb-3 text-lg font-semibold">NIK</h1>
                                <h2 className="text-sm">{assurance && assurance.assurance.nik}</h2>
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
        </SearchContextFunctionx>
    );
}

export default Profile;