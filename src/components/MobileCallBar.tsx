const TEL = "tel:+16032350453";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-chrome bg-ink p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href={TEL}
        className="flex items-center justify-center w-full rounded-lg bg-yellow text-ink font-semibold py-3 cursor-pointer"
      >
        Call (603) 235-0453
      </a>
    </div>
  );
}
