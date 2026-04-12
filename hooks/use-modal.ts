import type { Category, Product } from "@/generated/prisma/client";
import { create } from "zustand";

type AddProductModalData = {
  categories: Category[];
};

type ModalType =
  | "add-category"
  | "add-product"
  | "edit-product"
  | "edit-category";
type ModalData = Product | Category | AddProductModalData | null;

export interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (data: ModalData, type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  onOpen: (data, type) => set({ isOpen: true, data, type }),
  onClose: () => set({ isOpen: false, data: null }),
}));
