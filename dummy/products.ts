export type Product = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  sale: number;
  quantity: number;
};

export const products: Product[] = [
  {
    id: "1",
    image: "/products/1.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
  {
    id: "2",
    image: "/products/2.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
  {
    id: "3",
    image: "/products/3.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
  {
    id: "4",
    image: "/products/4.png",
    name: "Graphic Design",
    description: "English Department",
    price: 16.48,
    sale: 6.48,
    quantity: 1,
  },
];
