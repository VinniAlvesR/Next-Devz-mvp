import Image from "next/image"
import { BarChart3, Globe2, LayoutTemplate, Settings2 } from "lucide-react"

const services = [
  { number: "01", icon: LayoutTemplate, title: "Landing Pages", description: "Transformam visitantes em pedidos de orçamento." },
  { number: "02", icon: Globe2, title: "Sites Profissionais", description: "Apresentam sua empresa com clareza e confiança." },
  { number: "03", icon: Settings2, title: "Sistemas Web", description: "Organizam processos, clientes e informações." },
  { number: "04", icon: BarChart3, title: "Dashboards", description: "Convertem dados em decisões mais rápidas." },
]

export function Services() {
  return (
    <section id="servicos" className="section-pad border-y border-white/5 bg-[#080d19]/70">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="eyebrow">Soluções sob medida</span><h2 className="display-title mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">Como ajudamos <span className="gradient-text">seu negócio.</span></h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">Tecnologia aplicada para apresentar, vender e organizar melhor.</p></div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ number, icon: Icon, title, description }) => <article key={title} className="group rounded-2xl border border-white/8 bg-[#080d19] p-5 hover:border-blue-400/25 hover:bg-[#0b1324]"><div className="flex items-center justify-between"><span className="font-orbitron text-[10px] text-slate-600">{number}</span><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/10"><Icon className="h-4 w-4 text-cyan-400" /></span></div><h3 className="mt-6 text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{description}</p></article>)}
        </div>
        <div id="sobre" className="mt-8 flex flex-col gap-5 rounded-2xl border border-blue-400/15 bg-blue-500/[.04] p-5 sm:flex-row sm:items-center sm:p-6"><Image src="/nextdevz-logo-transparent-cropped.png" alt="Next Devz" width={1080} height={980} className="h-16 w-16 shrink-0 object-contain" /><div><p className="text-sm font-semibold text-white">Estratégia, design e tecnologia no mesmo projeto.</p><p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500">A Next Devz cria experiências digitais sob medida para posicionar sua marca e conduzir o cliente até a ação.</p></div></div>
      </div>
    </section>
  )
}
