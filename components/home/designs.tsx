"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type HomeDesign = {
  id: number;
  name: string;
  desc: string;
  keywords: string[];
};

const designs: HomeDesign[] = [
  {
    id: 1,
    name: "Mobile App UI",
    desc: "Clean dashboard design for fintech app",
    keywords: ["UI/UX", "Figma"],
  },
  {
    id: 2,
    name: "Brand Identity",
    desc: "Logo and brand system for startup",
    keywords: ["Branding", "Logo"],
  },
];

export default function DesignsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <h2 className="text-2xl font-semibold mb-1">
        Designs
      </h2>

      <p className="text-sm text-muted-foreground mb-6">
        My Best Designs!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="h-56 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">
                Design Preview
              </span>
            </div>

            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold mb-2">
                {design.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {design.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {design.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2 py-1 text-xs rounded-md border border-border"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <button
                className="w-full py-2 rounded-lg bg-primary text-primary-foreground flex items-center justify-center gap-2 text-sm font-medium"
              >
                <ExternalLink size={16} />
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>

       <Link
        href="/designs"
        className="btn-grad mx-auto block max-w-[280px] w-full sm:w-auto h-[44px] px-4 py-2 rounded-xl text-sm font-medium transition hover:opacity-95"
        aria-label="View All Projects"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-full items-center justify-center"
        >
          Load more Designs
        </motion.span>
      </Link>
    </motion.section>
  );
}