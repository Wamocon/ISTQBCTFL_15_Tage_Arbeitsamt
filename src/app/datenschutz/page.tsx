import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
    title: "Datenschutzerklärung | WAMOCON Academy",
    description:
        "Datenschutzerklärung der WAMOCON Academy GmbH – Informationen zur Datenverarbeitung, Cookies, Analyse-Tools und Ihren Rechten gemäß DSGVO.",
};

export default function DatenschutzPage() {
    return (
        <LegalLayout title="Datenschutzerklärung" lastUpdated="Februar 2026">
            {/* 1. Überblick */}
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Ausführliche Informationen
                zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                aufgeführten Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung
                entnehmen.
            </p>
            <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in
                ein Kontaktformular eingeben. Andere Daten werden automatisch oder
                nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
                Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
            </p>
            <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
                der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                Nutzerverhaltens verwendet werden.
            </p>
            <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
                erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
            </p>

            {/* 2. Hosting */}
            <h2>2. Hosting</h2>

            <h3>Externes Hosting</h3>
            <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die
                auf dieser Website erfasst werden, werden auf den Servern des
                Hosters gespeichert. Hierbei kann es sich v.&nbsp;a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
                eine Website generiert werden, handeln.
            </p>
            <p>
                <strong>Aktueller Hoster:</strong> Strato AG
                <br />
                <strong>Serverstandort:</strong> EU (Deutschland)
            </p>
            <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
                lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                effizienten Bereitstellung unseres Online-Angebots durch einen
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
                entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
                § 25 Abs. 1 TDDDG.
            </p>

            <h3>Auftragsverarbeitung</h3>
            <p>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung
                des oben genannten Dienstes geschlossen. Hierbei handelt es sich um
                einen datenschutzrechtlich vorgeschriebenen Vertrag, der
                gewährleistet, dass dieser die personenbezogenen Daten unserer
                Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
                DSGVO verarbeitet.
            </p>

            {/* 3. Pflichtinformationen */}
            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
            </p>
            <p>
                WAMOCON Academy GmbH
                <br />
                Mergenthalerallee 79 – 81
                <br />
                65760 Eschborn
                <br />
                Deutschland
                <br />
                Telefon:{" "}
                <a href="tel:+4961965838312">+49 (0) 6196 5838312</a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@test-it-academy.de">info@test-it-academy.de</a>
            </p>

            <h3>Speicherdauer</h3>
            <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
                bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
                ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
                zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
                handelsrechtliche Aufbewahrungsfristen).
            </p>

            <h3>Allgemeine Hinweise zu den Rechtsgrundlagen</h3>
            <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
                wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
                lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
                Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
                Falle einer ausdrücklichen Einwilligung in die Übertragung
                personenbezogener Daten in Drittstaaten erfolgt die
                Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
                DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
                Zugriff auf Informationen in Ihr Endgerät eingewilligt haben,
                erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25
                Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h3>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
            <p>
                Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den
                USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten.
                Wenn diese Tools aktiv sind, können Ihre personenbezogenen Daten in
                diese Drittstaaten übertragen und dort verarbeitet werden. Wir
                weisen darauf hin, dass in diesen Ländern kein mit der EU
                vergleichbares Datenschutzniveau garantiert werden kann.
            </p>

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
                Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
                jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3>Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)</h3>
            <p>
                <strong>
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
                    ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
                    DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
                    VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.
                </strong>{" "}
                Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
                Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht,
                entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
                einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht
                mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige
                Gründe für die Verarbeitung nachweisen.
            </p>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
            </p>
            <p>
                <strong>Zuständige Aufsichtsbehörde (Hessen):</strong>
                <br />
                Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
                <br />
                Postfach 3163, 65021 Wiesbaden
                <br />
                <a
                    href="https://datenschutz.hessen.de"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://datenschutz.hessen.de
                </a>
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3>Auskunft, Berichtigung und Löschung</h3>
            <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
                und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                Berichtigung oder Löschung dieser Daten.
            </p>

            <h3>Recht auf Einschränkung der Verarbeitung</h3>
            <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Das Recht auf Einschränkung
                besteht in folgenden Fällen:
            </p>
            <ul>
                <li>
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                    personenbezogenen Daten bestreiten
                </li>
                <li>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
                    geschah/geschieht
                </li>
                <li>
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                    diese jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                    Rechtsansprüchen benötigen
                </li>
                <li>
                    Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben
                </li>
            </ul>

            <h3>SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von „http://" auf
                „https://" wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile.
            </p>

            {/* 4. Datenerfassung */}
            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Cookies</h3>
            <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind
                kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
                Sie werden entweder vorübergehend (Session-Cookies) oder dauerhaft
                (permanente Cookies) auf Ihrem Endgerät gespeichert.
                Session-Cookies werden nach Ende Ihres Besuchs automatisch
                gelöscht.
            </p>
            <p>
                Technisch notwendige Cookies (Art. 6 Abs. 1 lit. f DSGVO) werden
                gesetzt, um die Funktionsfähigkeit unserer Website sicherzustellen.
                Alle anderen Cookies werden nur mit Ihrer ausdrücklichen
                Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1
                TDDDG).
            </p>

            <h3>Cookie-Einwilligung</h3>
            <p>
                Beim ersten Besuch unserer Website werden Sie über einen
                Cookie-Banner über die Verwendung von Cookies informiert und um Ihre
                Einwilligung gebeten. Ohne Ihre ausdrückliche Einwilligung werden
                keine Cookies gesetzt, die über die technisch notwendigen
                hinausgehen.
            </p>
            <p>
                <strong>Kategorien von Cookies:</strong>
            </p>
            <ul>
                <li>
                    <strong>Notwendig:</strong> Diese Cookies sind für die
                    Grundfunktionen der Website erforderlich und können nicht
                    deaktiviert werden.
                </li>
                <li>
                    <strong>Statistik:</strong> Diese Cookies helfen uns zu verstehen,
                    wie Besucher mit der Website interagieren.
                </li>
                <li>
                    <strong>Marketing:</strong> Diese Cookies werden verwendet, um
                    Werbung relevanter für Sie zu gestalten.
                </li>
            </ul>

            <h3>Server-Log-Dateien</h3>
            <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr Browser
                automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
            </ul>
            <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO.
                <br />
                <strong>Speicherdauer:</strong> Die Daten werden nach 7 Tagen
                automatisch gelöscht.
            </p>

            <h3>Kontaktformular &amp; E-Mail-Anfragen</h3>
            <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
                lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
                von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist.
            </p>
            <p>
                <strong>Speicherdauer:</strong> Die von Ihnen im Kontaktformular
                eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
                Zweck für die Datenspeicherung entfällt.
            </p>

            {/* 5. Analyse-Tools */}
            <h2>5. Analyse-Tools und Werbung</h2>

            <h3>Google Analytics 4</h3>
            <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google
                Analytics 4. Anbieter ist die Google Ireland Limited („Google"),
                Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung
                der Website durch Sie ermöglichen. Wir haben die
                IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von
                Google innerhalb von Mitgliedstaaten der EU gekürzt.
            </p>
            <p>
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
                <strong>Cookies:</strong> _ga, _gid, _gat
                <br />
                <strong>Speicherdauer:</strong> bis zu 2 Jahre
                <br />
                <strong>Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO)
            </p>

            <h3>Meta Pixel (Facebook Pixel)</h3>
            <p>
                Diese Website nutzt zur Konversionsmessung das Meta Pixel von Meta
                Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
                Harbour, Dublin 2, Irland („Meta").
            </p>
            <p>
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
                <strong>Cookies:</strong> _fbp, _fbc
                <br />
                <strong>Speicherdauer:</strong> bis zu 3 Monate
                <br />
                <strong>Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO)
            </p>
            <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Meta:{" "}
                <a
                    href="https://www.facebook.com/about/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.facebook.com/about/privacy/
                </a>
            </p>

            {/* 6. Plugins & Tools */}
            <h2>6. Plugins und Tools</h2>

            <h3>Google Fonts (lokales Hosting)</h3>
            <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
                genannte Google Fonts, die von Google bereitgestellt werden. Die
                Google Fonts sind lokal installiert. Eine Verbindung zu Servern von
                Google findet dabei nicht statt.
            </p>
            <p>
                Weitere Informationen:{" "}
                <a
                    href="https://developers.google.com/fonts/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://developers.google.com/fonts/faq
                </a>
            </p>

            {/* 7. E-Learning */}
            <h2>7. E-Learning-Plattformen</h2>

            <h3>Eloomi &amp; DiTeLe</h3>
            <p>
                Nach Kursanmeldung erhalten Sie Zugang zu unseren
                Kurs-Plattformen. Dabei werden die für die Vertragserfüllung
                erforderlichen personenbezogenen Daten (Name, E-Mail-Adresse) an
                die jeweiligen Plattformanbieter übermittelt.
            </p>
            <ul>
                <li>
                    <strong>Eloomi:</strong> Online-Kurs-Plattform (
                    <a
                        href="https://360-tm.eloomi.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://360-tm.eloomi.io
                    </a>
                    )
                </li>
                <li>
                    <strong>DiTeLe:</strong> Praxis-Tool (
                    <a
                        href="https://ditele-learn.ai/de"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://ditele-learn.ai/de
                    </a>
                    )
                </li>
            </ul>
            <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragserfüllung).
            </p>

            {/* 8. Rechte */}
            <h2>8. Ihre Rechte im Überblick</h2>
            <p>Sie haben gemäß DSGVO folgende Rechte:</p>
            <ul>
                <li>Art. 15 DSGVO: Recht auf Auskunft</li>
                <li>Art. 16 DSGVO: Recht auf Berichtigung</li>
                <li>Art. 17 DSGVO: Recht auf Löschung</li>
                <li>Art. 18 DSGVO: Recht auf Einschränkung der Verarbeitung</li>
                <li>Art. 20 DSGVO: Recht auf Datenübertragbarkeit</li>
                <li>Art. 21 DSGVO: Recht auf Widerspruch</li>
                <li>Art. 7 Abs. 3 DSGVO: Recht auf Widerruf einer Einwilligung</li>
                <li>Art. 77 DSGVO: Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
            <p>
                <strong>Kontakt für Datenschutz-Anfragen:</strong>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@test-it-academy.de">info@test-it-academy.de</a>
            </p>

            {/* 9. Aktualität */}
            <h2>9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
                Februar 2026.
            </p>
            <p>
                Durch die Weiterentwicklung unserer Website und Angebote darüber
                oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
                ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf
                der Website von Ihnen abgerufen und ausgedruckt werden.
            </p>
        </LegalLayout>
    );
}
