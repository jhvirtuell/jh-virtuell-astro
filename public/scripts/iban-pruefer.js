function isValidIBAN(iban) {
  const cleaned = iban.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  if (cleaned.length < 15 || cleaned.length > 34) return false;

  const rearranged = cleaned.slice(4) + cleaned.slice(0, 4);
  const converted = rearranged.replace(/[A-Z]/g, char => (char.charCodeAt(0) - 55).toString());
  const chunks = converted.match(/\d{1,7}/g) || [];
  const mod97 = chunks.reduce((acc, chunk) => parseInt(acc + chunk, 10) % 97, 0);

  return mod97 === 1;
}

function formatIBAN(input) {
  return input.replace(/[^A-Z0-9]/gi, '')
              .toUpperCase()
              .replace(/(.{4})/g, '$1 ')
              .trim();
}

function getSwissBankName(iban) {
  const match = iban.match(/^CH\d{2}(\d{5})/);
  const clearing = match?.[1];
  const banks = {
    '00762': 'UBS',
    '09000': 'PostFinance',
    '00263': 'Raiffeisen',
    '00787': 'Credit Suisse',
    '08589': 'Zürcher Kantonalbank'
  };
  return clearing && banks[clearing] ? banks[clearing] : null;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#ibanForm');
  const resultEl = document.querySelector('#ibanResult');
  const copyWrapper = document.querySelector('#copyWrapper');
  const copyBtn = document.querySelector('#copyIban');
  const copyFeedback = document.querySelector('#copyFeedback');
  const bankNameEl = document.querySelector('#bankName');
  const input = document.querySelector('#iban');

  if (!form || !resultEl || !input) return;

  input.addEventListener('input', () => {
    input.value = formatIBAN(input.value);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rawIban = input.value.trim();
    const isValid = isValidIBAN(rawIban);

    if (isValid) {
      resultEl.innerHTML = `<span class="text-green-600">✅ Die IBAN ist gültig.</span>`;
      const bank = getSwissBankName(rawIban);
      bankNameEl.textContent = bank ? `🏦 Bank: ${bank}` : '';
      bankNameEl.classList.toggle('hidden', !bank);
      copyWrapper.classList.remove('hidden');
    } else {
      resultEl.innerHTML = `<span class="text-red-600">❌ Diese IBAN ist ungültig.</span>`;
      bankNameEl.classList.add('hidden');
      copyWrapper.classList.add('hidden');
    }

    resultEl.focus();
  });

  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value).then(() => {
      copyFeedback.classList.remove('hidden');
      setTimeout(() => copyFeedback.classList.add('hidden'), 2000);
    });
  });
});