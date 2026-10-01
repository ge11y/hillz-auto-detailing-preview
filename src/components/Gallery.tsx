"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { GalleryShot } from "@/lib/site";

type Props = {
  shots: GalleryShot[];
};

export default function Gallery({ shots }: Props) {
  const [active, setActive] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const current = shots[active] ?? shots[0];

  useEffect(() => {
    const el = thumbsRef.current;
    if (!el) return;
    const thumb = el.querySelector<HTMLElement>(`[data-thumb="${active}"]`);
    thumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + shots.length) % shots.length);
  };

  if (!shots.length || !current) return null;

  return (
    <section id="gallery" className="py-16 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Images className="h-6 w-6 text-yellow" aria-hidden />
              <h2 className="font-display text-3xl uppercase tracking-wide">Gallery</h2>
            </div>
            <p className="text-muted">Real job photos from Hillz Auto Detailing.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-chrome text-white hover:bg-chrome/40 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-chrome text-white hover:bg-chrome/40 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Featured */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden border border-chrome bg-chrome/20">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 72rem"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          {current.serviceHref && current.serviceLabel ? (
            <Link
              href={current.serviceHref}
              className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-ink/85 border border-yellow/40 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-ink hover:border-yellow cursor-pointer"
            >
              <span className="h-2 w-2 rounded-full bg-yellow shrink-0" aria-hidden />
              {current.serviceLabel}
            </Link>
          ) : null}
          <p className="absolute bottom-4 right-4 text-xs text-white/70 tabular-nums">
            {active + 1} / {shots.length}
          </p>
        </div>

        {/* Thumbnails */}
        <div
          ref={thumbsRef}
          className="mt-4 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="listbox"
          aria-label="Gallery thumbnails"
        >
          {shots.map((shot, i) => {
            const selected = i === active;
            return (
              <button
                key={shot.src}
                type="button"
                data-thumb={i}
                role="option"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`relative shrink-0 snap-start w-[88px] sm:w-[104px] aspect-[4/3] rounded-lg overflow-hidden border-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow ${
                  selected ? "border-yellow" : "border-chrome/60 opacity-75 hover:opacity-100"
                }`}
                aria-label={`Show ${shot.alt}`}
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="104px"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
