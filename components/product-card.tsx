"use client";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Product, useCartStore } from "@/hooks/use-cart-store";
import { Eye, Heart, Plus } from "lucide-react";
import { useLoveListStore } from "@/hooks/use-love-list-store";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    sale: number;
    quantity: number;
  };
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { addItem: addLike } = useLoveListStore();
  const { toast } = useToast();
  const router = useRouter();
  const addItemHandler = (product: Product) => {
    addItem(product);
    toast({ description: "Product Added to Cart" });
  };

  const addLikeHandler = (product: Product) => {
    addLike(product);
    toast({ description: "Product Added to Love List" });
  };
  return (
    <div>
      <div className="relative w-fit cursor-pointer mb-2">
        <Image
          width={300}
          height={300}
          src={product.image}
          alt={product.name}
          className="mx-auto"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition hover:opacity-100 flex gap-3 justify-center items-end">
          <div className="mb-10">
            <Button
              className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12"
              onClick={() => addItemHandler(product)}
            >
              <Plus className="w-10 h-10 text-black" />
            </Button>
            <Button
              onClick={() => router.push(`/product/${product.id}`)}
              className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12"
            >
              <Eye className="w-10 h-10 text-black" />
            </Button>
            <Button
              className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12"
              onClick={() => addLikeHandler(product)}
            >
              <Heart className="w-10 h-10 text-black" />
            </Button>
          </div>
        </div>
      </div>
      <div className="font-bold">
        <h3>{product.name}</h3>
        <h4 className="text-gray-400">{product.description}</h4>
        <p className="pt-2 text-sm flex gap-2 justify-center">
          <span className="text-gray-500/70">${product.price}</span>
          <span className="text-green-700">${product.sale}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
