import Product from "@/components/dashboard/product";
import ProductsHeader from "@/components/products-header";
import { products } from "@/dummy/products";
import { getAuthSession } from "@/lib/auth";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getAuthSession();

  if (session?.user.role !== "ADMIN") redirect("/");
  return (
    <>
      <div className="h-16 mx-5 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Dashboard</h1>

        <Link
          href="/dashboard/add-product"
          className="flex items-center text-sm"
        >
          <Plus className="cursor-pointer w-5 h-5 mr-1" />
          Add Product
        </Link>
      </div>
      <ProductsHeader productsQuantity={12} />
      <div className="flex flex-col items-center gap-5 md:w-2/3 md:mx-auto md:grid md:grid-cols-4">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </>
  );
};

export default page;
