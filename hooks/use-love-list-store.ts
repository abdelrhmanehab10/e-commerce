import { create } from "zustand";
import { CartItem } from "./use-cart-store";

interface LoveListStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
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
