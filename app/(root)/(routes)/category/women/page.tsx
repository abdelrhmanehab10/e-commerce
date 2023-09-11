import { v4 as uuidv4 } from "uuid";
import ProductCard from "@/components/product-card";
import React from "react";

const MenProduct = [
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

const page = () => {
  return (
    <main className="flex flex-col items-center gap-5 md:w-2/3 md:mx-auto md:grid md:grid-cols-4">
      {MenProduct.map((prod, idx) => (
        <ProductCard key={idx} product={prod} />
      ))}
    </main>
  );
};

export default page;
