import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, description, price, sale, imageUrl, categoryId } =
      await req.json();
    const product = await db.product.create({
      data: {
        name,
        description,
        imageUrl,
        price,
        sale,
        categoryId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("PRODUCT_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
