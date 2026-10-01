import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import QuoteForm from "@/components/QuoteForm";
import Gallery from "@/components/Gallery";
import { EMAIL, GALLERY_SHOTS, GOLDIE_BOOK, HOURS, PHONE_TEL } from "@/lib/site";

const PHONE = "603-235-0453";
const MAPS =
  "https://www.google.com/maps/place/?q=place_id:ChIJHzlrNPGr44kRDMT2WsqFQD8";


const TRUST_CHIPS: Array<{ title: string; detail: string; href?: string }> = [
  { title: "4.8★ Google", detail: "17 reviews on Google", href: MAPS },
  { title: "Women-Owned", detail: "Identifies as women-owned on Google" },
  { title: "Licensed & Insured", detail: "Peace of mind on every visit" },
  { title: "Locally Owned", detail: "Hampstead, NH" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* HERO */}
        <section id="home" className="relative min-h-[88vh] flex items-stretch overflow-hidden">
          <Image
            src="/photos/hero.jpg"
            alt="Hillz Auto Detailing shop — detailed vehicles in hangar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/55" />
          <div className="relative z-10 mx-auto max-w-6xl w-full px-4 py-16 pb-36 md:py-24 md:pb-36 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight tracking-wide">
                Hillz Auto Detailing LLC
              </h1>
              <p className="mt-3 text-xl text-yellow font-semibold">Ready to treat yourself?</p>
              <p className="mt-4 text-lg md:text-xl text-white max-w-xl leading-snug">
                We do everything to get your car, plane, RV or Boat ready to show off!
              </p>
              <p className="mt-3 text-sm text-concrete max-w-md">
                Hampstead, NH · Women-owned · 4.8★ from 17 Google reviews
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
                >
                  <Phone className="h-4 w-4" aria-hidden /> Call To Schedule
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
            <div id="quote" className="rounded-2xl bg-ink/90 border border-chrome p-6 text-white shadow-2xl">
              <h2 className="font-display text-xl uppercase tracking-wide mb-1">Free Quote</h2>
              <p className="text-muted text-sm mb-4">Tell us about your vehicle — we&apos;ll follow up.</p>
              <QuoteForm dark />
            </div>
          </div>

          <aside
            aria-labelledby="hero-trust-heading"
            className="absolute inset-x-0 bottom-0 z-20 border-y border-white/10 bg-ink/95 shadow-[0_-10px_30px_rgba(11,13,16,0.25)] backdrop-blur-sm"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 md:py-4">
              <h2 id="hero-trust-heading" className="sr-only">Why Us</h2>
              <div className="trust-chip-scroll -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1">
                {TRUST_CHIPS.map((chip) => {
                  const content = (
                    <>
                      <span className="mb-1 block font-display text-sm uppercase tracking-wide text-yellow">
                        {chip.title}
                      </span>
                      <span className="block text-sm leading-snug text-white/80">{chip.detail}</span>
                    </>
                  );

                  return chip.href ? (
                    <a
                      key={chip.title}
                      href={chip.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group min-w-[min(82vw,300px)] shrink-0 snap-start rounded-xl border border-white/15 border-l-2 border-l-yellow bg-black/20 p-3 transition-colors hover:border-yellow/70 hover:bg-white/10 md:min-w-0 md:flex-1"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={chip.title}
                      className="min-w-[min(82vw,300px)] shrink-0 snap-start rounded-xl border border-white/15 border-l-2 border-l-race bg-black/20 p-3 md:min-w-0 md:flex-1"
                    >
                      {content}
                    </div>
                  );
                })}
                <div className="min-w-[min(82vw,300px)] shrink-0 snap-start rounded-xl border border-white/15 border-l-2 border-l-yellow bg-black/20 p-3 md:min-w-0 md:flex-1">
                  <span className="mb-1 block font-display text-sm uppercase tracking-wide text-yellow">
                    Free Quotes
                  </span>
                  <span className="block text-sm leading-snug text-white/80">
                    Call or send a message — no obligation
                  </span>
                  <span className="mt-2 flex gap-3 text-xs font-semibold">
                    <a href={PHONE_TEL} className="text-yellow hover:underline">Call</a>
                    <a href="#quote" className="text-white hover:text-yellow hover:underline">Send a message</a>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* SYSTEM X — Protection with a Glow */}
        <section id="protection" className="py-16 md:py-20 bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-chrome">
              <Image
                src="/assets/services/system-x-ceramic.webp"
                alt="System X Ceramic Protection"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-yellow mb-3">
                <Shield className="h-5 w-5" aria-hidden />
                <span className="text-xs uppercase tracking-widest font-semibold">System X</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide leading-tight">
                Protection with a Glow
              </h2>
              <p className="mt-2 text-xl text-yellow font-semibold">The Ultimate Permanent Coating</p>
              <p className="mt-4 text-concrete leading-relaxed">
                A lifetime of high gloss ceramic protection. Automotive ceramic coatings impart a
                color-enhancing gloss while protecting exterior surfaces for the life of your car.
              </p>
              <p className="mt-4 text-concrete leading-relaxed">
                System X creates a brilliant new clear coat over your paintwork — appearing as if
                your car was dipped in glass. Ultra hydrophobic, slicker, and glossier than the
                original clear coat.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services/system-x-ceramic-protection"
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
                >
                  See System X <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href="https://www.systemx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 text-white px-5 py-3 hover:bg-white/10 cursor-pointer"
                >
                  systemx.com <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-6 w-6 text-race" aria-hidden />
              <h2 className="font-display text-3xl uppercase tracking-wide">Services</h2>
            </div>
            <p className="text-chrome/80 mb-8">Professional grade protection and detailing — contact for a quote.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Link
                href="/services/system-x-ceramic-protection"
                className="group relative block rounded-2xl overflow-hidden border border-concrete shadow-sm aspect-[4/3] bg-ink"
              >
                <Image
                  src="/assets/services/system-x-ceramic.webp"
                  alt="System X Ceramic Protection"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
                <div className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-yellow text-ink">
                  <Shield className="h-5 w-5" aria-hidden />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg md:text-xl uppercase tracking-wide text-white leading-snug">
                    System X Ceramic Protection
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow">
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>

              <Link
                href="/services/paint-correction"
                className="group relative block rounded-2xl overflow-hidden border border-concrete shadow-sm aspect-[4/3] bg-ink"
              >
                <Image
                  src="/assets/paint-correction-hero.webp"
                  alt="Paint Correction before and after"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
                <div className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-race text-white">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg md:text-xl uppercase tracking-wide text-white leading-snug">
                    Paint Correction
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow">
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>

              <Link
                href="/services/exterior-detail"
                className="group relative block rounded-2xl overflow-hidden border border-concrete shadow-sm aspect-[4/3] bg-ink"
              >
                <Image
                  src="/assets/services/exterior-detail.webp"
                  alt="Exterior Detail"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
                <div className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-yellow text-ink">
                  <Droplets className="h-5 w-5" aria-hidden />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg md:text-xl uppercase tracking-wide text-white leading-snug">
                    Exterior Detail
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow">
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </div>
            <p className="mt-4 text-sm text-chrome/70">
              System X product info:{" "}
              <a
                href="https://www.systemx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-race font-semibold hover:underline"
              >
                systemx.com <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </p>
          </div>
        </section>

        <Gallery shots={[...GALLERY_SHOTS]} />

        {/* WHY US */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide mb-8">Why Us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { t: "4.8★ Google", d: "17 reviews on Google" },
                { t: "Women-Owned", d: "Identifies as women-owned on Google" },
                { t: "Licensed & Insured", d: "Peace of mind on every visit" },
                { t: "Locally Owned", d: "Hampstead, NH" },
                { t: "Free Quotes", d: "Call or send a message — no obligation" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-card border border-concrete p-5">
                  <h3 className="font-display uppercase tracking-wide text-base mb-1">{x.t}</h3>
                  <p className="text-sm text-chrome/80">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-16 bg-card border-y border-concrete">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-semibold">Google</span>
            </div>
            <div className="flex justify-center gap-1 text-yellow text-2xl mb-2" aria-label="5 stars">
              {"★★★★★"}
            </div>
            <p className="text-xl font-semibold mb-4">4.8 · 17 reviews</p>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-race text-race font-semibold px-5 py-2.5 hover:bg-race hover:text-white cursor-pointer"
            >
              Leave a review
            </a>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section id="areas" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-race" aria-hidden />
              <h2 className="font-display text-3xl uppercase tracking-wide">Service Areas</h2>
            </div>
            <p className="text-chrome/80 max-w-xl">
              Based in <strong>Hampstead, NH</strong> at 4 Owens Ct unit 6. Call to confirm availability for your vehicle.
            </p>
            <a href="tel:6032350453" className="inline-flex items-center gap-2 mt-6 rounded-lg bg-race text-white font-semibold px-5 py-3 hover:brightness-110 cursor-pointer">
              <Phone className="h-4 w-4" aria-hidden /> Call {PHONE}
            </a>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="bg-ink text-white pt-16 pb-10">
          <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Image
                src="/assets/logo.png"
                alt="Hillz Auto Detailing"
                width={140}
                height={67}
                className="h-14 w-auto object-contain"
              />
              <h3 className="font-display uppercase tracking-wide mb-3">Hillz Auto Detailing LLC</h3>
              <p className="text-muted text-sm">Car detailing service · Hampstead, NH</p>
              <p className="text-muted text-sm mt-2">Women-owned</p>
              <p className="text-yellow text-sm mt-3">Ready to treat yourself?</p>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3 text-sm inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yellow" aria-hidden /> Visit
              </h3>
              <p className="text-sm text-concrete">
                4 Owens Ct unit 6<br />
                Hampstead, NH, USA
              </p>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-yellow text-sm mt-2 inline-block hover:underline">
                Open in Google Maps
              </a>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3 text-sm inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow" aria-hidden /> Hours
              </h3>
              <ul className="text-sm text-muted space-y-1">
                {HOURS.map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-4 max-w-[220px]">
                    <span>{d}</span>
                    <span className="text-concrete">{h}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted mt-3">Closed on major holidays</p>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3 text-sm inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow" aria-hidden /> Contact
              </h3>
              <a href="tel:6032350453" className="inline-flex items-center gap-2 text-yellow font-semibold hover:underline cursor-pointer">
                <Phone className="h-4 w-4" aria-hidden /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-concrete text-sm mt-2 hover:text-yellow hover:underline cursor-pointer">
                <Mail className="h-4 w-4" aria-hidden /> {EMAIL}
              </a>
              <a
                href={GOLDIE_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 rounded-lg bg-yellow text-ink font-semibold px-4 py-2 text-sm hover:brightness-110 cursor-pointer"
              >
                Book Online
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-12 pt-6 border-t border-chrome text-xs text-muted flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Preview only · Not indexed · © Hillz Auto Detailing LLC</span>
            <Link href="/privacy" className="text-concrete hover:text-yellow hover:underline">
              Privacy
            </Link>
          </div>
        </footer>
      </main>
      <MobileCallBar />
    </>
  );
}
