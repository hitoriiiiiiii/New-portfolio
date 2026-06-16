"use client"

import { motion } from "framer-motion"
import { Download, Eye, Home, Folder, Palette, FileText } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [pdfWidth, setPdfWidth] = useState(0)
  const [pdfComponents, setPdfComponents] = useState<{ Document: any; Page: any } | null>(null)

  useEffect(() => {
    async function loadPdfComponents() {
      const pdfModule = await import("react-pdf")
      pdfModule.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfModule.pdfjs.version}/build/pdf.worker.min.js`
      setPdfComponents({ Document: pdfModule.Document, Page: pdfModule.Page })
    }

    function updateWidth() {
      const width = Math.min(window.innerWidth - 32, 600)
      setPdfWidth(width > 300 ? width : 300)
    }

    loadPdfComponents()
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // UPDATE THIS: Path to your PDF in /public folder
  const resumeUrl = "/prarthana-gade-resume.pdf"

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  return (
    <main className="bg-background min-h-screen text-foreground">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 pt-24 pb-32">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Resume</h1>
          <p className="text-muted-foreground text-base">View</p>
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {/* Removed "Open in New Tab" button (was causing SSR/pdfjs issues) */}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden">
            <Eye size={16} />
          </a>

          <a href={resumeUrl} download="Prarthana-Gade-Resume.pdf">
            <button className="px-5 py-2.5 bg-white/10 border border-white/20 text-white font-medium text-sm rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <Download size={16} /> Download PDF
            </button>
          </a>
        </motion.div>

        {/* PDF VIEWER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="bg-card rounded-xl p-2 shadow-2xl border border-border w-full max-w-[600px]">
            {loading && (
              <div className="w-full h-[800px] bg-card animate-pulse rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Loading Resume...</span>
              </div>
            )}

            {pdfComponents ? (
              <pdfComponents.Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading=""
                className="flex justify-center"
              >
                <pdfComponents.Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={pdfWidth || 320}
                  className="rounded-lg"
                />
              </pdfComponents.Document>
            ) : null}
          </div>
        </motion.div>

        {/* PAGE CONTROLS - Show if PDF has multiple pages */}
        {numPages && numPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-white/10 rounded-lg text-sm disabled:opacity-30"
            >
              Previous
            </button>

            <span className="text-sm text-gray-400">
              Page {pageNumber} of {numPages}
            </span>

            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-white/10 rounded-lg text-sm disabled:opacity-30"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Floating Bottom Nav - Same as other pages */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-xl border border-border/60 rounded-2xl p-1.5 flex gap-1 z-50 shadow-2xl">
        <Link href="/" className="p-3 hover:bg-white/10 rounded-xl transition" aria-label="Home">
          <Home size={20} strokeWidth={1.5} />
        </Link>

        <Link href="/projects" className="p-3 hover:bg-white/10 rounded-xl transition" aria-label="Projects">
          <Folder size={20} strokeWidth={1.5} />
        </Link>

        <Link href="/designs" className="p-3 hover:bg-white/10 rounded-xl transition" aria-label="Designs">
          <Palette size={20} strokeWidth={1.5} />
        </Link>

        <Link href="/resume" className="p-3 bg-white/10 rounded-xl transition" aria-label="Resume">
          <FileText size={20} strokeWidth={1.5} />
        </Link>
      </div>
    </main>
  )
}

