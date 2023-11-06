const {default: Image} = require("next/image");
import {BsPersonFill} from "react-icons/bs";
import {RiSettings5Fill} from "react-icons/ri";
import useCurrency from "@/hooks/useCurrency";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {useState} from "react";
import {useGetToken} from "@/hooks/useCookies";

const deleteData = async (_id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = await useGetToken();
  try {
    fetch(`http://localhost:3001/api/car/delete`, {
      method: "DELETE",
      body: JSON.stringify({_id: _id}),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const CarCard = ({item}) => {
  const [isHover, setIsHover] = useState(false);

  const handleDelete = () => {
    deleteData(item._id);
  };

  return (
    <div className="flex flex-row w-full">
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
          <button className="bg-amber-400 h-max p-2 rounded-md hover:bg-amber-300 transition-colors active:bg-amber-500 active:scale-95">
            <AiFillEdit size={25} />
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-400 h-max p-2 rounded-md hover:bg-red-300 transition-colors"
          >
            <AiFillDelete size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

module.exports = CarCard;
