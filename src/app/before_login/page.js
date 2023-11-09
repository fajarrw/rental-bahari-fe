import BackToTop from "../after_login/components/backtotop/BackToTop"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Header from "./components/navbar/Header"

export default function Home() {
    return (
      <main className="max-w-[1920px] bg-main-white mx-auto relative overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Footer />
        <BackToTop />
        <div className="h-fit"></div>
      </main>
    )
  }
  