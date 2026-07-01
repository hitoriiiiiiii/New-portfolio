"use client"

import type { Metadata } from "next";

import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// metadata moved to app/designs/metadata.ts (server only)





import FloatingBottomNav from "@/components/FloatingBottomNav"

type MediaType = "image" | "video"

type DesignItem = {
  id: number
  name: string
  description: string
  date: string
  keywords: string[]
  liveUrl: string
  githubUrl: string
  category: string
  featured: boolean
  mediaType: MediaType
  mediaSrc: string
}

const designsData: DesignItem[] = [
  {
    id: 1,
    name: "Mobile App UI",
    description: "Clean dashboard design for fintech app",
    date: "Sept 2025",
    keywords: ["UI/UX", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    category: "UI/UX",
    featured: true,
    mediaType: "image",
    mediaSrc: "/projects/design-mobile.jpg",
  },
  {
    id: 2,
    name: "Brand Identity",
    description: "Logo and brand system for startup",
    date: "Aug 2025",
    keywords: ["Branding", "Logo"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Branding",
    featured: false,
    mediaType: "image",
    mediaSrc: "/projects/design-brand.jpg",
  },
]

export default function DesignsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "UI/UX", "Branding"]

  const filtered = filter === "All" ? designsData : designsData.filter((d) => d.category === filter)

  return (
    <main className="bg-background min-h-screen text-foreground">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Designs</h1>
          <p className="text-muted-foreground text-lg">A curated set of UI/UX and brand work</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`inline-flex items-center justify-center min-w-[94px] px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 border border-border text-muted-foreground hover:bg-card/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`filter:${filter}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-3xl mx-auto"
          >
            {filtered.map((design, i) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: i * 0.04 }}
                whileHover={{ y: -8 }}
                layout
                className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
              >
                <div className="bg-muted/60 border border-border/60 h-56 relative group overflow-hidden">
                  {design.mediaType === "video" ? (
                    <video
                      src={design.mediaSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={design.mediaSrc}
                      alt={design.name}
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-foreground/30 text-xl font-medium">Project Preview</span>
                  </div>
                </div>

                <div className="p-5 text-foreground">
                  <h3 className="font-semibold text-lg mb-1">{design.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{design.date}</p>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                    {design.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {design.keywords.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-card border border-border text-card-foreground text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={design.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <span className="block w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
                        View <ExternalLink size={12} />
                      </span>
                    </Link>


                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <FloatingBottomNav currentPath="/designs" />
    </main>
  )
}

