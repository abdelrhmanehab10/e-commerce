import { Product } from "@/dummy/products";
import { create } from "zustand";

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
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
        return { items: [...state.items, item] };
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
