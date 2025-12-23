import { NextResponse } from "next/server";
import { dbClient } from "@/lib/mongodb";

export async function GET() {
  await dbClient.connect();
  const db = dbClient.db("testdb");

  const collections = await db.collections();

  return NextResponse.json({
    collections: collections.map(c => c.collectionName),
  });
}
