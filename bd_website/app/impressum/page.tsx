import { headers } from "next/headers";
import { MinimalHeader } from "@/components/MinimalHeader";

/**
 * Content sourced from the Impressum-Generator (WebsiteWissen.com), legal
 * text by Kanzlei Hasselbach — see public/legal/Impressum.html for the
 * original generator output this was transcribed from.
 *
 * Checks headers() itself rather than relying on the root layout for
 * this — pages (unlike shared layouts) fully re-render on every
 * client-side navigation, so this is the one place that safely reflects
 * the current request rather than a cached previous one.
 */
export default async function ImpressumPage() {
  const headersList = await headers();
  const showMinimalHeader = headersList.get("x-stealth-mode") === "minimal-header";

  return (
    <>
      {showMinimalHeader && <MinimalHeader />}
      <section className="mx-auto w-full max-w-2xl px-6 py-24">
        <h1 className="font-serif text-4xl">Impressum</h1>

      <div className="mt-8 space-y-8 text-offwhite/80">
        <div>
          <h2 className="font-serif text-xl text-offwhite">Angaben gem&auml;&szlig; &sect; 5 DDG</h2>
          <p className="mt-2">
            Rajkaushik Borgohain
            <br />
            Kriegsstra&szlig;e 38A
            <br />
            76131 Karlsruhe, Germany
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Vertreten durch</h2>
          <p className="mt-2">Rajkaushik Borgohain</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Kontakt</h2>
          <p className="mt-2">
            Telefon: +49 152 07024974
            <br />
            E-Mail:{" "}
            <a href="mailto:rkb@beyondelta.de" className="underline hover:text-gold">
              rkb@beyondelta.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="mt-2">
            Wir nehmen nicht an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teil und sind dazu auch nicht
            verpflichtet.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Haftungsausschluss</h2>

          <h3 className="mt-4 font-medium text-offwhite">Haftung f&uuml;r Inhalte</h3>
          <p className="mt-2">
            Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt
            erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und
            Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine Gew&auml;hr
            &uuml;bernehmen. Als Diensteanbieter sind wir gem&auml;&szlig;
            &sect; 7 Abs. 1 DDG f&uuml;r eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10
            DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            &uuml;bermittelte oder gespeicherte fremde Informationen zu
            &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine
            rechtswidrige T&auml;tigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine
            diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
            diese Inhalte umgehend entfernen.
          </p>

          <h3 className="mt-4 font-medium text-offwhite">Haftung f&uuml;r Links</h3>
          <p className="mt-2">
            Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
            F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
            Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
            waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>

          <h3 className="mt-4 font-medium text-offwhite">Urheberrecht</h3>
          <p className="mt-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
            f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend
            entfernen.
          </p>
        </div>

        <p className="text-xs text-offwhite/40">
          Erstellt mit dem{" "}
          <a
            href="https://impressum-generator.de"
            className="underline hover:text-gold"
          >
            Impressum-Generator
          </a>{" "}
          von WebsiteWissen.com. Rechtstext von der{" "}
          <a
            href="https://www.kanzlei-hasselbach.de/"
            className="underline hover:text-gold"
          >
            Kanzlei Hasselbach
          </a>
          .
        </p>
      </div>
      </section>
    </>
  );
}
