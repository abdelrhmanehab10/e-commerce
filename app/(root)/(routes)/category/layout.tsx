"use client";

import ProductsHeader from "@/components/products-header";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <header className="relative flex justify-center items-center">
        <div className="font-bold absolute left-1/2 -translate-x-2/3">
          <h1 className="text-6xl">Category</h1>
          <h3 className="my-3 text-lg text-[#E77C40]">Display every product</h3>
        </div>
        <Image
          width={300}
          height={300}
          src="/categories/categories.jpg"
          alt="header photo"
          className="ml-20"
        />
      </header>

      <main className="text-center mt-5">
        {/* <ProductsHeader productsQuantity={12} /> */}
        <div>{children}</div>
        {/* <div className="flex items-center justify-center space-x-2 py-4">
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
        </div> */}
      </main>
    </section>
  );
};

export default CategoryLayout;
