"use client";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useLogin } from "@/hooks/useCookies";
import { useRouter} from "next/navigation";
import { toast } from "sonner";

async function Login(body, router) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RB_REST_API_URL}/api/auth/admin`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  
    const data = await res.json();
  
    if (!res.ok) {
      return toast.error("Login failed.");
    }
  
    // Only proceed if response is OK (2xx)
    useLogin({ ...data });
    toast.success("Login successful. Hi, Admin!");
    router.push("/admin/dashboard");
  
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Please try again.");
  }
  
}

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const {username, password} = userInfo;
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const r = useRouter();

  const handleChange = ({target}) => {
    const {name, value} = target;
    setUserInfo({...userInfo, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Logging you in...");
    Login(userInfo, r, setLoading);
  };

  const handleReset = () => {
    setUserInfo({username: "", password: ""});
  };
  return (
    <div className="bg-main-white w-80 sm:w-96 md:w-3/5 h-[27rem] rounded-b-xl md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl px-8 py-12">
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
        <div className="flex flex-row gap-2">
          <button
            type="reset"
            className="border-2 border-dark-green-1 w-full py-2 rounded-lg text-dark-green-1"
          >
            Clear
          </button>
          <button
            type="submit"
            className="bg-dark-green-1 w-full py-2 rounded-lg text-main-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
