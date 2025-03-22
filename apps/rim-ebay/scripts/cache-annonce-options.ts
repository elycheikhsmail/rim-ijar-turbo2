import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";

async function main() {
  const typeAnnonces = await prisma.optionsModel.findMany({
    where: {
      tag: "typeAnnonce",
      depth: 1,
    },
  });
  fs.writeFile(
    "./data/typeAnnonce.json",
    JSON.stringify(typeAnnonces),
    (err) => {
      if (err) {
        console.error("Erreur lors de l'écriture dans le fichier:", err);
      } else {
        console.log("typeAnnonces écrit avec succès dans le fichier.");
      }
    },
  );

  const categories = await prisma.optionsModel.findMany({
    where: {
      tag: "category",
      depth: 2,
    },
  });
  fs.writeFile("./data/category.json", JSON.stringify(categories), (err) => {
    if (err) {
      console.error("Erreur lors de l'écriture dans le fichier:", err);
    } else {
      console.log("categories écrit avec succès dans le fichier.");
    }
  });

  const subcategories = await prisma.optionsModel.findMany({
    where: {
      tag: "subcategory",
      depth: 3,
    },
  });
  fs.writeFile(
    "./data/subCategory.json",
    JSON.stringify(subcategories),
    (err) => {
      if (err) {
        console.error("Erreur lors de l'écriture dans le fichier:", err);
      } else {
        console.log("subcategories écrit avec succès dans le fichier.");
      }
    },
  );

  console.log("cache completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
//   "cache": "node --loader ts-node/esm  scripts/cache-annonce-options.ts",
