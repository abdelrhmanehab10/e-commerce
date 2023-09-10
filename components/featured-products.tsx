import { v4 as uuidv4 } from "uuid";
import ProductCard from "./product-card";

const featuredProducts = [
  {
    id: uuidv4(),
    image: "/products/1.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: "/products/2.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: "/products/3.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
  {
    id: uuidv4(),
    image: "/products/4.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
];

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
        {featuredProducts.map((prod, idx) => (
          <ProductCard key={idx} product={prod} />
        ))}
      </main>
    </section>
  );
};

export default Products;
