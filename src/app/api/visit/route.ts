import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const db = await getDb("appdb");

    const doc = {
      ts: new Date(),
      path: typeof body.path === "string" ? body.path : null,
      ref: typeof body.ref === "string" ? body.ref : null,
      ua: typeof body.ua === "string" ? body.ua.slice(0, 200) : null,
    };

    await db.collection("visits").insertOne(doc);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "unknown error" },
      { status: 500 }
    );
  }
}
