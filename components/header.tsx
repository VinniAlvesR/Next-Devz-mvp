"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Como funciona" },
  { href: "#resultado", label: "Resultados" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="container rounded-2xl border border-white/10 bg-[#050914]/85 shadow-[0_16px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <Link href="#home" className="flex h-12 items-center" aria-label="Next Devz - início">
            <Image src="/nextdevz-logo-transparent-cropped.png" alt="Next Devz" width={180} height={164} priority className="h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden items-center gap-1 rounded-full border border-white/7 bg-white/[.025] p-1 md:flex" aria-label="Navegação principal">
            {navItems.map(item => <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-xs font-medium text-slate-400 hover:bg-white/5 hover:text-white">{item.label}</Link>)}
          </nav>
          <Link href="#contato" className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 md:flex">Solicitar orçamento <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {open && <nav id="mobile-menu" className="border-t border-white/8 px-3 py-3 md:hidden">{navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{item.label}</Link>)}<Link href="#contato" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white">Solicitar orçamento <ArrowUpRight className="h-4 w-4" /></Link></nav>}
      </div>
    </header>
  )
}
