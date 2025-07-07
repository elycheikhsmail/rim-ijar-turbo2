"use client";
import React, { useState, useEffect } from "react";

interface FormSearchViewProps {
  lang: string;
  typeAnnonces: any[];
  categories: any[];
  subCategories: any[];
  selectedTypeId: string ;
  selectedCategoryId: string;
  selectedSubCategoryId: string ;
  price: string;
  onTypeChange: (value: string ) => void;
  onCategoryChange: (value: string) => void;
  onSubCategoryChange: (value: string ) => void;
  onPriceChange: (value: string) => void;
  onSearch: () => void;
  annonceTypeLabel: string;
  selectTypeLabel: string;
  categoryLabel: string;
  selectCategoryLabel: string;
  subCategoryLabel: string;
  selectSubCategoryLabel: string;
  priceLabel: string;
  formTitle: string;
  searchButtonLabel: string;
}

export default function FormSearchView({
  lang,
  typeAnnonces,
  categories,
  subCategories,
  selectedTypeId,
  selectedCategoryId,
  selectedSubCategoryId,
  price,
  onTypeChange,
  onCategoryChange,
  onSubCategoryChange,
  onPriceChange,
  onSearch,
  annonceTypeLabel,
  selectTypeLabel,
  categoryLabel,
  selectCategoryLabel,
  subCategoryLabel,
  selectSubCategoryLabel,
  priceLabel,
  formTitle,
  searchButtonLabel,
}: FormSearchViewProps) {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {formTitle}
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 mb-2">
                {annonceTypeLabel}
              </label>
              <select
                value={selectedTypeId}
                onChange={(e) => {
                  onTypeChange(e.target.value);
                }}
                className="border rounded w-full p-2"
              >
                <option value="">{selectTypeLabel}</option>
                {typeAnnonces.map((type: any) => (
                  <option key={type.id} value={type.id}>
                    {lang === "ar" ? type.nameAr : type.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                {categoryLabel}
              </label>
              <select
                value={selectedCategoryId || ""}
                onChange={(e) => onCategoryChange(e.target.value)}
                disabled={!selectedTypeId}
                className="border rounded w-full p-2"
              >
                <option value="">{selectCategoryLabel}</option>
                {categories.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {lang === "ar" ? category.nameAr : category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                {subCategoryLabel}
              </label>
              <select
                value={selectedSubCategoryId || ""}
                onChange={(e) => onSubCategoryChange(e.target.value)}
                className="border rounded w-full p-2"
              >
                <option value="">{selectSubCategoryLabel}</option>
                {subCategories.map((subCategory: any) => (
                  <option key={subCategory.id} value={subCategory.id}>
                    {lang === "ar" ? subCategory.nameAr : subCategory.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">{priceLabel}</label>
              <input
                type="number"
                value={price}
                onChange={(e) => onPriceChange(e.target.value)}
                className="border rounded w-full p-2"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={onSearch}
            className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
          >
            {searchButtonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
