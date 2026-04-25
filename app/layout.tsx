import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Next Devz - Desenvolvimento Web Profissional",
  description: "Criamos soluções digitais inovadoras para o seu negócio",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${orbitron.variable} snap-y snap-mandatory`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}