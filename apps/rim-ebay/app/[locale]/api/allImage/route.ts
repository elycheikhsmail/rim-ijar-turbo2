// app/api/images/route.ts
import { NextResponse } from "next/server";
import { MongoClient, GridFSBucket } from "mongodb";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/rim-ebay";

export async function GET() {
  let client: MongoClient | null = null;

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db();
    const bucket = new GridFSBucket(db, { bucketName: "uploads" });

    // Récupération de tous les fichiers du bucket
    const files = await db.collection("uploads.files").find({}).toArray();

    // Formatage des résultats
    const images = files.map((file) => ({
      id: file._id.toString(),
      filename: file.filename,
      contentType: file.contentType,
      uploadDate: file.uploadDate.toISOString(),
      size: file.length,
      url: `http://localhost:3001/api/lieus?imageId=${file._id}`,
      metadata: file.metadata,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json(
      { error: "Erreur de récupération des images" },
      { status: 500 },
    );
  } finally {
    if (client) await client.close();
  }
}
