"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Clock3, Mail, MessageCircle } from "lucide-react"

const initialData = { name: "", email: "", whatsapp: "", projectType: "Landing Page", message: "" }
const contactCards = [
  { icon: Mail, label: "E-mail", value: "nextdevz.contact@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+55 (31) 97211-8597" },
  { icon: Clock3, label: "Resposta", value: "Em até 24 horas" },
]

export function Contact() {
  const [formData, setFormData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setStatus("idle"); setErrorMsg(null)
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json?.ok) { setStatus("ok"); setFormData(initialData) }
      else { setStatus("error"); setErrorMsg(json?.error || `Falha ao enviar (HTTP ${res.status})`) }
    } catch { setStatus("error"); setErrorMsg("Não foi possível enviar. Tente novamente.") }
    finally { setLoading(false) }
  }

  const fieldClass = "h-11 w-full rounded-xl border border-white/10 bg-white/[.035] px-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/10"
  return (
    <section id="contato" className="section-pad relative">
      <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="container relative">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div><span className="eyebrow">Vamos conversar</span><h2 className="display-title mt-4 text-3xl font-bold text-white sm:text-4xl">Pronto para transformar sua <span className="gradient-text">presença digital?</span></h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Conte sobre seu projeto. Indicaremos o melhor caminho.</p></div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">{contactCards.map(({ icon: Icon, label, value }) => <div key={label} className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500/10"><Icon className="h-3.5 w-3.5 text-blue-400" /></span><div><p className="text-[9px] text-slate-600">{label}</p><p className="text-[11px] font-medium text-slate-300">{value}</p></div></div>)}</div>
        </div>
        <form onSubmit={handleSubmit} className="surface rounded-2xl p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="text-xs font-semibold text-slate-400">Nome<input className={`${fieldClass} mt-2`} name="name" value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})} placeholder="Seu nome" required /></label>
            <label className="text-xs font-semibold text-slate-400">E-mail<input className={`${fieldClass} mt-2`} type="email" name="email" value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})} placeholder="voce@empresa.com" required /></label>
            <label className="text-xs font-semibold text-slate-400">WhatsApp<input className={`${fieldClass} mt-2`} name="whatsapp" value={formData.whatsapp} onChange={e => setFormData({...formData,whatsapp:e.target.value})} placeholder="(00) 00000-0000" required /></label>
            <label className="text-xs font-semibold text-slate-400">Tipo de projeto<select className={`${fieldClass} mt-2`} name="projectType" value={formData.projectType} onChange={e => setFormData({...formData,projectType:e.target.value})}><option className="bg-[#0b1220]">Landing Page</option><option className="bg-[#0b1220]">Site Profissional</option><option className="bg-[#0b1220]">Sistema Web</option><option className="bg-[#0b1220]">Outro</option></select></label>
          </div>
          <label className="mt-4 block text-xs font-semibold text-slate-400">Mensagem<textarea className={`${fieldClass} mt-2 h-24 resize-none py-3`} name="message" value={formData.message} onChange={e => setFormData({...formData,message:e.target.value})} placeholder="Conte brevemente sobre seu projeto e objetivo..." required /></label>
          {status === "ok" && <p role="status" className="mt-3 text-sm text-emerald-400">Mensagem enviada com sucesso. Entraremos em contato em breve.</p>}
          {status === "error" && <p role="alert" className="mt-3 text-sm text-red-400">{errorMsg}</p>}
          <button type="submit" disabled={loading} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/15 hover:bg-blue-500 disabled:cursor-wait disabled:opacity-60">{loading ? "Enviando..." : "Quero transformar minha presença digital"}<ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>
    </section>
  )
}
