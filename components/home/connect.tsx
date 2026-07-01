"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6"

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/prarthana-gade-400040256/",
    label: "LinkedIn",
    tooltip: "@prarthana-gade-400040256",
  },
  {
    icon: FaGithub,
    href: "https://github.com/hitoriiiiiiii",
    label: "GitHub",
    tooltip: "@hitoriiiiiiii",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/i_am_osseumm",
    label: "Instagram",
    tooltip: "@i_am_osseumm",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/PanicCoder",
    label: "X",
    tooltip: "@PanicCoder",
  },
]

export default function ConnectSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Let's Connect
      </h2>

      <p className="mt-3 text-muted-foreground max-w-md mx-auto">
        Feel free to connect with me on social platforms and explore my work.
      </p>

      <div className="mt-8 inline-flex items-center gap-3">
        {socials.map((social) => {
          const Icon = social.icon

          return (
            <div key={social.label} className="group relative">
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex
                    h-12
                    w-12
                    sm:h-14
                    sm:w-14
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-border/50
                    bg-background/80
                    backdrop-blur-md
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:shadow-xl
                  "
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </Link>
              </motion.div>

              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border/70 bg-background/95 px-2.5 py-1 text-xs font-medium text-foreground shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-1">
                {social.tooltip}
              </span>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}