import { Star, MessageCircle } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Depoimentos</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-400">O que os clientes dizem sobre o trabalho</p>
          </div>

          {/* Content */}
          <div className="text-center p-6 sm:p-8 lg:p-12 bg-gray-900 rounded-2xl">
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-yellow-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <MessageCircle className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Em breve, feedbacks reais</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Espaço reservado para os depoimentos dos clientes satisfeitos com os projetos desenvolvidos.
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
