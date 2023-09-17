import { Product } from "@/dummy/products";
import { create } from "zustand";

export interface ModalStore {
  data: Product | null;
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  data: null,
  isOpen: false,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false, data: null }),
}));
