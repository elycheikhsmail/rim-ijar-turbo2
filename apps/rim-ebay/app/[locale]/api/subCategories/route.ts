import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("CategoryId");

  if (!categoryId) {
    return NextResponse.json(
      { error: "Category ID is required" },
      { status: 400 },
    );
  }

  try {
    const subCategories = await prisma.optionsModel.findMany({
      where: {
        //categorieId : categoryId
        parentID: { equals: categoryId },
      },
    });

    return NextResponse.json(subCategories);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching subcategories" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
