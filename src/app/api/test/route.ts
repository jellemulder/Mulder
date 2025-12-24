import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  const db = await getDb("testdb");

  const collections = await db.collections();

  return NextResponse.json({
    collections: collections.map(c => c.collectionName),
  });
}
