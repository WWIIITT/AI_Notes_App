"use client";

import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import { toast } from "sonner"; // Adjust the import path as necessary
import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation


function LogOutButton() {
    const router = useRouter();
    const [Loading, setLoading] = useState(false)

    const handLogOut = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a logout delay

        const errorMessage = null;
        if (!errorMessage) {
            toast.success("Logged out successfully", {
                description: "You have been logged out.",
            });
            router.push("/"); 
        } else {
            toast.error("Failed to log out", {
                description: errorMessage,
            });
        }
        setLoading(false);

        console.log("Logging out...");
    };

  return (
    <Button 
    variant="outline"
    onClick={handLogOut}
    className="w-24"
    disabled={Loading}
    >
        {Loading ? <Loader2 className="animate-spin"/> : "Log Out"}</Button>
  )
}

export default LogOutButton