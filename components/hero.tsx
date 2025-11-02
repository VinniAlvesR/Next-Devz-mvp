import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-950 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Code2 className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Código sob <span className="text-blue-500">medida</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Desenvolvimento web moderno e escalável para seu negócio crescer
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-2">
            <Button asChild size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <Link href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base text-gray-400 hover:text-white"
            >
              <Link href="#sobre">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
      </div>
    </section>
  )
}
