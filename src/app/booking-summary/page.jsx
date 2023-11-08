import Link from "next/link";
import SummaryCard from "./components/summaryCard";

export default function BookingSummary() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-row px-16 py-3 gap-3 w-full">
        <Link href="/search-car" className="font-poppins font-medium">
          &lt;
        </Link>
        <h1 className="font-poppins font-medium">Booking Summary</h1>
      </div>
      <SummaryCard />
    </main>
  );
}
