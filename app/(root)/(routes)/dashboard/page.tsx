import CategoryCard from "@/components/category/category-card";
import ProductCard from "@/components/product-card";
import ProductsHeader from "@/components/products-header";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import { Group, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getAuthSession();
  const categories = await db.category.findMany();
  const products = await db.product.findMany();

  if (session?.user.role !== "ADMIN") redirect("/");
  return (
    <div
      className={cn(
        "mx-5 md:w-2/3 md:mx-auto",
        products.length === 0 && "md:h-2/3"
      )}
    >
      <div className="py-5 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/add-category"
            className="flex items-center text-[12px] transition hover:text-[#23A6F0]"
          >
            <Group className="cursor-pointer w-5 h-5 mr-1" />
            New Category
          </Link>
          <Link
            href="/dashboard/add-product"
            className="flex items-center text-[12px] transition hover:text-[#23A6F0]"
          >
            <Plus className="cursor-pointer w-5 h-5 mr-1" />
            New Product
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-3xl">Categories</h2>
        <div className="py-5 flex flex-col items-center gap-5 md:grid md:grid-cols-3">
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <p className="py-5 text-muted-foreground text-sm">
              There&apos;s no categories
            </p>
          )}
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-3xl">Products</h2>

        <div className="text-center">
          {products.length > 0 ? (
            <>
              <ProductsHeader productsQuantity={products.length} />
              <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} dashboard />
                ))}
              </div>
            </>
          ) : (
            <div>
              <h3 className="py-5 text-muted-foreground text-sm">
                There&apos;s no featured products...
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
