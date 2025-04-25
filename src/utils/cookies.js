import { cookies } from "next/headers"; // Import the Next.js cookies utility

export function getToken() {
    const cookieStore = cookies(); // Access the cookies from the request context
    const token = cookieStore.get("token"); // Retrieve the "token" cookie
    return token?.value || null; // Return the token value or null if not found
}