"use client";

import { Group } from "lucide-react";

import { useModal } from "@/hooks/use-modal";

const AddCategoryTrigger = () => {
  const { onOpen } = useModal();

  return (
    <button
      type="button"
      onClick={() => onOpen(null, "add-category")}
      className="flex items-center text-[12px] transition hover:text-[#23A6F0]"
    >
      <Group className="w-5 h-5 mr-1" />
      New Category
    </button>
  );
};

export default AddCategoryTrigger;
