const {default: Image} = require("next/image");
import {BsPersonFill} from "react-icons/bs";
import {RiSettings5Fill} from "react-icons/ri";
import useCurrency from "@/hooks/useCurrency";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {useState} from "react";
import {useGetToken} from "@/hooks/useCookies";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {Toaster, toast} from "sonner";

const deleteData = async (_id, getData) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = await useGetToken();
  try {
    fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/car/delete`, {
      method: "DELETE",
      body: JSON.stringify({_id: _id}),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(() => {
      toast.success("Car deleted successfully");
      toast.info("Updating your data...");
      getData().then(() => {
        toast.success("Data updated");
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const editData = async (data) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = await useGetToken();
  try {
    fetch(`${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/car/edit`, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const EditButton = ({item}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [carData, setCarData] = useState(item);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setCarData({
      ...carData,
      [name]: value,
    });
    console.log(carData);
  };

  return (
    <>
      <Button isIconOnly onPress={onOpen} className="bg-amber-400">
        <AiFillEdit size={25} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Car Details
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Car name"
                  name="name"
                  variant="bordered"
                  value={carData.name}
                  onChange={handleChange}
                />
                <Input
                  label="Model"
                  variant="bordered"
                  value={carData.model}
                  name="model"
                  onChange={handleChange}
                />
                <Input
                  label="Type"
                  variant="bordered"
                  value={carData.type}
                  name="type"
                  onChange={handleChange}
                />
                <Select
                  label="Transmission"
                  variant="bordered"
                  selectedKeys={[carData.transmission]}
                  name="transmission"
                  onChange={handleChange}
                >
                  <SelectItem value="automatic" key={"automatic"}>
                    automatic
                  </SelectItem>
                  <SelectItem value="manual" key={"manual"}>
                    manual
                  </SelectItem>
                </Select>
                <Input
                  label="Price"
                  type="number"
                  variant="bordered"
                  value={carData.price}
                  name="price"
                  onChange={handleChange}
                />
                <Input
                  label="Seats"
                  type="number"
                  variant="bordered"
                  value={carData.seatNumber}
                  name="seatNumber"
                  onChange={handleChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  No, Cancel
                </Button>
                <Button color="danger" onPress={() => editData(carData)}>
                  Yes, Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const DeleteButton = ({id, name, getData}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button isIconOnly onPress={onOpen} className="bg-red-400">
        <AiFillDelete size={25} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure to delete {name}
              </ModalHeader>
              <ModalBody>This action is irreversible.</ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  No, Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    toast.info("Deleting car...", {duration: 5000});
                    deleteData(id, getData);
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

const CarCard = ({item, getData}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-row w-full">
      <Toaster richColors />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex w-full hover:bg-slate-500/5 transition-colors p-4 border-b border-b-slate-400/50"
      >
        <div className="w-1/4">
          <div className="relative h-28 aspect-video">
            <Image
              src={item.imageData}
              alt={`${item.name}_image`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-1/4">
          <h1 className="text-xl font-medium">{item.name}</h1>
          <div className="flex gap-2 items-center">
            <BsPersonFill size={20} />
            <h1 className="text-sm">{item.seatNumber} seats</h1>
          </div>
          <div className="flex gap-2 items-center">
            <RiSettings5Fill size={20} />
            <h1 className="text-sm">{item.transmission}</h1>
          </div>
          <p className="text-sm">
            Type: <span>{item.type}</span>
          </p>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col gap-1 items-end">
            <label className="text-sm">Price per day</label>
            <p className="text-lg font-semibold">{useCurrency(item.price)}</p>
          </div>
        </div>
        <div
          className={
            "gap-4 justify-center items-center w-1/4 " +
            (!isHover ? "lg:invisible" : "flex flex-row")
          }
        >
          <EditButton item={item} />
          <DeleteButton name={item.name} id={item._id} getData={getData} />
        </div>
      </div>
    </div>
  );
};

module.exports = CarCard;
