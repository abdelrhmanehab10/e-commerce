"use client";

import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { BsGoogle } from "react-icons/bs";
import LoginForm from "../forms/login-form";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
const LoginModal = () => {
  const signinHandler = async () => {
    await signIn("google");
  };
  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 text-xs items-center font-bold">
        <User className="w-5 h-5 hover:scale-105 transition" />
        Login / Register
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Sign in</DialogTitle>
        <Separator className="bg-foreground" />
        <Button onClick={signinHandler} className="bg-[#23A6F0]">
          Sign in with google <BsGoogle className="ml-2" />
        </Button>
        <p className="text-center text-xs">or Enter your email and password</p>
        <Separator className="bg-foreground" />
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
