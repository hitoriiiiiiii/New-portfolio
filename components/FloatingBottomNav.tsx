"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Folder, Home, Palette } from "lucide-react"


const navItems = [
  { href: "/", Icon: Home, label: "Home" },
  { href: "/projects", Icon: Folder, label: "Projects" },
  { href: "/designs", Icon: Palette, label: "Designs" },
  { href: "/contact", Icon: FileText, label: "Contact" },
] as const

export default function FloatingBottomNav() {
  const pathname = usePathname() || ""

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-x2 border border-border/60 rounded-2xl p-1.5 flex gap-1 z-50 shadow-2xl">
      {navItems.map(({ href, Icon, label }) => {
        const isActive = pathname === href

        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className={`p-3 rounded-xl transition ${
              isActive ? "bg-foreground/10" : "hover:bg-foreground/10"
            }`}
          >
            <Icon size={20} strokeWidth={2} className="text-foreground" />
          </Link>
        )
      })}
    </div>
  )
}
