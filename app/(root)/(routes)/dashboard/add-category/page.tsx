"use client";

import AddCategoryForm from "@/components/forms/add-category";
import Image from "next/image";

const NewCategory = () => {
  return (
    <section>
      <header className="relative flex justify-center items-center">
        <div className="font-bold absolute left-1/2 -translate-x-2/3">
          <h1 className="text-6xl">Add New Category</h1>
          <h3 className="my-3 text-lg text-[#E77C40]">Fill this form</h3>
        </div>
        <Image
          width={300}
          height={300}
          src="/categories/categories.jpg"
          alt="header photo"
          className="ml-20"
        />
      </header>
      <div className="md:w-2/3 md:mx-auto">
        <div className="h-16 mx-5 flex justify-between items-center">
          <h1 className="font-bold text-3xl">Add New Category</h1>
        </div>
        <div className="mx-5 py-5">
          <AddCategoryForm />
        </div>
      </div>
    </section>
  );
};

export default NewCategory;
