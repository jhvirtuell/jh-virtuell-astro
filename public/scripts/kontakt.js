// Datei: public/scripts/kontakt.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontaktForm");
  const messageBox = document.getElementById("form-message");
  if (!form || !messageBox) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      messageBox.textContent = "❌ Bitte fülle Name, E-Mail und Nachricht aus.";
      messageBox.className = "mt-4 text-center text-sm font-semibold text-red-500";
      return;
    }

    const subject = encodeURIComponent(`Kontaktanfrage – ${service || "Allgemein"}`);
    const bodyLines = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      `Thema: ${service}`,
      "",
      "Nachricht:",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:info@jh-virtuell.ch?subject=${subject}&body=${body}`;

    // Öffne das E-Mail-Programm
    window.location.href = mailto;
    messageBox.textContent = "✅ E-Mail-Programm wurde geöffnet. Wenn nichts passiert, sende an info@jh-virtuell.ch";
    messageBox.className = "mt-4 text-center text-sm font-semibold text-green-600";

    // Formular zurücksetzen
    form.reset();
  });
});
