"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import FloatingBottomNav from "@/components/FloatingBottomNav"
import Link from "next/link"
import { useState } from "react"

// SCALABLE PROJECTS ARRAY - Add new projects here
const projectsData = [
  {
    id: 1,
    name: "Latur Tahari",
    date: "Sept 2025",
    description: "Restaurant website with Framer Motion animations, cart system and Razorpay integration",
    mediaType: "video" as const,
    mediaSrc: "/projects/latur-tahari.mp4",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "https://laturtahari.vercel.app",
    githubUrl: "https://github.com/prarthana/latur-tahari",
    category: "Web Apps",
    featured: true
  },
  {
    id: 2,
    name: "Portfolio v2",
    date: "Aug 2025",
    description: "Bento grid portfolio with smooth animations and dark theme",
    mediaType: "image" as const,
    mediaSrc: "/projects/portfolio.jpg",
    tags: ["React", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Apps",
    featured: false
  },
  // ADD MORE PROJECTS HERE - Just copy this object and change values
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Web Apps", "UI/UX", "Full Stack"]
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter)

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">Projects</h1>
          <p className="text-gray-400 text-lg">A journey of experimentation and growth</p>
        </motion.div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID - 2 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              {/* MEDIA SECTION - BLACK TOP */}
              <div className="bg-zinc-900 h-56 relative group overflow-hidden">
                {project.mediaType === "video" ? (
                  <video
                    src={project.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.mediaSrc}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Fallback text if media fails */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/30 text-xl font-medium">Video</span>
                </div>
              </div>

              {/* CONTENT SECTION - WHITE BOTTOM */}
              <div className="p-5 text-black">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{project.date}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-black text-white text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2">
                  <Link href={project.liveUrl} target="_blank" className="flex-1">
                    <button className="w-full py-2 bg-black text-white text-xs font-medium rounded-lg hover:bg-zinc-800 transition flex items-center justify-center gap-1.5">
                      Website <ExternalLink size={12} />
                    </button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank" className="flex-1">
                    <button className="w-full py-2 bg-black text-white text-xs font-medium rounded-lg hover:bg-zinc-800 transition flex items-center justify-center gap-1.5">
                      Source <Github size={12} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BACK TO HOME */}
        <Link href="/">
          <button className="mx-auto flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 text-sm rounded-full hover:bg-white/10 transition">
            <ArrowLeft size={16} /> Back to Home
          </button>
        </Link>
      </div>

      <FloatingBottomNav currentPath="/projects" />
    </main>
  )
}
