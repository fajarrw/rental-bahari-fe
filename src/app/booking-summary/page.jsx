import Link from "next/link";
import SummaryCard from "./components/summaryCard";
import { SearchContextFunction } from "../before_login/context/search";
import Header from "../before_login/components/navbar/header";

export default function BookingSummary() {
  return (
    <SearchContextFunction>
      <Header />
      <main className="flex flex-col items-center pt-2 min-h-screen">
        <div className="flex flex-row px-16 py-3 gap-3 w-full">
          <Link href="/search-car" className="font-poppins font-medium">
            &lt;
          </Link>
          <h1 className="font-poppins font-medium">Booking Summary</h1>
        </div>
        <div className="flex flex-row">
          <SummaryCard />
        </div>
      </main>
    </SearchContextFunction>
  );
}
