"use client";
//import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Annonce } from "@repo/mytypes/types";

const fallbackImageUrl = "/noimage.jpg";

interface MyAnnonceDetailsViewProps {
  lang: string;
  annonce: Annonce | null;
  i18nAnnonce: string;
  i18nContact: string;
  i18nPrix: string;
  getImageUrl: (imagePath: string) => string;
  handleDelte: () => void;
  handleEdit: () => void;
  setEditModalOpen: (isOpen: boolean) => void;
}

const MyAnnonceDetailsView: React.FC<MyAnnonceDetailsViewProps> = ({
  lang,
  annonce,
  //t,
  i18nAnnonce,
  i18nContact,
  i18nPrix,
  //
  getImageUrl,
  handleDelte,
  handleEdit,
  //setEditModalOpen,
}) => {

  const getImage = (imageInput: string | { imagePath: string }, imageDescription: string = "") => {
    // Extract the image URL whether it's a string or an object
    const imgUrl = typeof imageInput === 'string' 
      ? imageInput 
      : imageInput.imagePath;
    
    // Determine if we should use the URL directly or process it through getImageUrl
    const finalUrl = imgUrl.startsWith('http') ? imgUrl : getImageUrl(imgUrl);
     
    return (
      <div className="relative h-40 sm:h-60 w-full">
        <Image
          src={finalUrl}
          alt={imageDescription}
          fill
          unoptimized
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    );
  };
  


  const NoImage = () => (
    <div className="relative h-40 sm:h-60 w-full">
      <Image
        src={fallbackImageUrl}
        alt="no image uploaded by user"
        fill
        unoptimized
        style={{ objectFit: "cover" }}
        className="rounded-lg"
      />
    </div>
  );

  console.log("annonce.imageAnnonce",annonce?.imageAnnonce)
  return (
    <article className="flex flex-col gap-4 bg-white shadow-lg rounded-xl p-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto my-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
        {i18nAnnonce}
      </h2>
      <div className="space-y-2 h-40 sm:h-60 w-full">
        {annonce?.haveImage ? (
          <Carousel
            className="rounded-xl"
            infiniteLoop
            autoPlay
            showThumbs={false}
          >
            {annonce?.imageAnnonce?.map((item, index) => (
              <div className="h-40 sm:h-60" key={index}>
                 {getImage(item, `Image ${index + 1}`)}
              </div>
            ))}
          </Carousel>
        ) : (
          <NoImage />
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="inline-block bg-green-800 rounded-md px-2 py-1 text-xs sm:text-sm font-semibold text-white">
            {lang === "ar"
              ? annonce?.typeAnnonce?.nameAr
              : annonce?.typeAnnonce?.name}{" "}
            /{" "}
            {lang === "ar"
              ? annonce?.categorie?.nameAr
              : annonce?.categorie?.name}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            {"formattedDate"} | {"formattedTime"}
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold my-2">
          {lang === "ar" ? "العنوان" : annonce?.title}
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-4">
          {annonce?.description}
        </p>

        <div className="hover:bg-gray-100 rounded-md p-0">
          <div className="border-t border-green-800 my-2"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base font-bold">{i18nPrix}</span>
            <p className="text-base sm:text-lg text-green-800 font-bold">
              {annonce?.price} UMR / jour
            </p>
          </div>
          <div className="border-t border-green-800 my-2"></div>
        </div>

        <div className="hover:bg-gray-100 rounded-md p-0 mt-2">
          <div className="border-t border-green-800 my-2"></div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {i18nContact}
            </h2>
            <p className="text-md font-semibold text-blue-600">
              {annonce?.contact}
            </p>
          </div>
          <div className="border-t border-green-800 my-2"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
          <button
            onClick={handleDelte}
            className="bg-red-500 w-full sm:w-44 h-10 hover:bg-red-600 rounded-lg text-white font-bold"
          >
            {lang === "ar" ? "سحب" : "Retirer"}
          </button>
          <button
            onClick={handleEdit}
            className="bg-green-500 w-full sm:w-44 h-10 rounded-lg hover:bg-green-600 text-white font-bold"
          >
            {lang === "ar" ? "حرر" : "Edit"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default MyAnnonceDetailsView;
