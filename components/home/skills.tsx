"use client"

import { motion } from "framer-motion"
import {
  Atom,
  Box,
  Code,
  Database,
  DatabaseBackup,
  DatabaseZap,
  FileCode,
  GitBranch,
  Inbox,
  Server,
  ServerCog,
  Terminal,
  Figma,
} from "lucide-react"

const iconMap: Record<string, any> = {
  "React.js": Code,
  "Next.js": Terminal,
  TypeScript: FileCode,
  JavaScript: Atom,
  "Node.js": Server,
  "Express.js": ServerCog,
  Go: Box,
  "REST APIs": DatabaseZap,
  MongoDB: Database,
  Supabase: DatabaseBackup,
  PostgreSQL: Database,
  Redis: DatabaseZap,
  Git: GitBranch,
  Postman: Inbox,
  Cursor: Inbox,
  Figma: Figma,
}


const skills = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Supabase",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "Go",
  "Git",
  "Postman",
  "Cursor",
  "Figma",
  "Next.js",
]

export default function SkillsSection() {
  return (
    <div className="mb-16 px-2">
      <h2 className="text-2xl font-semibold mb-1 text-center">Skills</h2>
      <p className="text-xs text-muted-foreground mb-6 text-center">Technologies & Tools I use for building!</p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill] || Code
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 rounded-lg px-4 py-2.5 bg-card border border-border cursor-pointer transition-all duration-300 md:px-4 md:py-2.5 md:text-sm"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border border-border group-hover:from-primary/30 group-hover:to-primary/25 transition">
                <Icon className="w-4 h-4 text-foreground/80 group-hover:text-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
              </span>
              <span className="text-sm font-medium text-foreground transition-colors duration-300 md:text-sm sm:text-xs">
                {skill}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

