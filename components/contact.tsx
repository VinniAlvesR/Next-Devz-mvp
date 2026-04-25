"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")
    setErrorMsg(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const json = await res.json().catch(() => ({}))

      if (res.ok && json?.ok) {
        setStatus("ok")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg(json?.error || `Falha ao enviar (HTTP ${res.status})`)
      }
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err?.message ?? "Erro inesperado")
    } finally {
      setLoading(false)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contato" className="min-h-screen snap-start py-16 lg:py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Contato</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-400">Vamos conversar sobre seu próximo projeto</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 text-sm"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 text-sm"
                  />
                </div>

                <Textarea
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 text-sm"
                />

                {/* feedback */}
                {status === "ok" && (
                  <p className="text-green-500 text-sm">Mensagem enviada com sucesso! 🎉</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    {errorMsg || "Ocorreu um erro ao enviar. Tente novamente."}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full sm:w-auto text-sm sm:text-base"
                  disabled={loading}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-900 rounded-xl">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base">E-mail</h3>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">nextdevz.contact@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-900 rounded-xl">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm sm:text-base">WhatsApp</h3>
                  <p className="text-gray-400 text-xs sm:text-sm truncate">+55 (31) 97211-8597</p>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gray-900 rounded-xl">
                <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resposta rápida</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Respondo todas as mensagens em até 24 horas. Vamos transformar sua ideia em realidade!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
