"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, Heart, Plus } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart-store";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "./ui/use-toast";
import { useLoveListStore } from "@/hooks/use-love-list-store";

const featuredProducts = [
  {
    id: uuidv4(),
    src: "/products/1.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
  {
    id: uuidv4(),
    src: "/products/2.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
  {
    id: uuidv4(),
    src: "/products/3.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
  {
    id: uuidv4(),
    src: "/products/4.png",
    label: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
  },
];

interface productItem {
  id: string;
  label: string;
  sale: number;
  src: string;
}

const Products = () => {
  const { addItem } = useCartStore();
  const { addItem: addLike } = useLoveListStore();
  const { toast } = useToast();

  const addItemHandler = (prod: productItem) => {
    addItem({
      id: prod.id,
      name: prod.label,
      price: prod.sale,
      src: prod.src,
      quantity: 1,
    });
    toast({ description: "Product Added to Cart" });
  };

  const addLikeHandler = (prod: productItem) => {
    addLike({
      id: prod.id,
      name: prod.label,
      price: prod.sale,
      src: prod.src,
    });

    toast({ description: "Product Added to Love List" });
  };
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
        {featuredProducts.map((prod) => (
          <div  key={prod.label}>
            <div
              className="relative w-fit cursor-pointer mb-2"
            >
              <Image
                width={300}
                height={300}
                src={prod.src}
                alt={prod.label}
                className="mx-auto"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition hover:opacity-100 flex flex-col gap-3 justify-center items-center">
                <Button
                  className="bg-[#2DC071] hover:bg-[#2DC071]/80"
                  onClick={() => addItemHandler(prod)}
                >
                  <Plus />
                </Button>
                <Button className="bg-[#2DC071] hover:bg-[#2DC071]/80">
                  <Eye />
                </Button>
                <Button
                  className="bg-[#2DC071] hover:bg-[#2DC071]/80"
                  onClick={() => addLikeHandler(prod)}
                >
                  <Heart />
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
          </div>
        ))}
      </main>
    </section>
  );
};

export default Products;
