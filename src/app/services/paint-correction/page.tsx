import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import ServicePage from "@/components/ServicePage";

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

export default function PaintCorrectionPage() {
  return (
    <ServicePage title="Paint Correction" heroSrc="/assets/paint-correction-hero.webp" related={RELATED}>
      <div className="inline-flex items-center gap-2 text-race mb-4">
        <Sparkles className="h-5 w-5" aria-hidden />
        <span className="text-xs uppercase tracking-wide font-semibold">Paint Correction</span>
      </div>
      <p className="text-chrome/90">
        Custom paint correction to restore your vehicle&apos;s paint to its finest.
      </p>
    </ServicePage>
  );
}
