import Image from "next/image";
import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import { GOLDIE_BOOK, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type Shot = { src: string; alt: string };

type Props = {
  title: string;
  heroSrc: string;
  related?: Shot[];
  children: React.ReactNode;
};

export default function ServicePage({ title, heroSrc, related = [], children }: Props) {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4 pt-10 pb-6">
            <p className="text-sm text-muted mb-2">
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span>{title}</span>
            </p>
            <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wide leading-tight max-w-3xl mb-6">
              {title}
            </h1>
            <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden border border-chrome">
              <Image
                src={heroSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={GOLDIE_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white px-5 py-3 hover:bg-white/10 cursor-pointer"
              >
                Book Online <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">{children}</div>
        </section>

        {related.length > 0 && (
          <section className="pb-16">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="font-display text-2xl uppercase tracking-wide mb-5">Related work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {related.map((shot) => (
                  <div
                    key={shot.src}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-concrete bg-ink"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-card border-y border-concrete py-12">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display uppercase tracking-wide text-lg mb-1">Ready to treat yourself?</h2>
              <p className="text-sm text-chrome/80">Contact for a quote — Hampstead, NH.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-lg bg-race text-white font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={GOLDIE_BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                Book Online
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-ink text-white py-8">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="Hillz Auto Detailing"
              width={120}
              height={57}
              className="h-12 w-auto object-contain"
            />
            <div className="text-xs text-muted">
              Preview only · Not indexed · © Hillz Auto Detailing LLC
              <div className="mt-1 flex flex-wrap gap-3">
                <a href={PHONE_TEL} className="text-yellow hover:underline">
                  {PHONE_DISPLAY}
                </a>
                <Link href="/privacy" className="text-concrete hover:text-yellow hover:underline">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <MobileCallBar />
    </>
  );
}
