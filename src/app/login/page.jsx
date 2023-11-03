"use client";

import {FiEye, FiEyeOff} from "react-icons/fi";
import {useState} from "react";
import Link from "next/link";
import Head from 'next/head'

export default function Login() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
      });
      const {email, password} = userInfo;
      const [isPasswordHidden, setIsPasswordHidden] = useState(true);
      const handleChange = ({target}) => {
        const {name, value} = target;
        setUserInfo({...userInfo, [name]: value});
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
      };
    return(
        <div className='flex flex-col items-center justify-center min-h-screen bg-user-login bg-cover'>
            <Head>
                <title>Rental Bahari | Login</title>
            </Head>

            <main className='flex flex-col items-center justify-center flex-1 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-11/12'>
                    {/* logo section */}
                    <div className='w-1/2 p-5 bg-dark-green-1 text-white rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-center'>
                        <img src='/assets/white-logo.png' className="img-white-logo mb-6" alt="Logo" />
                        <p className="px-11 text-sm leading-6 text-white">Discover the freedom of the open road with Rental Bahari, your trusted car rental app. Your dream ride is just a click away. Book now and let the adventure begin!</p>
                    </div>


                    {/* login */}
                    <div className='w-1/2 p-5'>
                        <div className='py-2'>
                            <h2 className='text-3xl font-bold'>
                                Welcome back!
                            </h2>
                        </div>
                        <p className='text-gray-400 mb-10'>login into your account</p>
                        <form onSubmit={handleSubmit} className="flex flex-col h-full px-32">
                            <div className="flex flex-col gap-5" >
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-left">Email</label>
                                    <div>
                                        <input
                                        type="email"
                                        onChange={handleChange}
                                        value={email}
                                        name="email"
                                        label="Email"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-3 w-full bg-gray-100"
                                        placeholder="Enter email"
                                        required
                                    />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-semibold text-left">Password</label>
                                    <div className="relative">
                                        <input
                                        onChange={handleChange}
                                        value={password}
                                        name="password"
                                        label="Password"
                                        type={isPasswordHidden ? "password" : "show"}
                                        placeholder="Enter password"
                                        className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-3 w-full bg-gray-100"
                                        required
                                        />
                                        <div className="inset-y-0 pr-5 absolute right-0 flex items-center">
                                        {isPasswordHidden ? (
                                            <FiEyeOff
                                            size={20}
                                            onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                                            />
                                        ) : (
                                            <FiEye
                                            size={20}
                                            onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                                            />
                                        )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="bg-dark-green-1 w-1/2 py-2 rounded-3xl text-white font-semibold mt-8"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="flex items-center justify-center text-xs mb-4">
                                <span>Don't have an account?&nbsp;</span>
                                <Link href="/register" className="underline">Sign up</Link>
                            </div>
                        </form >
                        
                    </div>  
                </div>
                
            </main>
        </div>
    )
}