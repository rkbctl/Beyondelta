import { LegalNotice } from "@/components/LegalNotice";

/**
 * SKELETON — structure per GDPR Art. 13 disclosure requirements. Hosting
 * and contact-form sections describe this site's actual technical setup
 * (accurate as of writing) rather than being placeholders — everything
 * else still needs real business details and legal review.
 */
export default function DatenschutzPage() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-24">
      <h1 className="font-serif text-4xl">Datenschutzerkl&auml;rung</h1>
      <LegalNotice />

      <div className="space-y-8 text-offwhite/80">
        <div>
          <h2 className="font-serif text-xl text-offwhite">1. Verantwortlicher</h2>
          <p className="mt-2">
            [Full legal name]
            <br />
            [Street address, postal code, city]
            <br />
            E-Mail: [contact email]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">2. Hosting</h2>
          <p className="mt-2">
            Diese Website wird bei Hetzner Online GmbH (Industriestr. 25, 91710
            Gunzenhausen, Deutschland) auf einem Server in einem EU-Rechenzentrum
            gehostet. Beim Aufruf der Website erhebt der Hosting-Provider
            automatisch Server-Logfiles, die Ihr Browser &uuml;bermittelt (IP-Adresse,
            Datum/Uhrzeit, angefragte Seite, User-Agent). [Confirm retention
            period and legal basis — typically Art. 6 Abs. 1 lit. f DSGVO,
            berechtigtes Interesse an Betriebssicherheit.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">3. Kontaktformular</h2>
          <p className="mt-2">
            Das Kontaktformular auf dieser Website erfasst Name, E-Mail-Adresse,
            Unternehmen (optional), eine Angabe zur Kontaktquelle sowie Ihre
            Nachricht. Diese Daten werden ausschlie&szlig;lich zur Bearbeitung
            Ihrer Anfrage verwendet, Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO (vorvertragliche Ma&szlig;nahmen). [Confirm storage location,
            retention period, and whether a third-party form/booking service is
            used — currently the form has no backend wired up.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">4. Cookies &amp; Tracking</h2>
          <p className="mt-2">
            Diese Website verwendet derzeit keine Cookies, keine
            Analyse-Tools (z.&nbsp;B. Google Analytics) und keine
            Marketing-Pixel. Schriftarten werden lokal &uuml;ber Next.js
            eingebunden (next/font) und nicht zur Laufzeit von Google-Servern
            geladen. [Update this section immediately if analytics, a video
            embed, or any tracking is added later — a consent banner would
            become required at that point.]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">5. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, L&ouml;schung,
            Einschr&auml;nkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch gem&auml;&szlig; Art. 15&ndash;21 DSGVO. Wenden Sie sich
            hierzu an die oben genannte Kontaktadresse.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">6. Aufsichtsbeh&ouml;rde</h2>
          <p className="mt-2">
            Der Landesbeauftragte f&uuml;r den Datenschutz und die
            Informationsfreiheit Baden-W&uuml;rttemberg (LfDI BW),
            K&ouml;nigstra&szlig;e 10a, 70173 Stuttgart. [Confirm this is the
            correct authority for the final business address.]
          </p>
        </div>
      </div>
    </section>
  );
}
