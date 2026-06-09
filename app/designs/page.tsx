"use client"
import { AnimatePresence, motion } from "framer-motion"

import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
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
    mediaSrc: "/projects/design-mobile.jpg"
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
    mediaType: "image" as const,
    mediaSrc: "/projects/design-brand.jpg"
  }
]

export default function DesignsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "UI/UX", "Branding"]

  const filtered = filter === "All" ? designsData : designsData.filter(d => d.category === filter)

  return (
    <main className="bg-background min-h-screen text-foreground">

      <div className="max-w-full w-full mx-auto px-4 sm:px-6 pt-24 pb-32">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Designs</h1>
          <p className="text-gray-400 text-lg">A curated set of UI/UX and brand work</p>
        </motion.div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`inline-flex items-center justify-center min-w-[94px] px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DESIGNS GRID - 2 COLUMNS */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`filter:${filter}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-3xl mx-auto"
          >
            {filtered.map((design) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl"
              >

                {/* MEDIA SECTION */}
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
                    <img src={design.mediaSrc} alt={design.name} className="w-full h-full object-cover" />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white/30 text-xl font-medium">
                      {design.mediaType === "video" ? "Video" : "Image"}
                    </span>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-5 text-black">
                  <h3 className="font-semibold text-lg mb-1">{design.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{design.date}</p>
                  <p className="text-sm text-gray-700 mb-3 line-clamp-2 leading-relaxed">
                    {design.description}
                  </p>

                  {/* KEYWORDS */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {design.keywords.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-black text-white text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2">
                    <Link href={design.liveUrl} target="_blank" className="flex-1">
                      <button className="w-full py-2 bg-black text-white text-xs font-medium rounded-lg hover:bg-zinc-800 transition flex items-center justify-center gap-1.5">
                        View <ExternalLink size={12} />
                      </button>
                    </Link>
                    <Link href={design.githubUrl} target="_blank" className="flex-1">
                      <button className="w-full py-2 bg-black text-white text-xs font-medium rounded-lg hover:bg-zinc-800 transition flex items-center justify-center gap-1.5">
                        Source <Github size={12} />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* BACK TO HOME */}
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-2 whitespace-nowrap min-w-[300px] max-w-[360px] h-[44px] px-5 bg-primary text-primary-foreground rounded-xl text-sm font-medium transition hover:opacity-95 shadow-xl z-50"
          >
            <ArrowLeft size={16} /> Back to Home
          </motion.button>
        </Link>

      </div>

      <FloatingBottomNav currentPath="/designs" />
    </main>
  )
}





