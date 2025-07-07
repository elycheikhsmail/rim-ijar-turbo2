// app/api/annonces/route.ts

import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
const SiteBaseUrl = process.env.SITE_BASE_URL || "";
console.log("Site Base URL:", SiteBaseUrl);
let baseApi = "fr/p/api/tursor";
if (process.env.NEXT_PUBLIC_OPTIONS_API_MODE === "sqlite") {
  baseApi = "fr/p/api/sqlite";
}
console.log("Base API URL:", baseApi);

// Définition des types pour la requête
interface CreateAnnonceRequest {
  typeAnnonceId: string;
  subcategorieId: string;
  categorieId: string;
  lieuId: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  contact: string;
  haveImage: boolean;
  firstImagePath: string;
  images: { imagePath: string }[];
  status: string;
}

// 1. Créer une annonce (POST)
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const data: CreateAnnonceRequest = await request.json();

 
    // Créer une nouvelle annonce dans la base de données
    const newAnnonce = await prisma.annonce.create({
      data: {
        typeAnnonceId: data.typeAnnonceId,
        subcategorieId: data.subcategorieId,
        categorieId: data.categorieId,
        lieuId: data.lieuId,
        userId: data.userId,
        title: data.title,
        description: data.description,
        price: data.price,
        contact: data.contact,
        haveImage: data.haveImage,
        firstImagePath: data.firstImagePath,

        status: data.status,
        updatedAt: new Date(),
        createdAt: new Date(),
 
      },
    });

    return NextResponse.json(newAnnonce, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de l'annonce:", error); // Afficher l'erreur dans les logs
    return NextResponse.json(
      { error: "Error creating annonce", details: error },
      { status: 500 },
    );
  }
}
