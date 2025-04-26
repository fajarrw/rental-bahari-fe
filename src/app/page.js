"use client"

import About from "./components/about/About"
import BackToTop1 from "./components/backtotop/BackToTop"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Header from "./components/navbar/Header"
import Headerx from "@/app/after_login/components/navbar/Headerx";
import getToken from "@/utils/cookies";
// import { useGetToken } from "@/hooks/useCookies";
import { useState, useEffect } from "react";

export default function Home() {
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    const tokenValue = getToken();
    !!tokenValue ? setIsUser(true) : setIsUser(false);
  }, []);

  if (isUser === null) {
    return <div>Loading...</div>; // Show a loading state until the client-side logic is ready
  }

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
