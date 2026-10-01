"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Phone } from "lucide-react";
import { GOLDIE_BOOK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
const SERVICE_LINKS = [
  { href: "/#services", label: "Overview" },
  { href: "/services/system-x-ceramic-protection", label: "System X Ceramic Protection" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/exterior-detail", label: "Exterior Detail" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-chrome text-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-3">
        <Link href="/#home" className="flex items-center shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Hillz Auto Detailing"
            width={168}
            height={80}
            className="h-10 md:h-11 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-muted ml-2">
          <Link href="/#home" className="hover:text-white whitespace-nowrap">
            Home
          </Link>
          <div className="relative" ref={wrapRef}>
            <button
              type="button"
              className="hover:text-white whitespace-nowrap inline-flex items-center gap-1 cursor-pointer"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
            >
              Services
              <span className="text-[10px] opacity-70" aria-hidden>
                ▾
              </span>
            </button>
            {open && (
              <div className="absolute left-0 top-full mt-2 min-w-[260px] rounded-xl border border-chrome bg-ink shadow-xl py-2 z-50">
                {SERVICE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2.5 text-sm text-concrete hover:bg-chrome/40 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/#gallery" className="hover:text-white whitespace-nowrap">
            Gallery
          </Link>
          <Link href="/#areas" className="hover:text-white whitespace-nowrap">
            Service Areas
          </Link>
          <Link href="/#contact" className="hover:text-white whitespace-nowrap">
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <a
            href={GOLDIE_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-yellow text-ink font-semibold text-sm px-3 py-2 whitespace-nowrap hover:brightness-110 cursor-pointer"
          >
            Book Online
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-race text-white text-sm px-3 py-2 whitespace-nowrap hover:bg-race/20 cursor-pointer"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </header>
  );
}
