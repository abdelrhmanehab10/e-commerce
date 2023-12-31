"use client";

import { ShoppingCart, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCartStore } from "@/hooks/use-cart-store";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { CldImage } from "next-cloudinary";
import { Product } from "@prisma/client";

type Item = Product & {
  quantity: number;
};

const CartModal = () => {
  const { items } = useCartStore();
  const { addItem, removeItem } = useCartStore();

  const updateQuantity = (e: ChangeEvent<HTMLInputElement>, item: Item) => {
    const quantity = +e.target.value;
    if (quantity > item.quantity) {
      addItem(item);
    } else {
      removeItem(item.id);
    }
  };
  console.log(items);

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1">
        <ShoppingCart className="w-5 h-5 hover:scale-105 transition" />
        {items.length > 0 && items.length}
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
            <div className="grid grid-cols-3 text-center items-center">
              <h3>Product</h3>
              <h3>Quantity</h3>
              <h3>Remove</h3>
            </div>
          </>
        )}
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 justify-center items-center"
            >
              <div className="flex items-end gap-2">
                <CldImage
                  width={50}
                  height={50}
                  src={item.imageUrl}
                  alt={item.name}
                  className="rounded-md"
                />
                <div className="text-sm">
                  <span>${item.price}</span>
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(e, item as Item)}
                  autoFocus={false}
                />
              </div>
              <Trash
                onClick={() => removeItem(item.id)}
                className="w-full transition-all hover:text-red-500 hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
