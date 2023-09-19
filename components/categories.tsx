import { db } from "@/lib/db";
import CategoryCard from "./category/category-card";

const Categories = async () => {
  const categories = await db.category.findMany();
  return (
    <section className="py-10 text-center">
      <header>
        <h2 className="uppercase font-bold text-2xl">Explore Our Categories</h2>
        <p className="w-1/2 md:w-1/3 mx-auto text-sm pb-5">
          Discover a wide range of diverse categories tailored to meet your
          interests, needs, and desires.
        </p>
      </header>
      <main className="flex flex-col items-center gap-5 md:justify-center md:flex-row md:w-2/3 md:mx-auto">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <div>
            <h3 className="text-muted-foreground text-sm">
              There&apos;s no categories...
            </h3>
          </div>
        )}
      </main>
    </section>
  );
};

export default Categories;
