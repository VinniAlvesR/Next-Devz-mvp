import { Globe, Settings, BarChart3, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Sites responsivos e otimizados para SEO com design moderno.",
    },
    {
      icon: Settings,
      title: "Sistemas Web",
      description: "Desenvolvimento de sistemas personalizados para seu negócio.",
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Painéis administrativos e interfaces para gestão de dados.",
    },
    {
      icon: Zap,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão e resultados.",
    },
  ]

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gray-950">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Serviços</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2">
              Soluções completas em desenvolvimento web
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
