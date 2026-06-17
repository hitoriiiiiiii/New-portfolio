"use client"

import { motion } from "framer-motion"

export default function QuoteSection() {
  return (
    <section className="relative py-10 px-4 flex justify-center overflow-hidden">
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-32 w-32 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        className="relative max-w-xl w-full"
      >
        {/* Glass Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-lg px-5 py-6">
          
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Shine Effect */}
          <motion.div
            animate={{
              x: ["-120%", "220%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12"
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
              That which does not kill us
              <span className="block text-primary mt-1">
                makes us stronger.
              </span>
            </p>

            <div className="mt-4">
              <p className="text-sm font-medium text-foreground">
                Friedrich Nietzsche
              </p>

              <p className="text-xs text-muted-foreground">
                Philosopher & Writer
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}