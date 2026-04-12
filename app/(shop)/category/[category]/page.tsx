import ProductCard from "@/components/product-card";
import { db } from "@/lib/db";
import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  const products = await db.product.findMany({
    where: {
      categoryId: params.category,
    },
  });

  return (
    <div className="mx-5">
      <h1 className="text-left font-bold text-3xl">All Products</h1>
      <main className="py-3 flex flex-col items-center gap-5 md:grid md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default page;
