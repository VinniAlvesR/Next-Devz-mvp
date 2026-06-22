import Link from "next/link"

export function Footer() {
  return <footer className="border-t border-white/8 bg-[#030711] py-8"><div className="container"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><Link href="#home" className="font-orbitron text-lg font-bold text-white">&lt;Next <span className="text-cyan-400">Devz</span> /&gt;</Link><p className="mt-2 text-xs text-slate-500">Performance. Design. Tecnologia.</p></div><nav className="flex flex-wrap gap-5 text-xs text-slate-500"><Link href="#servicos" className="hover:text-white">Serviços</Link><Link href="#metodo" className="hover:text-white">Como funciona</Link><Link href="#resultado" className="hover:text-white">Resultados</Link><Link href="#contato" className="hover:text-white">Contato</Link></nav></div><div className="mt-6 border-t border-white/5 pt-5 text-[11px] text-slate-700">© 2026 Next Devz. Todos os direitos reservados.</div></div></footer>
}
