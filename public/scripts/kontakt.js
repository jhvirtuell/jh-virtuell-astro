// Datei: public/scripts/kontakt.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontaktForm");
  const messageBox = document.getElementById("form-message");

  if (!form || !messageBox) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    messageBox.textContent = "⏳ Nachricht wird gesendet...";
    messageBox.className = "mt-4 text-center text-sm font-semibold text-dark/60";

    const token = typeof payload["cf-turnstile-response"] === "string"
      ? payload["cf-turnstile-response"].trim()
      : "";

    if (!token || token.length < 5) {
      messageBox.textContent = "❌ Sicherheitsüberprüfung fehlgeschlagen. Bitte neu laden.";
      messageBox.className = "mt-4 text-center text-sm font-semibold text-red-500";
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result) {
        throw new Error(result?.message || "Serverfehler. Bitte versuche es später erneut.");
      }

      messageBox.textContent = result.message;
      messageBox.className = "mt-4 text-center text-sm font-semibold " + (result.success ? "text-green-600" : "text-red-500");

      if (result.success) {
        form.reset();
        if (window.turnstile) {
          turnstile.reset();
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Fehler beim Senden. Bitte versuche es später erneut.";
      messageBox.textContent = `❌ ${message}`;
      messageBox.className = "mt-4 text-center text-sm font-semibold text-red-500";
    }
  });
});
