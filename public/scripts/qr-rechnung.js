// Client-side Swiss QR Bill (SPC) generator using pdf-lib and qrcode-generator
// Produces a simple A4 PDF with the QR code and key fields. Intended for quick use.

(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') return fn();
    document.addEventListener('DOMContentLoaded', fn);
  }

  function libsReady() {
    return typeof window.PDFLib !== 'undefined' && typeof window.qrcode !== 'undefined';
  }

  function sanitizeIban(iban) {
    return (iban || '').replace(/\s+/g, '').toUpperCase();
  }

  function spcText(data) {
    // Build minimal SPC payload per spec (structured addresses, NO reference)
    // Lines: see Swiss Payment Standard. This basic set scans in common banking apps.
    const lines = [];
    const cred = data.creditor;
    const debt = data.debtor;

    lines.push('SPC');           // 1
    lines.push('0200');          // 2 version
    lines.push('1');             // 3 coding
    lines.push(sanitizeIban(data.iban)); // 4 IBAN
    lines.push('K');             // 5 creditor address type K (structured)
    lines.push(cred.name || ''); // 6
    lines.push(cred.street || ''); // 7 street
    lines.push('');              // 8 building number (optional)
    lines.push(cred.zip || '');  // 9 postcode
    lines.push(cred.city || ''); //10 town
    lines.push((cred.country || 'CH').toUpperCase()); //11 country
    // Ultimate creditor (unused)
    lines.push(''); //12 adr type
    lines.push(''); //13 name
    lines.push(''); //14 street
    lines.push(''); //15 building
    lines.push(''); //16 zip
    lines.push(''); //17 town
    lines.push(''); //18 country
    lines.push(data.amount || ''); //19 amount (e.g., 123.45) or empty
    lines.push((data.currency || 'CHF').toUpperCase()); //20 currency
    // Debtor
    if (debt && (debt.name || debt.street || debt.zip || debt.city)) {
      lines.push('K');
      lines.push(debt.name || '');
      lines.push(debt.street || '');
      lines.push('');
      lines.push(debt.zip || '');
      lines.push(debt.city || '');
      lines.push((debt.country || 'CH').toUpperCase());
    } else {
      lines.push('', '', '', '', '', '', '');
    }
    // Reference
    lines.push('NON'); // ref type
    lines.push('');    // reference
    // Message
    lines.push((data.message || '').substring(0, 140));
    // Trailer
    lines.push('EPD');

    return lines.join('\n');
  }

  async function generatePdf(spc, formValues) {
    const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Generate QR image via qrcode-generator
    const qr = window.qrcode(25, 'M');
    qr.addData(spc);
    qr.make();
    const qrDataUrl = qr.createDataURL(8); // scale

    const pngBytes = await fetch(qrDataUrl).then(r => r.arrayBuffer());
    const qrImage = await pdfDoc.embedPng(pngBytes);

    // Draw header
    page.drawText('QR-Rechnung (vereinfachte Darstellung)', { x: 50, y: 800, size: 12, font, color: rgb(0.15, 0.15, 0.15) });

    // Draw QR code
    const qrSize = 220;
    page.drawImage(qrImage, { x: 50, y: 540, width: qrSize, height: qrSize });

    // Draw key fields
    const t = (label, value, x, y) => {
      page.drawText(label, { x, y, size: 9, font, color: rgb(0.4, 0.4, 0.4) });
      page.drawText(value || '', { x, y: y - 12, size: 11, font });
    };

    t('IBAN', formValues.iban, 300, 740);
    t('Begünstigter', formValues.kontoName, 300, 700);
    t('Adresse', `${formValues.kontoStrasse}`, 300, 660);
    t('Ort', `${formValues.kontoPlz} ${formValues.kontoOrt} ${formValues.kontoLand || 'CH'}`, 300, 620);
    t('Betrag', `${formValues.betrag || ''} ${formValues.waehrung || 'CHF'}`, 300, 580);
    t('Zahler', formValues.zahlerName || '', 300, 540);
    t('Zahler-Adresse', formValues.zahlerStrasse || '', 300, 500);
    t('Zahler-Ort', `${formValues.zahlerPlz || ''} ${formValues.zahlerOrt || ''} ${formValues.zahlerLand || ''}`, 300, 460);

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  }

  function parseForm(form) {
    const o = Object.fromEntries(new FormData(form).entries());
    return o;
  }

  function toSpcValues(o) {
    return {
      iban: o.iban || '',
      amount: (o.betrag || '').toString().trim(),
      currency: (o.waehrung || 'CHF').toUpperCase(),
      message: (o.zusatz || '').toString().trim(),
      creditor: {
        name: o.kontoName || '',
        street: o.kontoStrasse || '',
        zip: o.kontoPlz || '',
        city: o.kontoOrt || '',
        country: (o.kontoLand || 'CH').toUpperCase(),
      },
      debtor: {
        name: o.zahlerName || '',
        street: o.zahlerStrasse || '',
        zip: o.zahlerPlz || '',
        city: o.zahlerOrt || '',
        country: (o.zahlerLand || 'CH').toUpperCase(),
      },
    };
  }

  function init() {
    const form = document.getElementById('qrForm');
    const result = document.getElementById('qrResult');
    const preview = document.getElementById('qrPreview');
    const link = document.getElementById('downloadLink');
    if (!form || !preview || !link) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const values = parseForm(form);
        const spc = spcText(toSpcValues(values));
        const url = await generatePdf(spc, values);
        preview.src = url;
        link.href = url;
        link.download = 'qr-rechnung.pdf';
        result.classList.remove('hidden');
      } catch (err) {
        console.error('QR PDF Fehler', err);
        alert('Die QR‑Rechnung konnte nicht erzeugt werden. Bitte Eingaben prüfen.');
      }
    });
  }

  ready(() => {
    if (libsReady()) return init();
    const iv = setInterval(() => { if (libsReady()) { clearInterval(iv); init(); } }, 100);
  });
})();
