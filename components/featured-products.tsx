import { products } from "@/dummy/products";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <section className="py-10 text-center">
      <header>
        <h2 className="uppercase font-bold text-xl text-gray-500/70">
          Featured Products
        </h2>
        <h1 className="uppercase font-bold text-2xl">Bestseller Products</h1>
        <p className="w-1/2 mx-auto text-sm pb-5">
          Problems trying to resolve the conflict between
        </p>
      </header>
      <main className="flex flex-col items-center gap-5 md:w-2/3 md:mx-auto md:grid md:grid-cols-4">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </main>
    </section>
  );
};

export default Products;
