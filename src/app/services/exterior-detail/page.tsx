import type { Metadata } from "next";
import { Droplets } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import { GOLDIE_BOOK_EXTERIOR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exterior Detail | Hillz Auto Detailing",
  description: "Exterior Detail — Hillz Auto Detailing, Hampstead NH",
  robots: { index: false, follow: false },
};

const RELATED = [
  { src: "/assets/services/exterior-detail.webp", alt: "Exterior Detail" },
  { src: "/assets/exterior-detail.webp", alt: "Exterior Detail" },
  { src: "/assets/buffing.webp", alt: "buffing" },
  { src: "/assets/car-detailing.webp", alt: "car detailing" },
  { src: "/assets/car-detail-3.webp", alt: "car detail 3" },
  { src: "/assets/truck.webp", alt: "truck" },
  { src: "/assets/work-vehicles.webp", alt: "Work Vehicles" },
];

const STEPS = [
  {
    title: "Wheels first",
    body: "Clean wheels, tires, and arches so brake dust and cleaner don’t splash onto finished paint.",
  },
  {
    title: "Pre-wash & foam",
    body: "Rinse and foam to loosen grit before any mitt touches the clear coat.",
  },
  {
    title: "Contact wash",
    body: "Two-bucket (or equivalent safe-wash) method, top to bottom, then full rinse.",
  },
  {
    title: "Decontaminate",
    body: "Iron remover and clay where the paint still feels rough after washing.",
  },
  {
    title: "Dry & inspect",
    body: "Soft dry; check for leftover defects and trim/glass needs.",
  },
  {
    title: "Enhance & protect",
    body: "Light polish as needed for gloss, then wax/sealant (or pair with System X / paint correction when booked).",
  },
  {
    title: "Finish",
    body: "Glass, exterior trim, and tire dressing for a complete show-ready look.",
  },
];

export default function ExteriorDetailPage() {
  return (
    <ServicePage
      title="Exterior Detail"
      heroSrc="/assets/services/exterior-detail.webp"
      bookHref={GOLDIE_BOOK_EXTERIOR}
      related={RELATED}
    >
      <div className="inline-flex items-center gap-2 text-race mb-4">
        <Droplets className="h-5 w-5" aria-hidden />
        <span className="text-xs uppercase tracking-wide font-semibold">Exterior Detail</span>
      </div>
      <p className="text-chrome/90 text-base md:text-lg leading-relaxed mb-8">
        An exterior detail is a full outside reset: wheels and paint cleaned the right order,
        contamination removed, gloss brought back, and protection applied so the finish stays
        sharper longer.
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
          Maintenance washes that go beyond a drive-through — cars, trucks, and work vehicles that
          need a proper exterior reset.
        </p>
      </div>

      <p className="text-sm text-chrome/80">
        Call or book Complete Detail on Goldie for scheduling.
      </p>
    </ServicePage>
  );
}
