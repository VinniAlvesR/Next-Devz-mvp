import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Gauge, MessageCircle, ShieldCheck } from "lucide-react"

const pillars = [
  { icon: ShieldCheck, title: "Mais credibilidade", text: "Uma presença profissional que transmite confiança antes mesmo do primeiro contato." },
  { icon: MessageCircle, title: "Mais oportunidades", text: "Uma jornada clara que conduz o visitante do interesse à conversa no WhatsApp." },
  { icon: Gauge, title: "Mais performance", text: "Páginas rápidas, responsivas e construídas para funcionar em qualquer dispositivo." },
]

export function About() {
  return (
    <section id="sobre" className="section-pad relative border-y border-white/5 bg-[#080d19]/55">
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="container relative grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div className="surface relative min-h-[460px] overflow-hidden rounded-[2rem] p-7 sm:min-h-[520px] sm:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-blue-500/15 blur-[70px]" />
          <div className="relative flex min-h-[390px] flex-col justify-between sm:min-h-[440px]">
            <div className="flex items-center justify-between"><span className="font-orbitron text-[10px] uppercase tracking-[.18em] text-blue-300">Identidade digital</span><span className="flex items-center gap-2 text-[10px] text-emerald-400"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" /> ONLINE</span></div>
            <div className="mx-auto w-full max-w-[330px]"><Image src="/nextdevz-logo-transparent-cropped.png" alt="Logo oficial da Next Devz" width={1080} height={980} className="h-auto w-full drop-shadow-[0_0_28px_rgba(59,130,246,.18)]" /></div>
            <div className="grid grid-cols-3 gap-2">{[["Estratégia","01"],["Design","02"],["Tecnologia","03"]].map(([label,number]) => <div key={label} className="rounded-xl border border-white/8 bg-black/25 p-3"><span className="text-[9px] text-blue-400">{number}</span><p className="mt-1 text-[10px] font-medium text-slate-400 sm:text-xs">{label}</p></div>)}</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">Sobre a Next Devz</span>
          <h2 className="display-title mt-5 max-w-2xl text-4xl font-bold text-white sm:text-5xl">Seu negócio merece uma presença digital que <span className="gradient-text">trabalha por ele.</span></h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">A Next Devz nasceu para transformar atenção em oportunidade. Criamos sites e experiências digitais que posicionam sua marca, explicam sua oferta com clareza e ajudam o cliente a tomar a próxima decisão.</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">Não entregamos apenas uma página bonita. Combinamos estratégia, design e tecnologia para construir uma presença profissional, rápida e orientada à conversão.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">{pillars.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/8 bg-white/[.025] p-4 hover:border-blue-400/25 hover:bg-blue-500/[.04]"><Icon className="h-5 w-5 text-blue-400" /><h3 className="mt-5 text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></article>)}</div>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">{["Atendimento direto", "Projeto sob medida", "Entrega profissional"].map(item => <span key={item} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />{item}</span>)}</div><Link href="#contato" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white">Falar sobre meu projeto <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  )
}
