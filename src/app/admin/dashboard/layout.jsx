import Navbar from "./components/navbar";

export default function DashboardLayout({children}) {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
}
