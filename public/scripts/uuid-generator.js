function generateUUIDv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const feedback = document.getElementById('copyFeedback');
    feedback.classList.remove('hidden');
    setTimeout(() => feedback.classList.add('hidden'), 2000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('uuidOutput');
  const generateBtn = document.getElementById('generateUUID');
  const copyBtn = document.getElementById('copyUUID');

  function updateUUID() {
    const uuid = generateUUIDv4();
    output.textContent = uuid;
  }

  generateBtn.addEventListener('click', updateUUID);
  copyBtn.addEventListener('click', () => copyToClipboard(output.textContent));

  // Erste UUID anzeigen
  updateUUID();
});