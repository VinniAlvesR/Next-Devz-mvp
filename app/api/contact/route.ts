import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";

type Body = { name?: string; email?: string; message?: string };

function htmlTemplate({ name, email, message }: Required<Body>) {
  return `
    <div style="font-family:Inter,Arial,sans-serif;">
      <h2>Novo contato do site ${process.env.SITE_NAME ?? ""}</h2>
      <p><b>Nome:</b> ${name}</p>
      <p><b>E-mail:</b> ${email}</p>
      <p><b>Mensagem:</b></p>
      <pre style="white-space:pre-wrap;background:#0b0b0b;color:#eaeaea;padding:12px;border-radius:8px;">${message}</pre>
    </div>
  `;
}

async function sendWithGmail({ name, email, message }: Required<Body>) {
  const user = process.env.GMAIL_USER!;
  const pass = process.env.GMAIL_APP_PASSWORD!;
  const to = process.env.CONTACT_TO ?? user;

  // SMTP oficial do Gmail
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `${process.env.SITE_NAME ?? "Website"} <${user}>`,
    to,
    subject: "Novo contato pelo site",
    html: htmlTemplate({ name, email, message }),
    replyTo: email, // assim você responde direto pro cliente
  });
}

export async function POST(req: Request) {
  try {
    const { name = "", email = "", message = "" } = (await req.json()) as Body;

    if (!name.trim() || !email.includes("@") || !message.trim()) {
      return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 400 });
    }

    // anti-spam básico
    if (message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Mensagem longa demais" }, { status: 400 });
    }

    await sendWithGmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("CONTACT_API_ERR:", e);
    return NextResponse.json({ ok: false, error: "Falha ao enviar" }, { status: 500 });
  }
}
