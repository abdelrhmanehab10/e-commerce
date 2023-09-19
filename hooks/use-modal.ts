import { Product } from "@/dummy/products";
import { Category } from "@prisma/client";
import { create } from "zustand";

type ModalType = "edit-product" | "edit-category";

export interface ModalStore {
  type: ModalType | null;
  data: Product | Category | null;
  isOpen: boolean;
  onOpen: (data: Product | Category, type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  onOpen: (data, type) => set({ isOpen: true, data, type }),
  onClose: () => set({ isOpen: false, data: null }),
}));
