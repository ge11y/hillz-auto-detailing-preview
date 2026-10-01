import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Exterior Detail | Hillz Auto Detailing",
  description: "Exterior Detail — Hillz Auto Detailing, Hampstead NH",
  robots: { index: false, follow: false },
};

export default function ExteriorDetailPage() {
  return (
    <ServicePage title="Exterior Detail" heroSrc="/assets/services/exterior-detail.webp">
      <p className="text-chrome/90">Contact us for a quote.</p>
    </ServicePage>
  );
}
