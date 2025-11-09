document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("qrForm");
  const qrResult = document.getElementById("qrResult");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (qrResult) qrResult.classList.add("hidden");
    alert(
      "Der PDF‑Generator für QR‑Rechnungen ist im aktuellen (statischen) Betrieb vorübergehend deaktiviert. Bitte schreibe uns an info@jh-virtuell.ch – wir senden dir die QR‑Rechnung als PDF zu."
    );
  });
});
