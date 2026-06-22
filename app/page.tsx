import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Method } from "@/components/method"
import { Conversion } from "@/components/conversion"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050914]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <Conversion />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
