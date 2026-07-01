import type { Metadata } from "next";

const baseUrl = "https://prarthana-gade.vercel.app";

export const metadata: Metadata = {
  title: "Projects | Prarthana Gade",
  description:
    "Selected projects by Prarthana Gade — frontend, backend, and full-stack work including system design, caching, CQRS, Next.js, and Prisma.",
  alternates: {
    canonical: `${baseUrl}/projects`,
  },
  openGraph: {
    type: "website",
    title: "Projects | Prarthana Gade",
    description:
      "Selected projects by Prarthana Gade — frontend, backend, and full-stack work including system design, caching, CQRS, Next.js, and Prisma.",
    url: `${baseUrl}/projects`,
    images: [
      {
        url: `${baseUrl}/hitori-ico.png`,
        width: 512,
        height: 512,
        alt: "Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Prarthana Gade",
    description:
      "Selected projects by Prarthana Gade — frontend, backend, and full-stack work including system design, caching, CQRS, Next.js, and Prisma.",
    images: [`${baseUrl}/hitori-ico.png`],
  },
};

