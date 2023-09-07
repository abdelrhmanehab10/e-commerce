import Image from "next/image";
import { Button } from "./ui/button";

const featuredProducts = [
  {
    src: "/products/1.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
  {
    src: "/products/2.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
  {
    src: "/products/3.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
  {
    src: "/products/4.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
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
      <main className="flex flex-col items-center gap-5">
        {featuredProducts.map((prod) => (
          <>
            <div key={prod.label} className="relative w-fit cursor-pointer">
              <Image
                width={300}
                height={300}
                src={prod.src}
                alt={prod.label}
                className="mx-auto"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition hover:opacity-100 flex justify-center items-center">
                <Button className="bg-[#2DC071] hover:bg-[#2DC071]/80">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="font-bold">
              <h3>{prod.label}</h3>
              <h4 className="text-gray-400">{prod.description}</h4>
              <p className="pt-2 text-sm flex gap-2 justify-center">
                <span className="text-gray-500/70">${prod.price}</span>
                <span className="text-green-700">${prod.sale}</span>
              </p>
            </div>
          </>
        ))}
      </main>
    </section>
  );
};

export default Products;
