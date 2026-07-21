import Link from "next/link";
import { Logo } from "./Logo";

/**
 * Logo+wordmark only, linking home — used in place of the full Nav
 * while in stealth mode (e.g. on /impressum, /datenschutz, which render
 * for real even when gated). Gives locked-out visitors a way back
 * without revealing site structure via the full nav links.
 */
export function MinimalHeader() {
  return (
    <header className="border-b border-gold/15">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-5">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="font-serif text-lg tracking-tight text-offwhite">Beyond</span>
          <Logo size={38} className="-mb-0.5" />
        </Link>
      </div>
    </header>
  );
}
