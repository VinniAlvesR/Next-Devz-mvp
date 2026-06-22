import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Toaster } from "@/components/toaster"

export const metadata: Metadata = {
  title: "Next Devz | Soluções digitais sob medida",
  description: "Sites, sistemas e experiências digitais de alta performance para empresas que querem crescer.",
  // Substitua public/favicon.ico pelo favicon oficial da marca quando o arquivo estiver disponível.
  icons: { icon: [{ url: "/nextdevz-icon-transparent.png", type: "image/png" }] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
