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
    return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDb("appdb");

    const visits = await db
      .collection("visits")
      .find({}, { projection: { ts: 1, path: 1, ua: 1 } })
      .sort({ ts: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json({
      ok: true,
      visits: visits.map(v => ({
        id: String(v._id),
        ts: v.ts,
        path: v.path,
        ua: v.ua,
      })),
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
  }
}
