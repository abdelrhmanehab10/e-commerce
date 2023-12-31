import AddProductForm from "@/components/forms/add-product";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const categories = await db.category.findMany();

  return (
    <section>
      <header className="relative flex justify-center items-center">
        <div className="font-bold absolute left-1/2 -translate-x-2/3">
          <h1 className="text-6xl">Add new product</h1>
          <h3 className="my-3 text-lg text-[#E77C40]">Fill Form</h3>
        </div>
        <Image
          width={300}
          height={300}
          src="/products/product.jpg"
          alt="header photo"
          className="ml-20"
        />
      </header>
      <div className="md:w-2/3 md:mx-auto">
        <div className="h-16 mx-5 flex justify-between items-center">
          <h1 className="font-bold text-3xl">Add New Product</h1>
        </div>
        <div className="mx-5 py-5">
          <AddProductForm categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default page;
