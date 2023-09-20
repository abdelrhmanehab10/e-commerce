"use client";

import { useModal } from "@/hooks/use-modal";
import { Category } from "@prisma/client";
import axios from "axios";
import { Edit, Eye, Trash } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CategoryCardProps {
  category: Category;
  dashboard?: boolean;
}

const CategoryCard: FC<CategoryCardProps> = ({ category, dashboard }) => {
  const router = useRouter();
  const { onOpen } = useModal();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/category/${category.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative w-fit cursor-pointer">
      <CldImage
        width={220}
        height={220}
        src={category.imageUrl}
        alt={category.name}
        className="mx-auto rounded"
      />
      <div className="rounded absolute inset-0 bg-black/40 opacity-0 transition hover:opacity-100">
        <div className="p-2 flex items-center gap-2 absolute top-0 right-0">
          <Eye
            onClick={() => router.push(`category/${category.id}`)}
            className="bg-white p-1 transitions hover:scale-105 rounded w-6 h-6"
          />
          {dashboard && (
            <>
              <Edit
                onClick={() => onOpen(category, "edit-category")}
                className="bg-white p-1 transitions hover:scale-105 rounded w-6 h-6"
              />
              <Trash
                onClick={onDelete}
                className="bg-white p-1 transitions hover:scale-105 rounded w-6 h-6"
              />
            </>
          )}
        </div>
      </div>
      <span className="absolute bottom-10 left-10 text-lg font-bold bg-white px-12 py-2">
        {category.name}
      </span>
    </div>
  );
};

export default CategoryCard;
