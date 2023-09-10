import { Search } from "lucide-react";
import Link from "next/link";
import CartModal from "@/components/modals/cart-modal";
import LoveModal from "./modals/love-modal";
import LoginModal from "./modals/login-modal";
import UserDropdown from "./user-dropdown";
import { getAuthSession } from "@/lib/auth";

const Navbar = async () => {
  const session = await getAuthSession();

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

      <ul className="md:flex md:gap-10 hidden">
        {routes.map((route) => (
          <li className="transition hover:text-[#23A6F0]" key={route.label}>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>

      <ul
        className="
          flex
          gap-4
          md:text-[#23A6F0]
        "
      >
        <li className="cursor-pointer">
          <CartModal />
        </li>
        <li className="cursor-pointer">
          <LoveModal />
        </li>
        {session?.user ? (
          <li>
            <UserDropdown user={session.user} />
          </li>
        ) : (
          <li className="cursor-pointer">
            <LoginModal />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
