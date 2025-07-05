import Image from "next/image";
import Link from "next/link";
import { shadow } from "@/styles/utils";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";

function Header() {
    const user= 1; // Replace with actual user state if needed

  return (
    <header className="bg-popover relative flex h-24 w-full item-center justify-between px-3 
    sm:px-8" 
    style={{boxShadow: shadow}
    }>
        <Link className="flex item-end gap-2" href="/">
            <Image 
                src="/goatius.png" 
                height={60} 
                width={60} 
                alt="logo" 
                className="rounded-full" 
                priority></Image>
            <h1 className="flex flex-col pd-1 text-2xl font-semibold leading-6">
                GOAT <span>Notes</span>
            </h1>
        </Link>

        <div className="flex gap-4">
            {user? (
                <LogOutButton />
            ) : (
                <>
                <Button asChild>
                    <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
                </Button>
                <Button asChild variant={"outline"}>
                    <Link href="/login">Login</Link>
                </Button>
                </>
            )}
            <DarkModeToggle />
        </div>
    </header>
  )
}

export default Header