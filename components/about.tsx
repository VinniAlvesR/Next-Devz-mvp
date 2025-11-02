import { Code, Zap } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Sobre</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Empresa especializada em criar soluções web sob medida com tecnologias modernas do ecossistema
                JavaScript.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Cada projeto é pensado para atender de forma única às necessidades do seu negócio, garantindo
                escalabilidade e performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 sm:p-6 bg-gray-800 rounded-xl">
                <Code className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Tecnologias Modernas</h3>
                <p className="text-gray-400 text-xs sm:text-sm">React, Next.js, TypeScript</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-800 rounded-xl">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Soluções Escaláveis</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Preparadas para crescer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
