const PHONE = "(603) 235-0453";
const TEL = "tel:+16032350453";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-chrome text-white">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-4">
        <a href="#home" className="font-display text-sm md:text-base uppercase tracking-wide whitespace-nowrap shrink-0">
          Hillz Auto Detailing
        </a>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-muted ml-4">
          <a href="#home" className="hover:text-white whitespace-nowrap">Home</a>
          <a href="#services" className="hover:text-white whitespace-nowrap">Services</a>
          <a href="#gallery" className="hover:text-white whitespace-nowrap">Gallery</a>
          <a href="#areas" className="hover:text-white whitespace-nowrap">Service Areas</a>
          <a href="#contact" className="hover:text-white whitespace-nowrap">Contact</a>
        </nav>
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-lg bg-yellow text-ink font-semibold text-sm px-3 py-2 whitespace-nowrap hover:brightness-110 cursor-pointer"
          >
            Get Free Quote
          </a>
          <a
            href={TEL}
            className="inline-flex items-center justify-center rounded-lg border border-race text-white text-sm px-3 py-2 whitespace-nowrap hover:bg-race/20 cursor-pointer"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
