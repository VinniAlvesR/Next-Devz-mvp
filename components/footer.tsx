import Link from "next/link"
import { Code2 } from "lucide-react"

export function Footer() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-6 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white font-orbitron">
              Next <span className="text-blue-500">Devz</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 Next Devz</p>
        </div>
      </div>
    </footer>
  )
}
