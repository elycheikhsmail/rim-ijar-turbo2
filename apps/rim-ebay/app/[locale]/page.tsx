import { handleGetAnnonces } from "./page.handlers/handleGetAnnonces";
import ListAnnoncesUI from "./ui/ListAnnoncesUI";
import Input from "@repo/ui/Input";
import AnnoceTitle from "@repo/ui/AnnoceTitle";
import { getI18n } from "../../locales/server";

//installation de l`environnement
//run seed script
// commencer a faire le tahce de recherche

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    typeAnnonceId?: string;
    categorieId?: string;
    subCategorieId?: string;
    price?: string;
    description?: string;
  };
}) {
  const t = await getI18n();
  const currentPage = Number(searchParams?.page) || 1;

  const { pageAnnonceData, errorMessage } =
    await handleGetAnnonces(searchParams);

  console.log("pageAnnonceData :::: ", pageAnnonceData);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="p-5 sm:mx-16 ">
        <div className="flex justify-between  px-4 py-2">
          <AnnoceTitle title={t("nav.Annoce")} />
          <Input />
        </div>

        {errorMessage ? (
          <p className="text-red-500 text-center">{errorMessage}</p>
        ) : (
          pageAnnonceData && (
            <ListAnnoncesUI
              totalPages={pageAnnonceData.totalPages}
              currentPage={currentPage}
              annonces={pageAnnonceData.annonces}
            />
          )
        )}
      </div>
    </main>
  );
}
