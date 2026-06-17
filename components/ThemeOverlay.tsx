"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ThemeOverlayProps {
  isAnimating: boolean;
}

export default function ThemeOverlay({
  isAnimating,
}: ThemeOverlayProps) {
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed inset-0 z-[9999] bg-black pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}