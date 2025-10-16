// public/scripts/questions-bt121.js

export const questions = [
  {
    question: "Was regelt die Arbeits- und Ruhezeitverordnung (ARV2)?",
    options: [
      { text: "Die technischen Anforderungen an Taxifahrzeuge", correct: false },
      { text: "Die Lenk- und Ruhezeiten für berufsmässige Fahrer", correct: true },
      { text: "Die Tarife für Fahrten innerhalb der Schweiz", correct: false },
      { text: "Die Versicherungsbestimmungen für Berufskraftfahrer", correct: false }
    ],
    explanation: "Die ARV2 regelt die Lenk- und Ruhezeiten von Fahrern im berufsmässigen Personentransport."
  },
  {
    question: "Wie lange dürfen berufsmässige Fahrer gemäss ARV2 täglich maximal fahren?",
    options: [
      { text: "12 Stunden", correct: false },
      { text: "9 Stunden", correct: true },
      { text: "8 Stunden", correct: false },
      { text: "10 Stunden", correct: false }
    ],
    explanation: "Die tägliche Lenkzeit darf gemäss ARV2 maximal 9 Stunden betragen."
  },
  {
    question: "Welche Aussage zum Fahrtenschreiber trifft zu?",
    options: [
      { text: "Er ist nur bei Fahrten ins Ausland notwendig.", correct: false },
      { text: "Er zeichnet Lenkzeiten, Pausen und Ruhezeiten automatisch auf.", correct: true },
      { text: "Er ersetzt das Fahrtenbuch.", correct: false },
      { text: "Er darf nur auf Wunsch des Fahrers verwendet werden.", correct: false }
    ],
    explanation: "Der Fahrtenschreiber ist ein Kontrollgerät zur automatischen Erfassung von Lenk- und Ruhezeiten."
  },
  {
    question: "Welche Dokumente müssen Taxifahrer stets mitführen?",
    options: [
      { text: "Nur den Führerausweis", correct: false },
      { text: "Führerausweis, Fahrzeugausweis und BPT-Ausweis", correct: true },
      { text: "Nur den Fahrzeugausweis", correct: false },
      { text: "Nur den BPT-Ausweis", correct: false }
    ],
    explanation: "Alle drei Dokumente sind für den berufsmässigen Personentransport erforderlich."
  },
  {
    question: "Welche Strafe droht bei Nichteinhaltung der Ruhezeiten gemäss ARV2?",
    options: [
      { text: "Verwarnung", correct: false },
      { text: "Geldbusse oder Anzeige", correct: true },
      { text: "Punkte im Fahreignungsregister", correct: false },
      { text: "Keine Konsequenzen", correct: false }
    ],
    explanation: "Verstösse gegen die ARV2 können mit Bussen oder Anzeigen geahndet werden."
  },
  {
    question: "Wozu dient der analoge Fahrtenschreiber?",
    options: [
      { text: "Zur Navigation", correct: false },
      { text: "Zur Aufzeichnung von Fahrstrecken und Geschwindigkeiten", correct: false },
      { text: "Zur manuellen Erfassung der Lenkzeiten", correct: true },
      { text: "Zur Anzeige des Reifendrucks", correct: false }
    ],
    explanation: "Der analoge Fahrtenschreiber wird zur manuellen Erfassung verwendet."
  },
  {
    question: "Welche Aussage trifft auf den digitalen Fahrtenschreiber zu?",
    options: [
      { text: "Er kann nicht überprüft werden.", correct: false },
      { text: "Er speichert Daten auf einer Fahrkarte.", correct: false },
      { text: "Er speichert Daten auf der Fahrerkarte und im Gerät selbst.", correct: true },
      { text: "Er ersetzt den Führerausweis.", correct: false }
    ],
    explanation: "Digitale Fahrtenschreiber speichern auf Fahrerkarte und Gerät."
  },
  {
    question: "Wie lange dürfen Daten des digitalen Fahrtenschreibers aufbewahrt werden?",
    options: [
      { text: "1 Monat", correct: false },
      { text: "6 Monate", correct: false },
      { text: "1 Jahr", correct: false },
      { text: "365 Tage", correct: true }
    ],
    explanation: "Die Daten müssen 365 Tage aufbewahrt werden."
  },

  {
    question: "Was bedeutet die Abkürzung BPT?",
    options: [
      { text: "Berufspraktische Theorie", correct: false },
      { text: "Berufsmässiger Personentransport", correct: true },
      { text: "Basler Personenverkehr Tarif", correct: false },
      { text: "Betriebliche Prüfungs-Tauglichkeit", correct: false }
    ],
    explanation: "BPT steht für berufsmässigen Personentransport."
  },
  {
    question: "Wie lange ist eine Pause gemäss ARV2 mindestens?",
    options: [
      { text: "5 Minuten", correct: false },
      { text: "10 Minuten", correct: false },
      { text: "15 Minuten", correct: true },
      { text: "20 Minuten", correct: false }
    ],
    explanation: "Die Pause muss mindestens 15 Minuten betragen."
  },
  {
    question: "Wie lange darf die wöchentliche Lenkzeit maximal sein?",
    options: [
      { text: "45 Stunden", correct: true },
      { text: "40 Stunden", correct: false },
      { text: "50 Stunden", correct: false },
      { text: "35 Stunden", correct: false }
    ],
    explanation: "Die maximale wöchentliche Lenkzeit beträgt 45 Stunden."
  },
  {
    question: "Was ist bei der Personenbeförderung besonders wichtig?",
    options: [
      { text: "Hohe Geschwindigkeit", correct: false },
      { text: "Sichere und rücksichtsvolle Fahrweise", correct: true },
      { text: "Musiklautstärke", correct: false },
      { text: "Schnelle Ankunft", correct: false }
    ],
    explanation: "Sicherheit und Rücksicht stehen an oberster Stelle."
  },
  {
    question: "Wann darf man Fahrgäste ablehnen?",
    options: [
      { text: "Wenn sie keine Maske tragen", correct: false },
      { text: "Wenn sie alkoholisiert sind und eine Gefahr darstellen", correct: true },
      { text: "Wenn man Feierabend machen möchte", correct: false },
      { text: "Wenn die Fahrt unter 5 km ist", correct: false }
    ],
    explanation: "Gefährdung oder Belästigung rechtfertigen eine Ablehnung."
  },
  {
    question: "Wie oft müssen Berufschauffeure die medizinische Eignung nachweisen?",
    options: [
      { text: "Alle 2 Jahre", correct: false },
      { text: "Alle 3 Jahre", correct: true },
      { text: "Alle 5 Jahre", correct: false },
      { text: "Nie", correct: false }
    ],
    explanation: "Alle drei Jahre ist ein ärztlicher Nachweis erforderlich."
  },
  {
    question: "Was ist bei der Fahrgastaufnahme zu beachten?",
    options: [
      { text: "Keine Begrüssung nötig", correct: false },
      { text: "Hilfestellung nur auf Anfrage", correct: false },
      { text: "Freundlicher Umgang und Unterstützung bei Bedarf", correct: true },
      { text: "Nur Gepäck verladen, kein Gespräch", correct: false }
    ],
    explanation: "Freundlichkeit und Hilfsbereitschaft sind entscheidend."
  },
  {
    question: "Welche Pflicht gilt bei Taxifahrten mit Taxameter?",
    options: [
      { text: "Pauschalpreis immer aushandeln", correct: false },
      { text: "Taxameter immer verwenden", correct: true },
      { text: "Nur bei langen Fahrten verwenden", correct: false },
      { text: "Nur ausserhalb der Stadt verwenden", correct: false }
    ],
    explanation: "Der Taxameter ist bei Taxifahrten Pflicht."
  },
  {
    question: "Was bedeutet 'Bereitschaftszeit' gemäss ARV2?",
    options: [
      { text: "Fahrzeit mit Motor aus", correct: false },
      { text: "Wartezeit, in der der Fahrer sofort verfügbar ist", correct: true },
      { text: "Pause", correct: false },
      { text: "Urlaubszeit", correct: false }
    ],
    explanation: "Bereitschaftszeit ist Wartezeit mit sofortiger Einsatzbereitschaft."
  },
  {
    question: "Welche Verantwortung trägt der Fahrer bei Fahrzeugmängeln?",
    options: [
      { text: "Keine – nur der Halter haftet", correct: false },
      { text: "Er darf nicht fahren, wenn Mängel vorliegen", correct: true },
      { text: "Nur bei Lichtmängeln", correct: false },
      { text: "Nur bei abgelaufenem Service", correct: false }
    ],
    explanation: "Der Fahrer darf kein Fahrzeug mit sicherheitsrelevanten Mängeln bewegen."
  },
  {
    question: "Welche Massnahme ist bei Sekundenschlaf am Steuer sinnvoll?",
    options: [
      { text: "Klimaanlage einschalten", correct: false },
      { text: "Radio lauter drehen", correct: false },
      { text: "Fahrt sofort unterbrechen und ausruhen", correct: true },
      { text: "Fenster öffnen", correct: false }
    ],
    explanation: "Bei Müdigkeit muss die Fahrt unterbrochen werden."
  },
  {
    question: "Was ist beim Transport von betagten Personen besonders wichtig?",
    options: [
      { text: "Schnelligkeit", correct: false },
      { text: "Regelmässige Pausen", correct: false },
      { text: "Rücksichtsvolle Fahrweise und Hilfestellung", correct: true },
      { text: "Keine Kommunikation", correct: false }
    ],
    explanation: "Betagte Fahrgäste benötigen Unterstützung und sanftes Fahren."
  },
  {
    question: "Wann ist ein Fahrtenbuch zu führen?",
    options: [
      { text: "Bei jeder berufsmässigen Fahrt, wenn kein Fahrtenschreiber vorhanden ist", correct: true },
      { text: "Nur bei privaten Fahrten", correct: false },
      { text: "Nur bei Fahrten ins Ausland", correct: false },
      { text: "Nie – Fahrtenschreiber ersetzt es immer", correct: false }
    ],
    explanation: "Bei fehlendem Fahrtenschreiber ist ein manuelles Fahrtenbuch vorgeschrieben."
  },
  {
    question: "Wie sollen Fahrer auf aggressive Fahrgäste reagieren?",
    options: [
      { text: "Zurückschreien", correct: false },
      { text: "Fahrt abbrechen, wenn nötig Polizei rufen", correct: true },
      { text: "Diskussion beginnen", correct: false },
      { text: "Ignorieren", correct: false }
    ],
    explanation: "Bei Gefahr kann die Fahrt abgebrochen und die Polizei kontaktiert werden."
  },
  {
    question: "Welche Rolle spielt das Handbuch 'Der Taxifahrer – ARV2'?",
    options: [
      { text: "Es ist verpflichtender Lehrstoff zur Prüfungsvorbereitung", correct: true },
      { text: "Es ist ein privates Nachschlagewerk", correct: false },
      { text: "Es ist ein Reiseführer", correct: false },
      { text: "Es enthält nur Versicherungsinformationen", correct: false }
    ],
    explanation: "Das Handbuch dient zur gezielten Vorbereitung auf die BPT-Theorieprüfung."
  },
  {
    question: "Wie sollte ein Fahrzeug für den Personentransport aussehen?",
    options: [
      { text: "Schnell und sportlich", correct: false },
      { text: "Gross, alt und kostengünstig", correct: false },
      { text: "Technisch einwandfrei, sauber, gepflegt", correct: true },
      { text: "Mit Spoiler und Tuning", correct: false }
    ],
    explanation: "Sicherheit und Sauberkeit sind entscheidend für Fahrgäste."
  },
  {
    question: "Was gilt für den Transport von Kindern?",
    options: [
      { text: "Keine besonderen Regeln", correct: false },
      { text: "Kindersitze sind nur bei Fahrten über 30 Minuten nötig", correct: false },
      { text: "Kindersicherung je nach Grösse/Gewicht erforderlich", correct: true },
      { text: "Kinder dürfen auf dem Schoss sitzen", correct: false }
    ],
    explanation: "Kinder müssen mit passenden Kindersitzen gesichert werden."
  },
  {
    question: "Wie kann der Fahrer zur Imagepflege beitragen?",
    options: [
      { text: "Durch schnelle Fahrweise", correct: false },
      { text: "Durch Freundlichkeit, Zuverlässigkeit und gepflegtes Auftreten", correct: true },
      { text: "Durch Musik", correct: false },
      { text: "Durch wenig Gespräch", correct: false }
    ],
    explanation: "Das persönliche Verhalten prägt das Image des Fahrers."
  },
{
  question: "Wie oft muss ein Fahrzeug für den Personentransport zur technischen Kontrolle (MFK)?",
  options: [
    { text: "Alle 2 Jahre", correct: true },
    { text: "Jährlich", correct: false },
    { text: "Nur einmal bei Inverkehrsetzung", correct: false },
    { text: "Alle 5 Jahre", correct: false }
  ],
  explanation: "Beruflich genutzte Fahrzeuge unterliegen in der Schweiz in der Regel einer Kontrolle alle 2 Jahre."
},
{
  question: "Was ist beim Ein- und Aussteigen von Fahrgästen besonders zu beachten?",
  options: [
    { text: "Die Türen so spät wie möglich öffnen", correct: false },
    { text: "Fahrgäste immer auf der Strassenseite einsteigen lassen", correct: false },
    { text: "Sichere Positionierung des Fahrzeugs und Unterstützung der Fahrgäste", correct: true },
    { text: "Nur bei Regen Hilfe anbieten", correct: false }
  ],
  explanation: "Sicherheit und Hilfsbereitschaft stehen beim Ein- und Ausstieg im Vordergrund."
},
{
  question: "Wie verhalten Sie sich bei einem Unfall mit Fahrgästen?",
  options: [
    { text: "Fahrgäste beruhigen und sofort Polizei/Notruf alarmieren", correct: true },
    { text: "Wegfahren und später melden", correct: false },
    { text: "Fahrgäste selbständig entscheiden lassen", correct: false },
    { text: "Nichts tun, wenn niemand verletzt ist", correct: false }
  ],
  explanation: "Berufschauffeure haben eine besondere Sorgfaltspflicht gegenüber ihren Fahrgästen."
},
{
  question: "Wann ist der Einsatz von Schneeketten bei Taxifahrzeugen erforderlich?",
  options: [
    { text: "Bei Schnee oder Eis, wenn entsprechende Signalisation vorhanden ist", correct: true },
    { text: "Nie, da Winterreifen genügen", correct: false },
    { text: "Nur auf Autobahnen", correct: false },
    { text: "Nur auf Passstrassen", correct: false }
  ],
  explanation: "Bei entsprechender Signalisation oder schwierigen Wetterverhältnissen sind Schneeketten Pflicht."
}
];