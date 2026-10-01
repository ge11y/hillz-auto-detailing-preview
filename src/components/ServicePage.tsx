import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";

const PHONE = "603-235-0453";

type Props = {
  title: string;
  heroSrc?: string;
  children: React.ReactNode;
};

export default function ServicePage({ title, heroSrc, children }: Props) {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="relative bg-ink text-white overflow-hidden">
          {heroSrc && (
            <div className="absolute inset-0">
              <Image src={heroSrc} alt="" fill className="object-cover opacity-40" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/70" />
            </div>
          )}
          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
            <p className="text-sm text-muted mb-2">
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span>{title}</span>
            </p>
            <h1 className="font-display text-3xl md:text-5xl uppercase tracking-wide leading-tight max-w-3xl">
              {title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:6032350453"
                className="inline-flex rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                Call {PHONE}
              </a>
              <Link
                href="/#quote"
                className="inline-flex rounded-lg border border-white/40 text-white px-5 py-3 hover:bg-white/10 cursor-pointer"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">{children}</div>
        </section>

        <section className="bg-card border-y border-concrete py-12">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-display uppercase tracking-wide text-lg mb-1">Ready to treat yourself?</h2>
              <p className="text-sm text-chrome/80">Contact for a quote — Hampstead, NH.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:6032350453"
                className="inline-flex rounded-lg bg-race text-white font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                Call {PHONE}
              </a>
              <Link
                href="/#quote"
                className="inline-flex rounded-lg bg-yellow text-ink font-semibold px-5 py-3 hover:brightness-110 cursor-pointer"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-ink text-white py-8">
          <div className="mx-auto max-w-6xl px-4 flex flex-wrap items-center gap-4">
            <Image
              src="/assets/logo.webp"
              alt="Hillz Auto Detailing"
              width={48}
              height={48}
              className="h-12 w-12 object-contain rounded-md bg-white/5"
            />
            <div className="text-xs text-muted">
              Preview only · Not indexed · © Hillz Auto Detailing LLC
              <div className="mt-1 flex flex-wrap gap-3">
                <a href="tel:6032350453" className="text-yellow hover:underline">
                  {PHONE}
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
