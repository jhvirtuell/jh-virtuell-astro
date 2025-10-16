// src/pages/api/contact.ts
import type { APIRoute } from "astro";

const jsonResponse = (status: number, payload: Record<string, unknown>) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const requiredFields = ["name", "email", "phone", "service", "message"] as const;

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

const createPlainTextBody = (data: Record<string, string>) =>
  [
    "Neue Nachricht über das Kontaktformular",
    "",
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Thema: ${data.service}`,
    "",
    "Nachricht:",
    data.message,
  ].join("\n");

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    let formValues: Record<string, string> = {};

    if (contentType.includes("application/json")) {
      const body = await request.json();
      if (typeof body !== "object" || body === null) {
        return jsonResponse(400, { success: false, message: "Ungültige Anfrage." });
      }
      for (const [key, value] of Object.entries(body)) {
        if (typeof value === "string") {
          formValues[key] = value.trim();
        }
      }
    } else {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          formValues[key] = value.trim();
        }
      });
    }

    const honeypot = formValues.company || formValues.honeypot || "";
    if (honeypot) {
      return jsonResponse(400, { success: false, message: "Spam erkannt – Anfrage blockiert." });
    }

    const turnstileToken = formValues["cf-turnstile-response"] || "";
    if (!turnstileToken) {
      return jsonResponse(400, { success: false, message: "Sicherheitsüberprüfung fehlgeschlagen." });
    }

    const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY fehlt in der Server-Konfiguration.");
      return jsonResponse(500, { success: false, message: "Server nicht korrekt konfiguriert." });
    }

    const ipChain =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "";
    const remoteIp = ipChain.split(",").map((part) => part.trim()).find(Boolean);

    const verificationParams = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken,
    });
    if (remoteIp) {
      verificationParams.append("remoteip", remoteIp);
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verificationParams,
      }
    );

    const turnstileResult = await turnstileResponse.json();
    if (!turnstileResult?.success) {
      return jsonResponse(400, {
        success: false,
        message: "❌ Spam-Schutz fehlgeschlagen. Bitte versuche es erneut.",
      });
    }

    for (const field of requiredFields) {
      if (!formValues[field] || formValues[field].length < 2) {
        return jsonResponse(400, {
          success: false,
          message: "Bitte fülle alle Pflichtfelder korrekt aus.",
        });
      }
    }

    if (!validateEmail(formValues.email)) {
      return jsonResponse(400, {
        success: false,
        message: "Bitte gib eine gültige E-Mail-Adresse an.",
      });
    }

    const mailjetKey = import.meta.env.MAILJET_API_KEY;
    const mailjetSecret = import.meta.env.MAILJET_API_SECRET;
    const fromAddress = import.meta.env.MAIL_FROM || "info@jh-virtuell.ch";
    const fromName = import.meta.env.MAIL_FROM_NAME || "JH Virtuell";
    const toAddress = import.meta.env.MAIL_TO || fromAddress;

    if (!mailjetKey || !mailjetSecret) {
      console.error("Mailjet Zugangsdaten fehlen.");
      return jsonResponse(500, { success: false, message: "Server nicht korrekt konfiguriert." });
    }

    const escaped = {
      name: escapeHtml(formValues.name),
      email: escapeHtml(formValues.email),
      phone: escapeHtml(formValues.phone),
      service: escapeHtml(formValues.service),
      message: escapeHtml(formValues.message).replace(/\n/g, "<br />"),
    } as const;

    const htmlBody = `
      <h2 style="color:#d4af37; margin-bottom: 0.5em;">Neue Nachricht über das Kontaktformular</h2>
      <table cellspacing="0" cellpadding="6" style="border-collapse: collapse; font-family: sans-serif; font-size: 15px;">
        <tr><td><strong>Name:</strong></td><td>${escaped.name}</td></tr>
        <tr><td><strong>E-Mail:</strong></td><td>${escaped.email}</td></tr>
        <tr><td><strong>Telefon:</strong></td><td>${escaped.phone}</td></tr>
        <tr><td><strong>Thema:</strong></td><td>${escaped.service}</td></tr>
        <tr><td style="vertical-align: top;"><strong>Nachricht:</strong></td><td>${escaped.message}</td></tr>
      </table>
      <p style="color:#999;font-size:13px;margin-top:1.5em;">Diese Anfrage stammt von der Website <strong>jh-virtuell.ch</strong></p>
    `;

    const mailjetAuth = Buffer.from(`${mailjetKey}:${mailjetSecret}`).toString("base64");
    const mailjetPayload = {
      Messages: [
        {
          From: { Email: fromAddress, Name: fromName },
          To: [{ Email: toAddress }],
          ReplyTo: { Email: formValues.email, Name: formValues.name },
          Subject: "📬 Neue Kontaktanfrage über jh-virtuell.ch",
          HTMLPart: htmlBody,
          TextPart: createPlainTextBody(formValues),
        },
      ],
    };

    const mailjetResponse = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        Authorization: `Basic ${mailjetAuth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailjetPayload),
    });

    const mailjetResult = await mailjetResponse.json().catch(() => ({}));
    const mailjetStatus = mailjetResult?.Messages?.[0]?.Status;

    if (!mailjetResponse.ok || mailjetStatus !== "success") {
      console.error("Mailjet Fehler", mailjetResponse.status, mailjetResult);
      return jsonResponse(500, {
        success: false,
        message: "Fehler beim Senden. Bitte versuche es später erneut.",
      });
    }

    return jsonResponse(200, {
      success: true,
      message: "✅ Nachricht erfolgreich gesendet.",
    });
  } catch (error) {
    console.error("Kontaktformular Fehler", error);
    return jsonResponse(500, {
      success: false,
      message: "Interner Fehler. Bitte versuche es später erneut.",
    });
  }
};

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, message: "Methode nicht erlaubt." });
