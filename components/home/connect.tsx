"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function ConnectSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-3xl font-semibold mb-10">{"Let's Collaborate"}</h2>

      <div className="flex justify-center gap-8">
        <Linkedin
          size={32}
          className="cursor-pointer transition text-foreground/90 hover:text-primary"
          aria-label="LinkedIn"
        />
        <Github
          size={32}
          className="cursor-pointer transition text-foreground/90 hover:text-primary"
          aria-label="GitHub"
        />
        <Mail
          size={32}
          className="cursor-pointer transition text-foreground/90 hover:text-primary"
          aria-label="Email"
        />
        <Twitter
          size={32}
          className="cursor-pointer transition text-foreground/90 hover:text-primary"
          aria-label="Twitter"
        />
      </div>
    </motion.section>
  )
}

