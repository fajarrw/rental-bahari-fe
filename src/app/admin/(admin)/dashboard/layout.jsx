import Navbar from "./components/navbar";

export default function DashboardLayout({children}) {
  return (
    <main className="h-screen bg-[#EDEDED] overflow-auto">
      <Navbar />
      <section>{children}</section>
    </main>
  );
}
