import { Gauge, Headphones, Layout, MonitorSmartphone, MousePointerClick, Sparkles } from "lucide-react"

const reasons = [
  [Headphones, "Atendimento direto"], [Sparkles, "Design sob medida"], [MousePointerClick, "Foco em conversão"],
  [Gauge, "Performance otimizada"], [MonitorSmartphone, "Projeto responsivo"], [Layout, "Entrega profissional"],
] as const

export function Testimonials() {
  return <section id="depoimentos" className="section-pad border-y border-white/5 bg-[#080d19]/70"><div className="container"><div className="mx-auto max-w-2xl text-center"><span className="eyebrow">Um parceiro para seu projeto</span><h2 className="display-title mt-5 text-4xl font-bold text-white sm:text-5xl">Por que escolher a <span className="gradient-text">Next Devz?</span></h2></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([Icon,title]) => <article key={title} className="surface group flex items-center gap-4 rounded-2xl p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10"><Icon className="h-5 w-5 text-blue-400"/></span><h3 className="text-sm font-semibold text-slate-200">{title}</h3></article>)}</div></div></section>
}
