import { DeltaDivider } from "@/components/DeltaDivider";
import { CtaLink } from "@/components/CtaLink";

/**
 * SKELETON — campaign landing page for Mittelstand automation outreach
 * (LinkedIn / phone follow-up). Message-matched copy TBD.
 */
export default function MittelstandPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <span className="text-xs uppercase tracking-widest text-gold">For Mittelstand</span>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          [Headline — case for AI/process automation, n8n-based]
        </h1>
        <p className="mt-6 text-offwhite/70">[Sub-line, message-matched to campaign source]</p>
        <CtaLink
          href="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
        >
          Book an audit call
        </CtaLink>
      </section>

      <DeltaDivider />

      {/* Three-phase process */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl">[Process — three phases]</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="text-xs uppercase tracking-widest text-gold">01</span>
            <h3 className="mt-2 font-serif text-2xl">Audit</h3>
            <p className="mt-3 text-sm text-offwhite/60">[Description]</p>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="text-xs uppercase tracking-widest text-gold">02</span>
            <h3 className="mt-2 font-serif text-2xl">Design &amp; Implementation</h3>
            <p className="mt-3 text-sm text-offwhite/60">[Description]</p>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="text-xs uppercase tracking-widest text-gold">03</span>
            <h3 className="mt-2 font-serif text-2xl">Handover</h3>
            <p className="mt-3 text-sm text-offwhite/60">
              [Workflows handed over to run on client&apos;s own infrastructure]
            </p>
          </div>
        </div>
      </section>

      <DeltaDivider />

      {/* BAFA grant eligibility as cost-reduction signal */}
      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">[BAFA Unternehmensberatung grant eligibility]</h2>
        <p className="mt-4 text-offwhite/70">
          [Audit stage cost-reduction signal — grant eligibility detail]
        </p>
      </section>

      <DeltaDivider />

      {/* 1-2 curated portfolio pieces relevant to Mittelstand audience */}
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
          Book an audit call
        </CtaLink>
      </section>
    </>
  );
}
