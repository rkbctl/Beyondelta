import { LegalNotice } from "@/components/LegalNotice";

/**
 * SKELETON — general terms (AGB) for the consulting services described in
 * the business plan. Pricing figures are pulled from confirmed brief
 * content, not invented; everything else is placeholder pending review.
 */
export default function AgbPage() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-24">
      <h1 className="font-serif text-4xl">Allgemeine Gesch&auml;ftsbedingungen</h1>
      <LegalNotice />

      <div className="space-y-8 text-offwhite/80">
        <div>
          <h2 className="font-serif text-xl text-offwhite">1. Geltungsbereich</h2>
          <p className="mt-2">
            Diese AGB gelten f&uuml;r Beratungsleistungen von [full legal name]
            (&bdquo;Beyondelta&ldquo;) im Bereich PMF-Validierung, Go-to-Market-Strategie
            und Prozessautomatisierung gegen&uuml;ber Unternehmern
            (&sect; 14 BGB).
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">2. Leistungen &amp; Verg&uuml;tung</h2>
          <p className="mt-2">
            Beratungssitzungen werden sitzungsbasiert vergütet zu 125&nbsp;€/Stunde
            netto zzgl. USt., Standardsitzung 3&nbsp;Stunden (375&nbsp;€). Es wird
            keine Beteiligung (Equity) am Unternehmen des Kunden genommen. Jede
            Sitzung beinhaltet ein schriftliches Ergebnisdokument (z.&nbsp;B.
            Business Model Canvas, ICP-Profil, GTM-Zusammenfassung). Mindestumfang:
            2 Sitzungen (750&nbsp;€). [Confirm these figures still match current
            pricing before publishing.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">3. Vertragsschluss</h2>
          <p className="mt-2">
            [Placeholder — how a booking via the contact form becomes a binding
            engagement, confirmation process, etc.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">4. Zahlungsbedingungen</h2>
          <p className="mt-2">[Placeholder — invoicing, payment terms, due dates.]</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">5. Widerruf, Stornierung</h2>
          <p className="mt-2">
            [Placeholder — cancellation/rescheduling policy for booked sessions.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">6. Haftung</h2>
          <p className="mt-2">
            [Placeholder — liability limitation language, needs legal review
            given this is advisory/consulting work, not a guaranteed outcome.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">7. Schlussbestimmungen</h2>
          <p className="mt-2">
            Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich
            zul&auml;ssig, [Karlsruhe]. [Confirm severability clause wording with
            legal review.]
          </p>
        </div>
      </div>
    </section>
  );
}
