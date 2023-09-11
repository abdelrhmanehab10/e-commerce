"use client";

// import ProductSlider from "@/components/slider/product-slider";
import { Button } from "@/components/ui/button";
import { Plus, Star, Heart } from "lucide-react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useCartStore } from "@/hooks/use-cart-store";
import { useLoveListStore } from "@/hooks/use-love-list-store";
import { useToast } from "@/components/ui/use-toast";
import { Product, products } from "@/dummy/products";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { addItem } = useCartStore();
  const { addItem: addLike } = useLoveListStore();
  const { toast } = useToast();

  const product = products.find((p) => p.id === params.id[0]) as Product;

  const addItemHandler = () => {
    addItem(product);
    toast({ description: "Product Added to Cart" });
  };

  const addLikeHandler = () => {
    addLike(product);
    toast({ description: "Product Added to Love List" });
  };
  return (
    <div className="md:w-2/3 md:mx-auto">
      <Image
        width={300}
        height={300}
        src={product.image}
        className="mx-auto"
        alt=""
      />
      {/* <ProductSlider>
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
      </ProductSlider> */}
      <div className="pt-3 mx-3">
        <h1 className="font-bold">{product.name}</h1>
        <div className="py-2 flex gap-1 items-center">
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <Star fill="rgb(250, 204, 21)" className="text-yellow-400 w-5 h-5" />
          <p className="font-bold text-sm">10 Reviews</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="py-2 text-xl font-extrabold">$1,139.33</h4>
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
        <p className="font-semibold border-b border-muted-foreground pb-4 text-muted-foreground">
          {product.description}
        </p>

        <div className="mb-5">
          <h1 className="my-2 text-2xl font-bold">Reviews</h1>
          <div className="md:grid grid-cols-2 gap-2">
            <div className="mb-2 border border-muted-foreground rounded p-3">
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
