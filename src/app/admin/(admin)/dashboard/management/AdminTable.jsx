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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import {Toaster, toast} from "sonner";

const COLUMNS = [
  {
    key: "username",
    label: "USERNAME",
  },
  {
    key: "lastLogin",
    label: "LAST_LOGIN",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getAdmin = async (callback) => {
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
      item.action = <DeleteButton id={item._id} />;
    });
    callback(admin);
  } catch (err) {
    console.error(err);
  }
};

const deleteAdmin = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/admin/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.status !== 204) {
      toast.error("Failed to delete admin");
      return;
    }
    toast.success("Admin deleted successfully");
    window.location.reload();
  } catch (err) {
    console.error(err);
    toast.error("Internal server error");
  }
};

const DeleteButton = ({id}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button color="danger" onClick={onOpen}>
        Delete
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure to delete?
              </ModalHeader>
              <ModalBody>This action is irreversible.</ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  No, Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    toast.info("Deleting admin...", {duration: 5000});
                    deleteAdmin(id);
                    onClose();
                  }}
                >
                  Yes, Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
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
    <div className="w-full md:w-2/3 lg:w-1/2">
      <Toaster richColors />
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
