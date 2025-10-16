document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calcForm');
  const resultDiv = document.getElementById('calcResult');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;
    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') {
      if (num2 === 0) {
        resultDiv.innerHTML = 'Division durch 0 ist nicht erlaubt.';
        return;
      }
      result = num1 / num2;
    }

    resultDiv.innerHTML = `Ergebnis: <strong>${result}</strong>`;
  });
});