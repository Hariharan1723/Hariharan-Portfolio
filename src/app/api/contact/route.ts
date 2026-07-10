import { NextResponse } from "next/server";

import { profile } from "@/data/profile";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiToken = process.env.MAILTRAP_API_TOKEN;
    const senderEmail = process.env.MAILTRAP_SENDER_EMAIL;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || profile.email;

    if (!apiToken || !senderEmail) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Set MAILTRAP_API_TOKEN and MAILTRAP_SENDER_EMAIL in .env.local",
        },
        { status: 503 }
      );
    }

    const mailtrapResponse = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: senderEmail, name: `${profile.name} Portfolio` },
        to: [{ email: receiverEmail }],
        reply_to: { email, name },
        subject: `Portfolio message from ${name}`,
        text: [
          `New message from your portfolio contact form.`,
          ``,
          `Name: ${name}`,
          `Email: ${email}`,
          ``,
          `Message:`,
          message,
        ].join("\n"),
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>New portfolio message</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${escapeHtml(message)}</p>
          </div>
        `,
        category: "Portfolio Contact Form",
      }),
    });

    if (!mailtrapResponse.ok) {
      const errorBody = await mailtrapResponse.text();
      console.error("Mailtrap send error:", mailtrapResponse.status, errorBody);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
