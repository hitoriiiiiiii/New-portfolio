"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import FloatingBottomNav from "@/components/FloatingBottomNav"
import ProjectTileCard from "@/components/ProjectTileCard"

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
          {filteredProjects.map((project) => (
            <ProjectTileCard
              key={project.id}
              id={project.id}
              name={project.name}
              date={project.date}
              desc={project.description}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              mediaType={project.mediaType}
              mediaSrc={project.mediaSrc}
            />
          ))}
        </div>



      </div>

      <FloatingBottomNav currentPath="/projects" />
    </main>
  )
}

