"use client";

import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/Scroll-progress";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden">
      <div ref={scrollRef} className="min-h-screen overflow-auto">
        <ScrollProgress
          containerRef={scrollRef}
          direction="horizontal"
          className="pointer-events-none z-[60] h-1 bg-[#0090FF]"
        />

        <div className="relative z-10">{children}</div>
      </div>

      <ThemeToggle />
    </div>
  );
}