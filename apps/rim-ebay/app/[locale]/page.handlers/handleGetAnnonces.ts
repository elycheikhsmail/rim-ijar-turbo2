import prisma from "../../../lib/prisma";
import { MongoClient } from "mongodb";
import {
  IHandleGetAnnonces,
  IPageAnnonce,
} from "./handleGetAnnonces.interface";
import { Annonce } from "@repo/mytypes/types";
import { OptionsModel } from "@repo/mytypes/prisma-client";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/rim-ebay";
const IMAGE_API_BASE_URL = "http://localhost:3000/ar/api/lieus";

interface Filters {
  typeAnnonceId?: string;
  categorieId?: string;
  subCategorieId?: string;
  price?: string;
  description?: string;
}

export type { Filters };

async function getImagesByAnnonceIds(annonceIds: string[]) {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();

    const images = await db
      .collection("uploads.files")
      .find({ "metadata.annonceId": { $in: annonceIds } })
      .toArray();

    return images.reduce(
      (acc, image) => {
        const annonceId = image.metadata?.annonceId;
        if (annonceId) {
          if (!acc[annonceId]) acc[annonceId] = [];
          acc[annonceId].push(`${IMAGE_API_BASE_URL}?imageId=${image._id}`);
        }
        return acc;
      },
      {} as Record<string, string[]>,
    );
  } finally {
    await client.close();
  }
}

const handleGetAnnonces: (filters?: Filters) => Promise<{
  pageAnnonceData: IPageAnnonce | null;
  errorMessage: string;
}> = async (filters: Filters = {}) => {
  let pageAnnonceData: IPageAnnonce | null = null;
  let errorMessage = "";

  try {
    // Construction des filtres
    const whereClause: any = {};
    if (filters.typeAnnonceId)
      whereClause.typeAnnonceId = filters.typeAnnonceId;
    if (filters.categorieId) whereClause.categorieId = filters.categorieId;
    if (filters.subCategorieId)
      whereClause.subcategorieId = filters.subCategorieId;
    if (filters.price) whereClause.price = Number(filters.price);

    const annoncesFromDB = await prisma.annonce.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    // Récupération des IDs des annonces
    const annonceIds = annoncesFromDB.map((a) => a.id);

    // Récupération groupée de toutes les images
    const imagesByAnnonceId = await getImagesByAnnonceIds(annonceIds);

    const annonces: Annonce[] = annoncesFromDB.map((annonce) => {
      const { categorie, typeAnnonce, subcategorie, ...rest } = annonce;
      const rawImages = imagesByAnnonceId[annonce.id] || [];

      const images = rawImages.map((url) => ({
        id: new URL(url).searchParams.get("imageId") || "",
        imagePath: url,
      }));

      return {
        ...rest,
        firstImagePath: images[0]?.imagePath || "",
        price: annonce.price ?? 0,
        typeAnnonceName: (typeAnnonce as unknown as OptionsModel).name,
        typeAnnonceNameAr: (typeAnnonce as unknown as OptionsModel).nameAr,
        categorieId: annonce.categorieId,
        categorieName: (categorie as unknown as OptionsModel).name,
        categorieNameAr: (categorie as unknown as OptionsModel).nameAr,
        lieuStr: "",
        lieuStrAr: "",
        images: images,
        haveImage: images.length > 0,
        status: rest.status,
        updatedAt: rest.updatedAt,
        createdAt: rest.createdAt,
      };
    });

    pageAnnonceData = {
      totalPages: Math.ceil(annonces.length / 10),
      annonces,
    };
  } catch (error) {
    errorMessage = "❌ Erreur lors de la récupération des annonces";
    console.error(errorMessage, error);
  }

  return { pageAnnonceData, errorMessage };
};

export { handleGetAnnonces };
