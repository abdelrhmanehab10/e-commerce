"use client";

import { Heart, ShoppingCart, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CartItem, useCartStore } from "@/hooks/use-cart-store";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

const CartModal = () => {
  const { items } = useCartStore();
  const { addItem, removeItem } = useCartStore();
  const updateQuantity = (e: ChangeEvent<HTMLInputElement>, item: CartItem) => {
    const quantity = +e.target.value;
    if (quantity > item.quantity) {
      addItem(item);
    } else {
      removeItem(item.id);
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingCart className="w-5 h-5 hover:scale-105 transition" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Shopping cart</DialogTitle>
        <Separator />
        {items.length === 0 ? (
          <div className="flex justify-center items-center">
            <h1>There is no item yet</h1>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogDescription>{`You've ${
                items.length === 1
                  ? items.length + " item"
                  : items.length + " items"
              } in your cart`}</DialogDescription>
            </DialogHeader>
            <div className="flex justify-between items-center">
              <h3>Product</h3>
              <h3>Quantity</h3>
              <h3>Remove</h3>
            </div>
          </>
        )}
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-end gap-2">
                <Image
                  width={50}
                  height={50}
                  src={item.src}
                  alt={item.name}
                  className="rounded-md"
                />
                <div className="text-sm">
                  <span>${item.price}</span>
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className="flex items-center">
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(e, item)}
                />
              </div>
              <Trash className="transition-all hover:text-red-500 hover:scale-110 cursor-pointer" />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
