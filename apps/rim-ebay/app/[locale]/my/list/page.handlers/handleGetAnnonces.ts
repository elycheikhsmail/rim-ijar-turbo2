import prisma from '../../../../../lib/prisma'; 

export async function handleGetAnnonces(
  userId: string,
  locale: string,
  filters: Record<string, string | number | boolean | undefined> = {}
) {
  try {
    const annonces = await prisma.annonce.findMany({
      where: { 
        userId: userId
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        createdAt: true,
        updatedAt: true,
        typeAnnonceId: true,
        categorieId: true,
        lieuId: true,
        userId: true,
        contact: true,
        subcategorieId: true,
        typeAnnonce: true,
        categorie: true,
        subcategorie: true,
      },
    });


    return {
      pageAnnonceData: {
        annonces: annonces,
        totalPages: 1,
      },
      errorMessage: null,
    };
  } catch (error) {
    console.error('Error fetching annonces:', error);
    return {
      pageAnnonceData: null,
      errorMessage: 'Error fetching annonces',
    };
  }
}
