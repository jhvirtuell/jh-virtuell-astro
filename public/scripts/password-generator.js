export function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const useLower = document.getElementById("lowercase").checked;
  const useUpper = document.getElementById("uppercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]:;,.<>?/";

  let chars = "";
  if (useLower) chars += lowercase;
  if (useUpper) chars += uppercase;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  if (!chars) {
    alert("Bitte mindestens eine Option auswählen!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("result").value = password;
}

export function copyToClipboard() {
  const resultInput = document.getElementById("result");
  navigator.clipboard.writeText(resultInput.value).then(() => {
    const notice = document.getElementById("copy-notice");
    if (notice) {
      notice.classList.remove("hidden");
      setTimeout(() => notice.classList.add("hidden"), 2000);
    }
  });
}