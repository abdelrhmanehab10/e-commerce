import { Product } from "@prisma/client";
import { create } from "zustand";

type Item = Product & {
  quantity: number;
};

interface CartStore {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem !== -1) {
        const updateItems = state.items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { items: updateItems };
      } else {
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }
    }),
  removeItem: (itemId) =>
    set((state) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === itemId
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          const updateItems = state.items.map((cartItem) =>
            cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
          return { items: updateItems };
        } else {
          return {
            items: state.items.filter((cartItem) => cartItem.id !== itemId),
          };
        }
      }
      return state;
    }),
}));
