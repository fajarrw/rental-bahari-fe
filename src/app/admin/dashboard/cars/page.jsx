import Link from "next/link";
import AsideSearchCar from "../components/searchCar";
export default function CarList() {
  return (
    <main className="bg-[#EDEDED]">
      <header className="border-b border-main-black/20">
        <h1 className="text-xl font-semibold px-8 py-4">Car List</h1>
        <div></div>
      </header>
      <section className="px-8 py-6 flex flex-row gap-8">
        <AsideSearchCar />
        <content className="w-full">
          <div className="flex justify-end">
            <Link href={"/admin/dashboard/cars/add"}>
              <button className="btn-primary hover:bg-[#044343] transition-colors duration-200">
                Add Car
              </button>
            </Link>
          </div>
        </content>
      </section>
    </main>
  );
}
