"use client";

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
        <div className="flex justify-between items-center mx-5 border rounded px-3 mb-3">
          <p>Showing all 12 results</p>
          <div className="my-3 flex gap-5 justify-center items-center">
            <Select>
              <SelectTrigger className="w-fit flex justify-center items-center">
                <SelectValue placeholder="Sort by" />
                <ChevronDown className="w-5 h-5" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Popularity">Popularity</SelectItem>
                <SelectItem value="Trendy">Trendy</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#23A6F0]">Filter</Button>
          </div>
        </div>
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
