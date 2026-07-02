import { LegalNotice } from "@/components/LegalNotice";

/**
 * SKELETON — required disclosures per § 5 DDG (Digitale-Dienste-Gesetz,
 * successor to § 5 TMG). Structure only — see LegalNotice.
 */
export default function ImpressumPage() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-24">
      <h1 className="font-serif text-4xl">Impressum</h1>
      <LegalNotice />

      <div className="space-y-8 text-offwhite/80">
        <div>
          <h2 className="font-serif text-xl text-offwhite">Angaben gem&auml;&szlig; &sect; 5 DDG</h2>
          <p className="mt-2">
            [Full legal name of the Freiberufler]
            <br />
            [Street address]
            <br />
            [Postal code, city] — Karlsruhe, Germany
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Kontakt</h2>
          <p className="mt-2">
            Telefon: [phone number]
            <br />
            E-Mail: [contact email]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Umsatzsteuer-ID</h2>
          <p className="mt-2">
            [USt-IdNr. if registered for VAT, per &sect; 27a UStG — required since the
            business plan references net+VAT session pricing]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Verantwortlich f&uuml;r den Inhalt</h2>
          <p className="mt-2">nach &sect; 18 Abs. 2 MStV: [Name, address as above]</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">EU-Streitschlichtung</h2>
          <p className="mt-2">
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="underline hover:text-gold"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . [Confirm applicability and whether email should be listed here.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-2">
            [Standard statement on willingness/unwillingness to participate in
            dispute resolution before a consumer arbitration board — confirm
            stance with legal review.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Haftungsausschluss</h2>
          <p className="mt-2">
            [Standard Haftung f&uuml;r Inhalte / Haftung f&uuml;r Links / Urheberrecht
            disclaimer language — confirm final wording with legal review rather
            than using unreviewed boilerplate.]
          </p>
        </div>
      </div>
    </section>
  );
}
