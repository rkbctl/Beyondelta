import { DeltaDivider } from "@/components/DeltaDivider";
import { CtaLink } from "@/components/CtaLink";

/**
 * SKELETON — campaign landing page for startup outreach (LinkedIn / US email).
 * Message-matched: copy here should mirror whichever touch sent the visitor.
 */
export default function StartupsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">For early-stage B2B startups</span>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          [Headline — case for PMF/GTM advisory over premature scaling or equity-for-advice]
        </h1>
        <p className="mt-6 text-offwhite/70">[Sub-line, message-matched to campaign source]</p>
        <CtaLink
          href="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
        >
          Book a discovery call
        </CtaLink>
      </section>

      <DeltaDivider />

      {/* Two-phase process, shown visually */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl">[Process — two phases]</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">Phase 1</span>
            <h3 className="mt-2 font-serif text-2xl">PMF Discovery</h3>
            <p className="mt-3 text-sm text-offwhite/60">[Description]</p>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">Phase 2</span>
            <h3 className="mt-2 font-serif text-2xl">GTM Strategy</h3>
            <p className="mt-3 text-sm text-offwhite/60">[Description]</p>
          </div>
        </div>
      </section>

      <DeltaDivider />

      {/* Differentiation narrative — founder-to-founder credibility */}
      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">[Differentiation narrative]</h2>
        <p className="mt-4 text-offwhite/70">
          [Founder-to-founder credibility; execution alongside the founder, not more frameworks;
          a methodology the founder keeps, not a slide deck they forget]
        </p>
      </section>

      <DeltaDivider />

      {/* Pricing / no-equity model — the 66x equity comparison stat */}
      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">[Session-based, no equity]</h2>
        <p className="mt-4 text-offwhite/70">
          [€125/hr net+VAT · standard session 3hrs / €375 · written deliverable included every session]
        </p>
        <div className="mt-8 rounded-2xl border border-gold/20 bg-navy-raised p-8">
          <p className="text-sm text-offwhite/60">[Minimum engagement: 2 sessions, €750]</p>
          <p className="mt-2 font-serif text-2xl text-gold">
            vs. 5% equity at a €1M valuation = €50,000
          </p>
          <p className="mt-1 text-sm text-offwhite/60">[66&times; difference — equity comparison stat]</p>
        </div>
      </section>

      <DeltaDivider />

      {/* 1-2 curated portfolio pieces relevant to startup audience */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl">[Relevant case studies]</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-gold/15 bg-navy-raised p-6">
              <h3 className="font-serif text-lg">[Case study {i}]</h3>
              <p className="mt-2 text-sm text-offwhite/60">[Summary]</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-6 py-20 text-center">
        <CtaLink
          href="/contact"
          className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
        >
          Book a discovery call
        </CtaLink>
      </section>
    </>
  );
}
