import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Paint Correction | Hillz Auto Detailing",
  description: "Custom paint correction — Hampstead, NH",
  robots: { index: false, follow: false },
};

export default function PaintCorrectionPage() {
  return (
    <ServicePage title="Paint Correction" heroSrc="/assets/services/paint-correction.webp">
      <p className="text-chrome/90">
        Custom paint correction to restore your vehicle&apos;s paint to its finest.
      </p>
    </ServicePage>
  );
}
