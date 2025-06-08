"use client";

import { Annonce } from "@repo/mytypes/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useI18n } from "../../../../../locales/client";
import { useRouter } from "next/navigation";
import EditForm from "@repo/ui/EditForm/EditForm";
import { LottieAnimation } from "@repo/ui/LottieAnimation";
import MyAnnonceDetailsView from "./MyAnnonceDetailsView";
import { FiUpload } from "react-icons/fi";
import { useRef } from 'react'; // Ajout de useRef

export default function MyAnnonceDetailsCompo({
  lang = "ar",
  annonceId,
}: {
  lang?: string;
  annonceId: string;
}) {
  const hostServerForImages = "https://picsum.photos";
  const getImageUrl = (imagePath: string) =>
    `${hostServerForImages}/${imagePath}`;

  //const anonnceById = annonce?.filter(annonce=> annonce.id=annonceId)
  const params = useParams();
  // console.log("params : ", params)
  const router = useRouter();
  const t = useI18n();
  // console.log("le lang ::", t)
  const { id, locale } = params;
  console.log("id::", id)
  const [annonces, setAnnonce] = useState<Annonce | null>(null); // State to hold the fetched annonce
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState<string | null>(null); // State to manage error messages
  const [isEditModalOpen, setEditModalOpen] = useState(false); // État pour gérer la visibilité de la pop-up
  const [initialData, setInitialData] = useState({
    typeAnnonceId: annonces?.typeAnnonce?.id ?? "",
    categorieId: annonces?.categorie?.id ?? "",
    subcategorieId: String(annonces?.subcategorie?.id) ?? "",
    description: annonces?.description ?? "",
    price: annonces?.price ?? 0,
  }); // État pour les données initiales

  const pathname = usePathname();

  const fetchAnnonce = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/${lang}/api/annonces/${id}`);
      setAnnonce(response.data);
      setError(null);
    } catch (err) {
      setError("Erreur lors de la récupération de l'annonce.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAnnonce(); // Call the fetch function
  }, [annonceId, pathname, id, lang]);

  const handleDelte = async () => {
    const loadingToast = toast.loading(t("notifications.creating"));
    try {
      const res = await axios.delete(`/fr/api/annonces/${id}`);
      if (res.status === 200) {
        toast.success(t("notifications.successdelete"), {
          id: loadingToast,
        });
        router.push("/my/list");
        router.refresh();
      }
    } catch (error) {
      toast.error(t("notifications.errordelete"), {
        id: loadingToast,
      });
      console.error("Erreur:", error);
    }
  };

  const handleUpdate = () => {
    console.log("Update");
    fetchAnnonce(); // Recharge l'annonce après modification
  };

  const handleEdit = () => {
   
    console.log("Edit");
    if (annonces) {
      console.log("Annonce:", initialData);
      setInitialData({
        typeAnnonceId: annonces?.typeAnnonce?.id ?? "",
        categorieId: annonces?.categorie?.id ?? "",
        subcategorieId: String(annonces?.subcategorie?.id) ?? "",
        description: annonces?.description,
        price: annonces.price,
      });
    }
    
    console.log("Initial Data:", );
    setEditModalOpen(true);
  };
  

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    if (typeof id === "string") {
     console.log("string type id:", id);
     formData.append('annonceId', id);
    }
   // formData.append('annonceId', annonceId);
    formData.append('file', files[0]); // Note: 'file' au lieu de 'image' pour correspondre à votre API
    
    console.log("annonceId:", annonceId);

    const loadingToast = toast.loading("notifications.uploading");

    try {
      const response = await fetch(`/${lang}/api/images`, {
        method: 'POST',
        body: formData,
        // Les headers sont gérés automatiquement par FormData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      
      toast.success("notifications.uploadSuccess"), {
        id: loadingToast,
      };
      fetchAnnonce(); // Rafraîchir les données
    } catch (error) {
      console.log("Erreur upload:", error);
      toast.error("notifications.uploadError"), {
        id: loadingToast,
      };
      console.error("Erreur upload:", error);
    }
  };

  console.log("annonces::::::::", annonces);

  return (
    <>
      <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          {/* Bouton UPLOAD modifié */}
          <button 
            onClick={handleUploadClick}
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md ml-auto"
          >
            <FiUpload className="w-5 h-5" />
            UPLOAD
          </button>

      {loading ? (
        <LottieAnimation />
      ) : (
        <MyAnnonceDetailsView
          lang={lang}
          annonce={annonces}
          i18nAnnonce={t("annonce")}
          i18nContact={t("Contact")}
          i18nPrix={t("prix")}
          getImageUrl={getImageUrl}
          handleDelte={handleDelte}
          handleEdit={handleEdit}
          setEditModalOpen={setEditModalOpen}
        />
      )}

      {isEditModalOpen && (
        <EditForm
          lang={lang}
          userid={annonceId}
          annonceId={String(id)}
          initialData={initialData}
          onClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
}
