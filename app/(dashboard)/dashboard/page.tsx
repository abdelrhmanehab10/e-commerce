import AddCategoryTrigger from "@/components/dashboard/add-category-trigger";
import AddProductTrigger from "@/components/dashboard/add-product-trigger";
import CategoryCard from "@/components/category/category-card";
import ProductCard from "@/components/product-card";
import ProductsHeader from "@/components/products-header";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";

const Dashboard = async () => {
  const categories = await db.category.findMany();
  const products = await db.product.findMany();

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
          <AddCategoryTrigger />
          <AddProductTrigger categories={categories} />
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-3xl">Categories</h2>
        {categories.length > 0 ? (
          <div className="py-5 grid grid-cols-1 md:grid-cols-3 items-center">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} dashboard />
            ))}
          </div>
        ) : (
          <div>
            <p className="py-5 text-muted-foreground text-sm">
              There&apos;s no categories
            </p>
          </div>
        )}
      </div>

      <div className="text-center">
        <h2 className="font-bold text-3xl">Products</h2>
        {products.length > 0 ? (
          <>
            <ProductsHeader productsQuantity={products.length} />
            <div className="py-5 grid grid-cols-1 md:grid-cols-3 items-center">
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
  );
};

export default Dashboard;
