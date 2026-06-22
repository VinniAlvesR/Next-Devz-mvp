import { Check, MessageCircle, MousePointerClick } from "lucide-react"

export function Conversion() {
  return (
    <section id="resultado" className="section-pad border-y border-white/5 bg-[#080d19]/70">
      <div className="container grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div><span className="eyebrow">Da atenção à ação</span><h2 className="display-title mt-4 text-3xl font-bold text-white sm:text-4xl">Seu Instagram é a vitrine. <span className="gradient-text">Seu site é a loja.</span></h2><p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">O site organiza sua oferta, reforça a credibilidade e conduz o cliente até o orçamento.</p></div>
        <div className="grid gap-3 sm:grid-cols-3"><div className="surface rounded-2xl p-4"><MessageCircle className="h-4 w-4 text-emerald-400"/><p className="mt-4 text-xs font-semibold text-white">Interesse recebido</p><p className="mt-1 text-[10px] text-slate-500">Contato via WhatsApp</p></div><div className="surface rounded-2xl border-blue-400/20 p-4"><MousePointerClick className="h-4 w-4 text-blue-400"/><p className="mt-4 text-xs font-semibold text-white">Oferta clara</p><p className="mt-1 text-[10px] text-slate-500">CTA de orçamento</p></div><div className="surface rounded-2xl p-4"><Check className="h-4 w-4 text-cyan-400"/><p className="mt-4 text-xs font-semibold text-white">Pronto para vender</p><p className="mt-1 text-[10px] text-slate-500">Experiência profissional</p></div></div>
      </div>
    </section>
  )
}
