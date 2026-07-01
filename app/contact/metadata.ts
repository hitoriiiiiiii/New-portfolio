import type { Metadata } from "next";

const baseUrl = "https://prarthana-gade.vercel.app";

export const metadata: Metadata = {
  title: "Contact | Prarthana Gade",
  description:
    "Get in touch with Prarthana Gade — full-stack developer and designer. Contact via email, GitHub, LinkedIn, and Twitter.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    type: "website",
    title: "Contact | Prarthana Gade",
    description:
      "Get in touch with Prarthana Gade — full-stack developer and designer. Contact via email, GitHub, LinkedIn, and Twitter.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: `${baseUrl}/hitori-ico.png`,
        width: 512,
        height: 512,
        alt: "Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Prarthana Gade",
    description:
      "Get in touch with Prarthana Gade — full-stack developer and designer. Contact via email, GitHub, LinkedIn, and Twitter.",
    images: [`${baseUrl}/hitori-ico.png`],
  },
};

