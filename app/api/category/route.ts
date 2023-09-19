import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, description, price, sale, imageUrl } = await req.json();
    const category = await db.category.create({
      data: {
        name,
        description,
        imageUrl,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("CATEGORY_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
