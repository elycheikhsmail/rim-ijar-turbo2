import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from 'url';
import { URL } from 'url';

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the base directory for your optionsModel data
const BASE_DATA_DIR = path.join(__dirname, "seed_data");
const ANNONCE_DATA_PATH = path.join(__dirname, "seed_data", "annonces", "data.json");

async function processOptionsModelFile(filePath: string, parentId: string | null, depth: number) {
  console.log("  start seed options        ")
  console.log("=============================================")
  console.log("  filePath", filePath)
  console.log("  parentId", parentId)
  console.log("  depth", depth)
  try {
    await fs.access(filePath);
    const rawData = await fs.readFile(filePath, "utf-8");
    const optionsModels = JSON.parse(rawData) as { 
      name: string; 
      nameAr: string; 
      priority: number; 
      tag: string; 
      parentName?: string 
    }[];

    for (const optionsModel of optionsModels) {
      console.log("optionsModel", optionsModel);
      let actualParentId = parentId;
      if (optionsModel.parentName) {
        const parentOptionsModel = await prisma.optionsModel.findFirst({
          where: { name: optionsModel.parentName },
        });

        if (parentOptionsModel) {
          actualParentId = parentOptionsModel.id;
        }
      }

      await prisma.optionsModel.create({
        data: {
          //...optionsModel,
          name: optionsModel.name,
          nameAr: optionsModel.nameAr,
          priority: optionsModel.priority,
          tag: optionsModel.tag,
          parentID: actualParentId,
          depth: depth,
        },
      });
    }
  } catch (error) {
    // No optionsModels.json file present or error processing it
    if ((error as { code?: string }).code !== 'ENOENT') {
      console.error("Error processing options model file:", filePath, error);
    }
  }
}

// Recursive function to seed optionsModels from the directory structure
async function seedOptionsModels(dirPath: string, parentId: string | null = null, depth: number = 0) {
  try {
    const items = await fs.readdir(dirPath);

    // First, process the optionsModels.json file in current directory
    const optionsModelPath = path.join(dirPath, "optionsModels.json");
    await processOptionsModelFile(optionsModelPath, parentId, depth);

    // Then, process subdirectories
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = await fs.stat(itemPath);

      if (stat.isDirectory()) {
        // Get the parent optionsModel for this directory
        const parentOptionsModel = await prisma.optionsModel.findFirst({
          where: {
            parentID: parentId,
            name: item,  // assuming directory name matches the optionsModel name
          },
        });

        // Recursively process subdirectories with the correct parent ID
        await seedOptionsModels(itemPath, parentOptionsModel?.id || parentId, depth+1);
      }
    }
  } catch (error) {
    console.error("Error reading directory:", dirPath, error);
  }
}

async function main() {
  // Clear existing data in a specific order
  await prisma.annonce.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.optionsModel.deleteMany({});
   // Seed optionsModels from the directory structure
   await seedOptionsModels(BASE_DATA_DIR);
   console.log("  end seed options        ")
   console.log("=============================================")
   
  // Seed Users
  const hashedPassword = await bcrypt.hash("password123", 10); // Hash the password
  const user1 = await prisma.user.create({
    data: {
      email: "ali@example.com",
      password: hashedPassword,
      createdAt: new Date(),
      lastLogin: new Date(),
      isActive: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "fatima@example.com",
      password: hashedPassword,
      createdAt: new Date(),
      lastLogin: new Date(),
      isActive: true,
    },
  });

 
  try {
    const rawAnnonceData = await fs.readFile(ANNONCE_DATA_PATH, "utf-8");
    const annonceData = JSON.parse(rawAnnonceData) as any[];

    for (const annonce of annonceData) {
      // Dynamically retrieve the corresponding optionsModels based on annonce data
      const typeAnnonce = await prisma.optionsModel.findFirst({ where: { name: annonce.typeAnnonceName } });
      console.log("typeAnnonce", typeAnnonce);
      const categorie = await prisma.optionsModel.findFirst({ where: { name: annonce.categorieName } });
      console.log("categorie", categorie);
      const subcategorie = await prisma.optionsModel.findFirst({ where: { name: annonce.subcategorieName } });
      console.log("subcategorie", subcategorie);
      
      if (!typeAnnonce || !categorie || !subcategorie) {
        console.error("OptionsModels not found for annonce:", annonce);
        continue;
      }

      await prisma.annonce.create({
        data: {
          typeAnnonceId: typeAnnonce.id,
          categorieId: categorie.id,
          lieuId: categorie.id,
          userId: user1.id,
          subcategorieId: subcategorie.id,
          title: annonce.title,
          description: annonce.description,
          price: annonce.price,
          contact: annonce.contact,
          haveImage: annonce.haveImage,
          firstImagePath: annonce.firstImagePath,
          status: annonce.status,
          createdAt: new Date(),
          updatedAt: new Date(),
          typeAnnonce: typeAnnonce,
          categorie: categorie,
        },
      });
    }
  } catch (error) {
    console.error("Error reading annonce data:", error);
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
