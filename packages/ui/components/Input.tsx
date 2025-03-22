"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import FormSearch from "./Formsearch";
import { useRouter } from "next/navigation";

interface Filters {
  typeAnnonceId?: string;
  categorieId?: string;
  subCategorieId?: string;
  price?: string;
  description?: string;
}

interface InputProps {
  buttonLabel?: string;
  filterIcon?: any;
}

export default function Input({
  buttonLabel = "Recherche",
  filterIcon = faFilter,
}: InputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => setIsAnimating(true), 150);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const handleSearchSubmit = async (filters: Filters) => {
    // Type the filters argument
    setIsLoading(true);
    closeModal();

    try {
      const params = new URLSearchParams(
        Object.entries(filters).map(([key, value]) => [
          key,
          value?.toString() || "",
        ]),
      );
      console.log("params=====", params.toString());
      router.push(`?${params.toString()}`); // Redirect, no need to wait for API call here
    } catch (error) {
      console.error("Error during search:", error);
      // Handle error (e.g., display a toast message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-800 text-white outline-none rounded-2xl hover:bg-blue-700 py-2 px-3 shadow-xl flex items-center gap-2"
      >
        <FontAwesomeIcon icon={filterIcon} />
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`p-4 rounded-lg shadow-lg max-w-md w-full h-auto relative transform transition-all duration-300 ease-in-out ${
              isAnimating ? "scale-100" : "scale-50 opacity-0"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute sm:bottom-55 bottom-80 rounded-lg px-3 right-10 text-red-600 hover:text-gray-900"
            >
              &#10005;
            </button>
            <FormSearch onSubmit={handleSearchSubmit} />{" "}
            {/* Pass the function to FormSearch */}
          </div>
        </div>
      )}

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white">
            Loading Data .....
          </div>
        </div>
      )}
    </div>
  );
}
