import { DeltaDivider } from "@/components/DeltaDivider";
import { CtaLink } from "@/components/CtaLink";

/**
 * First real draft — campaign landing page for startup outreach
 * (LinkedIn / US email). Copy pulled from the confirmed business-plan
 * facts (USP, pricing, differentiation narrative, equity comparison) —
 * nothing fabricated. No case studies yet since there's no real
 * portfolio content to reference — add that section back once there is.
 */
export default function StartupsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">For early-stage B2B startups</span>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Most advice stops where execution starts. This doesn&apos;t.
        </h1>
        <p className="mt-6 text-offwhite/70">
          PMF validation and go-to-market strategy for early-stage B2B
          founders &mdash; built alongside you, session by session, without
          giving up equity for advice.
        </p>
        <CtaLink
          href="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
        >
          Book a discovery call
        </CtaLink>
      </section>

      <DeltaDivider />

      <section className="mx-auto w-full max-w-4xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl">A phase-gated path, not an open-ended engagement</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-offwhite/70">
          Two phases, validated as you go &mdash; not a single long retainer
          you have to trust upfront.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">Phase 1</span>
            <h3 className="mt-2 font-serif text-2xl">PMF Discovery</h3>
            <p className="mt-3 text-sm text-offwhite/60">
              Test and validate product-market fit before committing further
              resources to scaling &mdash; grounded in real conversations with
              your target customers, not a framework exercise.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/20 bg-navy-raised p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">Phase 2</span>
            <h3 className="mt-2 font-serif text-2xl">GTM Strategy</h3>
            <p className="mt-3 text-sm text-offwhite/60">
              Turn validated fit into a repeatable go-to-market motion your
              team can run without needing to hire a consultant to run it
              for you.
            </p>
          </div>
        </div>
      </section>

      <DeltaDivider />

      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">Founder-to-founder, not theory-to-founder</h2>
        <p className="mt-4 text-offwhite/70">
          The credibility here is built from having been a founder, not from
          having studied one. The pitch isn&apos;t more frameworks &mdash;
          it&apos;s focused execution alongside you, and a methodology you
          keep and can reuse afterward, not a slide deck you forget in a
          drawer.
        </p>
      </section>

      <DeltaDivider />

      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">Session-based. No equity, ever.</h2>
        <p className="mt-4 text-offwhite/70">
          &euro;125/hr net + VAT &middot; standard session 3hrs / &euro;375
          &middot; a written deliverable (Business Model Canvas, ICP
          profile, GTM summary) included with every session.
        </p>
        <div className="mt-8 rounded-2xl border border-gold/20 bg-navy-raised p-8">
          <p className="text-sm text-offwhite/60">Minimum engagement: 2 sessions, &euro;750</p>
          <p className="mt-2 font-serif text-2xl text-gold">
            vs. 5% equity at a &euro;1M valuation = &euro;50,000
          </p>
          <p className="mt-1 text-sm text-offwhite/60">
            A 66&times; difference &mdash; and you keep the equity.
          </p>
        </div>
      </section>

      <DeltaDivider />

      <section className="mx-auto w-full max-w-2xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">Where information ends, execution begins</h2>
        <p className="mt-4 text-offwhite/70">
          Workshops, coaches, and government advisory programs are good at
          information. Beyondelta picks up exactly where that ends.
        </p>
        <CtaLink
          href="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
        >
          Book a discovery call
        </CtaLink>
      </section>
    </>
  );
}
