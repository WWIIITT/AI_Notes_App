"use client";

import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  type: 'login' | 'Signup'
};

function AuthForm({type}: Props) {

  const isLoginForm = type === "login";

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted");
  };
    
  return (
    <form action={handleSubmit}>
        <CardContent>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" 
                name="email" 
                placeholder="Enter your email" 
                type="email" 
                required
                disabled={isPending} />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" 
                name="email" 
                placeholder="Enter your email" 
                type="email" 
                required
                disabled={isPending} />
            </div>
        </CardContent>
    </form>
  );
}

export default AuthForm