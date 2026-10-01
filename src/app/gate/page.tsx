"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GatePage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      setError("Wrong password");
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-ink text-white flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm border border-chrome rounded-xl p-8 bg-[#12151a]">
        <p className="font-display text-xs tracking-[0.25em] text-yellow mb-2">PREVIEW</p>
        <h1 className="font-display text-2xl uppercase tracking-wide mb-1">Hillz Auto Detailing</h1>
        <p className="text-muted text-sm mb-6">Enter the preview password to continue.</p>
        <label className="block text-sm mb-2" htmlFor="pw">Password</label>
        <input
          id="pw"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg bg-ink border border-chrome px-3 py-2.5 mb-3 outline-none focus:border-yellow"
          autoFocus
        />
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-yellow text-ink font-semibold py-2.5 hover:brightness-110 cursor-pointer"
        >
          {loading ? "Checking…" : "Enter preview"}
        </button>
      </form>
    </main>
  );
}
