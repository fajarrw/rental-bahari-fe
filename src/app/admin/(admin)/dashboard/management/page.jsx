import {Button, Link} from "@nextui-org/react";
import AdminTable from "./AdminTable";

export default function ManageAdmin() {
  return (
    <main className="bg-[#EDEDED]">
      <header className="border-b border-main-black/20">
        <h1 className="text-xl font-semibold px-8 py-4">Manage Admin</h1>
        <div></div>
      </header>
      <section className="px-8 py-6">
        <div className="flex justify-end">
          <Button
            as={Link}
            href="/admin/dashboard/management/add"
            className="bg-dark-green-1 hover:bg-dark-green-2 text-main-white"
          >
            Add Admin
          </Button>
        </div>
        <AdminTable />
      </section>
    </main>
  );
}
