import type { Metadata } from "next";
import { ExternalLink, Shield } from "lucide-react";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "System X Ceramic Protection | Hillz Auto Detailing",
  description: "Professional grade System X Ceramic Protection — Hampstead, NH",
  robots: { index: false, follow: false },
};

const RELATED = [
  { src: "/assets/services/system-x-ceramic.webp", alt: "system x ceramic" },
  { src: "/assets/paint-correction.webp", alt: "PAINT correction" },
  { src: "/assets/buffing.webp", alt: "buffing" },
  { src: "/assets/exterior-detail.webp", alt: "Exterior Detail" },
  { src: "/assets/vette.webp", alt: "vette" },
  { src: "/assets/car-detailing.webp", alt: "car detailing" },
];

export default function SystemXPage() {
  return (
    <ServicePage
      title="System X Ceramic Protection"
      heroSrc="/assets/services/system-x-ceramic.webp"
      related={RELATED}
    >
      <div className="inline-flex items-center gap-2 text-race mb-4">
        <Shield className="h-5 w-5" aria-hidden />
        <span className="text-xs uppercase tracking-wide font-semibold">System-X Ceramic Protection Max G+</span>
      </div>
      <p className="text-chrome/90 mb-4">
        Professional grade System X Ceramic Protection offered in 3/6/10 years.
      </p>
      <ul className="text-chrome/80 space-y-2 mb-6 list-disc pl-5">
        <li>Superior protection from elements</li>
        <li>High gloss, smooth finish</li>
        <li>Hard protective shell over your finish</li>
        <li>Hydrophobic, quick drying properties</li>
        <li>Easy 1X a year maintenance</li>
        <li>Lasting results that keep your finish best</li>
      </ul>
      <p className="text-chrome/80 mb-3">
        Warranty with proper care, and reporting to your vehicle&apos;s Carfax report.
      </p>
      <p className="text-chrome/80 mb-4">Coatings are priced with a standard prep. Contact for a quote.</p>
      <p className="text-chrome/80">
        <a
          href="https://www.systemx.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-race font-semibold hover:underline"
        >
          systemx.com <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </p>
    </ServicePage>
  );
}
