import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/ThemeToggle";
import FloatingMascot from "@/components/FloatingMascot";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Prarthana Gade | Portfolio",
  description: "Software Developer & Designer",
  icons: {
    icon: [
      {
        url: "hitori-ico.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "hitori-ico.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="antialiased font-sans bg-background text-foreground">
        <Providers>
          <div className="min-h-screen w-full bg-background relative overflow-hidden">
            {/* Content above background grid */}
            {/*<FloatingMascot />*/}
            <div className="relative z-10">{children}</div>
            <ThemeToggle />

          </div>
        </Providers>
      </body>
    </html>
  );
}

