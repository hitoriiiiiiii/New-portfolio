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
  },
  {
    icon: FaGithub,
    href: "https://github.com/hitoriiiiiiii",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/i_am_osseumm",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/PanicCoder",
    label: "X",
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
            <motion.div
              key={social.label}
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
          )
        })}
      </div>
    </motion.section>
  )
}