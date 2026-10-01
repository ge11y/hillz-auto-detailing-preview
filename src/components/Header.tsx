"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { GOLDIE_BOOK, PHONE_DISPLAY, PHONE_TEL, SERVICE_LINKS } from "@/lib/site";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-chrome text-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-3">
        <Link href="/#home" className="flex items-center shrink-0" onClick={closeMobile}>
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
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <span className="text-[10px] opacity-70" aria-hidden>
                ▾
              </span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[260px] rounded-xl border border-chrome bg-ink shadow-xl py-2 z-50">
                {SERVICE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2.5 text-sm text-concrete hover:bg-chrome/40 hover:text-white"
                    onClick={() => setServicesOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/gallery" className="hover:text-white whitespace-nowrap">
            Gallery
          </Link>
          <Link href="/#areas" className="hover:text-white whitespace-nowrap">
            Service Areas
          </Link>
          <Link href="/contact" className="hover:text-white whitespace-nowrap">
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
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-chrome text-white hover:bg-chrome/40 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-14 z-50 flex flex-col bg-ink/98 backdrop-blur-md border-t border-chrome"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
            <Link
              href="/#home"
              className="block rounded-lg px-3 py-3 text-base text-white hover:bg-chrome/40"
              onClick={closeMobile}
            >
              Home
            </Link>

            <div className="rounded-lg border border-chrome/60 overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between px-3 py-3 text-base text-white hover:bg-chrome/40 cursor-pointer"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Services
                <span className="text-xs text-muted" aria-hidden>
                  {mobileServicesOpen ? "▴" : "▾"}
                </span>
              </button>
              {mobileServicesOpen && (
                <div className="border-t border-chrome/60 bg-ink/80 pb-1">
                  {SERVICE_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-5 py-2.5 text-sm text-concrete hover:bg-chrome/40 hover:text-white"
                      onClick={closeMobile}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="block rounded-lg px-3 py-3 text-base text-white hover:bg-chrome/40"
              onClick={closeMobile}
            >
              Gallery
            </Link>
            <Link
              href="/#areas"
              className="block rounded-lg px-3 py-3 text-base text-white hover:bg-chrome/40"
              onClick={closeMobile}
            >
              Service Areas
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-3 text-base text-white hover:bg-chrome/40"
              onClick={closeMobile}
            >
              Contact
            </Link>
          </nav>

          <div className="shrink-0 border-t border-chrome px-4 py-4 space-y-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href={GOLDIE_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg bg-yellow text-ink font-semibold text-base px-4 py-3 hover:brightness-110 cursor-pointer"
              onClick={closeMobile}
            >
              Book Online
            </a>
            <a
              href={PHONE_TEL}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-race text-white text-base px-4 py-3 hover:bg-race/20 cursor-pointer"
              onClick={closeMobile}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
