"use client";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Edit, Eye, Heart, Trash } from "lucide-react";
import { Product } from "@/dummy/products";
import { useModal } from "@/hooks/use-modal";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

const Product: FC<ProductCardProps> = ({ product }) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const onDelete = async () => {
    try {
      await axios.delete(`/api/product/${product.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
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
            <Button className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12">
              <Edit
                onClick={() => onOpen(product)}
                className="w-10 h-10 text-black"
              />
            </Button>
            <Button className="transition-all bg-white hover:bg-white/70 hover:scale-110 mx-2 rounded-full w-12 h-12">
              <Trash onClick={onDelete} className="w-10 h-10 text-black" />
            </Button>
          </div>
        </div>
      </div>
      <div className="font-bold text-center">
        <h3>{product.name}</h3>
        <h4 className="text-gray-400">{product.description}</h4>
        <p className="pt-2 text-sm flex gap-2 justify-center">
          <span className="text-gray-500/70 line-through">
            ${product.price}
          </span>
          <span className="text-green-700">${product.sale}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
