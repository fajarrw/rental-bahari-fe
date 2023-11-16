import Link from "next/link";

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

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-white drop-shadow-md">
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
        <button className="px-5 py-3 text-main-black">
          admin@mail.rentalbahari.org
        </button>
      </div>
    </nav>
  );
}
