"use client";

import ProductSlider from "@/components/slider/product-slider";
import { Button } from "@/components/ui/button";
import { Plus, Star, Heart } from "lucide-react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Product, useCartStore } from "@/hooks/use-cart-store";
import { useLoveListStore } from "@/hooks/use-love-list-store";
import { useToast } from "@/components/ui/use-toast";

const product = {
  id: "1",
  name: "Floating Phone",
  price: 1139.33,
  quantity: 1,
  image: "/product/1.jpg",
};

const ProductDetails = ({}) => {
  const { addItem } = useCartStore();
  const { addItem: addLike } = useLoveListStore();
  const { toast } = useToast();

  const addItemHandler = (product: Product) => {
    addItem(product);
    toast({ description: "Product Added to Cart" });
  };

  const addLikeHandler = (product: Product) => {
    addLike(product);
    toast({ description: "Product Added to Love List" });
  };
  return (
    <div className="md:w-2/3 md:mx-auto">
      <ProductSlider>
        <SwiperSlide>
          <Image
            width={700}
            height={700}
            src="/product/1.jpg"
            className="w-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={700}
            height={700}
            src="/product/2.jpg"
            className="w-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </ProductSlider>
      <div className="pt-3 mx-3">
        <h1>Floating Phone</h1>
        <div className="py-2 flex gap-1 items-center">
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <p className="font-bold text-sm">10 Reviews</p>
        </div>
        <h4 className="py-2 text-xl font-extrabold">$1,139.33</h4>
        <p className="font-semibold border-b border-muted-foreground pb-4 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste
          consequatur cupiditate quo tempora molestiae repellat! Ex eveniet
          aliquid quis! Nostrum, cupiditate natus? Incidunt hic nulla, eligendi
          voluptates repellat tempore!
        </p>
        <div className="flex justify-around my-5">
          <Button
            className="text-black transition-all bg-transparent hover:bg-transparent hover:scale-110"
            onClick={() => addItemHandler(product)}
          >
            <Plus className="w-5 h-5" /> Add to cart
          </Button>
          <Button
            className="text-black transition-all bg-transparent hover:bg-transparent hover:scale-110"
            onClick={() => addLikeHandler(product)}
          >
            <Heart className="w-5 h-5" /> Add to love list
          </Button>
        </div>
        <div className="mb-5">
          <Image
            width={700}
            height={700}
            src="/product/3.png"
            className="w-full md:w-2/3 mx-auto object-cover my-2"
            alt=""
          />
          <h1 className="my-2 text-2xl font-bold">Reviews</h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-muted-foreground rounded p-3">
              <div className="flex justify-between items-center">
                <h3>Review name</h3>
                <div className="flex">
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                </div>
              </div>
              <p className="text-sm py-2 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolorum neque unde, voluptas, ex magni animi nostrum pariatur
                eveniet iste reprehenderit natus esse modi rerum officia ut.
                Nobis, fugit illo.
              </p>
            </div>
            <div className="border border-muted-foreground rounded p-3">
              <div className="flex justify-between items-center">
                <h3>Review name</h3>
                <div className="flex">
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                  <Star
                    fill="rgb(250, 204, 21)"
                    className="text-yellow-400 w-4 h-4"
                  />
                </div>
              </div>
              <p className="text-sm py-2 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolorum neque unde, voluptas, ex magni animi nostrum pariatur
                eveniet iste reprehenderit natus esse modi rerum officia ut.
                Nobis, fugit illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
