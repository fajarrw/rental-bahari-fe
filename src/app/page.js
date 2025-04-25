import About from "./components/about/About"
import BackToTop1 from "./components/backtotop/BackToTop"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Header from "./components/navbar/Header"
import Headerx from "@/app/after_login/components/navbar/Headerx";
import { getToken } from "@/utils/cookies";

export default function Home() {
  const token = getToken(); // Server-side function to get the token
  const isUser = !!token; // Determine if the user is logged in

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
