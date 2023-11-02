"use server"
import { cookies } from "next/headers"

export default async function GetToken() {
    const cookieValue = cookies()
    return cookieValue.get("token")
};