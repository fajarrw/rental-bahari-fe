"use client";

import {FiEye, FiEyeOff} from "react-icons/fi";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import MainLogo from "../../../public/assets/admin-login-logo.svg";
export default function Admin() {
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
  const handleReset = () => {
    setUserInfo({email: "", password: ""});
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-admin-login bg-cover py-20 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center md:flex-row md:items-start w-[45rem] shadow-lg">
          <div className="bg-dark-green-1 w-80 sm:w-96 md:w-2/5 h-48 md:h-[27rem] rounded-t-xl md:rounded-tr-none md:rounded-bl-xl md:rounded-tl-xl">
            <div className="flex justify-center h-full items-center">
              <div className="relative h-36 md:h-48 aspect-square">
                <Image src={MainLogo} fill alt="logo" priority />
              </div>
            </div>
          </div>
          <div className="bg-main-white w-80 sm:w-96 md:w-3/5 h-[27rem] rounded-b-xl md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl px-8 py-12">
            <form
              onSubmit={handleSubmit}
              onReset={handleReset}
              className="flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label>Email:</label>
                  <input
                    type="email"
                    onChange={handleChange}
                    value={email}
                    name="email"
                    label="Email"
                    className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-2 md:px-[29px] md:py-4 w-full bg-transparent"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Password:</label>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={password}
                      name="password"
                      label="Password"
                      type={isPasswordHidden ? "password" : "show"}
                      placeholder="Enter password"
                      className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-2 md:px-[29px] md:py-4 w-full bg-transparent"
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
              <div className="flex flex-row gap-2">
                <button
                  type="submit"
                  className="bg-dark-green-1 w-full py-2 rounded-lg text-main-white"
                >
                  Login
                </button>
                <button
                  type="reset"
                  className="border-2 border-dark-green-1 w-full py-2 rounded-lg text-dark-green-1"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-main-white flex flex-col gap-2 w-80 sm:w-96 md:w-full items-center justify-center p-8 rounded-lg shadow-md">
            <p>Bukan Admin?</p>
            <Link href={"/"} className="w-full md:w-2/3">
              <button className="bg-dark-green-1 w-full py-2 text-main-white rounded-lg">
                Kembali ke halaman utama
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
