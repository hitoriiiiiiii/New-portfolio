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
    <main className="bg-background min-h-screen text-foreground relative overflow-hidden">




      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 pt-20 pb-32">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-semibold">Hi, I am</h1>
            <div className="relative w-[78px] h-[78px] rounded-[19.2654px] overflow-hidden border border-foreground/90 transform -rotate-[10deg]">
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
            <p className="text-2xl md:text-3xl text-foreground">{"I'm Software Developer &"}</p>
            <p className="text-2xl md:text-3xl text-foreground">Designer</p>
            <span
              className="px-5 py-2 bg-transparent border border-[#FB9DE7] text-pink-300 text-sm font-medium rounded-[24.0817px]"
            >
              Open to work
            </span>
          </div>

          <div className="flex justify-center gap-3">
            <button className="px-5 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:scale-105 transition-transform">
              View  Resume
            </button>
            <button
              className="px-5 py-2 flex items-center justify-center text-foreground bg-transparent font-medium text-sm rounded-[24.0817px] hover:opacity-95 transition"

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
        <div className="mb-16 px-2">
          <h2 className="text-2xl font-semibold mb-1 text-center">Skills</h2>
            <p className="text-xs text-muted-foreground mb-6 text-center">Technologies & Tools I use for building!</p>

          {/* Animated Skill Pills - no wrapper background/section */}
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Supabase",
              "PostgreSQL",
              "Redis",
              "REST APIs",
              "Go",
              "Git",
              "Postman",
              "Cursor",
              "Figma",
              "Next.js"
            ].map((skill, i) => {
              const Icon = iconMap[skill] || Code
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  whileHover={{
                    scale: 1.06,
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 rounded-lg px-4 py-2.5 bg-card border border-border cursor-pointer transition-all duration-300 md:px-4 md:py-2.5 md:text-sm"
                >
                  <Icon
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-300 md:text-sm sm:text-xs">
                    {skill}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* PROJECTS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-1">Projects</h2>
          <p className="text-xs text-muted-foreground mb-6">My Best Projects!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 w-full max-w-full mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl overflow-hidden"
              >

                <div className="bg-muted/60 border border-border/60 h-44 flex items-center justify-center">
                  <span className="text-foreground/40 text-lg">Video</span>
                </div>

                <div className="p-4 text-foreground">

                  <h3 className="font-semibold text-base mb-0.5">{project.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{project.date}</p>
                  <p className="text-xs text-gray-700 mb-3 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-card text-foreground text-[10px] rounded">
                        {tag}
                      </span>
                    ))}

                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1.5 bg-background text-foreground text-xs rounded-lg hover:bg-accent transition flex items-center justify-center gap-1">
                      Website <ExternalLink size={12} />
                    </button>
                    <button className="flex-1 py-1.5 bg-background text-foreground text-xs rounded-lg hover:bg-accent transition flex items-center justify-center gap-1">
                      Source <Github size={12} />
                    </button>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/projects">
<motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mx-auto block max-w-[280px] w-full sm:w-auto h-[44px] px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium transition hover:opacity-95"
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
          <p className="text-xs text-muted-foreground mb-6">My Best Designs!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 w-full max-w-full mx-auto">
            {designs.map((design) => (
                <motion.div
                  key={design.id}
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl overflow-hidden"
                >

                <div className="bg-background h-44 flex items-center justify-center">
                  <span className="text-foreground/40 text-lg">Design Preview</span>
                </div>
                <div className="p-4 text-foreground">

                  <h3 className="font-semibold text-base mb-2">{design.name}</h3>
                  <p className="text-xs text-gray-700 mb-3 line-clamp-2">{design.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {design.keywords.map(keyword => (
                      <span
                        key={keyword}
                        className="px-2 py-0.5 bg-card text-foreground text-[10px] rounded"
                      >
                        {keyword}
                      </span>
                    ))}

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/designs">
<motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mx-auto block max-w-[280px] w-full sm:w-auto h-[44px] px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium transition hover:opacity-95"
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
