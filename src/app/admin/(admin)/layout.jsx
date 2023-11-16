"use client";
import {useGetRole} from "@/hooks/useCookies";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
export default function Admin({children}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const r = useRouter();
  const getRole = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const role = await useGetRole();
    role === "admin" ? setIsAdmin(true) : r.push("/admin");
    setIsAdmin(role?.value);
  };

  useEffect(() => {
    getRole();
  }, []);

  if (!isAdmin) {
    return null;
  }
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
