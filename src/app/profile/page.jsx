import Image from "next/image";
import { SearchContextFunction } from '../after_login/context/cari';
import Headerx from '../after_login/components/navbar/headerx';

export default function Profile(){
    return (
        <SearchContextFunction>
            <Headerx />
            <div className="flex py-20 justify-center">
                <div className="flex flex-col bg-slate-100 max-w-[45rem] w-full p-8 rounded-md shadow-lg mt-5">
                    <div className="flex pb-10 items-baseline">
                        <h1 className="text-3xl font-bold pr-3">ACCOUNT PROFILE</h1>
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
                            <h1 className="pb-3 text-lg font-semibold">USERNAME</h1>
                            <h2 className="text-sm">michaeljackson</h2>
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
                            <h2 className="text-sm">085945286214</h2>
                        </div>
                        <div className="pb-10 space-y-2">
                            <h1 className="pb-3 text-lg font-semibold">ADDRESS</h1>
                            <ul className="list-disc">
                                <li className="flex justify-start">
                                    <span className="w-24">Street</span>
                                    <span>: Jl.Beo</span>
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Ward</span>
                                    <span>: Caturtunggal</span>
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Sub-District</span>
                                    <span>: Depok</span>
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">City</span>
                                    <span>: Sleman</span>
                                </li>
                                <li className="flex justify-start">
                                    <span className="w-24">Province</span>
                                    <span>: DI Yogyakarta</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">NIK</h1>
                            <h2 className="text-sm">1234567812345678</h2>
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
        </SearchContextFunction>
    );
}