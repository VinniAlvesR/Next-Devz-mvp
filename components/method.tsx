import Link from "next/link"
import { ArrowRight, Gauge, Headphones, MonitorSmartphone, Sparkles } from "lucide-react"

const steps = [
  ["01", "Entendemos", "Negócio, público e objetivo."],
  ["02", "Planejamos", "Estrutura e jornada de conversão."],
  ["03", "Desenvolvemos", "Design responsivo e performance."],
  ["04", "Publicamos", "Tudo pronto para receber clientes."],
]

const reasons = [
  { icon: Headphones, label: "Atendimento direto" },
  { icon: Sparkles, label: "Design sob medida" },
  { icon: Gauge, label: "Performance otimizada" },
  { icon: MonitorSmartphone, label: "Projeto responsivo" },
]

export function Method() {
  return (
    <section id="metodo" className="section-pad">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div><span className="eyebrow">Processo transparente</span><h2 className="display-title mt-4 text-3xl font-bold text-white sm:text-4xl">Do briefing ao site no ar.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{steps.map(([number,title,text]) => <article key={number} className="flex gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-blue-400/25 bg-blue-500/10 font-orbitron text-[9px] text-cyan-300">{number}</span><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 text-xs text-slate-500">{text}</p></div></article>)}</div></div>
          <div className="surface rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-[.14em] text-cyan-300">Por que a Next Devz</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{reasons.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 rounded-xl border border-white/7 bg-white/[.025] p-3"><Icon className="h-4 w-4 text-blue-400"/><span className="text-xs font-medium text-slate-300">{label}</span></div>)}</div><Link href="#contato" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500">Solicitar orçamento <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  )
}
