"use client";

import { useState } from "react";

export default function QuoteForm({ dark = true }: { dark?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, message }),
    });
    setLoading(false);
    if (!res.ok) {
      setStatus("err");
      return;
    }
    setStatus("ok");
    setName("");
    setPhone("");
    setMessage("");
  }

  const field = dark
    ? "w-full rounded-lg bg-ink border border-chrome px-3 py-2.5 text-white outline-none focus:border-yellow"
    : "w-full rounded-lg bg-white border border-concrete px-3 py-2.5 outline-none focus:border-race";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Name</label>
        <input className={field} value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Phone</label>
        <input className={field} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wider text-muted mb-1">Message</label>
        <textarea className={field + " min-h-[88px]"} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-yellow text-ink font-semibold py-3 hover:brightness-110 cursor-pointer"
      >
        {loading ? "Sending…" : "Send"}
      </button>
      {status === "ok" && <p className="text-sm text-green-400">Thanks — we got your request.</p>}
      {status === "err" && <p className="text-sm text-red-400">Something went wrong. Call (603) 235-0453.</p>}
    </form>
  );
}
