/**
 * SKELETON — full case study library. Campaign landing pages (/startups,
 * /mittelstand) only ever surface 1-2 curated pieces; this page holds all.
 *
 * Cards use the off-white ("Field") surface treatment per the brand kit:
 * navy is body text on light pages, slate is secondary/muted text.
 */
const PLACEHOLDER_CASES = Array.from({ length: 6 }, (_, i) => i + 1);

export default function PortfolioPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="font-serif text-4xl">[Portfolio]</h1>
        <p className="mt-4 text-offwhite/70">[Intro line — full case study library]</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_CASES.map((i) => (
          <article
            key={i}
            className="rounded-2xl border border-navy/10 bg-offwhite p-6 text-navy"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-slate">[Category / audience]</p>
            <h2 className="mt-2 font-serif text-lg">[Case study headline {i}]</h2>
            <p className="mt-2 text-sm text-slate">[Summary — problem, approach, result]</p>
          </article>
        ))}
      </div>
    </section>
  );
}
