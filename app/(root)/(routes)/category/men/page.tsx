import React from "react";

const menSlide = [
  {
    src: "/products/1.png",
    title: "Cloths",
    items: [1, 2, 3, 4, 5],
  },
  {
    src: "/products/2.png",
    title: "Cloths",
    items: [1, 2, 3, 4, 5],
  },
  {
    src: "/products/3.png",
    title: "Cloths",
    items: [1, 2, 3, 4, 5],
  },
  {
    src: "/products/4.png",
    title: "Cloths",
    items: [1, 2, 3, 4, 5],
  },
];
const page = () => {
  return (
    <section>
      <header className="mx-3">
        <h1 className="text-xl font-bold">Men</h1>
        <div className="flex flex-col justify-between gap-3 h-32 py-3">
          {menSlide.map((ms, ind) => (
            <div
              key={ind}
              style={{ backgroundImage: `url(${ms.src})` }}
              className="w-full h-full bg-top bg-cover"
            >
              <div
                className="bg-black/30 h-full flex flex-col
                 justify-center items-center text-white"
              >
                <h2 className="font-bold">{ms.title}</h2>
                <p className="text-sm">{ms.items.length} items</p>
              </div>
            </div>
          ))}
        </div>
      </header>
      <main></main>
    </section>
  );
};

export default page;
