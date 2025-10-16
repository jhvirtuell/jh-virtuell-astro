// /public/scripts/kalenderwoche.js
document.addEventListener('DOMContentLoaded', () => {
  // Helper: ISO-Woche & Wochenstart/-ende
  const getISOWeek = (date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7; // Mo=1..So=7
    d.setUTCDate(d.getUTCDate() + 4 - day); // auf Donnerstag der Woche
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
  };
  const getWeekStartEnd = (date) => {
    const d = new Date(date);
    const day = d.getDay(); // So=0..Sa=6
    const monday = new Date(d);
    monday.setDate(d.getDate() - ((day + 6) % 7)); // Montag
    monday.setHours(0,0,0,0);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23,59,59,999);
    return { monday, sunday };
  };

  // Elements
  const elKW = document.getElementById('kw-number');
  const elHeute = document.getElementById('kw-heute');
  const elZeitraum = document.getElementById('kw-zeitraum');

  const tageEl = document.getElementById('tage');
  const stundenEl = document.getElementById('stunden');
  const minutenEl = document.getElementById('minuten');
  const sekundenEl = document.getElementById('sekunden');
  const balken = document.getElementById('fortschritt-balken');
  const label = document.getElementById('fortschritt-label');

  // Locale Formatter
  const fmtLong = (d) => d.toLocaleDateString('de-CH', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  const fmtShort = (d) => d.toLocaleDateString('de-CH', { day:'numeric', month:'numeric', year:'numeric' });

  // Initial fill
  const now = new Date();
  const kw = getISOWeek(now);
  const { monday: weekStart, sunday: weekEnd } = getWeekStartEnd(now);

  if (elKW) elKW.textContent = `KW ${kw}`;
  if (elHeute) elHeute.textContent = `(${fmtLong(now)})`;
  if (elZeitraum) elZeitraum.textContent = `Gültig von ${fmtShort(weekStart)} bis ${fmtShort(weekEnd)}`;

  // Progress updater
  const update = () => {
    const t = new Date();
    const diffMs = t - weekStart;
    const totalMs = weekEnd - weekStart + 1; // inkl. Sonntag 23:59:59
    const diffSek = Math.max(0, diffMs / 1000);

    const tage = Math.floor(diffSek / 86400);
    const stunden = Math.floor((diffSek % 86400) / 3600);
    const minuten = Math.floor((diffSek % 3600) / 60);
    const sekunden = Math.floor(diffSek % 60);

    const prozent = Math.min(100, Math.max(0, (diffMs / totalMs) * 100));

    if (tageEl) tageEl.textContent = `${tage}`;
    if (stundenEl) stundenEl.textContent = `${stunden}`;
    if (minutenEl) minutenEl.textContent = `${minuten}`;
    if (sekundenEl) sekundenEl.textContent = `${sekunden}`;
    if (balken) balken.value = prozent.toFixed(2);
    if (label) label.textContent = `Woche zu ${prozent.toFixed(1)}% abgeschlossen`;
  };

  update();
  setInterval(update, 1000);
});