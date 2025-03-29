import { MongoClient, GridFSBucket, ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/rim-ebay';
const dbName = 'rim-ebay';

async function connectMongo() {
  const client = new MongoClient(uri);
  await client.connect();
  return {
    db: client.db(dbName),
    bucket: new GridFSBucket(client.db(dbName), { bucketName: 'uploads' }),
    client
  };
}

export async function GET(req: NextRequest) {
  let client: MongoClient | null = null;
  let streamCreated = false;

  try {
    const { searchParams } = new URL(req.url);
    const imageId = searchParams.get('imageId');

    if (!imageId) {
      return NextResponse.json(
        { error: 'imageId est requis' }, 
        { status: 400 }
      );
    }

    if (!ObjectId.isValid(imageId)) {
      return NextResponse.json(
        { error: 'imageId invalide' }, 
        { status: 400 }
      );
    }

    const mongoConn = await connectMongo();
    client = mongoConn.client;
    const objectId = new ObjectId(imageId);

    const file = await mongoConn.bucket.find({ _id: objectId }).next();
    if (!file) {
      return NextResponse.json(
        { error: 'Image non trouvée' }, 
        { status: 404 }
      );
    }

    const nodeStream = mongoConn.bucket.openDownloadStream(objectId);
    streamCreated = true;

    // Conversion du flux Node.js en ReadableStream Web
    const webStream = new ReadableStream({
      start(controller) {
        nodeStream.on('data', (chunk) => controller.enqueue(chunk));
        nodeStream.on('end', () => {
          controller.close();
          client?.close(); // Fermeture après streaming
        });
        nodeStream.on('error', (err) => {
          controller.error(err);
          client?.close();
        });
      },
    });

    return new NextResponse(webStream, {
      headers: new Headers({
        'Content-Type': file.contentType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': file.length.toString(),
      })
    });

  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur de serveur' },
      { status: 500 }
    );
  } 
}