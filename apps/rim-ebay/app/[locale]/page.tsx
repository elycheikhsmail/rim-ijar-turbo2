import ListAnnoncesUI from "./ui/ListAnnoncesUI";
import { FormSearchUI } from "@repo/ui/FormSearchUI";
import AnnoceTitle from "@repo/ui/AnnoceTitle";
import { getI18n } from "../../locales/server";

import { LottieAnimation } from "@repo/ui/LottieAnimation";
import prisma from "../../lib/prisma";
import { Annonce } from "@repo/mytypes/types";
let modeOptionsApi: "sqlite" | "tursor";
modeOptionsApi = "tursor";
//let modeOptionsApi = process.env.NEXT_PUBLIC_OPTIONS_API_MODE || "tursor";
if (!process.env.NEXT_PUBLIC_OPTIONS_API_MODE) {
  modeOptionsApi = "sqlite";
}
if (
  process.env.NEXT_PUBLIC_OPTIONS_API_MODE &&
  process.env.NEXT_PUBLIC_OPTIONS_API_MODE !== "tursor"
) {
  modeOptionsApi = "sqlite";
}

export default async function Home(props: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const t = await getI18n();
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  const annoncesFromDB = await prisma.annonce.findMany({});

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
        <div className="p-5 sm:mx-16 ">
          <div className="flex justify-between  px-4 py-2">
            <AnnoceTitle title={t("nav.Annoce")} />

            <FormSearchUI modeOptionsApi={modeOptionsApi} />
          </div>
          {annonces ? (
            <ListAnnoncesUI
              totalPages={totalPages}
              currentPage={currentPage}
              annonces={annonces}
            />
          ) : (
            <div className="flex justify-center items-center">
              <LottieAnimation />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
