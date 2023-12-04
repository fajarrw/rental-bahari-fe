"use client";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import {useLogout} from "@/hooks/useCookies";
import {useRouter} from "next/navigation";

const Links = [
  {
    title: "Car List",
    link: "/admin/dashboard/cars",
  },
  {
    title: "Rent List",
    link: "/admin/dashboard/rents",
  },
  {
    title: "Manage Admins",
    link: "/admin/dashboard/management",
  },
];

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const LogoutModal = ({isOpen, onOpenChange, router}) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure want to log out
              </ModalHeader>
              <ModalBody>You can log back in with admin credentials.</ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  No, Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    handleLogout(router);
                    onClose();
                  }}
                >
                  Yes, Log out
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const ToggleDropdown = ({onOpen}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">admin@rentalbahari.org</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="logout" color="danger" onPress={onOpen}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const handleLogout = (r) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLogout().then(() => {
    r.push("/admin");
  });
};

export default function Navbar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const r = useRouter();
  return (
    <nav className="flex flex-row sticky z-[999] top-0 justify-between items-center bg-white drop-shadow-md min-w-min overflow-x-auto">
      <div className="flex flex-row justify-center">
        <Link href={"/"} className="px-5 py-3 bg-dark-green-1 text-main-white">
          Rental Bahari
        </Link>
        <div className="flex">
          {Links.map((item, idx) => {
            return (
              <Link
                href={item.link}
                key={idx}
                className="border-r border-main-black/20 hover:bg-main-black/5 transition-colors duration-100"
              >
                <p className="px-5 py-3 text-main-black/75">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <p className="px-5 text-main-black">
          {new Date().toLocaleString("en-UK", dateOptions)}
        </p>
        <ToggleDropdown onOpen={onOpen} />
        <LogoutModal isOpen={isOpen} onOpenChange={onOpenChange} router={r} />
      </div>
    </nav>
  );
}
