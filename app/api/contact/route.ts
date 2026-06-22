import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

type Body = { name?: string; email?: string; whatsapp?: string; projectType?: string; message?: string }
type ContactData = Required<Body>

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]!)
}

function htmlTemplate(data: ContactData) {
  return `<div style="font-family:Inter,Arial,sans-serif;color:#111827">
    <h2>Novo contato do site ${escapeHtml(process.env.SITE_NAME ?? "Next Devz")}</h2>
    <p><b>Nome:</b> ${escapeHtml(data.name)}</p><p><b>E-mail:</b> ${escapeHtml(data.email)}</p>
    <p><b>WhatsApp:</b> ${escapeHtml(data.whatsapp)}</p><p><b>Tipo de projeto:</b> ${escapeHtml(data.projectType)}</p>
    <p><b>Mensagem:</b></p><div style="white-space:pre-wrap;background:#f3f4f6;padding:12px;border-radius:8px">${escapeHtml(data.message)}</div>
  </div>`
}

async function sendWithGmail(data: ContactData) {
  const user = process.env.GMAIL_USER!
  const transporter = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass: process.env.GMAIL_APP_PASSWORD! } })
  await transporter.sendMail({ from: `${process.env.SITE_NAME ?? "Next Devz"} <${user}>`, to: process.env.CONTACT_TO ?? user, subject: `Novo contato — ${data.projectType}`, html: htmlTemplate(data), replyTo: data.email })
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body
    const data: ContactData = { name: body.name?.trim() ?? "", email: body.email?.trim() ?? "", whatsapp: body.whatsapp?.trim() ?? "", projectType: body.projectType?.trim() ?? "", message: body.message?.trim() ?? "" }
    if (!data.name || !data.email.includes("@") || !data.whatsapp || !data.projectType || !data.message) return NextResponse.json({ ok: false, error: "Preencha todos os campos corretamente." }, { status: 400 })
    if (data.message.length > 5000) return NextResponse.json({ ok: false, error: "Mensagem longa demais." }, { status: 400 })
    await sendWithGmail(data)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("CONTACT_API_ERR:", error)
    return NextResponse.json({ ok: false, error: "Falha ao enviar. Tente novamente." }, { status: 500 })
  }
}
