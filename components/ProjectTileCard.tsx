"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import React from "react"

export type ProjectTileCardProps = {
  id: number | string
  name: string
  date: string
  desc: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  mediaType: "image" | "video"
  mediaSrc: string
}

export default function ProjectTileCard({
  id,
  name,
  date,
  desc,
  tags,
  liveUrl,
  githubUrl,
  mediaType,
  mediaSrc,
}: ProjectTileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}

      transition={{ duration: 0.22 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border"
    >
      <div className="bg-muted/60 border border-border/60 h-56 relative group overflow-hidden">
        {mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={mediaSrc} alt={name} className="w-full h-full object-cover" />
        )}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-foreground/30 text-xl font-medium">Project Preview</span>
        </div>
      </div>

      <div className="p-5 text-foreground">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{date}</p>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">{desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-card border border-border text-card-foreground text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Link href={liveUrl} target="_blank" rel="noreferrer" className="flex-1">
            <span className="block w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
              View <ExternalLink size={12} />
            </span>
          </Link>

          <Link href={githubUrl} target="_blank" rel="noreferrer" className="flex-1">
            <span className="block w-full py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5">
              Source <Github size={12} />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

