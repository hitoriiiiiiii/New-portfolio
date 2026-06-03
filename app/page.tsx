"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ExternalLink, Atom, Code, FileCode, Server, ServerCog, Box, Terminal, Database, DatabaseBackup, DatabaseZap, GitBranch, Inbox, Figma } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FloatingBottomNav from "@/components/FloatingBottomNav"

export default function Portfolio() {
  const skills = [
    { label: "React", Icon: Github },
    { label: "Next.js", Icon: Linkedin },
    { label: "TypeScript", Icon: Mail },
    { label: "JavaScript", Icon: Twitter },
    { label: "Node.js", Icon: ExternalLink },
    { label: "Express.js", Icon: Github },
    { label: "MongoDB", Icon: Linkedin },
    { label: "Supabase", Icon: Mail },
    { label: "PostgreSQL", Icon: Twitter },
    { label: "Redis", Icon: ExternalLink },
    { label: "Go", Icon: Github },
    { label: "REST APIs", Icon: Linkedin },
    { label: "Tools", Icon: Mail }
  ]

  const projects = [
    {
      id: 1, name: "Latur Tahari", date: "Sept 2025",
      desc: "Restaurant website with Framer Motion animations, cart & Razorpay integration",
      tags: ["Next.js", "Framer Motion"], live: "#", github: "#"
    },
    {
      id: 2, name: "Portfolio v2", date: "Aug 2025",
      desc: "This bento grid portfolio with clean animations",
      tags: ["React", "Tailwind"], live: "#", github: "#"
    }
  ]

  const designs = [
    { id: 1, name: "Mobile App UI", desc: "Clean dashboard design for fintech app", keywords: ["UI/UX", "Figma"] },
    { id: 2, name: "Brand Identity", desc: "Logo and brand system for startup", keywords: ["Branding", "Logo"] }
  ]

  const iconMap: Record<string, any> = {
    "React.js": Atom,
    "Next.js": Code,
    "TypeScript": FileCode,
    "JavaScript": Code,
    "Node.js": Server,
    "Express.js": ServerCog,
    "Go": Box,
    "REST APIs": Terminal,
    "MongoDB": Database,
    "Supabase": DatabaseBackup,
    "PostgreSQL": Database,
    "Redis": DatabaseZap,
    "Git": GitBranch,
    "Postman": Inbox,
    "Cursor": Inbox,
    "Figma": Figma,
  }

  return (
    <main className="bg-black min-h-screen text-white relative overflow-hidden">


      <div className="max-w-2xl mx-auto px-6 pt-20 pb-32">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-semibold">Hi, I am</h1>
            <div className="relative w-[78px] h-[78px] rounded-[19.2654px] overflow-hidden border border-white/90 transform -rotate-[10deg]">
              <Image
                src="/hitori.jpg"
                alt="Prarthana"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold">Prarthana Gade!</h1>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <p className="text-2xl md:text-3xl text-white">{"I'm Software Developer &"}</p>
            <p className="text-2xl md:text-3xl text-white">Designer</p>
            <span
              className="px-5 py-2 bg-transparent border border-[#FB9DE7] text-pink-300 text-sm font-medium rounded-[24.0817px]"
            >
              Open to work
            </span>
          </div>

          <div className="flex justify-center gap-3">
            <button className="px-5 py-2 bg-white text-black font-medium text-sm rounded-full hover:scale-105 transition-transform">
              View  Resume
            </button>
            <button
              className="px-5 py-2 flex items-center justify-center bg-transparent font-medium text-sm rounded-[24.0817px] hover:opacity-95 transition"
              style={{
                background: "linear-gradient(95.56deg, #FE94DA 8.35%, #F7D5EC 71.01%)",
              }}
            >
              Get In Touch
            </button>
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            {"Hi, I'm from Pune a Developer & Designer skilled in coding and crafting modern, responsive, and user-friendly web apps. Proficient in React, Next.js, TypeScript, and Node.js. I love blending clean code with creative UI/UX designs. Open to "}
            <span className="text-pink-400 font-medium">internships</span>
            {" and "}
            <span className="text-pink-400 font-medium">freelance projects</span>
            {" to build impactful digital experiences."}
          </p>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-1 text-center">Skills</h2>
          <p className="text-xs text-gray-500 mb-6 text-center">Technologies & Tools I use for building!</p>

          <div className="max-w-2xl mx-auto space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-0"
            >
              <h3 className="text-sm font-semibold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "JavaScript"
                ].map((label) => {
                  const Icon = iconMap[label] || Code
                  return (
                    <div key={label} className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-2 py-1 min-w-[100px] h-[36px] text-[12px] font-semibold leading-[18px] text-[#171717]">
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-0"
            >
              <h3 className="text-sm font-semibold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Node.js",
                  "Express.js",
                  "Go",
                  "REST APIs"
                ].map((label) => {
                  const Icon = iconMap[label] || Server
                  return (
                    <div key={label} className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-2 py-1 min-w-[100px] h-[36px] text-[12px] font-semibold leading-[18px] text-[#171717]">
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-0"
            >
              <h3 className="text-sm font-semibold mb-2">Database</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "MongoDB",
                  "Supabase",
                  "PostgreSQL",
                  "Redis"
                ].map((label) => {
                  const Icon = iconMap[label] || Database
                  return (
                    <div key={label} className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-2 py-1 min-w-[100px] h-[36px] text-[12px] font-semibold leading-[18px] text-[#171717]">
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-0"
            >
              <h3 className="text-sm font-semibold mb-2">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Git",
                  "Postman",
                  "Cursor"
                ].map((label) => {
                  const Icon = iconMap[label] || GitBranch
                  return (
                    <div key={label} className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-2 py-1 min-w-[100px] h-[36px] text-[12px] font-semibold leading-[18px] text-[#171717]">
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-0"
            >
              <h3 className="text-sm font-semibold mb-2">Design</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "Canva"
                ].map((label) => {
                  const Icon = iconMap[label] || Figma
                  return (
                    <div key={label} className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-2 py-1 min-w-[100px] h-[36px] text-[12px] font-semibold leading-[18px] text-[#171717]">
                      <Icon size={16} />
                      <span>{label}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-1">Projects</h2>
          <p className="text-xs text-gray-500 mb-6">My Best Projects!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 max-w-lg mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <div className="bg-zinc-900 h-44 flex items-center justify-center">
                  <span className="text-white/40 text-lg">Video</span>
                </div>
                <div className="p-4 text-black">
                  <h3 className="font-semibold text-base mb-0.5">{project.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{project.date}</p>
                  <p className="text-xs text-gray-700 mb-3 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-black text-white text-[10px] rounded">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1.5 bg-black text-white text-xs rounded-lg hover:bg-zinc-800 transition flex items-center justify-center gap-1">
                      Website <ExternalLink size={12} />
                    </button>
                    <button className="flex-1 py-1.5 bg-black text-white text-xs rounded-lg hover:bg-zinc-800 transition flex items-center justify-center gap-1">
                      Source <Github size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mx-auto block px-5 py-2 bg-white/5 border border-white/10 text-sm rounded-full transition-shadow shadow-sm hover:shadow-md hover:bg-pink-500/20 hover:border-pink-500/50"
              aria-label="Load more projects"
            >
              Load More Projects
            </motion.button>
          </Link>
        </motion.section>

        {/* DESIGNS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-2xl font-semibold mb-1">Designs</h2>
          <p className="text-xs text-gray-500 mb-6">My Best Designs!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 max-w-lg mx-auto">
            {designs.map((design) => (
              <motion.div
                key={design.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <div className="bg-zinc-900 h-44 flex items-center justify-center">
                  <span className="text-white/40 text-lg">Design Preview</span>
                </div>
                <div className="p-4 text-black">
                  <h3 className="font-semibold text-base mb-2">{design.name}</h3>
                  <p className="text-xs text-gray-700 mb-3 line-clamp-2">{design.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {design.keywords.map(keyword => (
                      <span key={keyword} className="px-2 py-0.5 bg-black text-white text-[10px] rounded">{keyword}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/designs">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mx-auto block px-5 py-2 bg-white/5 border border-white/10 text-sm rounded-full transition-shadow shadow-sm hover:shadow-md hover:bg-purple-500/20 hover:border-purple-500/50"
              aria-label="Load more designs"
            >
              Load More Designs
            </motion.button>
          </Link>
        </motion.section>

        {/* COLLABORATE */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-10">{"Let's Collaborate"}</h2>
          <div className="flex justify-center gap-8">
            <Linkedin size={32} className="hover:text-pink-400 cursor-pointer transition" />
            <Github size={32} className="hover:text-pink-400 cursor-pointer transition" />
            <Mail size={32} className="hover:text-pink-400 cursor-pointer transition" />
            <Twitter size={32} className="hover:text-pink-400 cursor-pointer transition" />
          </div>
        </motion.section>
      </div>

      <FloatingBottomNav currentPath="/" />
    </main>
  )
}
