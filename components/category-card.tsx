"use client";

import { useModal } from "@/hooks/use-modal";
import { Category } from "@prisma/client";
import axios from "axios";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const onDelete = async () => {
    try {
      await axios.delete(`/api/category/${category.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={category.id} className="bg-muted-foreground/30 rounded p-3 my-3">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">{category.name}</h3>
        <div className="flex items-center gap-2">
          <Edit
            onClick={() => onOpen(category, "edit-category")}
            className="w-4 h-4 transition-all cursor-pointer hover:scale-105 hover:text-[#23A6F0]"
          />
          <Trash
            onClick={onDelete}
            className="w-4 h-4 transition-all cursor-pointer hover:scale-105 hover:text-red-500"
          />
        </div>
      </div>
      <p className="text-sm text-left pt-1">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
