"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import ProjectTileCard from "@/components/ProjectTileCard"

export type HomeProject = {
  id: number
  name: string
  date: string
  desc: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  mediaType: "image" | "video"
  mediaSrc: string
}

const projects: HomeProject[] = [
  {
    id: 1,
    name: "Latur Tahari",
    date: "Sept 2025",
    desc: "Restaurant website with Framer Motion animations, cart & Razorpay integration",
    tags: ["Next.js", "Framer Motion"],
    liveUrl: "https://laturtahari.vercel.app",
    githubUrl: "https://github.com/prarthana/latur-tahari",
    mediaType: "video",
    mediaSrc: "/projects/latur-tahari.mp4",
  },
  {
    id: 2,
    name: "Portfolio v2",
    date: "Aug 2025",
    desc: "This bento grid portfolio with clean animations",
    tags: ["React", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    mediaType: "image",
    mediaSrc: "/projects/portfolio.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-2xl font-semibold mb-1">Projects</h2>
      <p className="text-xs text-muted-foreground mb-6">My Best Projects!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5 w-full max-w-3xl mx-auto">
        {projects.map((project) => (
          <ProjectTileCard
            key={project.id}
            id={project.id}
            name={project.name}
            date={project.date}
            desc={project.desc}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            mediaType={project.mediaType}
            mediaSrc={project.mediaSrc}
          />
        ))}
      </div>

      <Link
        href="/projects"
        className="btn-grad mx-auto block max-w-[280px] w-full sm:w-auto h-[44px] px-4 py-2 rounded-xl text-sm font-medium transition hover:opacity-95"
        aria-label="View All Projects"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-full items-center justify-center"
        >
          View All Projects
        </motion.span>
      </Link>
    </motion.section>
  )
}


