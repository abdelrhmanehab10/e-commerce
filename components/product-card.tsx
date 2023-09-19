"use client";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useCartStore } from "@/hooks/use-cart-store";
import { Eye, Heart, Plus, Edit, Trash } from "lucide-react";
import { useLoveListStore } from "@/hooks/use-love-list-store";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import { useModal } from "@/hooks/use-modal";
import axios from "axios";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  dashboard?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({ product, dashboard }) => {
  const { addItem } = useCartStore();
  const { onOpen } = useModal();
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

  const onDelete = async () => {
    try {
      await axios.delete(`/api/product/${product.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative cursor-pointer mb-2">
      <CldImage
        width={250}
        height={250}
        src={product.imageUrl}
        alt={product.name}
        className="mx-auto rounded-sm"
      />
      <div
        className="rounded-sm absolute inset-0 bg-black/40 
          opacity-0 transition hover:opacity-100 
          flex flex-col gap-3 justify-center items-center"
      >
        <div>
          <h3 className="text-white pt-5 pb-2 font-bold">{product.name}</h3>
          <p className="text-gray-200 py-1 text-xs px-3">
            {product.description}
          </p>
          <div className="pt-5 font-bold text-sm flex gap-2 justify-center">
            <span
              className={cn(
                "text-green-500",
                product.sale && "line-through text-gray-300"
              )}
            >
              ${product.price}
            </span>
            <span className="text-green-500">
              {product.sale ? `$${product.sale}` : ""}
            </span>
          </div>
        </div>
        <div className="my-5 flex items-center">
          {dashboard ? (
            <>
              <Button className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12">
                <Edit
                  onClick={() => onOpen(product, "edit-product")}
                  className="w-10 h-10 text-black"
                />
              </Button>
              <Button className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12">
                <Trash onClick={onDelete} className="w-10 h-10 text-black" />
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
