import Image from "next/image";
import { Button } from "./ui/button";

const HotProduct = () => {
  return (
    <section className="py-10 text-center md:text-left md:flex md:flex-row-reverse md:items-center md:w-2/3 mx-auto md:gap-20">
      <header>
        <h2 className="uppercase font-bold text-lg text-gray-500/50 pb-3">
          SUMMER 2020
        </h2>
        <h1 className="uppercase font-bold text-4xl w-1/2 mx-auto md:w-full">
          Part of the Neural Universe
        </h1>
        <p className="w-1/2 mx-auto md:w-2/3 md:mx-0 py-5">
          We know how large objects will act, but things on a small scale.{" "}
        </p>
        <div className="md:flex md:gap-2">
          <Button className="bg-[#2DC071] block mx-auto md:mx-0 px-12 border border-[#2DC071] hover:bg-[#2DC071]/80 hover:border-[#23A6F0]/80 mb-2">
            Buy Now
          </Button>
          <Button
            variant="outline"
            className="border-[#2DC071] px-10 block mx-auto md:mx-0"
          >
            Learn More
          </Button>
        </div>
      </header>
      <main>
        <Image
          width={400}
          height={400}
          src="/hot/1.png"
          alt="hot product"
          className="mx-auto md:mx-0 mt-3"
        />
      </main>
    </section>
  );
};

export default HotProduct;
