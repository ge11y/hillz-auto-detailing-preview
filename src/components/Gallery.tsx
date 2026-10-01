"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

export type GalleryShot = { src: string; alt: string };

type Props = {
  shots: GalleryShot[];
};

export default function Gallery({ shots }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 520);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const close = useCallback(() => setOpenIndex(null), []);

  const showPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
  }, [shots.length]);

  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % shots.length));
  }, [shots.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, showPrev, showNext]);

  return (
    <section id="gallery" className="py-16 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Images className="h-6 w-6 text-yellow" aria-hidden />
              <h2 className="font-display text-3xl uppercase tracking-wide">Gallery</h2>
            </div>
            <p className="text-muted">Real job photos from Hillz Auto Detailing. Tap to enlarge.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll gallery left"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-chrome text-white hover:bg-chrome/40 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll gallery right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-chrome text-white hover:bg-chrome/40 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-[max(1rem,calc((100vw-72rem)/2+1rem))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative shrink-0 snap-center w-[min(82vw,420px)] aspect-[4/3] rounded-2xl overflow-hidden border border-chrome bg-chrome/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
            aria-label={`Enlarge ${shot.alt}`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width:768px) 82vw, 420px"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-chrome/50 text-white hover:bg-chrome cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-chrome/50 text-white hover:bg-chrome cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-chrome/50 text-white hover:bg-chrome cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={shots[openIndex].src}
              alt={shots[openIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm text-muted">
            {openIndex + 1} / {shots.length}
          </p>
        </div>
      )}
    </section>
  );
}
