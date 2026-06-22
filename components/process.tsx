const steps = [
  ["01", "Conversamos", "Entendemos seu negócio, seu público e seu objetivo."],
  ["02", "Planejamos", "Definimos a estrutura ideal para gerar confiança e conversão."],
  ["03", "Desenvolvemos", "Criamos o site com design moderno, responsivo e otimizado."],
  ["04", "Publicamos", "Colocamos tudo no ar e deixamos pronto para receber clientes."],
]

export function Process() {
  return <section className="section-pad border-b border-white/5 bg-[#080d19]/40"><div className="container"><div className="max-w-2xl"><span className="eyebrow">Processo simples e transparente</span><h2 className="display-title mt-5 text-4xl font-bold text-white sm:text-5xl">Como funciona</h2></div><div className="relative mt-14 grid gap-8 md:grid-cols-4"><div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/60 to-cyan-400/10 md:block" />{steps.map(([number,title,text]) => <article key={number} className="relative"><span className="relative z-10 inline-grid h-10 w-10 place-items-center rounded-full border border-blue-400/40 bg-[#08101e] font-orbitron text-xs font-bold text-cyan-300 shadow-[0_0_24px_rgba(37,99,235,.2)]">{number}</span><h3 className="mt-7 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></article>)}</div></div></section>
}
