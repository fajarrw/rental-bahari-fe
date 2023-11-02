"use server";
import { cookies } from 'next/headers'
export default async function Login(body) {
    try {
        const res = await fetch("http://localhost:3001/api/auth/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (res.status === 403) return false
        const data = await res.json();
        cookies().set('token', `${data.accessToken}`, { maxAge: 54000, httpOnly: true });
        cookies().set('role', data.role, { maxAge: 54000, httpOnly: true });
    } catch (err) {
        console.error(err);
    }
}
