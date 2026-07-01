import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import LayoutClient from "./layout-client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Prarthana Gade | Portfolio",
  description:
    "Software Developer & Designer. Building modern responsive web apps with React, Next.js, TypeScript, and UI/UX-focused design.",

  metadataBase: new URL("https://prarthana-gade.vercel.app"),

  alternates: {
    canonical: "https://prarthana-gade.vercel.app/",
  },

  icons: {
    icon: [
      {
        url: "/hitori-ico.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/hitori-ico.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    title: "Prarthana Gade | Portfolio",
    description:
      "Software Developer & Designer. Building modern responsive web apps with React, Next.js, TypeScript, and UI/UX-focused design.",

    images: [
      {
        url: "/hitori-ico.png",
        width: 512,
        height: 512,
        alt: "Prarthana Gade Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prarthana Gade | Portfolio",
    description:
      "Software Developer & Designer. Building modern responsive web apps with React, Next.js, TypeScript, and UI/UX-focused design.",

    images: ["/hitori-ico.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-background text-foreground">
        <Providers>
          <LayoutClient>{children}</LayoutClient>
        </Providers>
      </body>
    </html>
  );
}