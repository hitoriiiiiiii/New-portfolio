"use client"

import Link from "next/link"
import { FileText, Folder, Home, Palette } from "lucide-react"

export type FloatingBottomNavProps = {
  /** Pathname to highlight (e.g. "/projects", "/designs"). */
  currentPath?: string
}

const navItems = [
  { href: "/", Icon: Home, label: "Home" },
  { href: "/projects", Icon: Folder, label: "Projects" },
  { href: "/designs", Icon: Palette, label: "Designs" },
  { href: "/contact", Icon: FileText, label: "Contact" },
] as const


export default function FloatingBottomNav({ currentPath }: FloatingBottomNavProps) {
  const active = currentPath ?? ""

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-xl border border-border/60 rounded-2xl p-1.5 flex gap-1 z-50 shadow-2xl">
      {navItems.map(({ href, Icon, label }) => {
        const isActive = active === href
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className={`p-3 rounded-xl transition ${
              isActive ? "bg-foreground/10" : "hover:bg-foreground/10 hover:text-pink-300"
            }`}
          >
            <Icon size={20} strokeWidth={1.5} className="text-foreground" />
          </Link>
        )
      })}
    </div>
  )
}

