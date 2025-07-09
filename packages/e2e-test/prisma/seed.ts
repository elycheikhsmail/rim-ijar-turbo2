import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
console.log("🚀 Initialisation du seeding...");
console.log("🔌 Connexion à la base de données...");
console.log("chaine de connexion : ", process.env.DATABASE_URL);
async function main() {
  console.log("🚀 Début du seeding...");

  // 🛑 Supprimer les anciennes données
  await prisma.annonce.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.optionsModel.deleteMany({});

  // 🏷️ Types d'annonces
  const typesAnnoncesData = [
    { name: "Vente", nameAr: "بيع" },
    { name: "Location", nameAr: "الإيجار" },
    { name: "Service", nameAr: "خدمة" },
    { name: "Autres", nameAr: "أنواع أخرى" },
  ];

  const typeAnnonces = await Promise.all(
    typesAnnoncesData.map((type, index) =>
      prisma.optionsModel.create({
        data: { ...type, priority: index + 1, depth: 1, tag: "typeAnnonce" },
      }),
    ),
  );

  console.log("✅ Types d'annonces insérés.");

  // 🏷️ Catégories associées aux types d'annonces
  const categoriesData = [
    { name: "Véhicules", nameAr: "المركبات", parentType: "Vente" },
    { name: "Immobilier", nameAr: "العقارات", parentType: "Location" },
    { name: "Électronique", nameAr: "إلكترونيات", parentType: "Vente" },
    { name: "Emploi", nameAr: "وظائف", parentType: "Service" },
  ];

  const categories = await Promise.all(
    categoriesData.map(async (category, index) => {
      const parentType = typeAnnonces.find(
        (t) => t.name === category.parentType,
      );
      return prisma.optionsModel.create({
        data: {
          name: category.name,
          nameAr: category.nameAr,
          parentID: parentType?.id,
          priority: index + 1,
          depth: 2,
          tag: "category",
        },
      });
    }),
  );

  console.log("✅ Catégories insérées.");

  // 🏷️ Sous-catégories associées aux catégories
  const subCategoriesData = [
    { name: "Voitures", nameAr: "السيارات", parentCategory: "Véhicules" },
    { name: "Motos", nameAr: "دراجات نارية", parentCategory: "Véhicules" },
    { name: "Appartements", nameAr: "شقق", parentCategory: "Immobilier" },
    { name: "Maisons", nameAr: "منازل", parentCategory: "Immobilier" },
    { name: "Ordinateurs", nameAr: "حواسيب", parentCategory: "Électronique" },
    { name: "Téléphones", nameAr: "هواتف", parentCategory: "Électronique" },
    { name: "Offres d'emploi", nameAr: "عروض العمل", parentCategory: "Emploi" },
    { name: "Freelance", nameAr: "العمل الحر", parentCategory: "Emploi" },
  ];

  const subCategories = await Promise.all(
    subCategoriesData.map(async (subCategory, index) => {
      const parentCategory = categories.find(
        (c) => c.name === subCategory.parentCategory,
      );
      return prisma.optionsModel.create({
        data: {
          name: subCategory.name,
          nameAr: subCategory.nameAr,
          parentID: parentCategory?.id,
          priority: index + 1,
          depth: 3,
          tag: "subcategory",
        },
      });
    }),
  );

  console.log("✅ Sous-catégories insérées.");

  // 👤 Utilisateurs
  const hashedPassword = await bcrypt.hash("password123", 10);
  const users = await Promise.all(
    [
      "ali@example.com",
      "fatima@example.com",
      "omar@example.com",
      "khadija@example.com",
    ].map((email) =>
      prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          createdAt: new Date(),
          lastLogin: new Date(),
          isActive: true,
        },
      }),
    ),
  );

  console.log("✅ Utilisateurs insérés.");

  // 📢 Génération d'annonces aléatoires
  const annoncesData = [];
  const titles = [
    "Super voiture à vendre",
    "Appartement luxueux à louer",
    "Offre spéciale sur les téléphones",
    "Maison spacieuse en centre-ville",
    "Travail freelance bien rémunéré",
  ];
  const descriptions = [
    "En excellent état, peu utilisé.",
    "Prix négociable, contactez-moi.",
    "Idéal pour les étudiants et les familles.",
    "Livraison gratuite incluse.",
    "Opportunité unique, à ne pas rater.",
  ];

  for (let i = 0; i < 50; i++) {
    // 🔹 Sélectionner un typeAnnonce aléatoire
    const randomType =
      typeAnnonces[Math.floor(Math.random() * typeAnnonces.length)];
    if (!randomType) continue; // Skip if no valid type is found

    // 🔹 Sélectionner une catégorie liée au typeAnnonce choisi
    const filteredCategories = categories.filter(
      (c) => c.parentID === randomType.id,
    );
    if (filteredCategories.length === 0) continue; // Éviter les erreurs si pas de catégorie liée
    const randomCategory =
      filteredCategories[Math.floor(Math.random() * filteredCategories.length)];
    if (!randomCategory) continue; // Skip if no valid category is found

    // 🔹 Sélectionner une sous-catégorie liée à la catégorie choisie
    const filteredSubCategories = subCategories.filter(
      (s) => s.parentID === randomCategory.id,
    );
    const randomSubCategory =
      filteredSubCategories.length > 0
        ? filteredSubCategories[
            Math.floor(Math.random() * filteredSubCategories.length)
          ]
        : null;

    // 🔹 Sélectionner un utilisateur aléatoire
    const randomUser = users[Math.floor(Math.random() * users.length)];
    if (!randomUser) continue; // Skip if no valid user is found
    const randomTitle =
      titles[Math.floor(Math.random() * titles.length)] || "Annonce sans titre";
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)] ||
      "Pas de description";
    const randomPrice = Math.floor(Math.random() * 50000) + 500; // Prix entre 500 et 50000

    await prisma.annonce.create({
      data: {
        typeAnnonceId: randomType.id,
        categorieId: randomCategory.id,
        subcategorieId: randomSubCategory ? randomSubCategory.id : "",
        lieuId: randomCategory.id, // Utilisation de la catégorie comme lieu pour l'exemple
        userId: randomUser.id,
        title: randomTitle,
        description: randomDescription,
        price: randomPrice,
        contact: "+2224" + Math.floor(Math.random() * 1000000),
        haveImage: Math.random() > 0.5,
        firstImagePath: "/images/sample" + i + ".jpg",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),

        // ✅ Ajouter les objets complets en JSON
        // typeAnnonce: randomType,
        // categorie: randomCategory,
        // subcategorie: randomSubCategory,
      },
    });
  }

  console.log(`✅ 50 annonces insérées.`);
  console.log("🎉 Seeding terminé avec succès !");
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors du seeding :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
