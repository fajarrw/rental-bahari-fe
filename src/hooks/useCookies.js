"use server"

import { cookies } from "next/headers";

export const useLogin = (data) => {
    const { accessToken, role } = data;
    cookies().set('token', `${accessToken}`, { maxAge: 54000, httpOnly: true });
    cookies().set('role', role, { maxAge: 54000, httpOnly: true });
}

export const useGetToken = async () => {
    const cookieValue = cookies()
    return cookieValue.get("token")
};