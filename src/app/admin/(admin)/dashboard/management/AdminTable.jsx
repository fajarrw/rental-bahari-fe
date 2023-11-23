"use client";

import {useState, useEffect} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const COLUMNS = [
  {
    key: "username",
    label: "USERNAME",
  },
  {
    key: "lastLogin",
    label: "LAST_LOGIN",
  },
];

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getAdmin = async (callback) => {
  console.log("hello");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/admin`
    );
    const data = await res.json();
    if (!data.admin) return;
    const {admin} = data;
    admin.forEach((item) => {
      item.lastLogin = new Date(item.lastLogin).toLocaleString(
        "en-UK",
        dateOptions
      );
    });
    callback(admin);
  } catch (err) {
    console.error(err);
  }
};

export default function AdminTable() {
  const [adminList, setAdminList] = useState([]);
  useEffect(() => {
    getAdmin(setAdminList);
  }, []);
  useEffect(() => {
    console.log(adminList);
  }, [adminList]);
  return (
    <div className="w-1/2">
      <Table isStriped aria-label="Example table with dynamic content">
        <TableHeader columns={COLUMNS}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={adminList}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
