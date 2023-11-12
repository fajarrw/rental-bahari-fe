import Aboutx from "./components/about/Aboutx"
import BackToTopx from "./components/backtotop/BackToTop"
import Footerx from "./components/footer/Footerx"
import Herox from "./components/hero/Herox"
import Headerx from "./components/navbar/Headerx"

export default function Home() {
    return (
      <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Headerx />
        <Herox />
        <Aboutx />
        <Footerx />
        <BackToTopx />
        <div className="h-fit"></div>
      </main>
    )
  }
  