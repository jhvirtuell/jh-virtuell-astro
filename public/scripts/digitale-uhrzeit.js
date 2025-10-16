document.addEventListener('DOMContentLoaded', () => {
  const clockEl = document.getElementById('clock');
  const bar = document.getElementById('second-bar');
  const formatSelect = document.getElementById('format');

  if (!clockEl || !bar || !formatSelect) return;

  const updateClock = () => {
    const now = new Date();
    const format = formatSelect.value;

    let output = '--:--:--';
    if (format === '24h') {
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      output = `${h}:${m}:${s}`;
    } else if (format === 'iso') {
      output = now.toISOString();
    } else if (format === 'ms') {
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      const ms = now.getMilliseconds().toString().padStart(3, '0');
      output = `${h}:${m}:${s}.${ms}`;
    }

    clockEl.textContent = output;

    // Sekunden-Balken: 100% = 60 Sekunden
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const percent = (seconds / 60) * 100;
    bar.style.width = `${percent}%`;
  };

  updateClock();
  setInterval(updateClock, 100);
});