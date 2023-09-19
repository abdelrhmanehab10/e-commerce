import Link from "next/link";
import CartModal from "@/components/modals/cart-modal";
import LoveModal from "./modals/love-modal";
import UserDropdown from "./user-dropdown";
import { getAuthSession } from "@/lib/auth";
import LoginModal from "./modals/login-modal";
import { Session } from "next-auth";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <nav
      className={`
        w-full 
        bg-white 
        h-16 
        flex 
        items-center
        px-3
        justify-between
        `}
    >
      <h1 className="font-bold text-xl">
        <Link href="/">SwiftMarket</Link>
      </h1>
      <ul
        className="
          flex
          items-center
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
        <li>
          {session?.user ? <UserDropdown session={session} /> : <LoginModal />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
