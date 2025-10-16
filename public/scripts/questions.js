
// public/scripts/questions.js
export const questions = [
  {
    question: "Welche Practice ist für die Bereitstellung von Komponenten in Live-Umgebungen verantwortlich?",
    options: [
      { text: "Change Enablement", correct: false },
      { text: "Release Management", correct: false },
      { text: "IT Asset Management", correct: false },
      { text: "Deployment Management", correct: true }
    ],
    explanation: "Deployment Management stellt neue oder geänderte Komponenten (Hardware, Software etc.) in Live-Umgebungen bereit."
  },
  {
    question: "Welche Practice umfasst die Klassifizierung und Verantwortung für Fragen und Requests von Anwendern?",
    options: [
      { text: "Service Desk", correct: true },
      { text: "Incident Management", correct: false },
      { text: "Change Enablement", correct: false },
      { text: "Service Level Management", correct: false }
    ],
    explanation: "Der Service Desk ist der zentrale Kontaktpunkt für Anwenderfragen, Requests und Incidents."
  },
  {
    question: "Welche Practice identifiziert Messgrössen, welche die Serviceerfahrung des Kunden widerspiegeln?",
    options: [
      { text: "Continual Improvement", correct: false },
      { text: "Service Desk", correct: false },
      { text: "Service Level Management", correct: true },
      { text: "Problem Management", correct: false }
    ],
    explanation: "Service Level Management misst die tatsächliche Serviceerfahrung und Zufriedenheit der Kunden."
  },
  {
    question: "Was ist die vorwiegende Verwendung eines Change-Kalenders?",
    options: [
      { text: "Unterstützen des Incident Management und der Verbesserungsplanung", correct: false },
      { text: "Managen von Notfall-Changes", correct: false },
      { text: "Planen von Changes und Beitragen zur Konfliktvermeidung", correct: true },
      { text: "Managen von Standard-Changes", correct: false }
    ],
    explanation: "Ein Change-Kalender hilft, Änderungen zu koordinieren, Konflikte zu vermeiden und Ressourcen zu planen."
  },
  {
    question: "Welche Dimension des Service Managements konzentriert sich auf Aktivitäten und deren Koordination?",
    options: [
      { text: "Organisationen und Menschen", correct: false },
      { text: "Informationen und Technologie", correct: false },
      { text: "Partner und Lieferanten", correct: false },
      { text: "Wertströme und Prozesse", correct: true }
    ],
    explanation: "Die Dimension 'Wertströme und Prozesse' fokussiert sich auf koordinierte Aktivitäten zur Wertschöpfung."
  }
  ,
{
  question: "Wie unterstützt die Kategorisierung von Incidents die Incident Management Practice?",
  options: [
    { text: "Sie erleichtert die Zuweisung des Incidents zum richtigen Supportbereich", correct: true },
    { text: "Sie legt die Priorität des Incidents fest", correct: false },
    { text: "Sie stellt sicher, dass alle Incidents pünktlich gelöst werden", correct: false },
    { text: "Sie bestimmt, wie der Service Provider wahrgenommen wird", correct: false }
  ],
  explanation: "Die Kategorisierung hilft, Incidents schnell und korrekt dem richtigen Team oder Supportbereich zuzuordnen."
},
{
  question: "Ein Service ist eine Möglichkeit, gemeinsamen Wert zu schaffen, indem das Erreichen der von Kunden gewünschten [...] erleichtert wird.",
  options: [
    { text: "Warranty", correct: false },
    { text: "Ergebnisse", correct: true },
    { text: "Utility", correct: false },
    { text: "Outputs", correct: false }
  ],
  explanation: "Ein Service hilft Kunden, gewünschte Ergebnisse zu erreichen – ohne dass sie die Kosten und Risiken selbst tragen."
},
{
  question: "Was ist eine Empfehlung der Continual Improvement Practice?",
  options: [
    { text: "Mindestens ein kleines Team sollte sich voll darauf konzentrieren", correct: true },
    { text: "Alle Verbesserungen sollten mehrphasige Projekte sein", correct: false },
    { text: "Continual Improvement soll isoliert von anderen Practices laufen", correct: false },
    { text: "Externe Lieferanten sollten nicht involviert sein", correct: false }
  ],
  explanation: "Ein dediziertes kleines Team hilft, kontinuierliche Verbesserung sichtbar und effektiv in der Organisation zu verankern."
},
{
  question: "Was ist ein möglicher Vorteil eines ITSM-Tools im Incident Management?",
  options: [
    { text: "Es kann Ursachen von Incidents automatisch ermitteln", correct: false },
    { text: "Es kann Incidents mit Problemen oder Known Errors abgleichen", correct: true },
    { text: "Es sichert Lieferantenverträge rechtlich ab", correct: false },
    { text: "Es löst komplexe Incidents ohne menschliches Eingreifen", correct: false }
  ],
  explanation: "Ein gutes ITSM-Tool kann Zusammenhänge erkennen und Incidents automatisch bestehenden Problemen zuordnen."
},
{
  question: "Welche Rolle übermittelt Service Requests?",
  options: [
    { text: "Anwender oder autorisierter Vertreter", correct: true },
    { text: "Kunde oder autorisierter Vertreter", correct: false },
    { text: "Sponsor oder autorisierter Vertreter", correct: false },
    { text: "Lieferant oder autorisierter Vertreter", correct: false }
  ],
  explanation: "Service Requests kommen typischerweise direkt vom Anwender – also der Person, die den Service nutzt."
}
,
{
  question: "Welche Practice stellt einen Single Point of Contact für Anwender bereit?",
  options: [
    { text: "Incident Management", correct: false },
    { text: "Change Enablement", correct: false },
    { text: "Service Desk", correct: true },
    { text: "Service Request Management", correct: false }
  ],
  explanation: "Der Service Desk dient als zentrale Anlaufstelle für alle Anfragen, Incidents und Supportkontakte von Anwendern."
},
{
  question: "Welches Grundprinzip empfiehlt, dass die vier Dimensionen des Service Management berücksichtigt werden?",
  options: [
    { text: "Ganzheitlich denken und arbeiten", correct: true },
    { text: "Iterative Weiterentwicklung mit Feedback", correct: false },
    { text: "Wertorientierung", correct: false },
    { text: "Auf Einfachheit und Praktikabilität achten", correct: false }
  ],
  explanation: "Das Prinzip 'Ganzheitlich denken und arbeiten' betont, dass alle vier Dimensionen integriert betrachtet werden müssen."
},
{
  question: "Was würde durch die Service Request Management Practice unterstützt werden?",
  options: [
    { text: "Request zur Autorisierung eines kritischen Changes", correct: false },
    { text: "Request eines Anwenders für eine Standardaktion", correct: true },
    { text: "Request zur Wiederherstellung nach Serviceunterbrechung", correct: false },
    { text: "Request zur Ursachenanalyse mehrerer Incidents", correct: false }
  ],
  explanation: "Service Request Management befasst sich mit Routineanfragen – etwa Softwareinstallation oder Passwortzurücksetzung."
},
{
  question: "Welche Practice ist die Verantwortlichkeit eines jeden Organisationsmitglieds?",
  options: [
    { text: "Service Level Management", correct: false },
    { text: "Change Enablement", correct: false },
    { text: "Problem Management", correct: false },
    { text: "Continual Improvement", correct: true }
  ],
  explanation: "Jede Person in der Organisation trägt Verantwortung für kontinuierliche Verbesserung – das ist ein zentraler ITIL-Grundsatz."
},
{
  question: "Der Zweck der Information Security Management Practice ist, die Informationen der Organisation [...]",
  options: [
    { text: "zu speichern", correct: false },
    { text: "bereitzustellen", correct: false },
    { text: "zu prüfen", correct: false },
    { text: "zu schützen", correct: true }
  ],
  explanation: "Information Security Management sorgt für Schutz von Vertraulichkeit, Integrität und Verfügbarkeit sensibler Daten."
}
,
{
  question: "Welches Grundprinzip empfiehlt, vor der Entscheidung darüber, was wiederverwendet werden kann, zunächst Daten zu sammeln?",
  options: [
    { text: "Wertorientierung", correct: false },
    { text: "Dort beginnen, wo man steht", correct: true },
    { text: "Auf Einfachheit und Praktikabilität achten", correct: false },
    { text: "Iterative Weiterentwicklung mit Feedback", correct: false }
  ],
  explanation: "‚Dort beginnen, wo man steht‘ bedeutet: Vorhandene Ressourcen und Daten zuerst analysieren, bevor man neu plant."
},
{
  question: "Was ist normalerweise NICHT im Incident Management enthalten?",
  options: [
    { text: "Skripte zur Sammlung erster Informationen", correct: false },
    { text: "Formalisierte Verfahren zur Erfassung von Incidents", correct: false },
    { text: "Detaillierte Verfahren für die Diagnose von Incidents", correct: true },
    { text: "Die Nutzung von Spezialwissen für komplizierte Incidents", correct: false }
  ],
  explanation: "Die Diagnose komplexer Incidents ist eher individuell – standardisierte Verfahren dafür gibt es in der Regel nicht."
},
{
  question: "Welche Aussage beschreibt das Wesen der ITIL-Grundprinzipien?",
  options: [
    { text: "Sie können eine Organisation in allen Situationen leiten", correct: true },
    { text: "Jedes Grundprinzip fordert spezifische Aktionen", correct: false },
    { text: "Organisationen wählen nur ein Grundprinzip aus", correct: false },
    { text: "Sie beschreiben zwingende Prozesse", correct: false }
  ],
  explanation: "Die Grundprinzipien sind universelle Empfehlungen – flexibel anwendbar und nicht zwingend vorgeschrieben."
},
{
  question: "Welche Aussage über eine Change-Autorität ist RICHTIG?",
  options: [
    { text: "Eine einzelne Change-Autorität sollte alle Changes autorisieren", correct: false },
    { text: "Es sollte für jeden Change-Typ eine passende Autorität geben", correct: true },
    { text: "Normale Changes benötigen keine Autorisierung", correct: false },
    { text: "Notfall-Changes benötigen keine Autorisierung", correct: false }
  ],
  explanation: "ITIL empfiehlt je nach Change-Typ unterschiedliche Autoritätsmodelle – z. B. für Standard-, Normal- und Notfall-Changes."
},
{
  question: "Welche Practice verfolgt den Zweck, neue und geänderte Services und Funktionen zur Verfügung zu stellen?",
  options: [
    { text: "Change Enablement", correct: false },
    { text: "Service Request Management", correct: false },
    { text: "Release Management", correct: true },
    { text: "Deployment Management", correct: false }
  ],
  explanation: "Release Management ist verantwortlich für die Bereitstellung neuer/angepasster Services und deren Übergabe an die Nutzer."
}
,
{
  question: "Welche Aktivität der Wertschöpfungskette stellt sicher, dass Beteiligte die Vision der Organisation verstehen?",
  options: [
    { text: "Verbesserung", correct: false },
    { text: "Planung", correct: true },
    { text: "Bereitstellung und Support", correct: false },
    { text: "Erhalten/Erstellen", correct: false }
  ],
  explanation: "Die Aktivität 'Planung' sorgt für ein gemeinsames Verständnis von Vision, Status und Verbesserungsrichtung."
},
{
  question: "Welche Aussage zu den Aktivitäten der Wertschöpfungskette ist RICHTIG?",
  options: [
    { text: "Jede Practice gehört zu einer bestimmten Aktivität", correct: false },
    { text: "Eine Kombination aus Aktivitäten bildet eine Servicebeziehung", correct: false },
    { text: "Alle Aktivitäten bilden einen einzelnen Workflow", correct: false },
    { text: "Jede Aktivität wandelt Inputs in Outputs um", correct: true }
  ],
  explanation: "Alle Aktivitäten der Wertschöpfungskette transformieren Input zu Output und schaffen so Mehrwert."
},
{
  question: "Welchen Zweck verfolgt die Supplier Management Practice?",
  options: [
    { text: "Anpassen von Services an sich ändernde Anforderungen", correct: false },
    { text: "Sicherstellen, dass Lieferanten und ihre Leistungen gemanagt werden", correct: true },
    { text: "Pflegen strategischer Beziehungen", correct: false },
    { text: "Bereitstellung von Service-Konfigurationsdaten", correct: false }
  ],
  explanation: "Supplier Management sorgt für das Management von Lieferantenbeziehungen und deren Leistung."
},
{
  question: "Welche zwei Arten von Kosten sollte ein Servicekonsument beurteilen?",
  options: [
    { text: "Servicepreis und Kosten der Erstellung", correct: false },
    { text: "Kosten, die entfallen, und Kosten, die auferlegt werden", correct: true },
    { text: "Kosten der Bereitstellung und Verbesserung", correct: false },
    { text: "Software- und Hardwarekosten", correct: false }
  ],
  explanation: "ITIL unterscheidet zwischen Kosten, die durch einen Service eingespart werden, und solchen, die er verursacht."
},
{
  question: "Welchen Zweck verfolgt die Service Desk Practice?",
  options: [
    { text: "Minimieren der Auswirkungen von Incidents", correct: false },
    { text: "Sicherstellen der richtigen Bewertung von Changes", correct: false },
    { text: "Erfassen der Nachfrage nach Incidents und Service Requests", correct: true },
    { text: "Definieren von Servicezielen", correct: false }
  ],
  explanation: "Der Service Desk ist die zentrale Schnittstelle für Anwender und nimmt alle Anfragen, Incidents und Requests entgegen."
}
,
{
  question: "Wie sollte eine Organisation Methoden der ständigen Verbesserung übernehmen?",
  options: [
    { text: "Für jede Verbesserung eine neue Methode verwenden", correct: false },
    { text: "Einige Schlüsselmethoden passend zur Organisation auswählen", correct: true },
    { text: "So viele Methoden wie möglich gleichzeitig nutzen", correct: false },
    { text: "Immer nur eine Methode für alle Verbesserungen verwenden", correct: false }
  ],
  explanation: "ITIL empfiehlt, einige bewährte Methoden gezielt einzusetzen – nicht zu viele auf einmal und nicht für alles dieselbe."
},
{
  question: "Welches ITIL-Konzept beschreibt Governance?",
  options: [
    { text: "Die sieben Grundprinzipien", correct: false },
    { text: "Die vier Dimensionen des Service Management", correct: false },
    { text: "Die Service-Wertschöpfungskette", correct: false },
    { text: "Das Service Value System", correct: true }
  ],
  explanation: "Governance ist eine der fünf Komponenten des Service Value Systems (SVS)."
},
{
  question: "Was ist eine Empfehlung der Service Desk Practice?",
  options: [
    { text: "Service Desks sollten auf Automatisierung verzichten", correct: false },
    { text: "Service Desks sollten hoch spezialisiert sein", correct: false },
    { text: "Service Desks sollten den Geschäftskontext verstehen", correct: true },
    { text: "Service Desks sollten immer an einem festen Ort sein", correct: false }
  ],
  explanation: "Ein moderner Service Desk versteht die Prozesse und Bedürfnisse der Organisation – nicht nur die Technik."
},
{
  question: "Welches Grundprinzip empfiehlt, Aufgaben in kleinere Schritte aufzuteilen?",
  options: [
    { text: "Wertorientierung", correct: false },
    { text: "Dort beginnen, wo man steht", correct: false },
    { text: "Iterative Weiterentwicklung mit Feedback", correct: true },
    { text: "Zusammenarbeiten und Transparenz fördern", correct: false }
  ],
  explanation: "Dieses Prinzip fördert schnelles, kontrolliertes Vorankommen – statt lange Planung ohne Handlung."
},
{
  question: "Was ist ein Standard-Change?",
  options: [
    { text: "Ein wohlverstandener, dokumentierter und vorab autorisierter Change", correct: true },
    { text: "Ein Change, der erst bewertet und genehmigt werden muss", correct: false },
    { text: "Ein Change zur Incident-Lösung mit Risikobewertung", correct: false },
    { text: "Ein Change im Rahmen von Continual Improvement", correct: false }
  ],
  explanation: "Standard-Changes sind risikoarm, wiederholt durchführbar und benötigen keine Einzelfall-Autorisierung."
}
,
{
  question: "Was passiert, wenn ein Workaround zur dauerhaften Lösung für ein Problem wird, das nicht kosteneffektiv gelöst werden kann?",
  options: [
    { text: "Ein Change-Request wird erstellt", correct: false },
    { text: "Das Problem Management stellt den Service sofort wieder her", correct: false },
    { text: "Das Problem verbleibt im Status 'Known Error'", correct: true },
    { text: "Der Problem Record wird gelöscht", correct: false }
  ],
  explanation: "Bleibt ein Problem ungelöst, aber ein Workaround existiert, wird es als 'Known Error' weitergeführt."
},
{
  question: "Wie lautet die Definition von 'Change' laut ITIL?",
  options: [
    { text: "Hinzufügen, Modifizieren oder Entfernen eines Elements, das Auswirkungen auf Services haben könnte", correct: true },
    { text: "Sicherstellen von zuverlässigen Konfigurationsinformationen", correct: false },
    { text: "Zurverfügungstellen neuer Services", correct: false },
    { text: "Deployment von Hardware oder Software in Live-Umgebungen", correct: false }
  ],
  explanation: "Ein Change ist jede Änderung, die potenziell Einfluss auf einen Service hat – egal wie groß oder klein."
},
{
  question: "Wie lautet die Definition eines Events?",
  options: [
    { text: "Jede Statusänderung, die für das Management eines Service relevant ist", correct: true },
    { text: "Alle Komponenten, die für einen Service nötig sind", correct: false },
    { text: "Eine nicht geplante Unterbrechung eines Service", correct: false },
    { text: "Eine wertvolle IT-Komponente", correct: false }
  ],
  explanation: "Ein Event ist z. B. ein Alarm, eine Statusänderung – oder ein Systemzustand, der beobachtet werden soll."
},
{
  question: "Welche Aussage beschreibt 'Ergebnisse' im ITIL-Kontext?",
  options: [
    { text: "Materielle oder immaterielle Liefergegenstände", correct: false },
    { text: "Funktionalität eines Services", correct: false },
    { text: "Von einem Stakeholder gewünschte Resultate", correct: true },
    { text: "Kombination von Ressourcen", correct: false }
  ],
  explanation: "Ein Ergebnis ist das, was der Stakeholder wirklich will – z. B. funktionierender Zugriff, Verfügbarkeit, Support."
},
{
  question: "Was ist KEIN zentraler Fokus der Dimension 'Informationen und Technologie'?",
  options: [
    { text: "Security und Compliance", correct: false },
    { text: "Kommunikationssysteme und Wissensdatenbanken", correct: false },
    { text: "Workflow- und Bestandssysteme", correct: false },
    { text: "Rollen und Verantwortlichkeiten", correct: true }
  ],
  explanation: "Rollen und Verantwortlichkeiten gehören zur Dimension 'Organisationen und Menschen', nicht zu 'Informationen und Technologie'."
}
,
{
  question: "Welche Practices sind normalerweise an der Implementierung einer Problemlösung beteiligt?",
  options: [
    { text: "Continual Improvement und Service Request Management", correct: false },
    { text: "Service Request Management und Service Level Management", correct: false },
    { text: "Service Level Management und Change Enablement", correct: false },
    { text: "Continual Improvement und Change Enablement", correct: true }
  ],
  explanation: "Change Enablement implementiert Lösungen, die durch Continual Improvement identifiziert wurden."
},
{
  question: "Was ist eine zentrale Überlegung des Grundprinzips 'Auf Einfachheit und Praktikabilität achten'?",
  options: [
    { text: "Eine Lösung für jede Ausnahme schaffen", correct: false },
    { text: "Verstehen, wie jedes Element zur Wertschöpfung beiträgt", correct: true },
    { text: "Zielkonflikte ignorieren", correct: false },
    { text: "Mit komplexen Lösungen starten", correct: false }
  ],
  explanation: "ITIL betont: Verstehe zuerst, welchen Wert etwas liefert – dann erst implementieren."
},
{
  question: "Was sollte zuerst getan werden, wenn das Grundprinzip 'Wertorientierung' angewendet wird?",
  options: [
    { text: "Die gewünschten Ergebnisse des Service identifizieren", correct: false },
    { text: "Lieferanten und Partner identifizieren", correct: false },
    { text: "Sich bewusst machen, wer der Servicekonsument ist", correct: true },
    { text: "Kosten für die Servicebereitstellung ermitteln", correct: false }
  ],
  explanation: "Die zentrale Frage: Für wen schaffen wir Wert? Wer konsumiert den Service? Das ist immer der erste Schritt."
},
{
  question: "Ein Service Provider beschreibt ein Paket, das Laptop, Software und Support umfasst. Was ist das?",
  options: [
    { text: "Wert", correct: false },
    { text: "Ein Ergebnis", correct: false },
    { text: "Warranty", correct: false },
    { text: "Ein Serviceangebot", correct: true }
  ],
  explanation: "Ein Serviceangebot kombiniert Ressourcen, Zugriff und Aktionen zu einem konsumierbaren Gesamtpaket."
},
{
  question: "Wie lautet die Definition von 'Warranty' laut ITIL?",
  options: [
    { text: "Ein Liefergegenstand, der durch eine Aktivität entsteht", correct: false },
    { text: "Die Zusicherung, dass ein Produkt oder Service den Anforderungen entspricht", correct: true },
    { text: "Ein mögliches Event mit Risiko", correct: false },
    { text: "Die Funktionalität eines Produkts", correct: false }
  ],
  explanation: "Warranty = Sicherheit, dass der Service wie vereinbart funktioniert (z. B. Verfügbarkeit, Kapazität, Sicherheit)."
}
,
{
  question: "Welchen Effekt hat die zunehmende Automatisierung auf die Service Desk Practice?",
  options: [
    { text: "Mehr Fokus auf Kundenerfahrung bei persönlichem Kontakt", correct: true },
    { text: "Weniger Self-Service-Aktivitäten", correct: false },
    { text: "Mehr Fokus auf Technik statt Menschen", correct: false },
    { text: "Keine Eskalation mehr nötig", correct: false }
  ],
  explanation: "Automatisierung reduziert Routineaufgaben – der Service Desk kann sich mehr auf komplexe, menschliche Anliegen konzentrieren."
},
{
  question: "Welcher Begriff beschreibt die von einem Service angebotene Funktionalität?",
  options: [
    { text: "Kosten", correct: false },
    { text: "Utility", correct: true },
    { text: "Warranty", correct: false },
    { text: "Risiko", correct: false }
  ],
  explanation: "Utility beschreibt den eigentlichen Nutzen oder die Funktionalität eines Services."
},
{
  question: "Was ist der Zweck der Monitoring and Event Management Practice?",
  options: [
    { text: "Konfigurationsdaten bereitstellen", correct: false },
    { text: "Statusänderungen systematisch beobachten und melden", correct: true },
    { text: "Informationen schützen", correct: false },
    { text: "Incidents beheben", correct: false }
  ],
  explanation: "Diese Practice dient der Überwachung und Auswertung von Statusänderungen – z. B. durch Events oder Alarme."
},
{
  question: "Worauf sollten alle Entscheidungen im Continual Improvement basieren?",
  options: [
    { text: "Wie Services gemessen werden", correct: false },
    { text: "Genaue und analysierte Daten", correct: true },
    { text: "Eine Balanced Scorecard", correct: false },
    { text: "Eine Reifegradbewertung", correct: false }
  ],
  explanation: "ITIL betont: Keine Verbesserung ohne verlässliche Datenbasis. Analyse vor Aktion."
},
{
  question: "Wie wandeln Aktivitäten der Wertschöpfungskette Inputs in Outputs um?",
  options: [
    { text: "Durch Ermittlung der Nachfrage", correct: false },
    { text: "Durch Kombination von Practices", correct: true },
    { text: "Durch ein einzelnes Funktionsteam", correct: false },
    { text: "Durch Automatisierung", correct: false }
  ],
  explanation: "Die Service-Wertschöpfungskette arbeitet mit Practices zusammen, um Input gezielt in Wert (Output) zu transformieren."
}
,
{
  question: "Wie trägt das Engagement der Kunden zur Service Level Management Practice bei?",
  options: [
    { text: "Es erfasst Messdaten und unterstützt Gespräche", correct: true },
    { text: "Es definiert SLAs und Workflows", correct: false },
    { text: "Es stellt sicher, dass die Organisation Ziele erfüllt", correct: false },
    { text: "Es ersetzt die Serviceerbringung", correct: false }
  ],
  explanation: "Kundeneinbindung hilft beim Verständnis und bei der Bewertung der Servicequalität – z. B. durch Feedback und Dialog."
},
{
  question: "Was ist der Ausgangspunkt für Optimierung?",
  options: [
    { text: "Stakeholder-Engagement sichern", correct: false },
    { text: "Vision und Ziele der Organisation verstehen", correct: true },
    { text: "Elemente mit maximaler Wirkung identifizieren", correct: false },
    { text: "Standardisierung von Practices", correct: false }
  ],
  explanation: "Bevor man etwas optimieren kann, muss man wissen, wohin man will – also Vision und Ziele klar definieren."
},
{
  question: "Der Zweck des Service Value Systems (SVS) ist sicherzustellen, dass [...]?",
  options: [
    { text: "Utility und Warranty dokumentiert werden", correct: false },
    { text: "alle Stakeholder gemeinsam Wert schaffen", correct: true },
    { text: "nur IT-Teams an Services arbeiten", correct: false },
    { text: "alle Dimensionen gleich gewichtet werden", correct: false }
  ],
  explanation: "Das SVS zielt darauf ab, durch abgestimmte Elemente (z. B. Prinzipien, Governance) fortlaufend gemeinsamen Wert zu erzeugen."
},
{
  question: "Welche Practice bietet Unterstützung für das Managen von Feedback, Lob und Beschwerden?",
  options: [
    { text: "Change Enablement", correct: false },
    { text: "Service Request Management", correct: true },
    { text: "Problem Management", correct: false },
    { text: "Incident Management", correct: false }
  ],
  explanation: "Service Request Management kann auch nicht-technische Anfragen wie Feedback oder Lob verarbeiten."
},
{
  question: "Welche gemeinsame Aktivität sichert die kontinuierliche Wertschöpfung zwischen Provider und Konsument?",
  options: [
    { text: "Serviceerbringung", correct: false },
    { text: "Servicekonsum", correct: false },
    { text: "Serviceangebot", correct: false },
    { text: "Service Relationship Management", correct: true }
  ],
  explanation: "Gemeinsame Verantwortung und Interaktion zwischen Provider und Konsument findet im Service Relationship Management statt."
}
,
{
  question: "Welche Practice kann die Initiierung einer Notfallwiederherstellung umfassen?",
  options: [
    { text: "Incident Management", correct: true },
    { text: "Service Request Management", correct: false },
    { text: "Service Level Management", correct: false },
    { text: "IT Asset Management", correct: false }
  ],
  explanation: "Incident Management kann bei schwerwiegenden Störungen auch Notfallpläne aktivieren, um den Servicebetrieb wiederherzustellen."
},
{
  question: "Welche Art von Change wird am ehesten durch die Service Request Management Practice gemanagt?",
  options: [
    { text: "Ein normaler Change", correct: false },
    { text: "Ein Notfall-Change", correct: false },
    { text: "Ein Standard-Change", correct: true },
    { text: "Ein Anwendungs-Change", correct: false }
  ],
  explanation: "Standard-Changes sind dokumentiert, risikoarm und vorab genehmigt – sie werden oft als Service Requests ausgeführt."
},
{
  question: "Welches Grundprinzip betont die Wichtigkeit, Workflows zu verstehen, Blockaden zu erkennen und Verschwendung aufzudecken?",
  options: [
    { text: "Wertorientierung", correct: false },
    { text: "Zusammenarbeiten und Transparenz fördern", correct: true },
    { text: "Ganzheitlich denken und arbeiten", correct: false },
    { text: "Auf Einfachheit und Praktikabilität achten", correct: false }
  ],
  explanation: "Transparenz hilft, Probleme frühzeitig zu erkennen und Prozesse effizienter zu gestalten."
},
{
  question: "Was stellt eine Möglichkeit dar, gemeinsamen Wert zu schaffen, indem das Erreichen der von Kunden gewünschten Ergebnisse erleichtert wird?",
  options: [
    { text: "Ein Service", correct: true },
    { text: "Ein Output", correct: false },
    { text: "Eine Practice", correct: false },
    { text: "Continual Improvement", correct: false }
  ],
  explanation: "Ein ITIL-Service soll dem Kunden helfen, gewünschte Ergebnisse zu erzielen – das ist der Kern der Service-Definition."
},
{
  question: "Welche Aussage über Change-Autorisierung ist RICHTIG?",
  options: [
    { text: "Alle Changes sollten zentral durch eine Person autorisiert werden", correct: false },
    { text: "Für jeden Change-Typ sollte eine passende Autorität zugewiesen werden", correct: true },
    { text: "Normale Changes sollten immer beschleunigt autorisiert werden", correct: false },
    { text: "Standard-Changes sind riskant und benötigen höchste Genehmigung", correct: false }
  ],
  explanation: "Die passende Change-Autorität hängt vom Typ des Changes ab – ITIL setzt hier auf Flexibilität und Effizienz."
}
,
{
  question: "Welche Dimension des Service Management bezieht sich auf Governance, Management und Kommunikation?",
  options: [
    { text: "Organisationen und Menschen", correct: true },
    { text: "Informationen und Technologie", correct: false },
    { text: "Partner und Lieferanten", correct: false },
    { text: "Wertströme und Prozesse", correct: false }
  ],
  explanation: "Die Dimension 'Organisationen und Menschen' umfasst Strukturen, Rollen, Kommunikation und Governance-Elemente."
},
{
  question: "Ein Known Error ist ein Problem, das [...]?",
  options: [
    { text: "erfasst, aber nicht analysiert wurde", correct: false },
    { text: "analysiert, aber nicht gelöst wurde", correct: true },
    { text: "eskaliert wurde", correct: false },
    { text: "geschlossen wurde", correct: false }
  ],
  explanation: "Sobald ein Problem analysiert, aber noch nicht gelöst ist, spricht man von einem Known Error."
},
{
  question: "Welche Aussage über Known Errors und Probleme ist RICHTIG?",
  options: [
    { text: "Ein Known Error ist der Status nach Analyse eines Problems", correct: true },
    { text: "Ein Known Error ist die Ursache von Problemen", correct: false },
    { text: "Known Errors verursachen Schwachstellen, Probleme Incidents", correct: false },
    { text: "Known Errors werden nur von Technikern gemanagt", correct: false }
  ],
  explanation: "Ein Known Error ist ein analysiertes, aber nicht gelöstes Problem – dokumentiert mit möglichem Workaround."
},
{
  question: "Wovon hängt die maximale Effizienz der Service Request Management Practice ab?",
  options: [
    { text: "Lob und Beschwerden", correct: false },
    { text: "Self-Service-Tools", correct: false },
    { text: "Prozesse und Verfahren", correct: true },
    { text: "Incident Management", correct: false }
  ],
  explanation: "Effizienz entsteht durch klar strukturierte Prozesse und deren Unterstützung durch Tools – nicht nur durch Technologie."
},
{
  question: "Welche Aussage über die Service Desk Practice ist RICHTIG?",
  options: [
    { text: "Sie verwaltet strategische Beziehungen", correct: false },
    { text: "Sie autorisiert Changes", correct: false },
    { text: "Sie untersucht Ursachen von Incidents", correct: false },
    { text: "Sie erfordert Verständnis für Geschäftsprozesse", correct: true }
  ],
  explanation: "Ein moderner Service Desk muss sowohl technisch als auch organisatorisch mitdenken – nur so entsteht echter Supportnutzen."
}
,
{
  question: "Welche Practice stellt sicher, dass genaue Informationen über Configuration Items (CIs) und ihre Beziehungen verfügbar sind?",
  options: [
    { text: "Service Configuration Management", correct: true },
    { text: "Service Desk", correct: false },
    { text: "IT Asset Management", correct: false },
    { text: "Monitoring and Event Management", correct: false }
  ],
  explanation: "Service Configuration Management dokumentiert CIs, deren Beziehungen und aktuelle Konfigurationen."
},
{
  question: "Welche Practice hat den Zweck, den normalen Servicebetrieb so schnell wie möglich wiederherzustellen?",
  options: [
    { text: "Supplier Management", correct: false },
    { text: "Deployment Management", correct: false },
    { text: "Problem Management", correct: false },
    { text: "Incident Management", correct: true }
  ],
  explanation: "Incident Management fokussiert sich auf die schnellstmögliche Wiederherstellung und Minimierung von Auswirkungen."
},
{
  question: "Ein Kunde ist die Rolle, welche die Anforderungen an einen Service definiert und die Verantwortung für die [...] übernimmt.",
  options: [
    { text: "Outputs", correct: false },
    { text: "Ergebnisse", correct: true },
    { text: "Kosten", correct: false },
    { text: "Risiken", correct: false }
  ],
  explanation: "Der Kunde trägt Verantwortung für die Ergebnisse, nicht nur für einzelne Leistungen oder Aktivitäten."
},
{
  question: "Welches Grundprinzip sagt, dass man manchmal lieber etwas tun sollte, statt zu lange zu analysieren?",
  options: [
    { text: "Optimieren und automatisieren", correct: false },
    { text: "Dort beginnen, wo man steht", correct: false },
    { text: "Wertorientierung", correct: false },
    { text: "Iterative Weiterentwicklung mit Feedback", correct: true }
  ],
  explanation: "Das Prinzip fördert Handeln statt endloser Analyse: Starte klein, sammle Feedback, entwickle weiter."
},
{
  question: "Was sollte bei jedem Problem getan werden?",
  options: [
    { text: "Es sollte sofort gelöst werden", correct: false },
    { text: "Es sollte priorisiert werden", correct: true },
    { text: "Es sollte ignoriert werden, wenn es klein ist", correct: false },
    { text: "Es sollte automatisch an den Supplier übergeben werden", correct: false }
  ],
  explanation: "Nicht jedes Problem muss sofort gelöst werden – aber priorisiert nach Risiko und Auswirkung sollte es werden."
}
,
{
  question: "Wie sollte eine Organisation Drittanbieter in die ständige Verbesserung von Services einbeziehen?",
  options: [
    { text: "Lieferanten sollten agile Methoden verwenden", correct: false },
    { text: "Verträge sollten Anforderungen zur Verbesserung enthalten", correct: true },
    { text: "Alle Verbesserungen müssen mit Projektmanagement umgesetzt werden", correct: false },
    { text: "Lieferantenprobleme führen automatisch zu Verbesserungen", correct: false }
  ],
  explanation: "Verträge mit Drittanbietern sollten messbare Anforderungen zur Serviceverbesserung enthalten."
},
{
  question: "Welche Überlegung beeinflusst die Lieferantenstrategie einer Organisation am stärksten?",
  options: [
    { text: "Verträge und Vereinbarungen", correct: false },
    { text: "Art der Zusammenarbeit", correct: false },
    { text: "Unternehmenskultur", correct: true },
    { text: "Formale Sprache im Vertrag", correct: false }
  ],
  explanation: "Die Kultur der Organisation prägt ihre Zusammenarbeit mit externen Partnern – besonders bei langfristigen Beziehungen."
},
{
  question: "Was ist ein Problem laut ITIL?",
  options: [
    { text: "Eine Änderung mit Einfluss auf Services", correct: false },
    { text: "Eine Statusänderung im CI", correct: false },
    { text: "Eine Ursache oder potenzielle Ursache für Incidents", correct: true },
    { text: "Ein Serviceabbruch", correct: false }
  ],
  explanation: "Ein Problem ist nicht der Incident selbst, sondern die (potenzielle) zugrunde liegende Ursache davon."
},
{
  question: "Welchen Zweck verfolgt die Relationship Management Practice?",
  options: [
    { text: "Services an neue Anforderungen anpassen", correct: false },
    { text: "Beziehungen zu Stakeholdern aufbauen und pflegen", correct: true },
    { text: "Fehlerursachen identifizieren", correct: false },
    { text: "Incidents möglichst schnell beheben", correct: false }
  ],
  explanation: "Relationship Management sorgt für klare Kommunikation, Vertrauen und nachhaltige Stakeholderbindung."
},
{
  question: "Was hilft Organisationen bei der Einführung und Anpassung von ITIL-Leitlinien?",
  options: [
    { text: "Die vier Dimensionen des Service Management", correct: false },
    { text: "Die Grundprinzipien", correct: true },
    { text: "Die Service-Wertschöpfungskette", correct: false },
    { text: "Die Practices", correct: false }
  ],
  explanation: "Die sieben Grundprinzipien bilden das Fundament, um ITIL flexibel und situationsgerecht umzusetzen."
}
,
{
  question: "Was ist ein Output laut ITIL?",
  options: [
    { text: "Eine Statusänderung im CI", correct: false },
    { text: "Ein Risikoereignis", correct: false },
    { text: "Ein Ergebnis für den Stakeholder", correct: false },
    { text: "Etwas, das durch eine Aktivität geschaffen wird", correct: true }
  ],
  explanation: "Ein Output ist das greifbare (oder dokumentierte) Ergebnis einer Aktivität – z. B. ein bereitgestellter Service oder Bericht."
},
{
  question: "Warum verwendet man einen ausgeglichenen Satz von Servicemessgrößen?",
  options: [
    { text: "Weniger Messwerte müssen erfasst werden", correct: false },
    { text: "Für jedes Element gibt es einen Bericht", correct: false },
    { text: "Man erhält eine ergebnisbasierte Sicht", correct: true },
    { text: "Messwerte lassen sich einfacher sammeln", correct: false }
  ],
  explanation: "Ein ausgewogener Messgrößensatz verhindert, dass man nur auf technische Daten schaut – und hilft, echten Wert zu messen."
},
{
  question: "Warum werden Incidents priorisiert?",
  options: [
    { text: "Um automatische Zuordnung zu Problems zu ermöglichen", correct: false },
    { text: "Um das richtige Support-Team zuzuweisen", correct: false },
    { text: "Damit Incidents mit grösstem Business Impact zuerst gelöst werden", correct: true },
    { text: "Um Zusammenarbeit zu fördern", correct: false }
  ],
  explanation: "Priorisierung sorgt dafür, dass kritische Incidents zuerst behandelt werden – basierend auf geschäftlicher Auswirkung."
},
{
  question: "Welche Practice unterstützt das Management von IT-Assets über den gesamten Lebenszyklus hinweg?",
  options: [
    { text: "Relationship Management", correct: false },
    { text: "IT Asset Management", correct: true },
    { text: "Release Management", correct: false },
    { text: "Service Desk", correct: false }
  ],
  explanation: "IT Asset Management verwaltet Anschaffung, Nutzung, Wartung und Entsorgung von IT-Werten einer Organisation."
},
{
  question: "Warum sollten Service Desk-Mitarbeitende wiederkehrende Schwierigkeiten erkennen?",
  options: [
    { text: "Um Probleme leichter zu identifizieren", correct: true },
    { text: "Um Incidents besser zuzuweisen", correct: false },
    { text: "Um Service Requests besser zu bearbeiten", correct: false },
    { text: "Um Changes korrekt zu genehmigen", correct: false }
  ],
  explanation: "Das frühzeitige Erkennen wiederholter Probleme hilft dem Problem Management, Ursachen schneller zu analysieren."
}
,
{
  question: "Welche Aktivität der Wertschöpfungskette kommuniziert den aktuellen Stand aller vier Dimensionen des Service Management?",
  options: [
    { text: "Verbesserung", correct: false },
    { text: "Engagement", correct: false },
    { text: "Erhalten/Erstellen", correct: false },
    { text: "Planung", correct: true }
  ],
  explanation: "Die Aktivität 'Planung' schafft ein gemeinsames Verständnis über Vision, Status und Verbesserungsziele in allen Dimensionen."
},
{
  question: "Welches Grundprinzip beschäftigt sich hauptsächlich mit Umsatz und Wachstum für den Konsumenten?",
  options: [
    { text: "Auf Einfachheit und Praktikabilität achten", correct: false },
    { text: "Optimieren und automatisieren", correct: false },
    { text: "Iterative Weiterentwicklung mit Feedback", correct: false },
    { text: "Wertorientierung", correct: true }
  ],
  explanation: "Wertorientierung stellt sicher, dass alle Aktivitäten auf das liefern, was dem Kunden wirklich nützt – inkl. Wachstumspotenzial."
},
{
  question: "Welche Practice schafft Transparenz durch Messung der Service-Performance und Reporting?",
  options: [
    { text: "Service Desk", correct: false },
    { text: "Service Level Management", correct: true },
    { text: "Service Request Management", correct: false },
    { text: "Service Configuration Management", correct: false }
  ],
  explanation: "Service Level Management sammelt und bewertet Messgrößen – und berichtet über Erfüllung der Serviceziele."
},
{
  question: "Was ist das BESTE Beispiel für einen Notfall-Change?",
  options: [
    { text: "Ein geplanter Release einer Software", correct: false },
    { text: "Ein risikoarmes Upgrade per Service Request", correct: false },
    { text: "Ein Sicherheits-Patch für eine kritische Anwendung", correct: true },
    { text: "Eine geplante große Hardware-Implementierung", correct: false }
  ],
  explanation: "Notfall-Changes müssen sofort umgesetzt werden – typisches Beispiel: Sicherheitslücke muss geschlossen werden."
},
{
  question: "Welches Grundprinzip empfiehlt, den aktuellen Status zu bewerten und zu entscheiden, was wiederverwendet werden kann?",
  options: [
    { text: "Wertorientierung", correct: false },
    { text: "Dort beginnen, wo man steht", correct: true },
    { text: "Zusammenarbeiten und Transparenz fördern", correct: false },
    { text: "Iterative Weiterentwicklung mit Feedback", correct: false }
  ],
  explanation: "Bevor man mit etwas Neuem startet, sollte man den aktuellen Stand analysieren – vielleicht ist bereits etwas Nutzbares vorhanden."
}
];

