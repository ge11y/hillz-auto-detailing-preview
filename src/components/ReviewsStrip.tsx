import { MAPS, GOOGLE_REVIEWS } from "@/lib/site";

function truncate(text: string, max = 180): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
}

function Stars({ n }: { n: number }) {
  return (
    <span className="text-yellow text-sm tracking-tight" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-chrome/30">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function ReviewsStrip() {
  return (
    <section className="py-14 bg-card border-y border-concrete text-ink">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <GoogleMark />
            <div>
              <p className="font-display text-xl uppercase tracking-wide">Reviews</p>
              <div className="flex items-center gap-2 text-sm">
                <Stars n={5} />
                <span className="font-semibold">4.8 · 17 reviews</span>
              </div>
            </div>
          </div>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-race text-race font-semibold px-5 py-2.5 hover:bg-race hover:text-white cursor-pointer"
          >
            Leave a review
          </a>
        </div>
      </div>

      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-[max(1rem,calc((100vw-72rem)/2+1rem))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
        aria-label="Google reviews"
      >
        {GOOGLE_REVIEWS.map((r, i) => (
          <article
            key={i}
            role="listitem"
            className="snap-start shrink-0 w-[min(85vw,320px)] rounded-2xl border border-concrete bg-white p-5 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <Stars n={r.stars} />
              <span className="text-[11px] uppercase tracking-wide text-muted">Google</span>
            </div>
            <p className="text-sm leading-relaxed text-chrome/90 flex-1">&ldquo;{truncate(r.text)}&rdquo;</p>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs text-race hover:underline"
            >
              Read on Google Maps
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
