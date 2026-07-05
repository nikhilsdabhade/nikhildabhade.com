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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
