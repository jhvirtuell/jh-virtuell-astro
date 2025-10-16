import { questions } from './questions-bt121.js';

function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Genau 30 Fragen ziehen
let questionsList = shuffle([...questions]).slice(0, 30);
let current = 0;
let results = Array(questionsList.length).fill(null);

function updateProgressBar() {
  const percent = Math.round(((current + 1) / questionsList.length) * 100);
  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-text").textContent = `Frage ${current + 1} von ${questionsList.length}`;
}

function render() {
  const app = document.getElementById("app");
  if (!app) return;

  const q = questionsList[current];
  if (!q || !Array.isArray(q.options)) {
    app.innerHTML = `<p class="text-red-500">❌ Fehler beim Laden der Frage. Bitte Seite neu laden.</p>`;
    return;
  }

  app.innerHTML = `
    <div id="progress-wrapper" class="mb-6">
      <div id="progress-text" class="mb-1 text-gold font-semibold"></div>
      <div class="w-full h-3 bg-light/30 rounded-full overflow-hidden">
        <div id="progress-bar" class="h-3 bg-gold rounded-full transition-all duration-300" style="width:0"></div>
      </div>
    </div>

    <div class="quiz-question text-center">
      <h2 class="text-xl font-bold mb-2 text-white">Frage ${current + 1}:</h2>
      <p class="mb-6 text-light/90">${q.question}</p>
      <ul class="flex flex-col mb-6">
        ${q.options.map((opt, i) => `
          <li
            class="bg-white text-dark border border-dark/10 hover:border-gold hover:shadow-md rounded-xl px-5 py-3 text-base font-semibold cursor-pointer transition duration-200 shadow-sm mb-4 last:mb-0"
            data-idx="${i}">
            ${opt.text}
          </li>`).join("")}
      </ul>
      <div id="feedback" class="text-base font-medium text-white mt-4 min-h-[40px]"></div>
    </div>
  `;

  updateProgressBar();

  document.querySelectorAll("ul li").forEach((li) => {
    li.addEventListener("click", () => {
      const selected = parseInt(li.getAttribute("data-idx"));
      handleAnswer(selected);
    });
  });
}

function handleAnswer(selectedIdx) {
  const q = questionsList[current];
  const feedback = document.getElementById("feedback");

  if (!q || !Array.isArray(q.options)) {
    feedback.innerHTML = `<span class="text-red-500">❌ Frage konnte nicht geladen werden.</span>`;
    return;
  }

  document.querySelectorAll("ul li").forEach((li, i) => {
    li.classList.add("pointer-events-none");

    const opt = q.options[i];
    if (!opt) return;

    if (opt.correct) {
      li.classList.add("border-green-600", "bg-green-100");
    }
    if (!opt.correct && i === selectedIdx) {
      li.classList.add("border-red-600", "bg-red-100");
    }
  });

  feedback.innerHTML = q.options[selectedIdx]?.correct
    ? `<span class="text-green-400 font-semibold text-lg block">✅ Richtig!</span><span class="text-light/90 block mt-1">${q.explanation}</span>`
    : `<span class="text-red-400 font-semibold text-lg block">❌ Falsch!</span><span class="text-light/90 block mt-1">${q.explanation}</span>`;

  results[current] = q.options[selectedIdx]?.correct ?? false;

  setTimeout(() => {
    if (current < questionsList.length - 1) {
      current++;
      render();
    } else {
      showResults();
    }
  }, 4000);
}

function showResults() {
  const app = document.getElementById("app");
  const correct = results.filter(x => x === true).length;
  const wrong = results.filter(x => x === false).length;

  const passed = correct >= 27;

  app.innerHTML = `
    <div class="py-12 text-center">
      <h2 class="text-3xl font-bold text-gold mb-3">Dein Ergebnis</h2>
      <div class="mb-6 text-lg text-light">
        <span class="text-green-400 font-bold">${correct}</span> von <span class="font-bold">${questionsList.length}</span> richtig.<br>
        <span class="text-red-400 font-bold">${wrong}</span> falsch.
      </div>
      <p class="mb-8 text-white font-semibold">
        ${passed
          ? "🎉 Herzlichen Glückwunsch, du hast bestanden!"
          : "Leider nicht bestanden. Versuch es gleich nochmal!"}
      </p>
      <button
        class="mt-4 px-8 py-3 bg-gold text-dark font-bold rounded-xl shadow hover:bg-gold/90 transition duration-200"
        onclick="restartQuiz()"
      >
        Quiz neu starten
      </button>
    </div>
  `;
}

window.restartQuiz = () => {
  questionsList = shuffle([...questions]).slice(0, 30);
  current = 0;
  results = Array(questionsList.length).fill(null);
  render();
};

document.addEventListener("DOMContentLoaded", render);