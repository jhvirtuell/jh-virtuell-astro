// src/pages/api/qr-rechnung.ts
import type { APIRoute } from "astro";

// @ts-ignore – swissqrbill hat keine Typen
import { Pdf } from "swissqrbill/pdf";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const pdf = new Pdf({
    currency: data.waehrung || "CHF",
    amount: parseFloat(data.betrag),
    creditor: {
      iban: data.iban,
      name: data.kontoName,
      address: data.kontoStrasse,
      zip: data.kontoPlz,
      city: data.kontoOrt,
      country: data.kontoLand || "CH",
    },
    debtor: {
      name: data.zahlerName,
      address: data.zahlerStrasse,
      zip: data.zahlerPlz,
      city: data.zahlerOrt,
      country: data.zahlerLand || "CH",
    },
    reference: data.referenz || "",
    additionalInformation: data.zusatz || "",
  });

  const pdfBuffer = pdf.toBuffer();

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=qr-rechnung.pdf",
    },
  });
};