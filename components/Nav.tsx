import Link from "next/link";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/startups", label: "For Startups" },
  { href: "/mittelstand", label: "For Mittelstand" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="border-b border-gold/15">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="font-serif text-lg tracking-tight text-offwhite">Beyond</span>
          <Logo size={38} className="-mb-0.5" />
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-offwhite/80 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-navy transition-opacity hover:opacity-90"
        >
          Book a call
        </Link>
      </nav>
    </header>
  );
}
