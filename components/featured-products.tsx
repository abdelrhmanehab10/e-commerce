import { db } from "@/lib/db";
import ProductCard from "./product-card";

const Products = async () => {
  const products = await db.product.findMany();
  return (
    <section className="py-10 text-center">
      <header>
        <h2 className="uppercase font-bold text-xl text-gray-500/70">
          Featured Products
        </h2>
        <h1 className="uppercase font-bold text-2xl">Bestseller Products</h1>
        <p className="w-1/2 md:w-1/3 mx-auto text-sm pb-5">
          Discover our handpicked selection of exceptional products that are
          making waves in their respective industries.
        </p>
      </header>
      <main className="text-center">
        {products.length > 0 ? (
          <div className="flex flex-col items-center gap-5 md:w-2/3 md:mx-auto md:grid md:grid-cols-4">
            {products.map((product, idx) => {
              if (idx > 3) return;
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        ) : (
          <div>
            <h3 className="text-muted-foreground text-sm">
              There&apos;s no featured products...
            </h3>
          </div>
        )}
      </main>
    </section>
  );
};

export default Products;
