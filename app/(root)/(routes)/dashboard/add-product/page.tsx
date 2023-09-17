import AddProductForm from "@/components/forms/add-product";

const page = () => {
  return (
    <>
      <div className="h-16 mx-5 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Add New Product</h1>
      </div>
      <div className="mx-5 py-5">
        <AddProductForm />
      </div>
    </>
  );
};

export default page;
