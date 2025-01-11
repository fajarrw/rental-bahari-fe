"use client";
import {useState} from "react";
import {Toaster, toast} from "sonner";
import Link from "next/link";
import {FiChevronLeft, FiEye, FiEyeOff} from "react-icons/fi";

const postAdminData = async (adminData, setter) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/admin`,
      {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      }
    );
    if (res.status !== 201) {
      toast.error("Internal server error");
      return;
    }
    toast.success("Admin added successfully");
    setter({
      username: "",
      password: "",
    });
  } catch (err) {
    console.error(err);
    toast.error("Internal server error");
  }
};

export default function AddAdmin() {
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const {username, password} = adminData;

  const handleChange = ({target}) => {
    const {name, value} = target;
    setAdminData({...adminData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Adding new admin...");
    postAdminData(adminData, setAdminData);
  };

  const handleReset = () => {
    setAdminData({
      username: "",
      password: "",
    });
  };

  return (
    <main className="bg-[#EDEDED]">
      <Toaster richColors />
      <header className="border-b border-main-black/20">
        <Link
          href={"/admin/dashboard/management"}
          className="py-2 px-8 flex items-center gap-1 w-fit"
        >
          <FiChevronLeft size={25} />
          <button className="text-xl font-semibold py-2 font-poppins">
            Back
          </button>
        </Link>
      </header>
      <section className="px-8 py-6 w-full lg:w-1/2">
        <h1 className="text-xl">Add new admin</h1>

        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="flex flex-col justify-between h-full"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label>Username:</label>
              <input
                type="text"
                onChange={handleChange}
                value={username}
                name="username"
                label="Username"
                className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-2 md:px-[29px] md:py-4 w-full bg-transparent"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password:</label>
              <div className="relative">
                <input
                  onChange={handleChange}
                  value={password}
                  name="password"
                  label="Password"
                  type={isPasswordHidden ? "password" : "show"}
                  placeholder="Enter password"
                  className="border-2 border-main-black/20 focus:border-dark-green-1 focus:outline-none rounded-md px-4 py-2 md:px-[29px] md:py-4 w-full bg-transparent"
                  required
                />
                <div className="inset-y-0 pr-5 absolute right-0 flex items-center">
                  {isPasswordHidden ? (
                    <FiEyeOff
                      size={20}
                      onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                    />
                  ) : (
                    <FiEye
                      size={20}
                      onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end mt-8">
            <button
              type="reset"
              className="outline outline-2 outline-dark-green-1 px-10 py-2 rounded-lg text-dark-green-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-dark-green-1 px-10 py-2 rounded-lg text-main-white"
            >
              Add admin
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
