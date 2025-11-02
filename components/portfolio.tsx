import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Portfólio</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400">Projetos desenvolvidos com as melhores tecnologias</p>
          </div>

          {/* Content */}
          <div className="text-center p-8 lg:p-12 bg-gray-800 rounded-2xl">
            <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Clock className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Projetos em andamento</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Em breve, casos reais com resultados mensuráveis. Estou trabalhando em projetos incríveis.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-blue-600 text-white">
                Next.js
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white">
                React
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white">
                Tailwind
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
