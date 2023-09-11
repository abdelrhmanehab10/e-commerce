"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    src: "/categories/1.png",
    label: "Men",
    link: "/category/men",
  },
  {
    src: "/categories/2.png",
    label: "Women",
    link: "/category/women",
  },
];

const Categories = () => {
  const router = useRouter();
  return (
    <section className="py-10 text-center">
      <header>
        <h2 className="uppercase font-bold text-2xl">Editor&apos;s Pick</h2>
        <p className="w-1/2 mx-auto text-sm pb-5">
          Problems trying to resolve the conflict between{" "}
        </p>
      </header>
      <main className="flex flex-col items-center gap-5 md:justify-center md:flex-row md:w-2/3 md:mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.label}
            onClick={() => router.push(cat.link)}
            className="relative w-fit cursor-pointer"
          >
            <Image
              width={300}
              height={300}
              src={cat.src}
              alt={cat.label}
              className="mx-auto"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition hover:opacity-100"></div>
            <span className="absolute bottom-10 left-10 text-lg font-bold bg-white px-12 py-2">
              {cat.label}
            </span>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Categories;
