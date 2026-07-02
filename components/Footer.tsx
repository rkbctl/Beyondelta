import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gold/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-offwhite/60 sm:flex-row sm:items-center sm:justify-between">
        <p>Beyondelta &middot; Karlsruhe, Germany</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-gold">About</Link>
          <Link href="/portfolio" className="hover:text-gold">Portfolio</Link>
          <Link href="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
