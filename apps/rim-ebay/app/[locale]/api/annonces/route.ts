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

    let typeAnnonce;
    const url1 = `${SiteBaseUrl}/${baseApi}/options/${data.typeAnnonceId}`;
    const response = await fetch(
      `${SiteBaseUrl}/${baseApi}/options/${data.typeAnnonceId}`,
    );
    response.json().then((data) => {
      console.log("typeAnnonceData", data);
      typeAnnonce = data;
    });

    let categorie;
    const response2 = await fetch(
      `${SiteBaseUrl}/${baseApi}/options/${data.categorieId}`,
    );
    response2.json().then((data) => {
      console.log("categorieData", data);
      categorie = data;
    });

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

        typeAnnonce,
        categorie,
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
