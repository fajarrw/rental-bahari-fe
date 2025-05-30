"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { FiEyeOff, FiEye } from "react-icons/fi";

const handleRegister = async (body) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/users`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      }
    );
    return res; // ✅ return the response so you can check res.ok outside
  } catch (err) {
    console.error(err);
    throw err; // Optional: rethrow to handle outside
  }
};

export default function UserRegister() {
  const router = useRouter();
  const [ userInfo, setUserInfo ] = useState({
    name: "",
    username: "",
    email: "",
    telp: "",
    password: "",
  });
  const [ isPasswordHidden, setIsPasswordHidden ] = useState(true);
  const [ isConfirmPasswordHidden, setIsConfirmPasswordHidden ] = useState(true);
  const { name, username, email, telp, password, confirmPassword } = userInfo;
  
  const handleChange = ({target}) => {
    const {name, value} = target;
    setUserInfo({...userInfo, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !username ||
      !email ||
      !telp ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill all the fields!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    try {
      const res = await handleRegister(userInfo);
  
      if (res.ok) {
        toast.success("Account Created Successfully");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        toast.error("Failed to sign up");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Rental Bahari | Register</title>
      </Head>
      <main className="flex-col bg-reg-bg bg-cover md:bg-contain md:flex-row flex items-center justify-center w-full flex-1 py-100 text-center">
        {/* Logo section */}
        <div className="w-1/2 p-5 flex flex-col items-center justify-center ">
          <img
            src="/assets/white-logo.png"
            className="w-40 h-24 md:h-40 md:w-64 mb-5 "
            alt="Logo"
          />
        </div>

        {/* Regis section */}
        <div className="rounded-2xl sm:w-8/12 md:rounded-none md:w-1/2 bg-white">
          <div className="py-reg">
            <h2 className="text-3xl font-bold text-teal-800 mt-3 mb-2">
              Welcome to Rental Bahari!
            </h2>
            <div className="text-neutral-800 text-xs mb-1">
              <p className="mb-1">
                Create an account to get started with Rental Bahari.
              </p>
              <p>Rent Easily, Drive Hapily!</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-20 md:px-28 lg:px-36 xl:px-44"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-medium text-base text-left">Name</label>
                <div>
                  <input
                    type="name"
                    onChange={handleChange}
                    value={name}
                    name="name"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-2 w-full bg-gray-100"
                    placeholder="Enter name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-left">
                  Username
                </label>
                <div>
                  <input
                    type="username"
                    onChange={handleChange}
                    value={username}
                    name="username"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-2 w-full bg-gray-100"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-left">Email</label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={email}
                    name="email"
                    placeholder="Enter email"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-2 w-full bg-gray-100"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-left">
                  Phone number
                </label>
                <div>
                  <input
                    type="telp"
                    onChange={handleChange}
                    value={telp}
                    name="telp"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-2 w-full bg-gray-100"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-left">
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={password}
                    type={isPasswordHidden ? "password" : "show"}
                    name="password"
                    placeholder="Enter password"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-2 w-full bg-gray-100"
                    required
                  />
                  <div className="inset-y-0 pr-5 absolute right-0 flex items-center">
                    {isPasswordHidden ? (
                        <FiEye
                          size={20}
                          onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                        />
                      ) : (
                        <FiEyeOff
                          size={20}
                          onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-base text-left">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={confirmPassword}
                    type={isConfirmPasswordHidden ? "password" : "show"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-2xl px-6 py-2 w-full bg-gray-100"
                    required
                  />
                  <div className="inset-y-0 pr-5 absolute right-0 flex items-center">
                    {isConfirmPasswordHidden ? (
                        <FiEye
                          size={20}
                          onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
                        />
                      ) : (
                        <FiEyeOff
                          size={20}
                          onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="bg-dark-green-1 w-1/2 py-2 rounded-3xl text-white font-semibold mt-8"
              >
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-center text-xs mb-4">
              <span>Don&apos;t have an account?&nbsp;</span>
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </form>
          <ToastContainer theme="dark"></ToastContainer>
        </div>
      </main>
    </div>
  );
}
