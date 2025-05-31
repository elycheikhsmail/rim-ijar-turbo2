import { Suspense } from "react";
import { MyListAnnoncesUI } from "./ui";
import { LottieAnimation } from "@repo/ui/LottieAnimation";
import { cookies } from "next/headers";
import prisma from "../../../../lib/prisma";
//import { Annonce } from "@/annonce.interface";
import { Annonce } from "@repo/mytypes/types";

export default async function Home(
  props: {
    params: Promise<{ locale: string }>;
    searchParams?: Promise<{
      page?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const currentPage = Number(searchParams?.page) || 1;
  const userid = (await cookies()).get("user");
  const userIdConverted = String(userid?.value || "");

  const annoncesFromDB = await prisma.annonce.findMany({
    where: {
      userId: userIdConverted,
    },
  });

  const annonces: Annonce[] = annoncesFromDB.map((annonce) => ({
    id: annonce.id,
    typeAnnonceId: annonce.typeAnnonceId,
    typeAnnonceid: annonce.typeAnnonceId,
    typeAnnonceName: (annonce as any).type_annonce?.name ?? "",
    typeAnnonceNameAr: (annonce as any).type_annonce?.nameAr ?? "",
    categorieId: annonce.categorieId,
    categorieid: annonce.categorieId,
    categorieName: (annonce as any).categorie?.name ?? "",
    categorieNameAr: (annonce as any).categorie?.nameAr ?? "",
    lieuId: annonce.lieuId,
    lieuid: annonce.lieuId,
    lieuStr: "",
    lieuStrAr: "",

    userId: annonce.userId,
    userid: annonce.userId,
    title: annonce.title,
    description: annonce.description,
    price: parseFloat(String(annonce.price)),
    contact: annonce.contact,

    haveImage: annonce.haveImage,
    firstImagePath: String(annonce.firstImagePath),
    images: (annonce as any).annonceImages ?? [],

    status: annonce.status,
    updatedAt: annonce.updatedAt,
    createdAt: annonce.createdAt,
  }));

  const itemsPerPage = 6; // Define the number of items per page

  const totalPages = Math.ceil(annonces.length / itemsPerPage); // Calculate total pages based on your logic

  return (
    <main className="min-h-screen">
      <div className="p-8">
        {annonces ? (
          <MyListAnnoncesUI
            totalPages={totalPages}
            currentPage={currentPage}
            annonces={annonces}
            lang={params.locale}
          />
        ) : (
          <div className="flex justify-center items-center">
            <LottieAnimation />
          </div>
        )}
      </div>
    </main>
  );
}
