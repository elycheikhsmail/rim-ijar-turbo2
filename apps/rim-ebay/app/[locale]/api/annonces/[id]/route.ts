// app/api/annonces/[id]/route.ts

import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

// 1. Récupérer une annonce par ID (GET)
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  try {
    const annonceId = params.id;

    const annonce = await prisma.annonce.findUnique({
      where: { id: annonceId },
    });

    if (!annonce) {
      return NextResponse.json({ error: "Annonce not found" }, { status: 404 });
    }

    return NextResponse.json(annonce, { status: 200 });
  } catch (error) {
    console.error("Error getting annonce:", error);
    return NextResponse.json(
      { error: "Error getting annonce" },
      { status: 500 },
    );
  }
}

// 2. Mettre à jour une annonce (PUT)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  try {
    const annonceId = String(params.id);
    //parseInt(params.id, 10); // Convertir l'ID en nombre entier
    const data: any = await request.json(); // Récupérer les données de mise à jour

    const typeAnnonce = await prisma.optionsModel.findFirst({
      where: { id: data.typeAnnonceId, depth: 1 },
    });

    const categorie = await prisma.optionsModel.findFirst({
      where: { id: data.categorie, depth: 2 },
    });
    const updatedAnnonce = await prisma.annonce.update({
      where: { id: annonceId },
      data: {
        typeAnnonceId: data.typeAnnonceId,
        categorieId: data.categorieId,
        subcategorieId: data.subcategorieId,
        lieuId: data.subcategorieId,
        userId: data.userId,
        title: data.title,
        description: data.description,
        price: data.price,
        contact: data.contact,
        haveImage: data.haveImage,
        firstImagePath: data.firstImagePath,
        status: data.status,
        updatedAt: new Date(),
        typeAnnonce,
        categorie,
      },
    });

    return NextResponse.json(updatedAnnonce, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating annonce" },
      { status: 500 },
    );
  }
}

// 3. Supprimer une annonce (DELETE)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  try {
    const annonceId = params.id;

    const updatedAnnonce = await prisma.annonce.update({
      where: { id: annonceId },
      data: {
        status: "deleted",
      },
    });

    return NextResponse.json(updatedAnnonce, { status: 200 });
  } catch (error) {
    console.log("error delete:: ", error);
    return NextResponse.json(
      { error: "Error deleting annonce" },
      { status: 500 },
    );
  }
}
