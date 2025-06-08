import { NextRequest, NextResponse } from "next/server";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import { Readable } from "stream";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/rim-ebay";
const dbName = "rim-ebay";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function connectMongo() {
  const client = new MongoClient(uri);
  await client.connect();
  return {
    db: client.db(dbName),
    bucket: new GridFSBucket(client.db(dbName), {
      bucketName: "uploads",
    }),
    client,
  };
}

export async function POST(req: NextRequest) {
  let client: MongoClient | null = null;

  try {
    const formData = await req.formData();
    const annonceId = formData.get("annonceId");
    if (typeof annonceId !== "string") {
      return NextResponse.json(
        { error: "L'ID de l'annonce est invalide" },
        { status: 400 },
      );
    }
    const file = formData.get("file") as File;

    if (!annonceId || !file) {
      return NextResponse.json(
        { error: "Paramètres manquants" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const nodeStream = Readable.from(buffer);

    const { db, bucket, client: mongoClient } = await connectMongo();
    client = mongoClient;

    const uploadStream = bucket.openUploadStream(file.name, {
      contentType: file.type,
      metadata: { annonceId },
    });

    await new Promise((resolve, reject) => {
      nodeStream.pipe(uploadStream).on("finish", resolve).on("error", reject);
    });

    const uploadedFile = await db.collection("uploads.files").findOne({
      _id: uploadStream.id,
    });

    if (!uploadedFile) {
      throw new Error("Échec de la vérification MongoDB");
    }

    const imageUrl = `http://localhost:3000/fr/api/lieus/?imageId=${uploadStream.id.toString()}`;

    await db.collection("Annonce").updateOne(
      { _id: new ObjectId(annonceId) },
      {
        $set: { haveImage: true },
        $push: { imageAnnonce: { $each: [imageUrl] } } as any,
      },
    );

    return NextResponse.json({
      success: true,
      fileId: uploadStream.id.toString(),
      imageUrl,
    });
  } catch (error) {
    console.error("ERREUR COMPLÈTE:", error);
    return NextResponse.json(
      { error: "Échec technique (consultez les logs serveur)" },
      { status: 500 },
    );
  } finally {
    if (client) {
      setTimeout(() => client?.close(), 2000);
    }
  }
}
