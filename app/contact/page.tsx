 "use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { toast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import FloatingBottomNav from '@/components/FloatingBottomNav'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const socialCards = useMemo(
    () => [
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
            toast({
              title: "Email copied"
            })
          } catch {
            // toast.error("Failed to copy")
          }
        }
      },
      {
        href: "https://twitter.com/prarthana_dev",
        Icon: Twitter,
        title: "Twitter",
        subtitle: "Dm me on twitter"
      },
      {
        href: "https://github.com/prarthana-gade",
        Icon: Github,
        title: "Github",
        subtitle: "View My all Projects"
      },
      {
        href: "https://linkedin.com/in/prarthana-gade",
        Icon: Linkedin,
        title: "LinkedIn",
        subtitle: "Connect with me"
      }
    ],
    []
  )

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            // toast.error("All fields are required")
      return
    }

    setLoading(true)
    try {
      // TODO: Hook up your form backend here.
      // Example using Formspree:
      // await fetch("https://formspree.io/f/<your-form-id>", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })

      await new Promise(resolve => setTimeout(resolve, 900))
            // toast.success("Message sent!")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      toast({
        title: "Something went wrong"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <Toaster />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="text-4xl md:text-5xl font-semibold text-center"
        >
          Contact
        </motion.h1>

        <p className="text-center text-white/70 mt-4 text-sm sm:text-base">
          Let’s Build Something Amazing Together
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* LEFT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    value={formData.name}
                    onChange={e => setFormData(s => ({ ...s, name: e.target.value }))}
                    placeholder="Your Name"
                    className="w-full bg-white text-black rounded-2xl px-5 py-3.5 text-sm placeholder:text-gray-500 transition focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>

                <div>
                  <input
                    value={formData.email}
                    onChange={e => setFormData(s => ({ ...s, email: e.target.value }))}
                    placeholder="Your Email"
                    className="w-full bg-white text-black rounded-2xl px-5 py-3.5 text-sm placeholder:text-gray-500 transition focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(s => ({ ...s, message: e.target.value }))}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-white text-black rounded-2xl px-5 py-3.5 text-sm placeholder:text-gray-500 transition focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
disabled={loading}
                className="w-full max-w-[320px] mx-auto block bg-white text-black rounded-2xl py-2 flex items-center justify-center gap-2 text-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - SOCIAL CARDS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="grid grid-cols-1 gap-4"
          >
            {socialCards.map((card, idx) => {
              const Icon = card.Icon
              return (
                <motion.div
                  key={card.href + card.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + idx * 0.06 }}
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
                      className="bg-white rounded-2xl text-black px-4 py-3 flex items-center gap-3"
                    >
                      <div className="flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium leading-tight">{card.title}</div>
                        <div className="text-sm text-black/70 leading-tight">{card.subtitle}</div>
                      </div>

                      {card.onAction ? (
                        <button
                          type="button"
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            card.onAction?.()
                          }}
                          className="bg-black text-white rounded-full px-3 py-1 text-xs transition hover:opacity-90"
                        >
                          {card.actionLabel}
                        </button>
                      ) : null}
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* FLOATING BOTTOM NAV */}
      <FloatingBottomNav currentPath="/contact" />
    </main>
  )
}

