"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import FloatingBottomNav from "@/components/FloatingBottomNav"

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const socialCards = [
    {
      href: "mailto:prarthana.dev@gmail.com",
      Icon: Mail,
      title: "Email",
      subtitle: "prarthana.dev@gmail.com",
      actionLabel: "Copy",
      onAction: async () => {
        const email = "prarthana.dev@gmail.com"
        try {
          await navigator.clipboard.writeText(email)
          toast({ title: "Email copied" })
        } catch {
          toast({ title: "Failed to copy", variant: "destructive" })
        }
      },
    },
    {
      href: "https://twitter.com/prarthana_dev",
      Icon: Twitter,
      title: "Twitter",
      subtitle: "Dm me on twitter",
    },
    {
      href: "https://github.com/prarthana-gade",
      Icon: Github,
      title: "Github",
      subtitle: "View My all Projects",
    },
    {
      href: "https://linkedin.com/in/prarthana-gade",
      Icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Connect with me",
    },
  ]

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "All fields are required", variant: "destructive" })
      return
    }

    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      toast({ title: "Message sent!" })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Toaster />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Contact</h1>
          <p className="text-center text-muted-foreground/90 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Let’s Build Something Amazing Together
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-border/70 bg-card/50 backdrop-blur-xl shadow-sm">
              <div className="p-4 sm:p-6 lg:p-7">
                <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        value={formData.name}
                        onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Your Name"
                        className="w-full bg-transparent text-card-foreground rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm placeholder:text-muted-foreground/70 transition focus:outline-none focus:ring-2 focus:ring-ring focus-visible:border-ring border border-border/70 focus:border-border/70"
                        required
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <input
                        value={formData.email}
                        onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
                        placeholder="Your Email"
                        className="w-full bg-transparent text-card-foreground rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm placeholder:text-muted-foreground/70 transition focus:outline-none focus:ring-2 focus:ring-ring focus-visible:border-ring border border-border/70 focus:border-border/70"
                        required
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Your Message"
                      rows={6}
                      className="w-full bg-transparent text-card-foreground rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm placeholder:text-muted-foreground/70 transition focus:outline-none focus:ring-2 focus:ring-ring focus-visible:border-ring border border-border/70 focus:border-border/70 resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-center pt-1">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      disabled={loading}
                      className="w-full sm:w-auto sm:min-w-[200px] mx-auto block rounded-2xl py-3 px-6 flex items-center justify-center gap-2 text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground"
                    >
                      <span className="inline-flex items-center justify-center size-6 rounded-xl bg-primary/15 border border-primary/25">
                        <Send size={16} />
                      </span>
                      {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="flex gap-3 overflow-x-auto pb-2 sm:pb-0 sm:grid sm:grid-cols-1 sm:gap-4 lg:pt-1"
          >
            {/* keep existing layout behavior; ensure consistent sizing */}
            <div className="hidden sm:block lg:hidden" />
            {socialCards.map((card, idx) => {
              const Icon = card.Icon
              return (
                <motion.div
                  key={card.href + card.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + idx * 0.06 }}
                  className="min-w-[180px] flex-shrink-0 sm:min-w-full"
                >
                  <Link
                    href={card.href}
                    target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-2xl px-3 py-3 sm:px-4 sm:py-3 border border-border/70 bg-card/50 backdrop-blur-xl text-card-foreground shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center shrink-0 size-9 rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <Icon size={18} className="text-primary" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-semibold leading-tight text-sm">{card.title}</div>
                          <div className="text-[11px] text-muted-foreground/80 leading-tight truncate">
                            {card.subtitle}
                          </div>
                        </div>

                        {card.onAction ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              card.onAction?.()
                            }}
                            className="ml-1 rounded-full px-2 py-1 text-[10px] font-semibold transition border border-primary/20 bg-primary/10 text-primary hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {card.actionLabel}
                          </button>
                        ) : (
                          <div className="shrink-0 opacity-70 transition-opacity">
                            <span className="inline-block w-6 h-6 rounded-full border border-border/70" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <FloatingBottomNav currentPath="/contact" />
    </main>
  )
}


