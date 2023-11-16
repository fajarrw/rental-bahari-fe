import RentTable from "./RentTable";

export default function CarList() {
  return (
    <main className="bg-[#EDEDED]">
      <header className="border-b border-main-black/20">
        <h1 className="text-xl font-semibold px-8 py-4">Rent List</h1>
        <div></div>
      </header>
      <section className="px-8 py-6">
        <h1>
          View by?: 1day, 3day, 1week, 1mos, 1year, all | number of display? |
          Sort by: penyewa, date | asc, desc
        </h1>
        <RentTable />
      </section>
    </main>
  );
}
