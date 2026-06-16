"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import FloatingBottomNav from "@/components/FloatingBottomNav"
import DesignsSection from "@/components/home/designs"
import ProjectsSection from "@/components/home/projects"
import SkillsSection from "@/components/home/skills"
import ConnectSection from "@/components/home/connect"



export default function Portfolio() {
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
              <Image src="/hitori.jpg" alt="Prarthana" fill className="object-cover" priority />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold">Prarthana Gade!</h1>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <p className="text-2xl md:text-3xl text-foreground">{"I'm Software Developer &"}</p>
            <p className="text-2xl md:text-3xl text-foreground">Designer</p>
            <span className="px-5 py-2 bg-transparent border border-[#FB9DE7]/80 text-[#FB9DE7] text-sm font-medium rounded-[24.0817px]">
              Open to work
            </span>
          </div>

          <div className="flex justify-center gap-3">
            <button className="px-5 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:scale-105 transition-transform">
              View Resume
            </button>
            <button
              className="px-5 py-2 flex items-center justify-center text-foreground bg-transparent font-medium text-sm rounded-[24.0817px] hover:opacity-95 transition"
              style={{ background: "linear-gradient(95.56deg, #FE94DA 8.35%, #F7D5EC 71.01%)" }}
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
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            {"Hi, I'm from Pune a Developer & Designer skilled in coding and crafting modern, responsive, and user-friendly web apps. Proficient in React, Next.js, TypeScript, and Node.js. I love blending clean code with creative UI/UX designs. Open to "}
            <span className="text-primary font-medium">internships</span>
            {" and "}
            <span className="text-primary font-medium">freelance projects</span>
            {" to build impactful digital experiences."}
          </p>
        </motion.section>

        {/* SKILLS */}
        <SkillsSection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* DESIGNS */}
        <DesignsSection />


        <ConnectSection />

      </div>

      <FloatingBottomNav currentPath="/" />
    </main>
  )
}

