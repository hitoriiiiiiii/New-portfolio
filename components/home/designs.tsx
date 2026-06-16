"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export type HomeDesign = {
  id: number
  name: string
  desc: string
  keywords: string[]
}

const designs: HomeDesign[] = [
  {
    id: 1,
    name: "Mobile App UI",
    desc: "Clean dashboard design for fintech app",
    keywords: ["UI/UX", "Figma"],
  },
  {
    id: 2,
    name: "Brand Identity",
    desc: "Logo and brand system for startup",
    keywords: ["Branding", "Logo"],
  },
]

export default function DesignsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <h2 className="text-2xl font-semibold mb-1">Designs</h2>
      <p className="text-xs text-muted-foreground mb-6">My Best Designs!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5 w-full max-w-3xl mx-auto">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <div className="bg-muted/60 border border-border/60 h-56 relative group overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-foreground/30 text-xl font-medium">Design Preview</span>
              </div>
            </div>

            <div className="p-5 text-foreground">
              <h3 className="font-semibold text-lg mb-1">{design.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{design.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {design.keywords.map((keyword) => (
                  <span key={keyword} className="px-2 py-0.5 bg-card border border-border text-card-foreground text-xs rounded">
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-5">
                <button className="flex-1 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
                  View <ExternalLink size={12} />
                </button>
                <button className="flex-1 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
                  Source <Github size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link
        href="/designs"
        className="btn-grad mx-auto block max-w-[280px] w-full sm:w-auto h-[44px] px-4 py-2 rounded-xl text-sm font-medium transition hover:opacity-95"
        aria-label="Load more designs"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-full items-center justify-center"
        >
          Load More Designs
        </motion.span>
      </Link>
    </motion.section>
  )
}

