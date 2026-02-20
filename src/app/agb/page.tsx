import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
    title: "AGB | WAMOCON Academy",
    description:
        "Allgemeine Geschäftsbedingungen der WAMOCON Academy GmbH für geförderte Weiterbildungsmaßnahmen (ISTQB CTFL) mit Bildungsgutschein.",
};

export default function AGBPage() {
    return (
        <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)" lastUpdated="Februar 2026">
            <p>
                <em>
                    Hinweis: Diese AGB sind ein Grundgerüst und müssen von einem
                    Fachanwalt geprüft und vervollständigt werden, um rechtssicher zu
                    sein.
                </em>
            </p>

            <h2>§ 1 Geltungsbereich</h2>
            <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der
                WAMOCON Academy GmbH, Mergenthalerallee 79-81, 65760 Eschborn
                (nachfolgend „Anbieter"), gelten für alle Verträge über die
                Teilnahme an Weiterbildungsmaßnahmen, insbesondere die
                ISTQB® Certified Tester Foundation Level (CTFL) Schulung, die ein
                Teilnehmer (nachfolgend „Kunde") mit dem Anbieter abschließt.
            </p>
            <p>
                (2) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die
                ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder
                ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit
                zugerechnet werden können.
            </p>

            <h2>§ 2 Vertragsgegenstand</h2>
            <p>
                (1) Gegenstand des Vertrages ist die Teilnahme an der
                ISTQB® CTFL 4.0 Weiterbildungsmaßnahme, bestehend aus:
            </p>
            <ul>
                <li>Präsenz-Intensivkurs über 15 Werktage (3 Wochen Vollzeit)</li>
                <li>Nutzung des DiTeLe Praxis-Simulators während der Maßnahme</li>
                <li>Bereitstellung eines Tablets für die Dauer der Maßnahme</li>
                <li>ISTQB® Zertifizierungsprüfung (iSQI)</li>
                <li>Prüfungsvorbereitung und -betreuung</li>
            </ul>
            <p>
                (2) Die Maßnahme ist nach AZAV zertifiziert und kann über einen
                Bildungsgutschein der Agentur für Arbeit oder des Jobcenters
                gefördert werden.
            </p>

            <h2>§ 3 Vertragsschluss</h2>
            <p>
                (1) Die Darstellung der Weiterbildungsmaßnahmen auf unserer Website
                stellt kein verbindliches Angebot dar, sondern eine Aufforderung
                zur Abgabe eines Angebots.
            </p>
            <p>
                (2) Der Kunde kann über das Kontaktformular auf unserer Website oder
                telefonisch eine unverbindliche Beratung anfordern.
            </p>
            <p>
                (3) Der Vertrag kommt durch die schriftliche Anmeldebestätigung des
                Anbieters zustande. Bei Förderung durch Bildungsgutschein ist
                zusätzlich die Vorlage des gültigen Bildungsgutscheins
                Voraussetzung für die Teilnahme.
            </p>

            <h2>§ 4 Preise und Zahlungsbedingungen</h2>
            <p>
                (1) Bei Förderung durch einen Bildungsgutschein der Agentur für
                Arbeit oder des Jobcenters entstehen dem Teilnehmer keine Kosten.
                Die Kosten werden vollständig vom Kostenträger übernommen.
            </p>
            <p>
                (2) Die Abrechnung erfolgt direkt zwischen dem Anbieter und dem
                jeweiligen Kostenträger gemäß den geltenden AZAV-Richtlinien.
            </p>
            <p>
                (3) Bei Selbstzahlern gelten die zum Zeitpunkt der Anmeldung
                gültigen Preise gemäß der aktuellen Preisliste des Anbieters. Alle
                Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
            </p>

            <h2>§ 5 Durchführung der Maßnahme</h2>
            <p>
                (1) Der Kurs findet als Präsenzveranstaltung am Standort Frankfurt
                am Main statt, sofern nicht anders vereinbart.
            </p>
            <p>
                (2) Die Gruppenstärke ist auf maximal 12 Teilnehmer begrenzt, um
                eine optimale Betreuung zu gewährleisten.
            </p>
            <p>
                (3) Der Anbieter behält sich vor, den Kurs bei zu geringer
                Teilnehmerzahl (unter 4 Teilnehmer) bis spätestens 14 Tage vor
                Kursbeginn abzusagen. In diesem Fall werden bereits eingereichte
                Bildungsgutscheine zurückgegeben und ein Alternativtermin
                angeboten.
            </p>

            <h2>§ 6 Widerrufsrecht für Verbraucher</h2>
            <p>
                (1) Verbrauchern steht grundsätzlich ein Widerrufsrecht zu. Näheres
                ergibt sich aus der Widerrufsbelehrung des Anbieters.
            </p>
            <p>
                (2) Bei Förderung durch Bildungsgutschein gelten die Regelungen des
                jeweiligen Kostenträgers bezüglich Abbruch und Rücktritt.
            </p>

            <h2>§ 7 Pflichten des Teilnehmers</h2>
            <p>(1) Der Teilnehmer verpflichtet sich:</p>
            <ul>
                <li>Regelmäßig an der Maßnahme teilzunehmen</li>
                <li>
                    Die bereitgestellten Materialien und das Tablet pfleglich zu
                    behandeln
                </li>
                <li>
                    Das Tablet nach Abschluss der Maßnahme in ordnungsgemäßem Zustand
                    zurückzugeben (sofern nicht im Leistungsumfang als Geschenk
                    enthalten)
                </li>
                <li>
                    Die Hausordnung des Veranstaltungsortes zu beachten
                </li>
            </ul>
            <p>
                (2) Fehlzeiten sind dem Anbieter unverzüglich mitzuteilen. Bei
                Förderung durch Bildungsgutschein ist der Teilnehmer verpflichtet,
                die Anwesenheitspflichten des Kostenträgers einzuhalten.
            </p>

            <h2>§ 8 Gewährleistung</h2>
            <p>
                (1) Es gelten die gesetzlichen Gewährleistungsrechte.
            </p>
            <p>
                (2) Der Anbieter gewährleistet, dass die Schulungsinhalte dem
                aktuellen ISTQB® CTFL 4.0 Syllabus entsprechen.
            </p>
            <p>
                (3) Der Anbieter übernimmt jedoch keine Garantie für das Bestehen
                der ISTQB®-Prüfung. Der Prüfungserfolg hängt von individuellen
                Faktoren ab (Lernaufwand, Vorkenntnisse, Prüfungsvorbereitung).
            </p>

            <h2>§ 9 Haftungsbeschränkung</h2>
            <p>
                (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe
                Fahrlässigkeit sowie nach dem Produkthaftungsgesetz.
            </p>
            <p>
                (2) Bei leicht fahrlässiger Verletzung wesentlicher
                Vertragspflichten haftet der Anbieter der Höhe nach begrenzt auf den
                bei Vertragsschluss vorhersehbaren Schaden.
            </p>
            <p>
                (3) Im Übrigen ist eine Haftung des Anbieters ausgeschlossen.
            </p>

            <h2>§ 10 Nutzungsrechte und Urheberrecht</h2>
            <p>
                (1) Alle Schulungsinhalte (Unterlagen, Übungen, Software-Zugang)
                sind urheberrechtlich geschützt.
            </p>
            <p>
                (2) Der Teilnehmer erhält ein nicht-exklusives,
                nicht-übertragbares Nutzungsrecht für den eigenen Gebrauch während
                der Dauer der Maßnahme. Die Weitergabe, Vervielfältigung oder
                öffentliche Zugänglichmachung der Inhalte ist nicht gestattet.
            </p>
            <p>
                (3) Bei Verstoß gegen diese Nutzungsbedingungen behält sich der
                Anbieter vor, den Zugang zu sperren und Schadensersatz geltend zu
                machen.
            </p>

            <h2>§ 11 Streitbeilegung</h2>
            <p>
                (1) Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
                <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://ec.europa.eu/consumers/odr
                </a>{" "}
                finden.
            </p>
            <p>
                (2) Wir sind nicht bereit und nicht verpflichtet, an einem
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
            </p>

            <h2>§ 12 Schlussbestimmungen</h2>
            <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts.
            </p>
            <p>
                (2) Sofern es sich beim Kunden um einen Kaufmann, eine juristische
                Person des öffentlichen Rechts oder um ein öffentlich-rechtliches
                Sondervermögen handelt, ist Gerichtsstand für alle Streitigkeiten
                aus Vertragsverhältnissen der Sitz des Anbieters.
            </p>
            <p>
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, berührt dies die Wirksamkeit der übrigen Bestimmungen
                nicht.
            </p>

            <p>
                <strong>Wichtiger Hinweis:</strong> Diese AGB sind ein Grundgerüst
                und müssen vor dem produktiven Einsatz durch einen Fachanwalt für
                IT-Recht geprüft und an die spezifischen Anforderungen Ihres
                Geschäftsmodells angepasst werden. Insbesondere die Regelungen zu
                Widerrufsrecht und Haftung bedürfen juristischer Prüfung.
            </p>
        </LegalLayout>
    );
}
