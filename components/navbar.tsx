"use client";

import { Search, ShoppingCart, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
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

  return (
    <nav
      className="
        w-full 
        bg-white 
        h-16 
        flex 
        items-center
        px-3
        justify-between
        "
    >
      <h1 className="font-bold text-xl">SwiftMarket</h1>
      <ul
        className="
          flex
          gap-4
        "
      >
        <li>
          <Search />
        </li>
        <li>
          <ShoppingCart />
        </li>
        <li>
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
                    <Link
                      onClick={() => router.push(route.path)}
                      href={route.path}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
