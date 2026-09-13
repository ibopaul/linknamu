import { NextResponse } from "next/server";
import clientPromise, {
  CLICKS_COLLECTION_NAME,
  CLICKS_DB_NAME,
} from "@/lib/mongodb";

type ClickDoc = {
  linkId: string;
  count: number;
};

export async function GET() {
  const client = await clientPromise;
  const collection = client
    .db(CLICKS_DB_NAME)
    .collection<ClickDoc>(CLICKS_COLLECTION_NAME);

  const docs = await collection.find({}).toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json(
      { error: "linkId가 필요합니다." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const collection = client
    .db(CLICKS_DB_NAME)
    .collection<ClickDoc>(CLICKS_COLLECTION_NAME);

  const updated = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ linkId, count: updated?.count ?? 1 });
}
