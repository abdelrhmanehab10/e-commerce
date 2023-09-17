"use client";

import ProductsHeader from "@/components/products-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pages = new Array(Math.trunc(12 / 5), 0);

  return (
    <section>
      <header className="relative flex justify-center items-center">
        <div className="font-bold absolute left-1/2 -translate-x-2/3">
          <h1 className="text-6xl">Elements Style</h1>
          <h3 className="my-3 text-lg text-[#E77C40]">Ends Today</h3>
          <Link className="underline" href="">
            Explore Items
          </Link>
        </div>
        <Image
          width={300}
          height={300}
          src="/categories/men/1.jpg"
          alt="header photo"
          className="ml-20"
        />
      </header>

      <main className="text-center mt-5">
        <ProductsHeader productsQuantity={12} />
        <div>{children}</div>
        <div className="flex items-center justify-center space-x-2 py-4">
          <Button variant="outline" size="sm" value="prev">
            Previous
          </Button>
          {pages.map((_, idx) => (
            <Button key={idx} variant="outline" size="sm" value={idx + 1}>
              {idx + 1}
            </Button>
          ))}
          <Button variant="outline" size="sm" value="next">
            Next
          </Button>
        </div>
      </main>
    </section>
  );
};

export default CategoryLayout;
