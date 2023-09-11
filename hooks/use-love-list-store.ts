import { Product } from "@/dummy/products";
import { create } from "zustand";

interface LoveListStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
}

export const useLoveListStore = create<LoveListStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((loveItem) => loveItem.id !== itemId),
    })),
}));
