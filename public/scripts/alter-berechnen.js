document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthdate = new Date(document.getElementById("birthdate").value);
  const now = new Date();

  if (isNaN(birthdate)) return;

  let years = now.getFullYear() - birthdate.getFullYear();
  let months = now.getMonth() - birthdate.getMonth();
  let days = now.getDate() - birthdate.getDate();

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const deltaMs = now - birthdate;
  const totalDays = Math.floor(deltaMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(deltaMs / (1000 * 60 * 60));
  const totalSeconds = Math.floor(deltaMs / 1000);
  const totalMonths = years * 12 + months;

  document.getElementById("ageResult").innerHTML = `
    🎉 Du bist <strong>${years} Jahre</strong>, <strong>${months} Monate</strong> und <strong>${days} Tage</strong> alt.<br>
    📅 Das sind insgesamt:<br>
    👉 <strong>${totalMonths} Monate</strong> oder<br>
    👉 <strong>${totalDays} Tage</strong> oder<br>
    👉 <strong>${totalHours.toLocaleString()} Stunden</strong> oder<br>
    👉 <strong>${totalSeconds.toLocaleString()} Sekunden</strong>.
  `;
});