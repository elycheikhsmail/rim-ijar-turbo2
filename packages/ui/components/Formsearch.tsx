"use client";
import React, { useState, useEffect } from "react";

interface Filters {
  typeAnnonceId?: string;
  categorieId?: string;
  subCategorieId?: string;
  price?: string;
  description?: string;
}

import FormSearchView from "./FormSearchView";

interface FormSearchProps {
  lang?: string;
  onSubmit: (filters: Filters) => void;
  typeAnnonceLabel?: string;
  categoryLabel?: string;
  subCategoryLabel?: string;
  priceLabel?: string;
  searchButtonLabel?: string;
}

export default function FormSearch({
  lang = "ar",
  onSubmit,
  typeAnnonceLabel = "Type d'annonce",
  categoryLabel = "Catégorie",
  subCategoryLabel = "Sous-catégorie",
  priceLabel = "Prix",
  searchButtonLabel = "Rechercher",
}: FormSearchProps) {
  const [typeAnnonces, setTypeAnnonces] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]); // ✅ Toujours un tableau
  const [subCategories, setSubCategories] = useState<any[]>([]);

  const [selectedTypeId, setSelectedTypeId] = useState<string | undefined>(
    undefined,
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >(undefined);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<
    string | undefined
  >(undefined);
  const [price, setPrice] = useState<number>();

  // 🔹 Charger les types d'annonces au chargement
  useEffect(() => {
    fetch(`/${lang}/api/typeAnnonce`)
      .then((res) => res.json())
      .then((data) => setTypeAnnonces(data))
      .catch((error) => console.error("Error fetching typeAnnonces:", error));
  }, [lang]);

  useEffect(() => {
    if (selectedTypeId !== undefined) {
      console.log(`Fetching categories for typeAnnonceId: ${selectedTypeId}`);
      fetch(`/${lang}/api/categories?typeAnnonceId=${selectedTypeId}`)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
          setSubCategories([]);
        })
        .catch((error) => console.error("Error fetching categories:", error));
    } else {
      setCategories([]);
      setSubCategories([]);
    }
  }, [selectedTypeId, lang]);

  useEffect(() => {
    if (selectedCategoryId !== undefined) {
      console.log(
        `Fetching subcategories for categoryId: ${selectedCategoryId}`,
      );
      fetch(`/${lang}/api/subCategories?CategoryId=${selectedCategoryId}`)
        .then((res) => res.json())
        .then((data) => setSubCategories(data))
        .catch((error) =>
          console.error("Error fetching subcategories:", error),
        );
    } else {
      setSubCategories([]);
    }
  }, [selectedCategoryId, lang]);

  const handleTypeChange = (value: string | undefined) => {
    console.log("Nouvelle valeur sélectionnée pour Type d'annonce:", value);
    setSelectedTypeId(value);
    setSelectedCategoryId(undefined); // Réinitialisation de la catégorie
    setSubCategories([]); // Réinitialisation des sous-catégories
  };

  const handleCategoryChange = (value: string | undefined) => {
    console.log("Changement de catégorie:", value); // DEBUG
    setSelectedCategoryId(value);
  };

  const handlePriceChange = (value: string) => {
    const newValue = value ? Number(value) : undefined;
    console.log("Changement de prix:", newValue);
    setPrice(newValue);
  };

  const handleSearch = () => {
    const filters: Filters = {};
    console.log("Recherche avec les filtres suivants:", price); // DEBUG

    if (selectedTypeId) filters.typeAnnonceId = selectedTypeId.toString();
    if (selectedCategoryId) filters.categorieId = selectedCategoryId.toString();
    if (selectedSubCategoryId)
      filters.subCategorieId = selectedSubCategoryId.toString();
    if (price !== undefined) filters.price = price.toString(); // ✅ Conversion en string

    onSubmit(filters);
  };

  return (
    <FormSearchView
      lang={lang}
      typeAnnonces={typeAnnonces}
      categories={categories}
      subCategories={subCategories}
      selectedTypeId={selectedTypeId}
      selectedCategoryId={selectedCategoryId}
      selectedSubCategoryId={selectedSubCategoryId}
      price={price !== undefined ? price.toString() : ""}
      onTypeChange={handleTypeChange}
      onCategoryChange={handleCategoryChange}
      onSubCategoryChange={setSelectedSubCategoryId}
      onPriceChange={handlePriceChange}
      onSearch={handleSearch}
      annonceTypeLabel={typeAnnonceLabel}
      selectCategoryLabel={categoryLabel}
      selectSubCategoryLabel={subCategoryLabel}
      selectTypeLabel={typeAnnonceLabel}
      formTitle="formTitle"
      categoryLabel={categoryLabel}
      subCategoryLabel={subCategoryLabel}
      priceLabel={priceLabel}
      searchButtonLabel={searchButtonLabel}
    />
  );
}
