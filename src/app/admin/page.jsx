import Link from "next/link";
import Image from "next/image";
import MainLogo from "../../../public/assets/admin-login-logo.svg";
import LoginForm from "./LoginForm";

export default function Admin() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-admin-login bg-cover py-20 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center md:flex-row md:items-start w-[45rem] shadow-lg">
          <div className="bg-dark-green-1 w-80 sm:w-96 md:w-2/5 h-48 md:h-[27rem] rounded-t-xl md:rounded-tr-none md:rounded-bl-xl md:rounded-tl-xl">
            <div className="flex justify-center h-full items-center">
              <div className="relative h-36 md:h-48 aspect-square">
                <Image src={MainLogo} fill alt="logo" priority />
              </div>
            </div>
          </div>
          <LoginForm />
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-main-white flex flex-col gap-2 w-80 sm:w-96 md:w-full items-center justify-center p-8 rounded-lg shadow-md">
            <p>Bukan Admin?</p>
            <Link href={"/"} className="w-full md:w-2/3">
              <button className="bg-dark-green-1 w-full py-2 text-main-white rounded-lg">
                Kembali ke halaman utama
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
