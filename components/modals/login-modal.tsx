"use client";

import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { Separator } from "@/components/ui/separator";

const LoginModal = () => {
  const signinHandler = async () => {
    await signIn("google");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 text-xs items-center font-bold">
        <User className="w-5 h-5 hover:scale-105 transition" />
        Login
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Sign in</DialogTitle>
        <Separator className="bg-foreground" />
        <Button
          onClick={signinHandler}
          className="bg-[#23A6F0] hover:bg-[#23A6F0]/80"
        >
          Sign in with google <BsGoogle className="ml-2" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
