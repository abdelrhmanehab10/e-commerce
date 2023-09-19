import { db } from "@/lib/db";
import SingleProduct from "@/components/single-product";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await db.product.findUnique({
    where: {
      id: params.id,
    },
  });
  return <SingleProduct product={product} />;
};

export default ProductDetails;
