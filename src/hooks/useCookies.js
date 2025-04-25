"use server"

import { cookies } from "next/headers";

export const useLogin = (data) => {
    const { accessToken, role, username } = data;
    // sessionStorage.setItem('token', accessToken);
    // if (typeof window !== 'undefined') {
    // This will only run in the browser
    // sessionStorage.setItem('token', accessToken);

    // To retrieve it later
    // const storedToken = sessionStorage.getItem('token');
    // console.log(storedToken); // Should log 'your_token_here'
    // } else {
    // console.log('sessionStorage is not available in this environment.');
    // }
    // cookies().set('token', `${accessToken}`, { maxAge: 54000, httpOnly: true });
    // cookies().set('role', role, { maxAge: 54000, httpOnly: true });
    // cookies().set('username', username, { maxAge: 54000, httpOnly: true });
}

export const useLogout = () => {
    cookies().delete('token');
    // cookies().delete('role');
    // cookies().delete('username');
}

export const useGetToken = async () => {
    const cookieValue = cookies();
    const token = cookieValue.get("token");
    return token;
};

export const useGetRole = async () => {
    const cookieValue = cookies();
    return cookieValue.get("role");
};

export const useGetUser = async () => {
    const cookieValue = cookies();
    return cookieValue.get("username");
}