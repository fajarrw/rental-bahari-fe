import AdminTable from "./AdminTable";

export default function CarList() {
  return (
    <main className="bg-[#EDEDED]">
      <header className="border-b border-main-black/20">
        <h1 className="text-xl font-semibold px-8 py-4">Manage Admin</h1>
        <div></div>
      </header>
      <section className="px-8 py-6">
        <AdminTable />
      </section>
    </main>
  );
}
