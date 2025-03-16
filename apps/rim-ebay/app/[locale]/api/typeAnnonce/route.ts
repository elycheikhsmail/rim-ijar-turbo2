import { NextResponse } from 'next/server';
import prisma  from "../../../../lib/prisma"; // Assurez-vous que le chemin vers votre instance Prisma est correct

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const data = await request.json();

        // Create a new TypeAnnonce in the database
        const newTypeAnnonce = await prisma.optionsModel.create({
            data: {
                name: data.name,
                nameAr: data.nameAr,
                priority: data.priority,
                depth: data.depth,
                tag: data.tag,
            },
        });

        return NextResponse.json(newTypeAnnonce, { status: 201 });
    } catch (error) {
        console.error('Erreur lors de la création du TypeAnnonce:', error);
        return NextResponse.json({ error: 'Error creating TypeAnnonce', details: error }, { status: 500 });
    }
}

export async function GET(): Promise<NextResponse> {
    try {
        const typeAnnonces = await prisma.optionsModel.findMany({
            where: {
                tag: 'typeAnnonce',
                depth: 1,
            },
            select: {
                id: true,
                name: true,
                nameAr: true,
                priority: true,
                createdAt: true,
            },
            orderBy: {
                priority: 'asc',
            },
        }); 

        return NextResponse.json(typeAnnonces, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de la récupération des TypeAnnonces:', error);
        return NextResponse.json({ error: 'Error fetching TypeAnnonces', details: error }, { status: 500 });
    }
}
