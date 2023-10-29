import Image from "next/image";

export default function Profile(){
    return (
        <main>
            <div className="flex py-20 justify-center">
                <div className="flex flex-col bg-slate-100 max-w-[45rem] w-full p-8 rounded-md shadow-lg	">
                    <div className="pb-10">
                        <h1 className="text-3xl font-bold">ACCOUNT PROFILE</h1>
                    </div>
                    <ul className="list-none">
                        <li className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">USERNAME</h1>
                            <h2 className="text-sm">michaeljackson</h2>
                        </li>
                        <li className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">PHONE NUMBER</h1>
                            <h2 className="text-sm">085945286214</h2>
                        </li>
                        <li className="pb-10 space-y-2">
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
                        </li>
                        <li className="pb-10">
                            <h1 className="pb-3 text-lg font-semibold">NIK</h1>
                            <h2 className="text-sm">1234567812345678</h2>
                        </li>
                        <li className="pb-10">
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
                        </li>
                    </ul>

                </div>
            </div>
        </main>
    );
}