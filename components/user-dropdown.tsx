"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "next-auth";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { DoorOpen } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

type UserDropdownProps = {
  session: Session;
};

const UserDropdown: FC<UserDropdownProps> = ({ session }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-7 h-7 cursor-pointer">
          <AvatarFallback>{session.user.name?.slice(0, 2)}</AvatarFallback>
          <AvatarImage src={session.user.image || undefined} alt="user image" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 mt-4 drop-shadow-md p-3 bg-white rounded z-50">
        <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
        <DropdownMenuLabel className="truncate">
          {session.user.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-[#23A6F0]" />
        {session.user.role === "ADMIN" && (
          <DropdownMenuItem
            className="cursor-pointer transition hover:bg-foreground/20"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer transition hover:bg-red-500 hover:text-white flex justify-between items-center"
        >
          Sign out <DoorOpen />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
