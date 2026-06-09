"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import FloatingBottomNav from "@/components/FloatingBottomNav"
import Link from "next/link"
import { useState } from "react"

const projectsData = [
  {
    id: 1,
    name: "Latur Tahari",
    date: "Sept 2025",
    description: "Restaurant website with Framer Motion animations, cart system and Razorpay integration",
    mediaType: "video" as const,
    mediaSrc: "/projects/latur-tahari.mp4",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "https://laturtahari.vercel.app",
    githubUrl: "https://github.com/prarthana/latur-tahari",
    category: "Web Apps",
    featured: true,
  },
  {
    id: 2,
    name: "Portfolio v2",
    date: "Aug 2025",
    description: "Bento grid portfolio with smooth animations and dark theme",
    mediaType: "image" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["React", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Apps",
    featured: false,
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Web Apps", "UI/UX", "Full Stack"]

  const filteredProjects =
    filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter)

  return (
    <main className="bg-background min-h-screen text-foreground">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Projects</h1>
          <p className="text-muted-foreground text-lg">A journey of experimentation and growth</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={
                `inline-flex items-center justify-center min-w-[94px] px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 border border-border text-muted-foreground hover:bg-card"
                }`
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-3xl mx-auto">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <div className="bg-muted/60 border border-border/60 h-56 relative group overflow-hidden">

                {project.mediaType === "video" ? (
                  <video
                    src={project.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.mediaSrc}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-muted-foreground/60 text-xl font-medium">
                    {project.mediaType === "video" ? "Video" : "Image"}
                  </span>
                </div>
              </div>

              <div className="p-5 text-foreground">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{project.date}</p>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-card border border-border text-card-foreground text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link href={project.liveUrl} target="_blank" className="flex-1">
                    <button className="w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
                      Website <ExternalLink size={12} />
                    </button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank" className="flex-1">
                    <button className="w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
                      Source <Github size={12} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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

      <FloatingBottomNav currentPath="/projects" />
    </main>
  )
}

