import { DeltaDivider } from "@/components/DeltaDivider";

/**
 * SKELETON — founder story and credibility, plus the differentiation
 * narrative in full (compressed version lives on Home).
 */
export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">[About / founder story headline]</h1>
        <p className="mt-6 text-offwhite/70">
          [KIT mechanical engineering &rarr; energy specialization &rarr; Enersoul/IDAa &rarr; Beyondelta]
        </p>
      </section>

      <DeltaDivider />

      {/* Full differentiation narrative */}
      <section className="mx-auto w-full max-w-3xl px-6 py-20">
        <h2 className="text-center font-serif text-3xl">[Differentiation that actually matters]</h2>
        <div className="mt-8 space-y-4 text-offwhite/70">
          <p>[Founder-to-founder credibility — built from having been a founder, not from theory]</p>
          <p>[The pitch isn&apos;t more frameworks — it&apos;s focused execution alongside the founder]</p>
          <p>[A methodology the founder keeps and can reuse afterward, not a slide deck they forget]</p>
        </div>
      </section>

      <DeltaDivider />

      {/* Positioning claim */}
      <section className="mx-auto w-full max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">[Positioning claim]</h2>
        <p className="mt-4 text-offwhite/70">
          [Execution-led GTM consulting — where pure information (workshops, coaches, government
          advisory) ends and execution begins]
        </p>
      </section>
    </>
  );
}
