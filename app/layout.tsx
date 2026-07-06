import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Nikhil Dabhade",
  description: "Nikhil Dabhade Personal Portfolio",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { HeroBackground } from "@/components/HeroBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <HeroBackground />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
