"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const DropdownMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="top">
        <ul className="text-center flex flex-col gap-5">
          {routes.map((route) => (
            <li
              key={route.label}
              className={cn(
                pathname === route.path && "font-bold text-[#2DC071]"
              )}
            >
              <Link onClick={() => router.push(route.path)} href={route.path}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default DropdownMenu;
