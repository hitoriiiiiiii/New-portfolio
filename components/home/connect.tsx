"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6"

import { MdEmail } from "react-icons/md"

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/YOUR_LINKEDIN",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/YOUR_GITHUB",
    label: "GitHub",
  },
  {
    icon: MdEmail,
    href: "mailto:your@email.com",
    label: "Email",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/YOUR_USERNAME",
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
      className="text-center py-12"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
        Let's Connect
      </h2>

      <p className="text-sm text-muted-foreground mb-8">
        Feel free to reach out and connect with me.
      </p>

      <div className="flex items-center justify-center gap-4 sm:gap-6">
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
                scale: 0.92,
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="
                  flex
                  h-20 w-20
                  sm:h-14 sm:w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-border/60
                  bg-background/60
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:shadow-[0_0_12px_rgba(251,157,231,0.25)]
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