"use client";

import { useEffect, useRef } from "react";

export default function FloatingMascot() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 200;
    let y = 200;

    let vx = 2;
    let vy = 1.5;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // track cursor
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // base floating motion
      x += vx;
      y += vy;

      // bounce edges
      if (x <= 0 || x >= width - 80) vx *= -1;
      if (y <= 0 || y >= height - 80) vy *= -1;

      // 🧲 cursor attraction (soft pull)
      const dx = mouseX - x;
      const dy = mouseY - y;

      x += dx * 0.01; // attraction strength
      y += dy * 0.01;

      el.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 50,
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      <img
        src="/mascot.png"
        alt="floating mascot"
        style={{
          width: 30,
          height: 40,
        }}
      />
    </div>
  );
}