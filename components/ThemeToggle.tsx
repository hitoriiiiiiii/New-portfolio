"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-card border border-border shadow-md"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  const handleThemeToggle = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setTheme(isDark ? "light" : "dark");
    }, 250);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <>
      {/* Theme Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="fixed inset-0 z-[9998] pointer-events-none bg-gradient-to-b from-[#FB9DE7] via-[#FB9DE7]/70 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* Theme Toggle Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleThemeToggle}
        className="fixed top-4 right-4 z-[9999] w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent shadow-md hover:shadow-lg transition-colors duration-300"
        aria-label="Toggle theme"
        type="button"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
}