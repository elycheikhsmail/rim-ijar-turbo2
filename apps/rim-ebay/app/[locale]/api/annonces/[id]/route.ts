// app/api/annonces/[id]/route.ts
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = "rim-ebay";

async function connectToMongo() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return { client, db };
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  let client;
  try {
    const annonceId = params.id;

    // Vérifier que l'ID est un ObjectId valide
    if (!ObjectId.isValid(annonceId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const { client: mongoClient, db } = await connectToMongo();
    client = mongoClient;

    // Convertir l'ID string en ObjectId et rechercher l'annonce
    const annonce = await db.collection("Annonce").findOne({
      _id: new ObjectId(annonceId),
    });

    console.log("annonce api (MongoDB) ::::: ", annonce);

    if (!annonce) {
      return NextResponse.json({ error: "Annonce not found" }, { status: 404 });
    }

    return NextResponse.json(annonce, { status: 200 });
  } catch (error) {
    console.error("Error getting annonce from MongoDB:", error);
    return NextResponse.json(
      { error: "Error getting annonce" },
      { status: 500 },
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
