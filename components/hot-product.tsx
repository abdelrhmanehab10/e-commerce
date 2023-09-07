import Image from "next/image";
import { Button } from "./ui/button";

const HotProduct = () => {
  return (
    <section className="py-10 text-center">
      <header>
        <h2 className="uppercase font-bold text-lg text-gray-500/50 pb-3">
          SUMMER 2020
        </h2>
        <h1 className="uppercase font-bold text-4xl w-1/2 mx-auto">
          Part of the Neural Universe
        </h1>
        <p className="w-1/2 mx-auto py-5">
          We know how large objects will act, but things on a small scale.{" "}
        </p>
      </header>
      <main>
        <Button className="bg-[#23A6F0] block mx-auto px-12 border border-[#23A6F0] hover:bg-[#23A6F0]/80 hover:border-[#23A6F0]/80 mb-2">
          Buy Now
        </Button>
        <Button
          variant="outline"
          className="border-[#23A6F0] px-10 block mx-auto"
        >
          Learn More
        </Button>
        <Image
          width={400}
          height={400}
          src="/hot/1.png"
          alt="hot product"
          className="mx-auto mt-3"
        />
      </main>
    </section>
  );
};

export default HotProduct;
