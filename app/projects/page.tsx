"use client"

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { useState } from "react";

import FloatingBottomNav from "@/components/FloatingBottomNav";
import ProjectTileCard from "@/components/ProjectTileCard";

// metadata moved to app/projects/metadata.ts (server only)





const projectsData = [
  {
    id: 1,
    name: "Ticket Booking",
    date: "Mar 2026",
    description: "Over engineering a project to book tickets with 50K active users . To deep dive into system designs",
    mediaType: "image" as const,
    mediaSrc: "/projects/latur-tahari.mp4",
    tags: ["System-Design", "Caching", "CQRS","Go"],
    githubUrl: "https://github.com/hitoriiiiiiii/Ticket-Booking-.git",
    liveUrl: " ",
    category: "Backend",
    featured: true,
  },
  {
    id: 2,
    name: "Teams-CLI",
    date: "Jan 2026",
    description: "Teams-CLI is a command-line tool for managing teams and GitHub repositories, with repository analytics and Prisma-powered database support.",
    mediaType: "image" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["Developers-tool", "Prisma", "GitHub-API"],
    liveUrl: "https://www.npmjs.com/package/@prarthana25/teams-cli",
    githubUrl: "https://github.com/hitoriiiiiiii/Teams-Cli.git",
    category: "Backend",
    featured: false,
  },
  {
    id: 3,
    name: "Hotel-Website",
    date: "Jun 2026",
    description: "Modern restaurant website with a responsive design, interactive menu showcase, smooth animations, and an engaging user experience across all devices.",
    mediaType: "video" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["Frontend", "Next.js", "Tailwind"],
    liveUrl: "https://latur-tahari-jet.vercel.app/",
    githubUrl: "https://github.com/hitoriiiiiiii/Latur-Tahari.git",
    category: "Frontend",
    featured: true,
  },
  {
    id: 4,
    name: "Tele-Cast",
    date: "Oct 2025",
    description: "Realtime Audio Learning Platform from Ai . Jus build companions on any topic you want and for any period of time.",
    mediaType: "video" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["Nextjs", "Vapi", "Supabase"],
    liveUrl: "https://tele-cast-zoia.vercel.app/",
    githubUrl: "https://github.com/hitoriiiiiiii/TeleCast.git",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 5,
    name: "Teams-CLI",
    date: "Jan 2026",
    description: "Teams-CLI is a command-line tool for managing teams and GitHub repositories, with repository analytics and Prisma-powered database support.",
    mediaType: "image" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["Developers-tool", "Prisma", "GitHub-API"],
    liveUrl: "https://www.npmjs.com/package/@prarthana25/teams-cli",
    githubUrl: "https://github.com/hitoriiiiiiii/Teams-Cli.git",
    category: "Backend",
    featured: false,
  },
  {
    id: 6,
    name: "Teams-CLI",
    date: "Jan 2026",
    description: "Teams-CLI is a command-line tool for managing teams and GitHub repositories, with repository analytics and Prisma-powered database support.",
    mediaType: "image" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["Developers-tool", "Prisma", "GitHub-API"],
    liveUrl: "https://www.npmjs.com/package/@prarthana25/teams-cli",
    githubUrl: "https://github.com/hitoriiiiiiii/Teams-Cli.git",
    category: "Backend",
    featured: false,
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Backend", "Frontend", "Full Stack"]

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

