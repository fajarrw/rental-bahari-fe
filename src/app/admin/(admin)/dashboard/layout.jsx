import Navbar from "./components/navbar";

export default function DashboardLayout({children}) {
  return (
    <main className="h-screen bg-[#EDEDED]">
      <Navbar />
      <section>{children}</section>
    </main>
  );
}
