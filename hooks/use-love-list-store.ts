import { create } from "zustand";

export interface LoveItem {
  id: string;
  name: string;
  price: number;
  src: string;
}

interface LoveListStore {
  items: LoveItem[];
  addItem: (item: LoveItem) => void;
  removeItem: (itemId: string) => void;
}

export const useLoveListStore = create<LoveListStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((cartItem) => cartItem.id !== itemId),
    })),
}));
