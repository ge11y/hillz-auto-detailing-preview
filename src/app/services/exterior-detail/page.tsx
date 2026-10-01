import type { Metadata } from "next";
import { Droplets } from "lucide-react";
import ServicePage from "@/components/ServicePage";

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

export default function ExteriorDetailPage() {
  return (
    <ServicePage title="Exterior Detail" heroSrc="/assets/services/exterior-detail.webp" related={RELATED}>
      <div className="inline-flex items-center gap-2 text-race mb-4">
        <Droplets className="h-5 w-5" aria-hidden />
        <span className="text-xs uppercase tracking-wide font-semibold">Exterior Detail</span>
      </div>
      <p className="text-chrome/90">Contact us for a quote.</p>
    </ServicePage>
  );
}
