import prisma from "../../../lib/prisma";
import {
  IHandleGetAnnonces,
  IPageAnnonce,
} from "./handleGetAnnonces.interface";
import { Annonce } from "@repo/mytypes/types";
import { OptionsModel } from "@repo/mytypes/prisma-client";

interface Filters {
  typeAnnonceId?: string;
  categorieId?: string;
  subCategorieId?: string;
  price?: string;
  description?: string;
}

export type { Filters };

const handleGetAnnonces: (
  filters?: Filters,
) => Promise<{
  pageAnnonceData: IPageAnnonce | null;
  errorMessage: string;
}> = async (filters: Filters = {}) => {
  let pageAnnonceData: IPageAnnonce | null = null;
  let errorMessage = "";

  try {
    const whereClause: any = {};

    if (filters.typeAnnonceId)
      whereClause.typeAnnonceId = filters.typeAnnonceId;
    if (filters.categorieId) whereClause.categorieId = filters.categorieId;
    if (filters.subCategorieId)
      whereClause.subcategorieId = filters.subCategorieId;
    if (filters.price) whereClause.price = Number(filters.price);
    // if (filters.description) whereClause.description = { contains: filters.description, mode: "insensitive" };

    console.log("whereClause", whereClause);
    const annoncesFromDB = await prisma.annonce.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });
    //console.log("annoncesFromDB" , annoncesFromDB)

    const annonces: Annonce[] = annoncesFromDB.map((annonce) => {
      const { categorie, typeAnnonce, subcategorie, firstImagePath, ...rest } =
        annonce;
      const typeAnnonceV = typeAnnonce as unknown as OptionsModel;
      const categorieV = categorie as unknown as OptionsModel;
      const subcategorieV = subcategorie as unknown as OptionsModel;
      return {
        ...rest,
        firstImagePath: firstImagePath ?? "",
        price: annonce.price ?? 0,
        typeAnnonceName: typeAnnonceV.name,
        typeAnnonceNameAr: typeAnnonceV.nameAr,
        categorieId: annonce.categorieId,
        categorieName: categorieV.name,
        categorieNameAr: categorieV.nameAr,
        lieuStr: "",
        lieuStrAr: "",
        images: [],
      };
    });

    console.log("annonces===========", annonces);

    pageAnnonceData = {
      totalPages: Math.max(1, Math.ceil(annonces.length / 10)),
      annonces,
    };
  } catch (error) {
    errorMessage = "❌ Erreur lors de la récupération des annonces";
    console.error(errorMessage, error);
  }

  return { pageAnnonceData, errorMessage };
};

export { handleGetAnnonces };
