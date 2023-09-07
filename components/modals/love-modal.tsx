"use client";

import { Heart, Minus, MinusSquare, ShoppingCart, Trash } from "lucide-react";
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
import { useLoveListStore } from "@/hooks/use-love-list-store";
import { useToast } from "../ui/use-toast";

const LoveModal = () => {
  const { items } = useLoveListStore();
  const { removeItem } = useLoveListStore();
  const { addItem } = useCartStore();
  const { toast } = useToast();

  const addItemHandler = (prod: any) => {
    addItem({
      id: prod.id,
      name: prod.label,
      price: prod.sale,
      src: prod.src,
      quantity: 1,
    });
    toast({ description: "Product Added to Cart" });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Heart className="w-5 h-5 hover:scale-105 transition" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Love List</DialogTitle>
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
          </>
        )}
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-md pr-2 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Image
                  width={50}
                  height={50}
                  src={item.src}
                  alt={item.name}
                  className="rounded-l-md "
                />
                <div className="text-sm">
                  <span>${item.price}</span>
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ShoppingCart
                  onClick={() => addItemHandler(item)}
                  className="transition hover:scale-110 cursor-pointer"
                />
                <MinusSquare className="transition-all hover:text-red-500 hover:scale-110 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoveModal;
