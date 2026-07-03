import Link from "next/link";
import { DeltaDivider } from "@/components/DeltaDivider";
import { Logo } from "@/components/Logo";
import { IntroCascade } from "@/components/IntroCascade";

/**
 * SKELETON — structure only, final copy comes page-by-page per the brief's
 * working process. Bracketed text marks where real content lands.
 */
export default function Home() {
  return (
    <>
      <IntroCascade />

      {/* Hero — neutral entry point for non-campaign traffic (referral, search, direct) */}
      <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-6 py-28 text-center">
        <Logo size={64} className="mb-8" />
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          [One-line positioning statement — pulled from business plan]
        </h1>
        <p className="mt-6 max-w-xl text-offwhite/70">
          [Supporting sub-line — 1–2 sentences framing PMF/GTM + Mittelstand automation]
        </p>

        {/* Visual fork — self-select by audience */}
        <div className="mt-12 grid w-full gap-4 sm:grid-cols-2">
          <Link
            href="/startups"
            className="group rounded-2xl border border-gold/20 bg-navy-raised p-8 text-left transition-colors hover:border-gold/50"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold">For Startups</span>
            <h2 className="mt-3 font-serif text-2xl">PMF validation &amp; GTM strategy</h2>
            <p className="mt-2 text-sm text-offwhite/60">[1-line teaser]</p>
          </Link>
          <Link
            href="/mittelstand"
            className="group rounded-2xl border border-gold/20 bg-navy-raised p-8 text-left transition-colors hover:border-gold/50"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold">For Mittelstand</span>
            <h2 className="mt-3 font-serif text-2xl">Process automation</h2>
            <p className="mt-2 text-sm text-offwhite/60">[1-line teaser]</p>
          </Link>
        </div>
      </section>

      <DeltaDivider />

      {/* Founding story — compressed KIT -> Enersoul/IDAa -> Beyondelta */}
      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">[Founding story — compressed, 3–4 sentences]</h2>
        <p className="mt-4 text-offwhite/70">
          [KIT mechanical engineering &rarr; Enersoul/IDAa &rarr; Beyondelta as natural evolution]
        </p>
        <Link href="/about" className="mt-6 inline-block text-sm text-gold hover:underline">
          Read the full story &rarr;
        </Link>
      </section>

      <DeltaDivider />

      {/* Portfolio highlights — 2-3 curated pieces, full library lives at /portfolio */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl">[Selected work]</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-gold/15 bg-navy-raised p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-gold">[Client / category]</p>
              <h3 className="mt-2 font-serif text-lg">[Case study headline {i}]</h3>
              <p className="mt-2 text-sm text-offwhite/60">[1–2 line summary]</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/portfolio" className="text-sm text-gold hover:underline">
            View full portfolio &rarr;
          </Link>
        </div>
      </section>

      <DeltaDivider />

      {/* General contact CTA */}
      <section className="mx-auto w-full max-w-2xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">[General contact CTA headline]</h2>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
