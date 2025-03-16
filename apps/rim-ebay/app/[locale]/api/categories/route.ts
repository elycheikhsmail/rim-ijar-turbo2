import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

// GET - Récupérer toutes les catégories
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const typeAnnonceId = searchParams.get('typeAnnonceId');
 
const categories = await prisma.optionsModel.findMany({
      where: typeAnnonceId ? {
        parentID:typeAnnonceId,
        depth: 2,
        tag: 'category' 
      } : undefined,
      orderBy: {
        priority: 'asc'
      }
    }); 

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des catégories" },
      { status: 500 }
    );
  }
}

// POST - Créer une nouvelle catégorie
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name,nameAr, priority, typeAnnonceId } = body;

    // Validation des données
    if (!name || priority === undefined || !typeAnnonceId) {
      return NextResponse.json(
        { error: "Tous les champs sont requis (name, priority, typeAnnonceId)" },
        { status: 400 }
      );
    }

    // Vérifier si le typeAnnonce existe
    const typeAnnonce = await prisma.optionsModel.findUnique({
      where: { id: typeAnnonceId }
    });

    if (!typeAnnonce) {
      return NextResponse.json(
        { error: "Type d'annonce non trouvé" },
        { status: 404 }
      );
    }

    // Créer la nouvelle catégorie
    const newCategory = await prisma.optionsModel.create({
      data: {
        name,
        nameAr,
        priority,
        parentID:typeAnnonceId,
        depth: 2,
        tag: 'category'
      }
       
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de la catégorie:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la catégorie" },
      { status: 500 }
    );
  }
}
