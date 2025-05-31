"use server";
import BackButton from "@repo/ui/Navigation";
import AnnonceDetailCompo from "@repo/ui/All_AnnonceDetaille/AnnonceDetailUI";
import { Annonce } from "@repo/mytypes/types";
import prisma from "../../../../../../lib/prisma";
import { OptionsModel } from "@repo/mytypes/prisma-client";

export default async function AnnonceDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  // Recherche de l'annonce en base de données
  const annonce = await prisma.annonce.findUnique({
    where: { id: params.id },
  });
  console.log("annonce :::: ", annonce);

  // Vérification si l'annonce existe
  if (!annonce) {
    throw new Error(`Annonce avec l'ID ${params.id} non trouvée`);
  }

  const typeAnnonce = annonce.typeAnnonce as unknown as OptionsModel;
  const categorie = annonce.categorie as unknown as OptionsModel;
  const subcategorie = annonce.subcategorie as unknown as OptionsModel;

  const { firstImagePath, ...annonceData } = annonce;
  const formattedAnnonce: Annonce = {
    ...annonceData,
    price: parseFloat(String(annonce.price)),
    firstImagePath: firstImagePath ? String(firstImagePath) : "",
    lieuStr: "", // These will be populated if needed
    lieuStrAr: "",
    images: [],
    typeAnnonce: { ...typeAnnonce },
    categorie: { ...categorie },
    subcategorie: { ...subcategorie },
  };

  //const annonce = await handleGetOneAnnonce(params.id)
  console.log("annonce :::: ", annonce);

  if (!annonce) {
    return (
      <h1 className="text-2xl font-bold text-center mt-8">
        Annonce non trouvée
      </h1>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-9 overflow-hidden">
      <div className="md:ml-32 lg:ml-44">
        <BackButton />
      </div>

      <div>
        <AnnonceDetailCompo annonceId={params.id} annonce={formattedAnnonce} />
      </div>
    </div>
  );
}
