import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "System X Ceramic Protection | Hillz Auto Detailing",
  description: "Professional grade System X Ceramic Protection — Hampstead, NH",
  robots: { index: false, follow: false },
};

export default function SystemXPage() {
  return (
    <ServicePage title="System X Ceramic Protection">
      <p className="text-xs text-chrome/60 mb-4 uppercase tracking-wide">
        System-X Ceramic Protection Max G+
      </p>
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
      <p className="text-chrome/80">Coatings are priced with a standard prep. Contact for a quote.</p>
    </ServicePage>
  );
}
