import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import QuoteForm from "@/components/QuoteForm";
import {
  ADDRESS_LINES,
  CONTACT_PHOTO,
  EMAIL,
  GOLDIE_BOOK,
  HOURS,
  MAPS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Hillz Auto Detailing",
  description: "Contact Hillz Auto Detailing — Hampstead, NH. Call, email, or request a free quote.",
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="bg-ink text-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm text-muted mb-2">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span>Contact</span>
            </p>
            <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wide leading-tight">
              Contact
            </h1>
            <p className="mt-3 text-muted max-w-xl">
              Ready to treat yourself? Call, book online, or send a free quote request.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={GOLDIE_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white px-5 py-3 hover:bg-white/10 cursor-pointer"
              >
                Book Online <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-concrete">
          <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-chrome/20 bg-white shadow-sm">
                <Image
                  src={CONTACT_PHOTO.src}
                  alt={CONTACT_PHOTO.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 28rem"
                  priority
                />
              </div>
              <div>
                <h2 className="font-display text-xl uppercase tracking-wide mb-3 inline-flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-race" aria-hidden /> Visit
                </h2>
                <p className="text-chrome/90">
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </p>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-race text-sm mt-2 inline-block hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h2 className="font-display text-xl uppercase tracking-wide mb-3 inline-flex items-center gap-2">
                  <Clock className="h-5 w-5 text-race" aria-hidden /> Hours
                </h2>
                <ul className="text-sm text-chrome/80 space-y-1.5">
                  {HOURS.map(([d, h]) => (
                    <li key={d} className="flex justify-between gap-4 max-w-[260px]">
                      <span>{d}</span>
                      <span className="text-ink font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted mt-3">Closed on major holidays</p>
              </div>

              <div>
                <h2 className="font-display text-xl uppercase tracking-wide mb-3 inline-flex items-center gap-2">
                  <Phone className="h-5 w-5 text-race" aria-hidden /> Reach us
                </h2>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 text-race font-semibold hover:underline cursor-pointer"
                >
                  <Phone className="h-4 w-4" aria-hidden /> {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-chrome/90 text-sm mt-2 hover:text-race hover:underline cursor-pointer"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {EMAIL}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-ink border border-chrome p-6 text-white shadow-xl">
              <h2 className="font-display text-xl uppercase tracking-wide mb-1">Free Quote</h2>
              <p className="text-muted text-sm mb-4">Tell us about your vehicle — add photos for a faster quote.</p>
              <QuoteForm dark />
            </div>
          </div>
        </section>

        <footer className="bg-ink text-white py-8">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="Hillz Auto Detailing"
              width={120}
              height={57}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xs text-muted">Preview only · Not indexed · © Hillz Auto Detailing LLC</span>
            <Link href="/privacy" className="text-xs text-concrete hover:text-yellow hover:underline">
              Privacy
            </Link>
          </div>
        </footer>
      </main>
      <MobileCallBar />
    </>
  );
}
