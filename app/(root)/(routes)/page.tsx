import Categories from "@/components/categories";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import HotProduct from "@/components/hot-product";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <HotProduct />
    </>
  );
}
