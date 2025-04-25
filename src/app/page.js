"use client"

import About from "./components/about/About"
import BackToTop1 from "./components/backtotop/BackToTop"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Header from "./components/navbar/Header"
import Headerx from "@/app/after_login/components/navbar/Headerx";
import { useState, useEffect } from "react";
import { useGetRole, useGetToken } from "@/hooks/useCookies";

export default function Home() {
  const [isUser, setIsUser] = useState(false);

  // useEffect(() => {
  // const checkUserRole = async () => {
  // try {
  // const resolvedRole = await useGetToken();

  // if (resolvedRole?.value !== undefined) {
  // setIsUser(true);
  // } else {
  // setIsUser(false);
  // }
  // } catch (error) {
  // console.error('Error fetching role:', error);
  // setIsUser(false); // Handle errors if needed
  // }
  // };

  // checkUserRole(); // Call the async function to resolve the role
  // }, []); // This dependency ensures the effect runs when `role` changes

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const resolvedToken = await useGetToken();

        if (resolvedToken?.value !== undefined) {
          setIsUser(true);
        } else {
          setIsUser(false);
        }
      } catch (error) {
        console.error("Error fetching token:", error);
        setIsUser(false); // Handle errors if needed
      }
    };

    checkUserToken(); // Call the async function to resolve the token
  }, []);

  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      {isUser ? <Headerx /> : <Header />}
      <Hero />
      <About />
      <Footer />
      <BackToTop1 />
      <div className="h-fit"></div>
    </main>
  )
}
