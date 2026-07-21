import Link from "next/link";
import { headers } from "next/headers";
import { MinimalHeader } from "@/components/MinimalHeader";

/**
 * Full, faithful transcription of the generator output at
 * public/legal/Datenschutzerklaerung.html (datenschutz-generator.de, Dr.
 * Thomas Schwenke) — nothing summarized or cut. This is a legal document;
 * deciding which disclosures are "important enough" to keep isn't a call
 * to make unilaterally. Hosting/cookies/fonts sections describe this
 * site's actual real setup (confirmed accurate: Hetzner, no tracking,
 * self-hosted fonts via next/font).
 *
 * Checks headers() itself rather than relying on the root layout — see
 * app/impressum/page.tsx for why (pages re-render per navigation,
 * shared layouts don't).
 */
export default async function DatenschutzPage() {
  const headersList = await headers();
  const showMinimalHeader = headersList.get("x-stealth-mode") === "minimal-header";

  return (
    <>
      {showMinimalHeader && <MinimalHeader />}
      <section className="mx-auto w-full max-w-2xl px-6 py-24">
        <h1 className="font-serif text-4xl">Datenschutzerkl&auml;rung</h1>

      <div className="mt-8 space-y-8 text-offwhite/80">
        <div>
          <h2 className="font-serif text-xl text-offwhite">Pr&auml;ambel</h2>
          <p className="mt-2">
            Mit der folgenden Datenschutzerkl&auml;rung m&ouml;chten wir Sie
            dar&uuml;ber aufkl&auml;ren, welche Arten Ihrer personenbezogenen
            Daten (nachfolgend auch kurz als &bdquo;Daten&ldquo; bezeichnet) wir
            zu welchen Zwecken und in welchem Umfang verarbeiten. Die
            Datenschutzerkl&auml;rung gilt f&uuml;r alle von uns
            durchgef&uuml;hrten Verarbeitungen personenbezogener Daten, sowohl
            im Rahmen der Erbringung unserer Leistungen als auch insbesondere
            auf unseren Webseiten, in mobilen Applikationen sowie innerhalb
            externer Onlinepr&auml;senzen, wie z.&nbsp;B. unserer
            Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
            &bdquo;Onlineangebot&ldquo;).
          </p>
          <p className="mt-2">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          <p className="mt-2 text-sm text-offwhite/50">Stand: 3. Juli 2026</p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Verantwortlicher</h2>
          <p className="mt-2">
            Rajkaushik Borgohain
            <br />
            Kriegsstra&szlig;e 38A
            <br />
            76131 Karlsruhe, Deutschland
          </p>
          <p className="mt-2">
            E-Mail:{" "}
            <a href="mailto:rkb@beyondelta.de" className="underline hover:text-gold">
              rkb@beyondelta.de
            </a>
            <br />
            Impressum:{" "}
            <Link href="/impressum" className="underline hover:text-gold">
              beyondelta.de/impressum
            </Link>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">&Uuml;bersicht der Verarbeitungen</h2>
          <p className="mt-2">
            Die nachfolgende &Uuml;bersicht fasst die Arten der verarbeiteten
            Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf
            die betroffenen Personen.
          </p>
          <h3 className="mt-4 font-medium text-offwhite">Arten der verarbeiteten Daten</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Bestandsdaten.</li>
            <li>Zahlungsdaten.</li>
            <li>Kontaktdaten.</li>
            <li>Inhaltsdaten.</li>
            <li>Vertragsdaten.</li>
            <li>Nutzungsdaten.</li>
            <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
            <li>Protokolldaten.</li>
          </ul>
          <h3 className="mt-4 font-medium text-offwhite">Kategorien betroffener Personen</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Leistungsempf&auml;nger und Auftraggeber.</li>
            <li>Interessenten.</li>
            <li>Kommunikationspartner.</li>
            <li>Nutzer.</li>
            <li>Gesch&auml;fts- und Vertragspartner.</li>
          </ul>
          <h3 className="mt-4 font-medium text-offwhite">Zwecke der Verarbeitung</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Erbringung vertraglicher Leistungen und Erf&uuml;llung vertraglicher Pflichten.</li>
            <li>Kommunikation.</li>
            <li>Sicherheitsma&szlig;nahmen.</li>
            <li>Direktmarketing.</li>
            <li>B&uuml;ro- und Organisationsverfahren.</li>
            <li>Organisations- und Verwaltungsverfahren.</li>
            <li>Feedback.</li>
            <li>Marketing.</li>
            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
            <li>Informationstechnische Infrastruktur.</li>
            <li>Absatzf&ouml;rderung.</li>
            <li>Gesch&auml;ftsprozesse und betriebswirtschaftliche Verfahren.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Ma&szlig;gebliche Rechtsgrundlagen</h2>
          <p className="mt-2">
            <strong className="text-offwhite">Ma&szlig;gebliche Rechtsgrundlagen nach der DSGVO:</strong>{" "}
            Im Folgenden erhalten Sie eine &Uuml;bersicht der Rechtsgrundlagen
            der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
            Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
            nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
            Sitzland gelten k&ouml;nnen. Sollten ferner im Einzelfall
            speziellere Rechtsgrundlagen ma&szlig;geblich sein, teilen wir
            Ihnen diese in der Datenschutzerkl&auml;rung mit.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> &mdash; Die
              betroffene Person hat ihre Einwilligung in die Verarbeitung der
              sie betreffenden personenbezogenen Daten f&uuml;r einen
              spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
            </li>
            <li>
              <strong>Vertragserf&uuml;llung und vorvertragliche Anfragen (Art. 6
              Abs. 1 S. 1 lit. b) DSGVO)</strong> &mdash; Die Verarbeitung ist f&uuml;r
              die Erf&uuml;llung eines Vertrags, dessen Vertragspartei die
              betroffene Person ist, oder zur Durchf&uuml;hrung
              vorvertraglicher Ma&szlig;nahmen erforderlich, die auf Anfrage
              der betroffenen Person erfolgen.
            </li>
            <li>
              <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> &mdash;
              Die Verarbeitung ist zur Erf&uuml;llung einer rechtlichen
              Verpflichtung erforderlich, der der Verantwortliche unterliegt.
            </li>
            <li>
              <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> &mdash;
              die Verarbeitung ist zur Wahrung der berechtigten Interessen des
              Verantwortlichen oder eines Dritten notwendig, vorausgesetzt,
              dass die Interessen, Grundrechte und Grundfreiheiten der
              betroffenen Person, die den Schutz personenbezogener Daten
              verlangen, nicht &uuml;berwiegen.
            </li>
          </ul>
          <p className="mt-2">
            <strong className="text-offwhite">Nationale Datenschutzregelungen in Deutschland:</strong>{" "}
            Zus&auml;tzlich zu den Datenschutzregelungen der DSGVO gelten
            nationale Regelungen zum Datenschutz in Deutschland. Hierzu
            geh&ouml;rt insbesondere das Gesetz zum Schutz vor Missbrauch
            personenbezogener Daten bei der Datenverarbeitung
            (Bundesdatenschutzgesetz &ndash; BDSG). Das BDSG enth&auml;lt
            insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht
            auf L&ouml;schung, zum Widerspruchsrecht, zur Verarbeitung
            besonderer Kategorien personenbezogener Daten, zur Verarbeitung
            f&uuml;r andere Zwecke und zur &Uuml;bermittlung sowie
            automatisierten Entscheidungsfindung im Einzelfall
            einschlie&szlig;lich Profiling. Ferner k&ouml;nnen
            Landesdatenschutzgesetze der einzelnen Bundesl&auml;nder zur
            Anwendung gelangen.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Sicherheitsma&szlig;nahmen</h2>
          <p className="mt-2">
            Wir treffen nach Ma&szlig;gabe der gesetzlichen Vorgaben unter
            Ber&uuml;cksichtigung des Stands der Technik, der
            Implementierungskosten und der Art, des Umfangs, der
            Umst&auml;nde und der Zwecke der Verarbeitung sowie der
            unterschiedlichen Eintrittswahrscheinlichkeiten und des
            Ausma&szlig;es der Bedrohung der Rechte und Freiheiten
            nat&uuml;rlicher Personen geeignete technische und
            organisatorische Ma&szlig;nahmen, um ein dem Risiko angemessenes
            Schutzniveau zu gew&auml;hrleisten.
          </p>
          <p className="mt-2">
            Zu den Ma&szlig;nahmen geh&ouml;ren insbesondere die Sicherung der
            Vertraulichkeit, Integrit&auml;t und Verf&uuml;gbarkeit von Daten
            durch Kontrolle des physischen und elektronischen Zugangs zu den
            Daten als auch des sie betreffenden Zugriffs, der Eingabe, der
            Weitergabe, der Sicherung der Verf&uuml;gbarkeit und ihrer
            Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine
            Wahrnehmung von Betroffenenrechten, die L&ouml;schung von Daten
            und Reaktionen auf die Gef&auml;hrdung der Daten gew&auml;hrleisten.
            Ferner ber&uuml;cksichtigen wir den Schutz personenbezogener
            Daten bereits bei der Entwicklung bzw. Auswahl von Hardware,
            Software sowie Verfahren entsprechend dem Prinzip des
            Datenschutzes, durch Technikgestaltung und durch
            datenschutzfreundliche Voreinstellungen.
          </p>
          <p className="mt-2">
            <strong className="text-offwhite">
              Sicherung von Online-Verbindungen durch TLS-/SSL-Verschl&uuml;sselungstechnologie (HTTPS):
            </strong>{" "}
            Um die Daten der Nutzer, die &uuml;ber unsere Online-Dienste
            &uuml;bertragen werden, vor unerlaubten Zugriffen zu sch&uuml;tzen,
            setzen wir auf die TLS-/SSL-Verschl&uuml;sselungstechnologie.
            Secure Sockets Layer (SSL) und Transport Layer Security (TLS)
            sind die Eckpfeiler der sicheren Daten&uuml;bertragung im
            Internet. Diese Technologien verschl&uuml;sseln die
            Informationen, die zwischen der Website oder App und dem Browser
            des Nutzers (oder zwischen zwei Servern) &uuml;bertragen werden,
            wodurch die Daten vor unbefugtem Zugriff gesch&uuml;tzt sind.
            TLS, als die weiterentwickelte und sicherere Version von SSL,
            gew&auml;hrleistet, dass alle Daten&uuml;bertragungen den
            h&ouml;chsten Sicherheitsstandards entsprechen. Wenn eine Website
            durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die
            Anzeige von HTTPS in der URL signalisiert. Dies dient als ein
            Indikator f&uuml;r die Nutzer, dass ihre Daten sicher und
            verschl&uuml;sselt &uuml;bertragen werden.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">
            &Uuml;bermittlung von personenbezogenen Daten
          </h2>
          <p className="mt-2">
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt
            es vor, dass diese an andere Stellen, Unternehmen, rechtlich
            selbstst&auml;ndige Organisationseinheiten oder Personen
            &uuml;bermittelt beziehungsweise ihnen gegen&uuml;ber offengelegt
            werden. Zu den Empf&auml;ngern dieser Daten k&ouml;nnen z.&nbsp;B.
            mit IT-Aufgaben beauftragte Dienstleister geh&ouml;ren oder
            Anbieter von Diensten und Inhalten, die in eine Website
            eingebunden sind. In solchen F&auml;llen beachten wir die
            gesetzlichen Vorgaben und schlie&szlig;en insbesondere
            entsprechende Vertr&auml;ge bzw. Vereinbarungen, die dem Schutz
            Ihrer Daten dienen, mit den Empf&auml;ngern Ihrer Daten ab.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Internationale Datentransfers</h2>
          <p className="mt-2">
            <strong className="text-offwhite">Datenverarbeitung in Drittl&auml;ndern:</strong>{" "}
            Sofern wir Daten in ein Drittland (d.&nbsp;h. au&szlig;erhalb der
            Europ&auml;ischen Union (EU) oder des Europ&auml;ischen
            Wirtschaftsraums (EWR)) &uuml;bermitteln oder dies im Rahmen der
            Nutzung von Diensten Dritter oder der Offenlegung bzw.
            &Uuml;bermittlung von Daten an andere Personen, Stellen oder
            Unternehmen geschieht, erfolgt dies stets im Einklang mit den
            gesetzlichen Vorgaben.
          </p>
          <p className="mt-2">
            F&uuml;r Daten&uuml;bermittlungen in die USA st&uuml;tzen wir uns
            vorrangig auf das Data Privacy Framework (DPF), welches durch
            einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023
            als sicherer Rechtsrahmen anerkannt wurde. Zus&auml;tzlich haben
            wir mit den jeweiligen Anbietern Standardvertragsklauseln
            abgeschlossen, die den Vorgaben der EU-Kommission entsprechen und
            vertragliche Verpflichtungen zum Schutz Ihrer Daten festlegen.
          </p>
          <p className="mt-2">
            Diese zweifache Absicherung gew&auml;hrleistet einen umfassenden
            Schutz Ihrer Daten: Das DPF bildet die prim&auml;re Schutzebene,
            w&auml;hrend die Standardvertragsklauseln als zus&auml;tzliche
            Sicherheit dienen. Sollten sich &Auml;nderungen im Rahmen des DPF
            ergeben, greifen die Standardvertragsklauseln als zuverl&auml;ssige
            R&uuml;ckfalloption ein. So stellen wir sicher, dass Ihre Daten
            auch bei etwaigen politischen oder rechtlichen &Auml;nderungen
            stets angemessen gesch&uuml;tzt bleiben.
          </p>
          <p className="mt-2">
            Bei den einzelnen Diensteanbietern informieren wir Sie dar&uuml;ber,
            ob sie nach dem DPF zertifiziert sind und ob
            Standardvertragsklauseln vorliegen. Weitere Informationen zum DPF
            und eine Liste der zertifizierten Unternehmen finden Sie auf der
            Website des US-Handelsministeriums unter{" "}
            <a
              href="https://www.dataprivacyframework.gov/"
              className="underline hover:text-gold"
            >
              https://www.dataprivacyframework.gov/
            </a>{" "}
            (in englischer Sprache).
          </p>
          <p className="mt-2">
            F&uuml;r Daten&uuml;bermittlungen in andere Drittl&auml;nder gelten
            entsprechende Sicherheitsma&szlig;nahmen, insbesondere
            Standardvertragsklauseln, ausdr&uuml;ckliche Einwilligungen oder
            gesetzlich erforderliche &Uuml;bermittlungen. Informationen zu
            Drittlandtransfers und geltenden Angemessenheitsbeschl&uuml;ssen
            k&ouml;nnen Sie dem Informationsangebot der EU-Kommission
            entnehmen:{" "}
            <a
              href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
              className="underline hover:text-gold"
            >
              commission.europa.eu &mdash; international dimension of data protection
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">
            Allgemeine Informationen zur Datenspeicherung und L&ouml;schung
          </h2>
          <p className="mt-2">
            Wir l&ouml;schen personenbezogene Daten, die wir verarbeiten,
            gem&auml;&szlig; den gesetzlichen Bestimmungen, sobald die
            zugrundeliegenden Einwilligungen widerrufen werden oder keine
            weiteren rechtlichen Grundlagen f&uuml;r die Verarbeitung
            bestehen. Dies betrifft F&auml;lle, in denen der urspr&uuml;ngliche
            Verarbeitungszweck entf&auml;llt oder die Daten nicht mehr
            ben&ouml;tigt werden. Ausnahmen von dieser Regelung bestehen, wenn
            gesetzliche Pflichten oder besondere Interessen eine l&auml;ngere
            Aufbewahrung oder Archivierung der Daten erfordern.
          </p>
          <p className="mt-2">
            Insbesondere m&uuml;ssen Daten, die aus handels- oder
            steuerrechtlichen Gr&uuml;nden aufbewahrt werden m&uuml;ssen oder
            deren Speicherung notwendig ist zur Rechtsverfolgung oder zum
            Schutz der Rechte anderer nat&uuml;rlicher oder juristischer
            Personen, entsprechend archiviert werden.
          </p>
          <p className="mt-2">
            Unsere Datenschutzhinweise enthalten zus&auml;tzliche
            Informationen zur Aufbewahrung und L&ouml;schung von Daten, die
            speziell f&uuml;r bestimmte Verarbeitungsprozesse gelten.
          </p>
          <p className="mt-2">
            Bei mehreren Angaben zur Aufbewahrungsdauer oder
            L&ouml;schungsfristen eines Datums, ist stets die l&auml;ngste
            Frist ma&szlig;geblich. Daten, die nicht mehr f&uuml;r den
            urspr&uuml;nglich vorgesehenen Zweck, sondern aufgrund
            gesetzlicher Vorgaben oder anderer Gr&uuml;nde aufbewahrt werden,
            verarbeiten wir ausschlie&szlig;lich zu den Gr&uuml;nden, die ihre
            Aufbewahrung rechtfertigen.
          </p>
          <p className="mt-2">
            <strong className="text-offwhite">Aufbewahrung und L&ouml;schung von Daten:</strong>{" "}
            Die folgenden allgemeinen Fristen gelten f&uuml;r die Aufbewahrung
            und Archivierung nach deutschem Recht:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>10 Jahre</strong> &mdash; Aufbewahrungsfrist f&uuml;r
              B&uuml;cher und Aufzeichnungen, Jahresabschl&uuml;sse,
              Inventare, Lageberichte, Er&ouml;ffnungsbilanz sowie die zu
              ihrem Verst&auml;ndnis erforderlichen Arbeitsanweisungen und
              sonstigen Organisationsunterlagen (&sect; 147 Abs. 1 Nr. 1
              i.V.m. Abs. 3 AO, &sect; 14b Abs. 1 UStG, &sect; 257 Abs. 1 Nr.
              1 i.V.m. Abs. 4 HGB).
            </li>
            <li>
              <strong>8 Jahre</strong> &mdash; Buchungsbelege, wie z.&nbsp;B.
              Rechnungen und Kostenbelege (&sect; 147 Abs. 1 Nr. 4 und 4a
              i.V.m. Abs. 3 Satz 1 AO sowie &sect; 257 Abs. 1 Nr. 4 i.V.m.
              Abs. 4 HGB).
            </li>
            <li>
              <strong>6 Jahre</strong> &mdash; &Uuml;brige Gesch&auml;ftsunterlagen:
              empfangene Handels- oder Gesch&auml;ftsbriefe, Wiedergaben der
              abgesandten Handels- oder Gesch&auml;ftsbriefe, sonstige
              Unterlagen, soweit sie f&uuml;r die Besteuerung von Bedeutung
              sind, z.&nbsp;B. Stundenlohnzettel, Betriebsabrechnungsb&ouml;gen,
              Kalkulationsunterlagen, Preisauszeichnungen, aber auch
              Lohnabrechnungsunterlagen, soweit sie nicht bereits
              Buchungsbelege sind, und Kassenstreifen (&sect; 147 Abs. 1 Nr.
              2, 3, 5 i.V.m. Abs. 3 AO, &sect; 257 Abs. 1 Nr. 2 u. 3 i.V.m.
              Abs. 4 HGB).
            </li>
            <li>
              <strong>3 Jahre</strong> &mdash; Daten, die erforderlich sind, um
              potenzielle Gew&auml;hrleistungs- und Schadensersatzanspr&uuml;che
              oder &auml;hnliche vertragliche Anspr&uuml;che und Rechte zu
              ber&uuml;cksichtigen sowie damit verbundene Anfragen zu
              bearbeiten, basierend auf fr&uuml;heren Gesch&auml;ftserfahrungen
              und &uuml;blichen Branchenpraktiken, werden f&uuml;r die Dauer
              der regul&auml;ren gesetzlichen Verj&auml;hrungsfrist von drei
              Jahren gespeichert (&sect;&sect; 195, 199 BGB).
            </li>
          </ul>
          <p className="mt-2">
            <strong className="text-offwhite">Fristbeginn mit Ablauf des Jahres:</strong>{" "}
            Beginnt eine Frist nicht ausdr&uuml;cklich zu einem bestimmten
            Datum und betr&auml;gt sie mindestens ein Jahr, so startet sie
            automatisch am Ende des Kalenderjahres, in dem das
            fristausl&ouml;sende Ereignis eingetreten ist. Im Fall laufender
            Vertragsverh&auml;ltnisse, in deren Rahmen Daten gespeichert
            werden, ist das fristausl&ouml;sende Ereignis der Zeitpunkt des
            Wirksamwerdens der K&uuml;ndigung oder sonstige Beendigung des
            Rechtsverh&auml;ltnisses.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Rechte der betroffenen Personen</h2>
          <p className="mt-2">
            <strong className="text-offwhite">Rechte der betroffenen Personen aus der DSGVO:</strong>{" "}
            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
            die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus
              Gr&uuml;nden, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung der Sie betreffenden
              personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e
              oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch
              f&uuml;r ein auf diese Bestimmungen gest&uuml;tztes Profiling.
              Werden die Sie betreffenden personenbezogenen Daten verarbeitet,
              um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung der Sie betreffenden
              personenbezogenen Daten zum Zwecke derartiger Werbung
              einzulegen; dies gilt auch f&uuml;r das Profiling, soweit es
              mit solcher Direktwerbung in Verbindung steht.
            </li>
            <li>
              <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
              Recht, erteilte Einwilligungen jederzeit zu widerrufen.
            </li>
            <li>
              <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
              Best&auml;tigung dar&uuml;ber zu verlangen, ob betreffende Daten
              verarbeitet werden und auf Auskunft &uuml;ber diese Daten sowie
              auf weitere Informationen und Kopie der Daten entsprechend den
              gesetzlichen Vorgaben.
            </li>
            <li>
              <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
              gesetzlichen Vorgaben das Recht, die Vervollst&auml;ndigung der
              Sie betreffenden Daten oder die Berichtigung der Sie
              betreffenden unrichtigen Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf L&ouml;schung und Einschr&auml;nkung der Verarbeitung:</strong>{" "}
              Sie haben nach Ma&szlig;gabe der gesetzlichen Vorgaben das
              Recht, zu verlangen, dass Sie betreffende Daten unverz&uuml;glich
              gel&ouml;scht werden, bzw. alternativ nach Ma&szlig;gabe der
              gesetzlichen Vorgaben eine Einschr&auml;nkung der Verarbeitung
              der Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Daten&uuml;bertragbarkeit:</strong> Sie haben das
              Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben,
              nach Ma&szlig;gabe der gesetzlichen Vorgaben in einem
              strukturierten, g&auml;ngigen und maschinenlesbaren Format zu
              erhalten oder deren &Uuml;bermittlung an einen anderen
              Verantwortlichen zu fordern.
            </li>
            <li>
              <strong>Beschwerde bei Aufsichtsbeh&ouml;rde:</strong> Sie haben
              unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
              Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres
              gew&ouml;hnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des
              Orts des mutma&szlig;lichen Versto&szlig;es, wenn Sie der
              Ansicht sind, dass die Verarbeitung der Sie betreffenden
              personenbezogenen Daten gegen die Vorgaben der DSGVO
              verst&ouml;&szlig;t.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Gesch&auml;ftliche Leistungen</h2>
          <p className="mt-2">
            Wir verarbeiten personenbezogene Daten unserer Vertrags- und
            Gesch&auml;ftspartner, etwa Kunden, Auftraggeber, Interessenten,
            Lieferanten und sonstige Kooperationspartner (zusammenfassend
            &bdquo;Vertragspartner&ldquo;), zur Anbahnung, Durchf&uuml;hrung und
            Abwicklung von Vertragsverh&auml;ltnissen sowie vergleichbaren
            Rechtsverh&auml;ltnissen. Dies umfasst auch vorvertragliche
            Ma&szlig;nahmen, die auf Anfrage erfolgen, sowie die
            Kommunikation im Zusammenhang mit dem jeweiligen
            Vertragsverh&auml;ltnis.
          </p>
          <p className="mt-2">
            Die Verarbeitung dient insbesondere der Erf&uuml;llung unserer
            vertraglichen Haupt- und Nebenpflichten. Hierzu z&auml;hlen die
            Erbringung der vereinbarten Leistungen, etwaige
            Aktualisierungs- und Informationspflichten, die Bearbeitung von
            Gew&auml;hrleistungs- und sonstigen Leistungsst&ouml;rungen, die
            Abwicklung von Widerrufen, K&uuml;ndigungen von
            Dauerschuldverh&auml;ltnissen, R&uuml;ckabwicklungen,
            Erstattungen sowie die Bearbeitung sonstiger vertragsbezogener
            Erkl&auml;rungen und Anfragen. Erfasst sind sowohl einmalige
            Vertr&auml;ge als auch fortlaufende Vertragsbeziehungen.
          </p>
          <p className="mt-2">
            Verarbeitet werden insbesondere Stammdaten wie Name, Anschrift
            und ggf. Firma, Kontaktdaten wie E-Mail-Adresse und
            Telefonnummer, Vertrags- und Leistungsdaten wie
            Vertragsgegenstand, Vertragslaufzeit, Bestell- oder
            Vorgangsnummer, Nutzungs- und Leistungsdaten, Zahlungs- und
            Abrechnungsdaten sowie Kommunikationsinhalte und -historien.
            Soweit erforderlich, verarbeiten wir auch Daten, die uns im
            Rahmen der Durchf&uuml;hrung eines Auftrags offengelegt oder
            &uuml;bermittelt werden.
          </p>
          <p className="mt-2">
            Dar&uuml;ber hinaus verarbeiten wir die Daten zur Wahrung unserer
            Rechte sowie zur Erf&uuml;llung gesetzlicher Verpflichtungen. Dies
            umfasst insbesondere handels- und steuerrechtliche
            Aufbewahrungspflichten, Dokumentationspflichten sowie
            gegebenenfalls Nachweis- und Rechenschaftspflichten. Zudem
            erfolgt eine Verarbeitung auf Grundlage unserer berechtigten
            Interessen an einer ordnungsgem&auml;&szlig;en
            Gesch&auml;ftsf&uuml;hrung, internen Verwaltung, Risikosteuerung
            und IT-Sicherheit sowie am Schutz unseres Gesch&auml;ftsbetriebs
            und unserer Vertragspartner vor Missbrauch, Gef&auml;hrdung von
            Daten, Geheimnissen und sonstigen Rechtsg&uuml;tern. Hierzu kann
            auch die Einbindung externer Dienstleister wie IT- und
            Telekommunikationsanbieter, Transport- und
            Logistikunternehmen, Zahlungsdienstleister, Banken, Steuer- und
            Rechtsberater oder sonstige Erf&uuml;llungsgehilfen geh&ouml;ren,
            soweit dies f&uuml;r die Vertragsdurchf&uuml;hrung oder zur
            Erf&uuml;llung gesetzlicher Pflichten erforderlich ist.
          </p>
          <p className="mt-2">
            Eine Weitergabe personenbezogener Daten an Dritte erfolgt
            ausschlie&szlig;lich, soweit dies zur Vertragserf&uuml;llung, zur
            Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen, zur Wahrung
            berechtigter Interessen oder zur Erf&uuml;llung gesetzlicher
            Verpflichtungen erforderlich ist. &Uuml;ber
            dar&uuml;berhinausgehende Verarbeitungen, insbesondere zu
            Marketingzwecken, informieren wir gesondert im Rahmen dieser
            Datenschutzerkl&auml;rung.
          </p>
          <p className="mt-2">
            Welche Daten im Einzelfall erforderlich sind, teilen wir den
            Vertragspartnern im Rahmen der Datenerhebung mit, etwa in
            Onlineformularen durch entsprechende Kennzeichnung oder im
            pers&ouml;nlichen Kontakt.
          </p>
          <p className="mt-2">
            Die L&ouml;schung der Daten erfolgt, sobald sie f&uuml;r die
            vorgenannten Zwecke nicht mehr erforderlich sind und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen. Gesetzliche
            Aufbewahrungsfristen, insbesondere nach Handels- und Steuerrecht,
            k&ouml;nnen eine l&auml;ngere Speicherung erfordern. Daten, die im
            Rahmen eines konkreten Auftrags &uuml;bermittelt wurden,
            l&ouml;schen wir nach Abschluss des Auftrags und Ablauf etwaiger
            Aufbewahrungsfristen, sofern keine weiteren gesetzlichen oder
            vertraglichen Verpflichtungen zur Speicherung bestehen.
          </p>
          <p className="mt-2">
            Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO
            zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen und zur
            Erf&uuml;llung des jeweiligen Vertragsverh&auml;ltnisses sowie
            Art. 6 Abs. 1 lit. c DSGVO zur Erf&uuml;llung gesetzlicher
            Verpflichtungen. Soweit die Verarbeitung auf berechtigten
            Interessen beruht, erfolgt sie auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO, zur Wahrung unserer berechtigten Interessen an
            einer ordnungsgem&auml;&szlig;en und effizienten
            Gesch&auml;ftsorganisation, der internen Verwaltung und
            Dokumentation von Gesch&auml;ftsvorg&auml;ngen, der Durchsetzung
            und Verteidigung von Rechtsanspr&uuml;chen, der Sicherstellung
            der IT- und Datensicherheit, der Verhinderung von Missbrauch und
            Betrug sowie der wirtschaftlichen Steuerung und Weiterentwicklung
            unseres Gesch&auml;ftsbetriebs. Diese Interessen bestehen
            insbesondere in der Gew&auml;hrleistung eines sicheren und
            rechtssicheren Gesch&auml;ftsbetriebs sowie in der Wahrung
            unserer unternehmerischen Handlungsf&auml;higkeit.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-offwhite/70">
            <li>
              <strong className="text-offwhite/80">Verarbeitete Datenarten:</strong> Bestandsdaten
              (z.&nbsp;B. der vollst&auml;ndige Name, Wohnadresse,
              Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z.&nbsp;B.
              Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten
              (z.&nbsp;B. Post- und E-Mail-Adressen oder Telefonnummern);
              Vertragsdaten (z.&nbsp;B. Vertragsgegenstand, Laufzeit,
              Kundenkategorie).
            </li>
            <li>
              <strong className="text-offwhite/80">Betroffene Personen:</strong> Leistungsempf&auml;nger
              und Auftraggeber; Interessenten; Gesch&auml;fts- und
              Vertragspartner.
            </li>
            <li>
              <strong className="text-offwhite/80">Zwecke der Verarbeitung und berechtigte Interessen:</strong>{" "}
              Erbringung vertraglicher Leistungen und Erf&uuml;llung
              vertraglicher Pflichten; Kommunikation; B&uuml;ro- und
              Organisationsverfahren; Organisations- und
              Verwaltungsverfahren; Gesch&auml;ftsprozesse und
              betriebswirtschaftliche Verfahren.
            </li>
            <li>
              <strong className="text-offwhite/80">Aufbewahrung und L&ouml;schung:</strong> L&ouml;schung
              entsprechend Angaben im Abschnitt &bdquo;Allgemeine
              Informationen zur Datenspeicherung und L&ouml;schung&ldquo;.
            </li>
            <li>
              <strong className="text-offwhite/80">Rechtsgrundlagen:</strong> Vertragserf&uuml;llung und
              vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO);
              Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO);
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">
            Bereitstellung des Onlineangebots und Webhosting
          </h2>
          <p className="mt-2">
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere
            Online-Dienste zur Verf&uuml;gung stellen zu k&ouml;nnen. Zu
            diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die
            notwendig ist, um die Inhalte und Funktionen unserer
            Online-Dienste an den Browser oder das Endger&auml;t der Nutzer
            zu &uuml;bermitteln.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-offwhite/70">
            <li>
              <strong className="text-offwhite/80">Verarbeitete Datenarten:</strong> Nutzungsdaten
              (z.&nbsp;B. Seitenaufrufe und Verweildauer, Klickpfade,
              Nutzungsintensit&auml;t und -frequenz, verwendete
              Ger&auml;tetypen und Betriebssysteme, Interaktionen mit
              Inhalten und Funktionen); Meta-, Kommunikations- und
              Verfahrensdaten (z.&nbsp;B. IP-Adressen, Zeitangaben,
              Identifikationsnummern, beteiligte Personen); Protokolldaten
              (z.&nbsp;B. Logfiles betreffend Logins oder den Abruf von
              Daten oder Zugriffszeiten).
            </li>
            <li>
              <strong className="text-offwhite/80">Betroffene Personen:</strong> Nutzer (z.&nbsp;B.
              Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <strong className="text-offwhite/80">Zwecke der Verarbeitung und berechtigte Interessen:</strong>{" "}
              Bereitstellung unseres Onlineangebotes und
              Nutzerfreundlichkeit; Informationstechnische Infrastruktur
              (Betrieb und Bereitstellung von Informationssystemen und
              technischen Ger&auml;ten); Sicherheitsma&szlig;nahmen.
            </li>
            <li>
              <strong className="text-offwhite/80">Aufbewahrung und L&ouml;schung:</strong> L&ouml;schung
              entsprechend Angaben im Abschnitt &bdquo;Allgemeine
              Informationen zur Datenspeicherung und L&ouml;schung&ldquo;.
            </li>
            <li>
              <strong className="text-offwhite/80">Rechtsgrundlagen:</strong> Berechtigte Interessen
              (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
            </li>
          </ul>
          <p className="mt-3">
            <strong className="text-offwhite">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz:</strong>{" "}
              F&uuml;r die Bereitstellung unseres Onlineangebotes nutzen wir
              Speicherplatz, Rechenkapazit&auml;t und Software, die wir von
              einem entsprechenden Serveranbieter (auch &bdquo;Webhoster&ldquo;
              genannt) mieten oder anderweitig beziehen. Rechtsgrundlage:
              berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
            </li>
            <li>
              <strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der
              Zugriff auf unser Onlineangebot wird in Form von sogenannten
              &bdquo;Server-Logfiles&ldquo; protokolliert. Zu den
              Serverlogfiles k&ouml;nnen die Adresse und der Name der
              abgerufenen Webseiten und Dateien, Datum und Uhrzeit des
              Abrufs, &uuml;bertragene Datenmengen, Meldung &uuml;ber
              erfolgreichen Abruf, Browsertyp nebst Version, das
              Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
              Seite) und im Regelfall IP-Adressen und der anfragende Provider
              geh&ouml;ren. Die Serverlogfiles k&ouml;nnen zum einen zu
              Sicherheitszwecken eingesetzt werden, z.&nbsp;B. um eine
              &Uuml;berlastung der Server zu vermeiden (insbesondere im Fall
              von missbr&auml;uchlichen Angriffen, sogenannten
              DDoS-Attacken), und zum anderen, um die Auslastung der Server
              und ihre Stabilit&auml;t sicherzustellen. Rechtsgrundlage:
              berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO).{" "}
              <strong>L&ouml;schung von Daten:</strong> Logfile-Informationen
              werden f&uuml;r die Dauer von maximal 30 Tagen gespeichert und
              danach gel&ouml;scht oder anonymisiert. Daten, deren weitere
              Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur
              endg&uuml;ltigen Kl&auml;rung des jeweiligen Vorfalls von der
              L&ouml;schung ausgenommen.
            </li>
            <li>
              <strong>Hetzner:</strong> Leistungen auf dem Gebiet der
              Bereitstellung von informationstechnischer Infrastruktur und
              verbundenen Dienstleistungen (z.&nbsp;B. Speicherplatz
              und/oder Rechenkapazit&auml;ten). Dienstanbieter: Hetzner
              Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland.
              Rechtsgrundlage: berechtigte Interessen (Art. 6 Abs. 1 S. 1
              lit. f DSGVO). Website:{" "}
              <a href="https://www.hetzner.com" className="underline hover:text-gold">
                hetzner.com
              </a>
              . Datenschutzerkl&auml;rung / Auftragsverarbeitungsvertrag:{" "}
              <a
                href="https://docs.hetzner.com/de/general/company-and-policy/data-protection-at-hetzner"
                className="underline hover:text-gold"
              >
                docs.hetzner.com &mdash; data protection at Hetzner
              </a>
              .
            </li>
            <li>
              <strong>Cal.com (Terminbuchung):</strong> Auf unserer
              Kontaktseite binden wir die Terminbuchung von Cal.com per
              iframe ein (EU-Instanz, app.cal.eu), damit Sie direkt einen
              Gespr&auml;chstermin basierend auf unserer tats&auml;chlichen
              Verf&uuml;gbarkeit buchen k&ouml;nnen. Beim Laden des Buchungs-
              Widgets wird eine Verbindung zu den Servern von Cal.com
              hergestellt; dabei kann Ihre IP-Adresse an Cal.com
              &uuml;bermittelt werden. Bei Buchung eines Termins verarbeiten
              wir bzw. Cal.com in unserem Auftrag Name, E-Mail-Adresse,
              gew&uuml;nschten Termin und Zeitzone, um die Buchung
              durchzuf&uuml;hren. Dienstanbieter: Cal.com, Inc.
              Rechtsgrundlage: Vertragserf&uuml;llung und vorvertragliche
              Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO). Datenschutzerkl&auml;rung:{" "}
              <a href="https://cal.com/privacy" className="underline hover:text-gold">
                cal.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Cookies und Tracking:</strong> Diese Website selbst
              verwendet keine Cookies und keine Analyse-, Tracking- oder
              Marketing-Tools. Es findet keine Auswertung Ihres
              Nutzungsverhaltens statt &mdash; Ausnahme ist die oben
              beschriebene Cal.com-Terminbuchung auf der Kontaktseite.
            </li>
            <li>
              <strong>Schriftarten:</strong> Die auf dieser Website verwendeten
              Schriftarten werden lokal von unserem eigenen Server
              bereitgestellt. Es erfolgt keine Verbindung zu Drittanbietern
              (z.&nbsp;B. Google Fonts) und somit keine &Uuml;bermittlung
              Ihrer Daten an externe Anbieter beim Laden der Schriftarten.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Kontakt- und Anfrageverwaltung</h2>
          <p className="mt-2">
            Bei der Kontaktaufnahme mit uns (z.&nbsp;B. per Post,
            Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie
            im Rahmen bestehender Nutzer- und Gesch&auml;ftsbeziehungen
            werden die Angaben der anfragenden Personen verarbeitet, soweit
            dies zur Beantwortung der Kontaktanfragen und etwaiger
            angefragter Ma&szlig;nahmen erforderlich ist.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-offwhite/70">
            <li>
              <strong className="text-offwhite/80">Verarbeitete Datenarten:</strong> Kontaktdaten
              (z.&nbsp;B. Post- und E-Mail-Adressen oder Telefonnummern);
              Inhaltsdaten (z.&nbsp;B. textliche oder bildliche Nachrichten
              und Beitr&auml;ge); Meta-, Kommunikations- und Verfahrensdaten
              (z.&nbsp;B. IP-Adressen, Zeitangaben, Identifikationsnummern,
              beteiligte Personen).
            </li>
            <li>
              <strong className="text-offwhite/80">Betroffene Personen:</strong> Kommunikationspartner.
            </li>
            <li>
              <strong className="text-offwhite/80">Zwecke der Verarbeitung und berechtigte Interessen:</strong>{" "}
              Kommunikation; Organisations- und Verwaltungsverfahren;
              Feedback; Bereitstellung unseres Onlineangebotes und
              Nutzerfreundlichkeit.
            </li>
            <li>
              <strong className="text-offwhite/80">Aufbewahrung und L&ouml;schung:</strong> L&ouml;schung
              entsprechend Angaben im Abschnitt &bdquo;Allgemeine
              Informationen zur Datenspeicherung und L&ouml;schung&ldquo;.
            </li>
            <li>
              <strong className="text-offwhite/80">Rechtsgrundlagen:</strong> Berechtigte Interessen
              (Art. 6 Abs. 1 S. 1 lit. f DSGVO); Vertragserf&uuml;llung und
              vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO).
            </li>
          </ul>
          <p className="mt-3">
            <strong className="text-offwhite">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</strong>
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Kontaktformular:</strong> Bei Kontaktaufnahme &uuml;ber
              unser Kontaktformular, per E-Mail oder anderen
              Kommunikationswegen, verarbeiten wir die uns &uuml;bermittelten
              personenbezogenen Daten zur Beantwortung und Bearbeitung des
              jeweiligen Anliegens. Dies umfasst in der Regel Angaben wie
              Name, Kontaktinformationen und gegebenenfalls weitere
              Informationen, die uns mitgeteilt werden und zur angemessenen
              Bearbeitung erforderlich sind. Wir nutzen diese Daten
              ausschlie&szlig;lich f&uuml;r den angegebenen Zweck der
              Kontaktaufnahme und Kommunikation. Rechtsgrundlage:
              Vertragserf&uuml;llung und vorvertragliche Anfragen (Art. 6
              Abs. 1 S. 1 lit. b DSGVO), berechtigte Interessen (Art. 6 Abs.
              1 S. 1 lit. f DSGVO).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">
            Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon
          </h2>
          <p className="mt-2">
            Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen
            Kommunikation, die &uuml;ber diverse Kan&auml;le, wie z.&nbsp;B.
            E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen
            Vorgaben erfolgen kann.
          </p>
          <p className="mt-2">
            Die Empf&auml;nger haben das Recht, erteilte Einwilligungen
            jederzeit zu widerrufen oder der werblichen Kommunikation
            jederzeit kostenlos &uuml;ber die oben genannte
            Kontaktm&ouml;glichkeit zu widersprechen.
          </p>
          <p className="mt-2">
            Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der
            bisherigen Berechtigung erforderlichen Daten zur Kontaktaufnahme
            oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des
            Widerrufs oder Widerspruchs auf der Grundlage unserer
            berechtigten Interessen. Die Verarbeitung dieser Daten ist auf
            den Zweck einer m&ouml;glichen Abwehr von Anspr&uuml;chen
            beschr&auml;nkt. Auf der Grundlage des berechtigten Interesses,
            den Widerruf bzw. Widerspruch der Nutzer dauerhaft zu beachten,
            speichern wir ferner die zur Vermeidung einer erneuten
            Kontaktaufnahme erforderlichen Daten (z.&nbsp;B. je nach
            Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-offwhite/70">
            <li>
              <strong className="text-offwhite/80">Verarbeitete Datenarten:</strong> Bestandsdaten
              (z.&nbsp;B. der vollst&auml;ndige Name, Wohnadresse,
              Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z.&nbsp;B.
              Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten
              (z.&nbsp;B. textliche oder bildliche Nachrichten und
              Beitr&auml;ge).
            </li>
            <li>
              <strong className="text-offwhite/80">Betroffene Personen:</strong> Kommunikationspartner.
            </li>
            <li>
              <strong className="text-offwhite/80">Zwecke der Verarbeitung und berechtigte Interessen:</strong>{" "}
              Direktmarketing (z.&nbsp;B. per E-Mail oder postalisch);
              Marketing; Absatzf&ouml;rderung.
            </li>
            <li>
              <strong className="text-offwhite/80">Aufbewahrung und L&ouml;schung:</strong> L&ouml;schung
              entsprechend Angaben im Abschnitt &bdquo;Allgemeine
              Informationen zur Datenspeicherung und L&ouml;schung&ldquo;.
            </li>
            <li>
              <strong className="text-offwhite/80">Rechtsgrundlagen:</strong> Einwilligung (Art. 6
              Abs. 1 S. 1 lit. a DSGVO); berechtigte Interessen (Art. 6 Abs.
              1 S. 1 lit. f DSGVO).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">&Auml;nderung und Aktualisierung</h2>
          <p className="mt-2">
            Wir bitten Sie, sich regelm&auml;&szlig;ig &uuml;ber den Inhalt
            unserer Datenschutzerkl&auml;rung zu informieren. Wir passen die
            Datenschutzerkl&auml;rung an, sobald die &Auml;nderungen der von
            uns durchgef&uuml;hrten Datenverarbeitungen dies erforderlich
            machen. Wir informieren Sie, sobald durch die &Auml;nderungen
            eine Mitwirkungshandlung Ihrerseits (z.&nbsp;B. Einwilligung)
            oder eine sonstige individuelle Benachrichtigung erforderlich
            wird.
          </p>
          <p className="mt-2">
            Sofern wir in dieser Datenschutzerkl&auml;rung Adressen und
            Kontaktinformationen von Unternehmen und Organisationen angeben,
            bitten wir zu beachten, dass die Adressen sich &uuml;ber die Zeit
            &auml;ndern k&ouml;nnen und bitten die Angaben vor
            Kontaktaufnahme zu pr&uuml;fen.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-offwhite">Begriffsdefinitionen</h2>
          <p className="mt-2">
            In diesem Abschnitt erhalten Sie eine &Uuml;bersicht &uuml;ber die
            in dieser Datenschutzerkl&auml;rung verwendeten
            Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich
            definiert sind, gelten deren gesetzliche Definitionen. Die
            nachfolgenden Erl&auml;uterungen sollen dagegen vor allem dem
            Verst&auml;ndnis dienen.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-offwhite/70">
            <li>
              <strong className="text-offwhite/80">Bestandsdaten:</strong> Bestandsdaten umfassen
              wesentliche Informationen, die f&uuml;r die Identifikation und
              Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und
              &auml;hnlichen Zuordnungen notwendig sind. Diese Daten
              k&ouml;nnen u.&nbsp;a. pers&ouml;nliche und demografische
              Angaben wie Namen, Kontaktinformationen (Adressen,
              Telefonnummern, E-Mail-Adressen), Geburtsdaten und spezifische
              Identifikatoren (Benutzer-IDs) beinhalten.
            </li>
            <li>
              <strong className="text-offwhite/80">Inhaltsdaten:</strong> Inhaltsdaten umfassen
              Informationen, die im Zuge der Erstellung, Bearbeitung und
              Ver&ouml;ffentlichung von Inhalten aller Art generiert werden,
              einschlie&szlig;lich zugeh&ouml;riger Metadaten wie Tags,
              Beschreibungen, Autoreninformationen und
              Ver&ouml;ffentlichungsdaten.
            </li>
            <li>
              <strong className="text-offwhite/80">Kontaktdaten:</strong> Kontaktdaten sind essentielle
              Informationen, die die Kommunikation mit Personen oder
              Organisationen erm&ouml;glichen, u.&nbsp;a. Telefonnummern,
              postalische Adressen und E-Mail-Adressen sowie
              Kommunikationsmittel wie soziale Medien-Handles und
              Instant-Messaging-Identifikatoren.
            </li>
            <li>
              <strong className="text-offwhite/80">Meta-, Kommunikations- und Verfahrensdaten:</strong>{" "}
              Informationen &uuml;ber die Art und Weise, wie Daten
              verarbeitet, &uuml;bermittelt und verwaltet werden &mdash;
              einschlie&szlig;lich Metadaten (Kontext, Herkunft, Struktur
              anderer Daten), Kommunikationsdaten (Austausch von
              Informationen &uuml;ber verschiedene Kan&auml;le) und
              Verfahrensdaten (Prozesse und Abl&auml;ufe innerhalb von
              Systemen oder Organisationen).
            </li>
            <li>
              <strong className="text-offwhite/80">Nutzungsdaten:</strong> Informationen, die
              erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen
              oder Plattformen interagieren, u.&nbsp;a. genutzte Funktionen,
              Verweildauer, Navigationspfade, Nutzungsh&auml;ufigkeit,
              Zeitstempel, IP-Adressen, Ger&auml;teinformationen und
              Standortdaten.
            </li>
            <li>
              <strong className="text-offwhite/80">Personenbezogene Daten:</strong> Alle Informationen,
              die sich auf eine identifizierte oder identifizierbare
              nat&uuml;rliche Person (&bdquo;betroffene Person&ldquo;) beziehen;
              als identifizierbar wird eine nat&uuml;rliche Person angesehen,
              die direkt oder indirekt identifiziert werden kann.
            </li>
            <li>
              <strong className="text-offwhite/80">Protokolldaten:</strong> Informationen &uuml;ber
              Ereignisse oder Aktivit&auml;ten, die in einem System oder
              Netzwerk protokolliert wurden, z.&nbsp;B. Zeitstempel,
              IP-Adressen, Benutzeraktionen, Fehlermeldungen.
            </li>
            <li>
              <strong className="text-offwhite/80">Verantwortlicher:</strong> Die nat&uuml;rliche oder
              juristische Person, Beh&ouml;rde, Einrichtung oder andere
              Stelle, die allein oder gemeinsam mit anderen &uuml;ber die
              Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
              entscheidet.
            </li>
            <li>
              <strong className="text-offwhite/80">Verarbeitung:</strong> Jeder mit oder ohne Hilfe
              automatisierter Verfahren ausgef&uuml;hrte Vorgang oder jede
              solche Vorgangsreihe im Zusammenhang mit personenbezogenen
              Daten &mdash; Erheben, Auswerten, Speichern, &Uuml;bermitteln
              oder L&ouml;schen.
            </li>
            <li>
              <strong className="text-offwhite/80">Vertragsdaten:</strong> Spezifische Informationen,
              die sich auf die Formalisierung einer Vereinbarung zwischen
              zwei oder mehr Parteien beziehen, einschlie&szlig;lich Start-
              und Enddaten, Art der Leistungen, Preisvereinbarungen,
              Zahlungsbedingungen, K&uuml;ndigungsrechte und
              Verl&auml;ngerungsoptionen.
            </li>
            <li>
              <strong className="text-offwhite/80">Zahlungsdaten:</strong> S&auml;mtliche Informationen,
              die zur Abwicklung von Zahlungstransaktionen ben&ouml;tigt
              werden, z.&nbsp;B. Bankverbindungen, Zahlungsbetr&auml;ge,
              Transaktionsdaten, Rechnungsinformationen.
            </li>
          </ul>
        </div>

        <p className="text-xs text-offwhite/40">
          Erstellt mit kostenlosem{" "}
          <a
            href="https://datenschutz-generator.de/"
            className="underline hover:text-gold"
          >
            Datenschutz-Generator.de
          </a>{" "}
          von Dr. Thomas Schwenke.
        </p>
        </div>
      </section>
    </>
  );
}
