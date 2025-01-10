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
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {Toaster, toast} from "sonner";

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

const finishRent = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/rent/finish/${id}`,
      {
        method: "PUT",
        credentials: "include",
      }
    );
    if (res.status !== 200) {
      toast.error("Internal server error");
      return;
    }
    toast.success("Status updated");
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

const deleteRent = async (id) => {
  try {
    const body = {_id: id};
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/rent/delete`,
      {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (res.status !== 200) {
      toast.error("Internal server error");
      return;
    }
    toast.success("Rent deleted");
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

const getCustomerData = async (custId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/users/${custId}`,
      {
        method: "GET",
      }
    );
    if (res.status !== 200) {
      toast.error("Internal server error");
      return;
    }
    const data = await res.json();
    return data.user;
  } catch (err) {
    console.error(err);
  }
};
const getCarData = async (carId, customerData, setter) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/car/id/${carId}`,
      {
        method: "GET",
      }
    );
    if (res.status !== 200) {
      toast.error("Internal server error");
      return;
    }
    const data = await res.json();
    setter({
      custData: customerData,
      carData: data.car,
    });
  } catch (err) {
    console.error(err);
  }
};

const DetailButton = ({item}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [rentData, setRentData] = useState({
    custData: null,
    carData: null,
  });
  useEffect(() => {
    console.log(rentData);
  }, [rentData]);
  return (
    <>
      <Button
        variant="light"
        onPress={() => {
          getCustomerData(item.customerID).then((customerData) => {
            getCarData(item.carID, customerData, setRentData);
          });

          onOpen();
        }}
        color="primary"
      >
        Details
      </Button>
      <Modal isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Rent Information
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="font-semibold text-dark-green-1">
                      Customer info
                    </h1>
                    <div>
                      <label>Name: </label>
                      <span>{rentData?.custData?.name}</span>
                    </div>
                    <div>
                      <label>Email: </label>
                      <span>{rentData?.custData?.email}</span>
                    </div>
                    <div>
                      <label>Telepon: </label>
                      <span>{rentData?.custData?.telp}</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-dark-green-1">
                      Car info
                    </h1>
                    <div>
                      <label>Name: </label>
                      <span>{rentData?.carData?.name}</span>
                    </div>
                    <div>
                      <label>Model: </label>
                      <span>{rentData?.carData?.model}</span>
                    </div>
                    <div>
                      <label>Type: </label>
                      <span>{rentData?.carData?.type}</span>
                    </div>
                    <div>
                      <label>Transmission: </label>
                      <span>{rentData?.carData?.transmission}</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-dark-green-1">
                      Rent Info
                    </h1>
                    <div>
                      <label>Start date: </label>
                      <span>{item.start}</span>
                    </div>
                    <div>
                      <label>End date: </label>
                      <span>{item.end}</span>
                    </div>
                    <div>
                      <label>Status: </label>
                      <span>{item.status}</span>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    toast("Delete data?", {
                      action: {
                        label: "Yes, Delete",
                        onClick: () => {
                          deleteRent(item._id);
                          onClose();
                        },
                      },
                      cancel: {
                        label: "No, Cancel",
                        onClick: () => {
                          onClose();
                        },
                      },
                      position: "top-center",
                      actionButtonStyle: {
                        color: "white",
                        background: "red",
                      },
                    });
                    // finishRent(id);
                  }}
                >
                  Delete Rent
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const FinishButton = ({id}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-dark-green-1 text-main-white">
        Finish
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Finish this rent?
              </ModalHeader>
              <ModalBody>Select &quot;Yes&quot; to confirm</ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  No, Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    toast.info("Finishing rent...", {duration: 5000});
                    finishRent(id);
                    onClose();
                  }}
                >
                  Yes, Finish
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const ButtonGroup = ({item}) => {
  return (
    <div className="flex gap-4">
      <DetailButton item={item} />
      <FinishButton id={item._id} />
    </div>
  );
};

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const getRentData = async (setter, queries) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/rent/search?order=${queries.order}&sortBy=${queries.sortBy}&status=${queries.status}`
    );
    const data = await res.json();
    // if (!data.rent) return;
    const rent = data;
    rent.forEach((item) => {
      item.start = new Date(item.start).toLocaleString("en-UK", dateOptions);
      item.end = new Date(item.end).toLocaleString("en-UK", dateOptions);
      item.bush = <ButtonGroup item={item} />;
    });
    setter(rent);
  } catch (err) {
    console.error(err);
  }
};

export default function RentTable({queries}) {
  const [rentData, setRentData] = useState([]);
  useEffect(() => {
    getRentData(setRentData, queries);
  }, [queries]);
  return (
    <div>
      <Toaster richColors />
      <Table
        isStriped
        aria-label="Example table with dynamic content"
        className="max-h-[30rem]"
      >
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
