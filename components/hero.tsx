import Link from "next/link"
import { ArrowRight, CheckCircle2, Gauge, MessageCircle, MousePointerClick } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[720px] items-center overflow-hidden pt-24">
      <div className="absolute left-[10%] top-24 h-64 w-64 rounded-full bg-blue-600/15 blur-[110px]" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="container relative grid items-center gap-10 py-12 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" /> Sites que trabalham pelo seu negócio
          </div>
          <h1 className="display-title max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-[4rem]">Seu Instagram atrai atenção. Seu site <span className="gradient-text">transforma em clientes.</span></h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">Landing pages e sites profissionais focados em conversão, performance e presença digital.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500">Solicitar orçamento <ArrowRight className="h-4 w-4" /></Link>
            <Link href="#servicos" className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10">Ver serviços</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">{["Foco em conversão", "Alta performance", "100% responsivo"].map(item => <span key={item} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />{item}</span>)}</div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px] animate-float">
          <div className="glow surface overflow-hidden rounded-[1.75rem] p-3">
            <div className="rounded-[1.25rem] border border-white/8 bg-[#080e1b] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-400/70"/><i className="h-2 w-2 rounded-full bg-amber-400/70"/><i className="h-2 w-2 rounded-full bg-emerald-400/70"/></div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">Online</span>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[.035] p-4">
                <div className="flex items-center justify-between"><span className="text-xs text-slate-500">Experiência otimizada</span><Gauge className="h-4 w-4 text-cyan-400"/></div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" /></div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[.04] p-4"><MessageCircle className="h-4 w-4 text-emerald-400"/><p className="mt-5 text-sm font-semibold text-white">WhatsApp</p><p className="mt-1 text-[10px] text-emerald-400">Conectado</p></div>
                <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[.06] p-4"><MousePointerClick className="h-4 w-4 text-blue-400"/><p className="mt-5 text-sm font-semibold text-white">CTA ativo</p><p className="mt-1 text-[10px] text-slate-500">Pronto para converter</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
