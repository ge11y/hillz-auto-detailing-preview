"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const MAX_PHOTOS = 5;
const MAX_BYTES = 4 * 1024 * 1024; // ~4MB each

type PhotoItem = {
  id: string;
  file: File;
  previewUrl: string;
};

export default function QuoteForm({ dark = true }: { dark?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [note, setNote] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photosRef = useRef(photos);
  photosRef.current = photos;

  useEffect(() => {
    return () => {
      photosRef.current.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    };
  }, []);

  function clearPhotos() {
    setPhotos((prev) => {
      prev.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      return [];
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removePhoto(id: string) {
    setPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
    setPhotoError(null);
  }

  function onPhotosSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;

    setPhotoError(null);
    const remaining = MAX_PHOTOS - photos.length;
    if (remaining <= 0) {
      setPhotoError(`Maximum ${MAX_PHOTOS} photos.`);
      return;
    }

    const accepted: PhotoItem[] = [];
    const rejected: string[] = [];

    for (const file of files) {
      if (accepted.length >= remaining) {
        rejected.push(`${file.name} (limit ${MAX_PHOTOS})`);
        continue;
      }
      if (!file.type.startsWith("image/")) {
        rejected.push(`${file.name} (not an image)`);
        continue;
      }
      if (file.size > MAX_BYTES) {
        rejected.push(`${file.name} (over 4MB)`);
        continue;
      }
      accepted.push({
        id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2)}`,
        file,
        previewUrl: URL.createObjectURL(file),
      });
    }

    if (accepted.length) {
      setPhotos((prev) => [...prev, ...accepted]);
    }
    if (rejected.length) {
      setPhotoError(
        rejected.length === 1
          ? `Couldn’t add ${rejected[0]}.`
          : `Skipped: ${rejected.join("; ")}.`,
      );
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setNote(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    for (const photo of photos) {
      formData.append("photos", photo.file);
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        note?: string;
      };
      setLoading(false);
      if (!res.ok || !data.ok) {
        setStatus("err");
        return;
      }
      setStatus("ok");
      if (data.note) setNote(data.note);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      clearPhotos();
      setPhotoError(null);
    } catch {
      setLoading(false);
      setStatus("err");
    }
  }

  const field = dark
    ? "w-full rounded-lg bg-ink border border-chrome px-3 py-2.5 text-white outline-none focus:border-yellow"
    : "w-full rounded-lg bg-white border border-concrete px-3 py-2.5 outline-none focus:border-race";

  const fileBtn = dark
    ? "inline-flex cursor-pointer items-center rounded-lg border border-chrome bg-ink px-3 py-2 text-sm text-white hover:border-yellow"
    : "inline-flex cursor-pointer items-center rounded-lg border border-concrete bg-white px-3 py-2 text-sm hover:border-race";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Name</label>
        <input className={field} value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Email</label>
        <input
          className={field}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Phone</label>
        <input className={field} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Message</label>
        <textarea className={field + " min-h-[88px]"} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">
          Photos of your vehicle (optional)
        </label>
        <p className="text-xs text-muted mb-2">
          Helps us quote accurately — exterior, problem areas, etc. Max {MAX_PHOTOS} photos, ~4MB each.
        </p>
        <label className={fileBtn}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={onPhotosSelected}
            disabled={photos.length >= MAX_PHOTOS}
          />
          {photos.length >= MAX_PHOTOS ? "Photo limit reached" : "Add photos"}
        </label>
        {photos.length > 0 && (
          <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {photos.map((photo) => (
              <li key={photo.id} className="relative aspect-square overflow-hidden rounded-lg border border-chrome">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.previewUrl}
                  alt={photo.file.name}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(photo.id)}
                  aria-label={`Remove ${photo.file.name}`}
                  className="absolute right-1 top-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-ink/85 text-white hover:bg-yellow hover:text-ink"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
        {photoError && <p className="mt-2 text-sm text-red-400">{photoError}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-yellow text-ink font-semibold py-3 hover:brightness-110 cursor-pointer"
      >
        {loading ? "Sending…" : "Send"}
      </button>
      {status === "ok" && (
        <p className="text-sm text-green-400">
          Thanks — we got your request.
          {note ? ` ${note}` : ""}
        </p>
      )}
      {status === "err" && (
        <p className="text-sm text-red-400">
          Something went wrong.{" "}
          <a href="tel:6032350453" className="underline hover:text-yellow">
            Call 603-235-0453
          </a>
          .
        </p>
      )}
    </form>
  );
}
