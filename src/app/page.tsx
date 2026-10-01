import Image from "next/image";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import QuoteForm from "@/components/QuoteForm";

const PHONE = "(603) 235-0453";
const TEL = "tel:+16032350453";
const MAPS =
  "https://www.google.com/maps/place/?q=place_id:ChIJHzlrNPGr44kRDMT2WsqFQD8";

const HOURS = [
  ["Monday", "8 AM–5 PM"],
  ["Tuesday", "8 AM–5 PM"],
  ["Wednesday", "8 AM–5 PM"],
  ["Thursday", "8 AM–5 PM"],
  ["Friday", "8 AM–5 PM"],
  ["Saturday", "8 AM–2 PM"],
  ["Sunday", "Closed"],
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
          <div className="relative z-10 mx-auto max-w-6xl w-full px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight tracking-wide">
                Hillz Auto Detailing
              </h1>
              <p className="mt-4 text-lg text-concrete max-w-md">
                Car detailing service in Hampstead, NH. Women-owned. 4.8★ from 17 Google reviews.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={TEL}
                  className="inline-flex rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
                >
                  Call {PHONE}
                </a>
                <a
                  href="#quote"
                  className="inline-flex rounded-lg border border-white/40 text-white px-5 py-3 hover:bg-white/10 cursor-pointer"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
            <div id="quote" className="rounded-2xl bg-ink/90 border border-chrome p-6 text-white shadow-2xl">
              <h2 className="font-display text-xl uppercase tracking-wide mb-1">Free Quote</h2>
              <p className="text-muted text-sm mb-4">Tell us about your vehicle — we&apos;ll follow up.</p>
              <QuoteForm dark />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide mb-2">Services</h2>
            <p className="text-chrome/80 mb-8">Professional grade protection and detailing — contact for a quote.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <article className="rounded-2xl bg-card border border-concrete p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-race/10 text-race flex items-center justify-center mb-4 font-display text-sm">
                  01
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide mb-2">System X Ceramic Protection</h3>
                <p className="text-xs text-chrome/60 mb-3">System-X Ceramic Protection Max G+</p>
                <p className="text-sm text-chrome/80 mb-3">
                  Professional grade System X Ceramic Protection offered in 3/6/10 years.
                </p>
                <ul className="text-sm text-chrome/80 space-y-1.5 mb-4 list-disc pl-4">
                  <li>Superior protection from elements</li>
                  <li>High gloss, smooth finish</li>
                  <li>Hard protective shell over your finish</li>
                  <li>Hydrophobic, quick drying properties</li>
                  <li>Easy 1X a year maintenance</li>
                  <li>Lasting results that keep your finish best</li>
                </ul>
                <p className="text-sm text-chrome/80 mb-2">
                  Warranty with proper care, and reporting to your vehicle&apos;s Carfax report.
                </p>
                <p className="text-sm text-chrome/80 mb-4">
                  Coatings are priced with a standard prep. Contact for a quote.
                </p>
                <a href="#quote" className="text-race font-semibold text-sm hover:underline cursor-pointer">
                  Contact for a quote →
                </a>
              </article>

              <article className="rounded-2xl bg-card border border-concrete p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-race/10 text-race flex items-center justify-center mb-4 font-display text-sm">
                  02
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide mb-2">Paint Correction</h3>
                <p className="text-sm text-chrome/80 mb-4">
                  Custom paint correction to restore your vehicle&apos;s paint to its finest.
                </p>
                <a href="#quote" className="text-race font-semibold text-sm hover:underline cursor-pointer">
                  Contact for a quote →
                </a>
              </article>

              <article className="rounded-2xl bg-card border border-concrete p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-race/10 text-race flex items-center justify-center mb-4 font-display text-sm">
                  03
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide mb-2">Exterior Detail</h3>
                <a href="#quote" className="text-race font-semibold text-sm hover:underline cursor-pointer">
                  Contact us →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-16 bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide mb-2">Gallery</h2>
            <p className="text-muted mb-8">From the Google Business Profile.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-chrome">
                <Image src="/photos/hero.jpg" alt="Shop floor with detailed vehicles" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-chrome">
                <Image src="/photos/hero.jpg" alt="Detailing bay detail" fill className="object-cover object-[60%_40%] scale-110" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

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
            <h2 className="font-display text-3xl uppercase tracking-wide mb-4">Service Areas</h2>
            <p className="text-chrome/80 max-w-xl">
              Based in <strong>Hampstead, NH</strong> at 4 Owens Ct #6. Call to confirm availability for your vehicle.
            </p>
            <a href={TEL} className="inline-flex mt-6 rounded-lg bg-race text-white font-semibold px-5 py-3 hover:brightness-110 cursor-pointer">
              Call {PHONE}
            </a>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="bg-ink text-white pt-16 pb-10">
          <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3">Hillz Auto Detailing</h3>
              <p className="text-muted text-sm">Car detailing service · Hampstead, NH</p>
              <p className="text-muted text-sm mt-2">Women-owned</p>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3 text-sm">Visit</h3>
              <p className="text-sm text-concrete">
                4 Owens Ct #6<br />
                Hampstead, NH 03841
              </p>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-yellow text-sm mt-2 inline-block hover:underline">
                Open in Google Maps
              </a>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3 text-sm">Hours</h3>
              <ul className="text-sm text-muted space-y-1">
                {HOURS.map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-4 max-w-[220px]">
                    <span>{d}</span>
                    <span className="text-concrete">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-wide mb-3 text-sm">Contact</h3>
              <a href={TEL} className="block text-yellow font-semibold hover:underline cursor-pointer">
                {PHONE}
              </a>
              <a href="#quote" className="inline-flex mt-4 rounded-lg bg-yellow text-ink font-semibold px-4 py-2 text-sm hover:brightness-110 cursor-pointer">
                Get Free Quote
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-12 pt-6 border-t border-chrome text-xs text-muted">
            Preview only · Not indexed · © Hillz Auto Detailing
          </div>
        </footer>
      </main>
      <MobileCallBar />
    </>
  );
}
