"use client";

import { FC } from "react";
import { useCartStore } from "@/hooks/use-cart-store";
import { useLoveListStore } from "@/hooks/use-love-list-store";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Plus, Heart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

interface SingleProductProps {
  product: Product | null;
}

const SingleProduct: FC<SingleProductProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { addItem: addLike } = useLoveListStore();
  const { toast } = useToast();

  const addItemHandler = () => {
    if (!product) return;
    addItem(product);
    toast({ description: "Product Added to Cart" });
  };

  const addLikeHandler = () => {
    addLike(product);
    toast({ description: "Product Added to Love List" });
  };
  return (
    <div className="md:flex md:py-5 md:h-2/3 justify-between items-center">
      <CldImage
        width={300}
        height={300}
        src={product?.imageUrl as string}
        className="mx-auto"
        alt={product?.name as string}
      />
      <div className="pt-3 border-b md:border md:rounded border-muted-foreground pb-4 md:p-5 mx-3 md:w-1/2">
        <h1 className="font-bold">{product?.name}</h1>
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg flex gap-2 justify-center">
            <span
              className={cn(
                "text-green-700",
                product?.sale && "line-through text-gray-500"
              )}
            >
              ${product?.price}
            </span>
            <span className="text-green-700">
              {product?.sale ? `$${product?.sale}` : ""}
            </span>
          </div>
          <div className="flex justify-around">
            <Button
              className="text-black transition-all bg-transparent hover:bg-transparent hover:scale-110"
              onClick={addItemHandler}
              size="icon"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <Button
              className="text-black transition-all bg-transparent hover:bg-transparent hover:scale-110"
              onClick={addLikeHandler}
              size="icon"
            >
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <p className="font-semibold text-muted-foreground">
          {product?.description}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
