import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Phone, ArrowRight, Shield } from "lucide-react";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: "System X Ceramic Protection | Hillz Auto Detailing",
  description: "Professional grade System X Ceramic Protection — Hampstead, NH",
  robots: { index: false, follow: false },
};

const PHONE = "603-235-0453";

type Product = {
  name: string;
  tagline: string;
  src: string;
  bullets: string[];
};

const PRODUCTS: Product[] = [
  {
    name: "System X LVP™",
    tagline: "Leather, vinyl & plastic",
    src: "/assets/products/LVP.webp",
    bullets: [
      "Flexible nano coating for leather, vinyl, and plastic",
      "Helps resist spills and stains",
      "Keeps a natural look and feel",
      "3-year interior protection",
    ],
  },
  {
    name: "System X Glass+™",
    tagline: "Ceramic nano for glass",
    src: "/assets/products/GLASS.webp",
    bullets: [
      "Ceramic nano coating for glass surfaces",
      "Clarity that stays sharp",
      "Hydrophobic water beading",
      "Better visibility in the rain",
    ],
  },
  {
    name: "System X Wheel™",
    tagline: "Ultra Gloss wheel ceramic",
    src: "/assets/products/UG.webp",
    bullets: [
      "Brake dust and corrosion resistance",
      "Strong hydrophobic properties",
      "UV and stain defense",
      "Ultra gloss finish for wheels",
    ],
  },
  {
    name: "System X Revive™",
    tagline: "Restore faded plastic & trim",
    src: "/assets/products/revive.webp",
    bullets: [
      "Restores faded plastic and trim",
      "UV protection plus hydrophobic shield",
      "Deep blacks that last",
    ],
  },
  {
    name: "System X Textile™",
    tagline: "Carpet & fabric barrier",
    src: "/assets/products/textile.webp",
    bullets: [
      "Barrier for carpet and fabric",
      "Spills bead instead of soaking in",
      "Keeps the look and feel of your interior",
    ],
  },
];

const RELATED = [
  { src: "/assets/services/system-x-ceramic.webp", alt: "System X ceramic" },
  { src: "/assets/paint-correction.webp", alt: "Paint correction" },
  { src: "/assets/buffing.webp", alt: "Buffing" },
  { src: "/assets/exterior-detail.webp", alt: "Exterior detail" },
  { src: "/assets/vette.webp", alt: "Corvette detail" },
  { src: "/assets/car-detailing.webp", alt: "Car detailing" },
];

export default function SystemXPage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Intro */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 md:pb-16">
            <p className="text-sm text-muted mb-2">
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span>System X Ceramic Protection</span>
            </p>
            <div className="inline-flex items-center gap-2 text-yellow mb-4">
              <Shield className="h-5 w-5" aria-hidden />
              <span className="text-xs uppercase tracking-wide font-semibold">
                System-X Ceramic Protection Max G+
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wide leading-tight max-w-3xl mb-5">
              System X Ceramic Protection
            </h1>
            <p className="text-white/85 max-w-2xl mb-3 text-base md:text-lg">
              Professional grade System X Ceramic Protection offered in 3/6/10 years —
              superior protection, high gloss, hydrophobic shell, easy yearly maintenance.
            </p>
            <p className="text-muted text-sm max-w-2xl mb-6">
              Coatings are priced with a standard prep. Contact for a quote. Warranty with
              proper care, and reporting to your vehicle&apos;s Carfax report.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="tel:6032350453"
                className="inline-flex items-center gap-2 rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call {PHONE}
              </a>
              <Link
                href="/#quote"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white px-5 py-3 hover:bg-white/10 cursor-pointer"
              >
                Get Free Quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href="https://www.systemx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-yellow font-semibold hover:underline px-2"
              >
                systemx.com <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* Staggered product blocks */}
        <section className="bg-concrete">
          {PRODUCTS.map((product, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div
                key={product.name}
                className={`border-b border-chrome/10 ${i % 2 === 1 ? "bg-card" : "bg-concrete"}`}
              >
                <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className={imageLeft ? "" : "md:order-2"}>
                      <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-chrome/20 bg-ink shadow-sm">
                        <Image
                          src={product.src}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width:768px) 100vw, 50vw"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                    <div className={imageLeft ? "" : "md:order-1"}>
                      <p className="text-xs uppercase tracking-wide font-semibold text-race mb-2">
                        {product.tagline}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-ink mb-4 leading-tight">
                        {product.name}
                      </h2>
                      <ul className="space-y-2.5 text-chrome/90">
                        {product.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow"
                              aria-hidden
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Related gallery — compact so it doesn't crowd products */}
        <section className="py-10 md:py-12 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-xl uppercase tracking-wide mb-4 text-ink">
              Related work
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {RELATED.map((shot) => (
                <div
                  key={shot.src}
                  className="relative aspect-square rounded-lg overflow-hidden border border-concrete bg-ink"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-card border-y border-concrete py-12">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display uppercase tracking-wide text-lg mb-1">
                Ready for System X?
              </h2>
              <p className="text-sm text-chrome/80">Contact for a quote — Hampstead, NH.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:6032350453"
                className="inline-flex items-center gap-2 rounded-lg bg-race text-white font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call {PHONE}
              </a>
              <Link
                href="/#quote"
                className="inline-flex rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                Get Free Quote
              </Link>
              <a
                href="https://www.systemx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-race font-semibold hover:underline self-center"
              >
                systemx.com <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
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
              className="h-12 w-auto object-contain"
            />
            <div className="text-xs text-muted">
              Preview only · Not indexed · © Hillz Auto Detailing LLC
              <div className="mt-1 flex flex-wrap gap-3">
                <a href="tel:6032350453" className="text-yellow hover:underline">
                  {PHONE}
                </a>
                <Link href="/privacy" className="text-concrete hover:text-yellow hover:underline">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <MobileCallBar />
    </>
  );
}
