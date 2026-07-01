import type { Metadata } from "next";

const baseUrl = "https://prarthana-gade.vercel.app";

export const metadata: Metadata = {
  title: "Designs | Prarthana Gade",
  description:
    "UI/UX and brand design work by Prarthana Gade — including mobile app UI dashboards, design systems, and branding concepts.",
  alternates: {
    canonical: `${baseUrl}/designs`,
  },
  openGraph: {
    type: "website",
    title: "Designs | Prarthana Gade",
    description:
      "UI/UX and brand design work by Prarthana Gade — including mobile app UI dashboards, design systems, and branding concepts.",
    url: `${baseUrl}/designs`,
    images: [
      {
        url: `${baseUrl}/hitori-ico.png`,
        width: 512,
        height: 512,
        alt: "Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designs | Prarthana Gade",
    description:
      "UI/UX and brand design work by Prarthana Gade — including mobile app UI dashboards, design systems, and branding concepts.",
    images: [`${baseUrl}/hitori-ico.png`],
  },
};

