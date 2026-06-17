"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function FlipAvatar() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {/* Avatar in Hero Section */}
      <div className="relative w-[75px] h-[75px] md:w-[75px] md:h-[75px] [perspective:1000px]">
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Front - real.png default */}
          <div className="absolute inset-0 [backface-visibility] rounded-[19.2654px] overflow-hidden border border-foreground/90 transform -rotate-[10deg]">
            <Image
              src="/real.png"
              alt="Prarthana real"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Back - hitori.jpg */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[19.2654px] overflow-hidden border border-foreground/90 transform -rotate-[10deg]">
            <Image
              src="/hitori.jpg"
              alt="Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Flip Button */}
      <div className="fixed bottom-4 right-4 z-50" style={{ WebkitTapHighlightColor: "transparent" }}>
        <svg
          className="absolute -top-10 -left-10 w-28 h-24 pointer-events-none block md:block"
          viewBox="0 0 160 128"
          aria-hidden="true"
        >
          <motion.path
            d="M 155 110 C 120 40 60 160 20 55"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            strokeLinecap="round"
            className="text-muted-foreground"
          />
          <motion.path
            d="M 35 40 C 70 120 130 0 155 70"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            strokeLinecap="round"
            className="text-muted-foreground opacity-90"
          />
        </svg>

        <motion.button
          onClick={() => setIsFlipped(!isFlipped)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-card border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:shadow-lg transition-all shadow-md"
        >
          {isFlipped ? "Back" : "Flip It"}
        </motion.button>
      </div>
    </>
  );
}

