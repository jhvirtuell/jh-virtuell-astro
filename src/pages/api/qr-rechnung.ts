// src/pages/api/qr-rechnung.ts
import type { APIRoute } from "astro";
import PDFDocument from "pdfkit";
import { SwissQRBill } from "swissqrbill/pdf";

const toOptionalString = (value: unknown) => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const MM_TO_PT = 72 / 25.4;
const mmToPt = (mm: number) => mm * MM_TO_PT;

const streamToBuffer = (doc: PDFDocument) =>
  new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();

    const amountValue = toOptionalString(payload?.betrag)?.replace(",", ".") ?? "";
    const amount = Number.parseFloat(amountValue);
    if (!Number.isFinite(amount) || amount <= 0) {
      return new Response(
        JSON.stringify({ message: "Ungültiger Betrag für die QR-Rechnung." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const account = toOptionalString(payload?.iban)?.replace(/\s+/g, "");
    if (!account) {
      return new Response(
        JSON.stringify({ message: "IBAN wird benötigt, um die QR-Rechnung zu erstellen." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const creditorName = toOptionalString(payload?.kontoName);
    const creditorAddress = toOptionalString(payload?.kontoStrasse);
    const creditorZip = toOptionalString(payload?.kontoPlz);
    const creditorCity = toOptionalString(payload?.kontoOrt);

    if (!creditorName || !creditorAddress || !creditorZip || !creditorCity) {
      return new Response(
        JSON.stringify({ message: "Bitte alle Kreditoren-Angaben ausfüllen." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const debtorName = toOptionalString(payload?.zahlerName);
    const debtorAddress = toOptionalString(payload?.zahlerStrasse);
    const debtorZip = toOptionalString(payload?.zahlerPlz);
    const debtorCity = toOptionalString(payload?.zahlerOrt);
    const debtorCountry = toOptionalString(payload?.zahlerLand) ?? "CH";

    const debtor =
      debtorName && debtorAddress && debtorZip && debtorCity
        ? {
            name: debtorName,
            address: debtorAddress,
            zip: debtorZip,
            city: debtorCity,
            country: debtorCountry,
          }
        : undefined;

    const supportedLanguages = new Set(["DE", "FR", "IT", "EN"]);
    const languageFromForm = toOptionalString(payload?.sprache)?.toUpperCase();
    const billLanguage = supportedLanguages.has(languageFromForm ?? "")
      ? (languageFromForm as "DE" | "FR" | "IT" | "EN")
      : "DE";

    const billData = {
      currency: toOptionalString(payload?.waehrung) ?? "CHF",
      amount,
      reference: toOptionalString(payload?.referenz),
      additionalInformation: toOptionalString(payload?.zusatz),
      creditor: {
        account,
        name: creditorName,
        address: creditorAddress,
        zip: creditorZip,
        city: creditorCity,
        country: toOptionalString(payload?.kontoLand) ?? "CH",
      },
      debtor,
    };

    const formatSelection = toOptionalString(payload?.format)?.toUpperCase();
    const isQrSlipOnly = formatSelection === "QR_BILL_ONLY";

    const doc = new PDFDocument({
      size: isQrSlipOnly ? [mmToPt(210), mmToPt(105)] : "A4",
      margin: 0,
    });
    const bill = new SwissQRBill(billData, {
      language: billLanguage,
      scissors: !isQrSlipOnly,
      separate: !isQrSlipOnly,
    });
    bill.attachTo(doc);
    doc.end();

    const pdfBuffer = await streamToBuffer(doc);

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=qr-rechnung.pdf",
      },
    });
  } catch (error) {
    console.error("QR-Rechnung API Fehler:", error);
    return new Response(
      JSON.stringify({ message: "Fehler beim Generieren der QR-Rechnung." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
