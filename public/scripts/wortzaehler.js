function countStats(text) {
  const cleaned = text.trim();
  const words = cleaned ? cleaned.split(/\s+/).length : 0;
  const chars = cleaned.length;
  const paragraphs = cleaned ? cleaned.split(/\n+/).filter(p => p.trim()).length : 0;
  return { words, chars, paragraphs };
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('textInput');
  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');
  const paraCount = document.getElementById('paraCount');
  const copyBtn = document.getElementById('copyBtn');
  const copyStatus = document.getElementById('copyStatus');

  const updateStats = () => {
    const { words, chars, paragraphs } = countStats(input.value);
    wordCount.textContent = words;
    charCount.textContent = chars;
    paraCount.textContent = paragraphs;
  };

  input.addEventListener('input', updateStats);

  copyBtn.addEventListener('click', async () => {
    try {
      if (!input.value.trim()) return;
      await navigator.clipboard.writeText(input.value);
      copyStatus.classList.remove('hidden');
      setTimeout(() => copyStatus.classList.add('hidden'), 2000);
    } catch (err) {
      alert('❌ Kopieren in die Zwischenablage fehlgeschlagen.');
    }
  });

  updateStats();
});