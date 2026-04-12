"use client";

import { Plus } from "lucide-react";

import type { Category } from "@/generated/prisma/client";
import { useModal } from "@/hooks/use-modal";

const AddProductTrigger = ({ categories }: { categories: Category[] }) => {
  const { onOpen } = useModal();

  return (
    <button
      type="button"
      onClick={() => onOpen({ categories }, "add-product")}
      className="flex items-center text-[12px] transition hover:text-[#23A6F0]"
    >
      <Plus className="w-5 h-5 mr-1" />
      New Product
    </button>
  );
};

export default AddProductTrigger;
