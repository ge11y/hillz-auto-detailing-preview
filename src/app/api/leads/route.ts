import { NextResponse } from "next/server";

const leads: Array<Record<string, string>> = [];

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone required" }, { status: 400 });
  }
  const row = { name, email, phone, message, at: new Date().toISOString() };
  leads.push(row);
  console.log("[lead]", row);
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ count: leads.length });
}
