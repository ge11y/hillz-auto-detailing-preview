import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import { GOLDIE_BOOK_PAINT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paint Correction | Hillz Auto Detailing",
  description: "Custom paint correction — Hampstead, NH",
  robots: { index: false, follow: false },
};

const RELATED = [
  { src: "/assets/services/paint-correction.webp", alt: "PAINT correction" },
  { src: "/assets/paint-correction.webp", alt: "PAINT correction" },
  { src: "/assets/paint-correction-2.webp", alt: "paint correction" },
  { src: "/assets/buffing.webp", alt: "buffing" },
  { src: "/assets/exterior-detail.webp", alt: "Exterior Detail" },
  { src: "/assets/car-detailing-2.webp", alt: "car detailing2" },
];

const STEPS = [
  {
    title: "Inspect",
    body: "Evaluate paint under strong light; note defect type and severity.",
  },
  {
    title: "Wash & decontaminate",
    body: "Thorough wash, iron/fallout removal, and clay as needed so bonded grit isn’t dragged across panels.",
  },
  {
    title: "Measure & test",
    body: "Gauge clear-coat thickness where appropriate; run a small test spot to choose the least aggressive pad/compound that hits the goal.",
  },
  {
    title: "Cut",
    body: "Machine compounding removes the bulk of swirls and deeper clear-coat defects section by section.",
  },
  {
    title: "Refine",
    body: "Finishing polish removes compounding haze and restores deep gloss and sharp reflections.",
  },
  {
    title: "Prep & protect",
    body: "Panel wipe to remove polish oils, then sealant, wax, or ceramic protection (System X when that’s the plan).",
  },
];

export default function PaintCorrectionPage() {
  return (
    <ServicePage
      title="Paint Correction"
      heroSrc="/assets/paint-correction-hero.webp"
      bookHref={GOLDIE_BOOK_PAINT}
      related={RELATED}
    >
      <div className="inline-flex items-center gap-2 text-race mb-4">
        <Sparkles className="h-5 w-5" aria-hidden />
        <span className="text-xs uppercase tracking-wide font-semibold">Paint Correction</span>
      </div>
      <p className="text-chrome/90 text-base md:text-lg leading-relaxed mb-8">
        Paint correction restores clarity and gloss by machine-polishing defects out of the clear
        coat — swirls, light scratches, haze, and oxidation — so the finish reflects cleanly again.
      </p>

      <h2 className="font-display text-xl uppercase tracking-wide text-ink mb-4">
        What’s included
      </h2>
      <ol className="space-y-4 mb-10">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span
              className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-yellow font-display text-sm"
              aria-hidden
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-ink">{step.title}</h3>
              <p className="text-chrome/85 text-sm md:text-base mt-0.5 leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="rounded-2xl border border-concrete bg-card p-5 mb-8">
        <h2 className="font-display text-base uppercase tracking-wide text-ink mb-2">Good for</h2>
        <p className="text-chrome/85 text-sm md:text-base leading-relaxed">
          Daily drivers with wash swirls, dull black/dark paint, and vehicles being prepped for
          ceramic coating.
        </p>
      </div>

      <p className="text-sm text-chrome/80">
        Results and stages depend on paint condition — call or book for a quote.
      </p>
    </ServicePage>
  );
}
