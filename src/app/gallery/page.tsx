import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import Gallery from "@/components/Gallery";
import { GALLERY_SHOTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Hillz Auto Detailing",
  description: "Real job photos from Hillz Auto Detailing — Hampstead, NH",
  robots: { index: false, follow: false },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0 bg-ink min-h-[70vh]">
        <section className="bg-ink text-white pt-10 pb-2">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm text-muted mb-2">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span>Gallery</span>
            </p>
          </div>
        </section>
        <Gallery shots={[...GALLERY_SHOTS]} />
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <Link href="/contact" className="text-yellow text-sm hover:underline">
            Questions? Contact us →
          </Link>
        </div>
      </main>
      <MobileCallBar />
    </>
  );
}
