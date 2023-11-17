"use client";
import {useEffect, useState} from "react";
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
    key: "carID",
    label: "CAR_ID",
  },
  {
    key: "customerID",
    label: "CUSTOMER_ID",
  },
  {
    key: "start",
    label: "START",
  },
  {
    key: "end",
    label: "END",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "bush",
    label: "ACTION",
  },
];

const ButtonGroup = ({id}) => {
  const handleDetail = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <button onClick={handleDetail}>Detail</button>
      <button onClick={handleDelete}>Finish</button>
    </div>
  );
};

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getRentData = async (setter) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/rent/all`
    );
    const data = await res.json();
    if (!data.rent) return;
    const {rent} = data;
    rent.forEach((item) => {
      item.start = new Date(item.start).toLocaleString("en-UK", dateOptions);
      item.end = new Date(item.end).toLocaleString("en-UK", dateOptions);
      item.bush = <ButtonGroup id={item._id} />;
    });
    setter(rent);
  } catch (err) {
    console.error(err);
  }
};

export default function RentTable() {
  const [rentData, setRentData] = useState([]);
  useEffect(() => {
    getRentData(setRentData);
  }, []);
  useEffect(() => {
    console.log(rentData);
  }, [rentData]);
  return (
    <div>
      <Table isStriped aria-label="Example table with dynamic content">
        <TableHeader columns={COLUMNS}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rentData}>
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
