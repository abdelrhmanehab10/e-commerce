"use client";

import { Category } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`category/${category.id}`)}
      className="relative w-fit cursor-pointer"
    >
      <CldImage
        width={220}
        height={220}
        src={category.imageUrl}
        alt={category.name}
        className="mx-auto rounded"
      />
      <div className="rounded absolute inset-0 bg-black/40 opacity-0 transition hover:opacity-100"></div>
      <span className="absolute bottom-10 left-10 text-lg font-bold bg-white px-12 py-2">
        {category.name}
      </span>
    </div>
  );
};

export default CategoryCard;
