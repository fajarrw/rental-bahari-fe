"use client";

import {useState} from "react";
import Head from 'next/head';
import Link from "next/link";

const handleRegister = async (body) => {
    try{
        
        const res = await fetch("http://localhost:3001/api/users", {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify(body)
        })
        const data = await res.json()
        console.log(data)
    } catch (err){
        console.error(err)
    }
}

export default function UserRegister(){
    const [userInfo, setUserInfo] = useState({
        name:"",
        username:"",
        email: "",
        telp: "",
        password: "",
        // confirmPassword: "",
    });
    const {name, username, email, telp, password, confirmPassword} = userInfo;
    const handleChange = ({target}) => {
        const {name, value} = target;
        setUserInfo({...userInfo, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !username || !email || !telp || !password || !confirmPassword) {
            console.error("Please fill all the fields!");
            return;
        }
        if (password !== confirmPassword) {
            console.error("Passwords don't match!");
            return;
        }
        handleRegister(userInfo);
    };
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>Rental Bahari | Register</title>
            </Head>
            <main className="flex items-center justify-center w-full flex-1 py-100 text-center bg-reg-bg">
                {/* Logo section */}
                <div className='w-1/2 p-5 flex flex-col items-center justify-center'>
                        <img src='/assets/white-logo.png' className="img-white-logo1 mb-5" alt="Logo" />
                </div>

                {/* Regis section */}
                <div className="w-1/2 bg-white">
                    <div className='py-reg'>
                        <h2 className='text-3xl font-bold text-teal-800 mt-3 mb-2'>
                            Welcome to Rental Bahari!
                        </h2>
                        <div className="text-neutral-800 text-xs">
                            <p className="mb-1">Create an account to get started with Rental Bahari.</p>
                            <p>Rent Easily, Drive Hapily!</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col h-full">
                        <div className="flex flex-col gap-3 justify-start items-start px-44" >
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-sm text-left" >Name</label>
                                <section>
                                    <input
                                        type="name"
                                        onChange={handleChange}
                                        value={name}
                                        name="name"
                                        className="border-2 rounded-xl px-6 py-1.5 w-72 bg-gray-100"
                                        placeholder="Enter name"
                                        required
                                    />
                                </section>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-sm text-left">Username</label>
                                <section>
                                    <input
                                        type="username"
                                        onChange={handleChange}
                                        value={username}
                                        name="username"
                                        className="border-2 rounded-xl px-6 py-1.5 w-72 bg-gray-100"
                                        placeholder="Enter username"
                                        required
                                    />
                                </section>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-sm text-left">Email</label>
                                <section>
                                    <input
                                        type="email"
                                        onChange={handleChange}
                                        value={email}
                                        name="email"
                                        className="border-2 rounded-xl px-6 py-1.5 w-72 bg-gray-100"
                                        placeholder="Enter email"
                                        required
                                    />
                                </section>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-sm text-left">Phone number</label>
                                <section>
                                    <input
                                        type="telp"
                                        onChange={handleChange}
                                        value={telp}
                                        name="telp"
                                        className="border-2 rounded-xl px-6 py-1.5 w-72 bg-gray-100"
                                        placeholder="Enter Phone number"
                                        required
                                    />
                                </section>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-sm text-left">Password</label>
                                <section>
                                    <input
                                        type="password"
                                        onChange={handleChange}
                                        value={password}
                                        name="password"
                                        className="border-2 rounded-xl px-6 py-1.5 w-72 bg-gray-100"
                                        placeholder="Enter password"
                                        required
                                    />
                                </section>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-medium text-sm text-left">Confirm Password</label>
                                <section>
                                    <input
                                        type="password"
                                        onChange={handleChange}
                                        value={confirmPassword}
                                        name="confirmPassword"
                                        className="border-2 rounded-xl px-6 py-1.5 w-72 bg-gray-100"
                                        placeholder="Confirm password"
                                        required
                                    />
                                </section>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button
                                type="submit"
                                className="bg-dark-green-1 p-20 py-2 rounded-3xl text-white font-semibold mt-6"
                            >
                                Sign up
                            </button>
                        </div>
                        <div className="flex justify-center text-xs mb-6">
                            <span>Already have an account?&nbsp;</span>
                            <Link href='/login' className="underline">Sign in</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}