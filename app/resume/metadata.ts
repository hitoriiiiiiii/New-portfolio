import type { Metadata } from "next";

const baseUrl = "https://prarthana-gade.vercel.app";

export const metadata: Metadata = {
  title: "Resume | Prarthana Gade",
  description:
    "View Prarthana Gade’s resume — software developer and designer. Skills include React, Next.js, TypeScript, Node.js, and UI/UX.",
  alternates: {
    canonical: `${baseUrl}/resume`,
  },
  openGraph: {
    type: "website",
    title: "Resume | Prarthana Gade",
    description:
      "View Prarthana Gade’s resume — software developer and designer. Skills include React, Next.js, TypeScript, Node.js, and UI/UX.",
    url: `${baseUrl}/resume`,
    images: [
      {
        url: `${baseUrl}/hitori-ico.png`,
        width: 512,
        height: 512,
        alt: "Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Prarthana Gade",
    description:
      "View Prarthana Gade’s resume — software developer and designer. Skills include React, Next.js, TypeScript, Node.js, and UI/UX.",
    images: [`${baseUrl}/hitori-ico.png`],
  },
};

