"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiPostgresql,
  SiRedis,
} from "react-icons/si"

const iconMap: Record<string, React.ComponentType<any>> = {
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": FaNodeJs,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Git: FaGitAlt,
  Figma: FaFigma,

  // Fallbacks

  Go: Code2,
}

const skills = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Docker",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Redis",
  "Go",
  "Git",
  "Figma",
  "Next.js",
]

export default function SkillsSection() {
  return (
    <div className="mb-16 px-2">
      <h2 className="text-2xl font-semibold mb-1 text-center">
        Skills
      </h2>

      <p className="text-xs text-muted-foreground mb-6 text-center">
        Technologies & Tools I use for building!
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill] || Code2

          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
              }}
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-2.5 py-2 sm:px-4 sm:py-2.5 bg-card border border-border cursor-pointer transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                <Icon className="w-5 h-5" />
              </span>

              <span className="text-sm font-medium text-foreground">
                {skill}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}