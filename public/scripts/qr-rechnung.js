document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("qrForm");
  const qrResult = document.getElementById("qrResult");
  const preview = document.getElementById("qrPreview");
  const download = document.getElementById("downloadLink");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/qr-rechnung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Serverfehler");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      preview.src = url;
      download.href = url;
      qrResult.classList.remove("hidden");
    } catch (err) {
      console.error("❌ QR Fehler:", err);
      alert("Fehler beim Generieren der QR-Rechnung. Bitte Eingaben prüfen.");
    }
  });
});