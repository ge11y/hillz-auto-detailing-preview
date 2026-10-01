import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_PHOTO_BYTES = 4 * 1024 * 1024; // ~4MB each
const MAX_PHOTOS = 5;
/** Soft cap on total base64 payload kept on the lead (~12MB of raw bytes before b64 overhead). */
const MAX_TOTAL_PHOTO_BYTES = 12 * 1024 * 1024;

type LeadPhoto = {
  name: string;
  type: string;
  size: number;
  dataUrl: string;
};

type LeadRow = {
  name: string;
  email: string;
  phone: string;
  message: string;
  at: string;
  photoCount: number;
  photos: LeadPhoto[];
  skippedPhotos: string[];
};

const leads: LeadRow[] = [];

async function fileToDataUrl(file: File): Promise<string> {
  const buf = Buffer.from(await file.arrayBuffer());
  const b64 = buf.toString("base64");
  const type = file.type || "application/octet-stream";
  return `data:${type};base64,${b64}`;
}

async function maybeEmailLead(lead: LeadRow) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const attachments = lead.photos.map((p) => ({
    filename: p.name || "photo.jpg",
    content: p.dataUrl.split(",")[1] || "",
  }));

  const text = [
    `New quote request from Hillz peek site`,
    ``,
    `Name: ${lead.name}`,
    `Email: ${lead.email || "(none)"}`,
    `Phone: ${lead.phone}`,
    `Message: ${lead.message || "(none)"}`,
    `Photos attached: ${lead.photos.length}`,
    lead.skippedPhotos.length
      ? `Skipped photos: ${lead.skippedPhotos.join("; ")}`
      : null,
    `Submitted: ${lead.at}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hillz Peek <onboarding@resend.dev>",
        to: ["hillzautodetailing@gmail.com"],
        subject: `Quote request — ${lead.name}`,
        text,
        attachments: attachments.length ? attachments : undefined,
      }),
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[lead] Resend email failed", res.status, errText);
    } else {
      console.log("[lead] emailed via Resend");
    }
  } catch (err) {
    console.error("[lead] Resend email error", err);
  }
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
  }

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone required" }, { status: 400 });
  }

  const rawPhotos = form
    .getAll("photos")
    .filter((v): v is File => typeof File !== "undefined" && v instanceof File && v.size > 0);

  const photos: LeadPhoto[] = [];
  const skippedPhotos: string[] = [];
  let totalBytes = 0;

  for (const file of rawPhotos.slice(0, MAX_PHOTOS)) {
    const label = file.name || "photo";
    if (!file.type.startsWith("image/")) {
      skippedPhotos.push(`${label} (not an image)`);
      continue;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      skippedPhotos.push(`${label} (over 4MB)`);
      continue;
    }
    if (totalBytes + file.size > MAX_TOTAL_PHOTO_BYTES) {
      skippedPhotos.push(`${label} (payload limit)`);
      continue;
    }
    try {
      const dataUrl = await fileToDataUrl(file);
      photos.push({
        name: label,
        type: file.type || "image/jpeg",
        size: file.size,
        dataUrl,
      });
      totalBytes += file.size;
    } catch {
      skippedPhotos.push(`${label} (read failed)`);
    }
  }

  if (rawPhotos.length > MAX_PHOTOS) {
    for (const file of rawPhotos.slice(MAX_PHOTOS)) {
      skippedPhotos.push(`${file.name || "photo"} (limit ${MAX_PHOTOS})`);
    }
  }

  const row: LeadRow = {
    name,
    email,
    phone,
    message,
    at: new Date().toISOString(),
    photoCount: photos.length,
    photos,
    skippedPhotos,
  };

  leads.push(row);

  console.log("[lead]", {
    name: row.name,
    email: row.email,
    phone: row.phone,
    message: row.message,
    at: row.at,
    photoCount: row.photoCount,
    photos: row.photos.map((p) => ({ name: p.name, type: p.type, size: p.size })),
    skippedPhotos: row.skippedPhotos,
  });

  await maybeEmailLead(row);

  const note =
    skippedPhotos.length > 0
      ? "Some photos were skipped due to size or limits — we still got your request."
      : undefined;

  return NextResponse.json({ ok: true, ...(note ? { note } : {}) });
}

export async function GET() {
  return NextResponse.json({ count: leads.length });
}
