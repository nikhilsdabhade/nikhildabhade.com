import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhildabhade.com"),
  title: {
    default: "Nikhil Dabhade | Frontend Developer",
    template: "%s | Nikhil Dabhade"
  },
  description: "Nikhil Dabhade is a Frontend Developer and Open Source Builder specializing in React, Next.js, and TypeScript.",
  alternates: {
    canonical: "https://nikhildabhade.com",
  },
  openGraph: {
    title: "Nikhil Dabhade | Frontend Developer",
    description: "Nikhil Dabhade is a Frontend Developer and Open Source Builder specializing in React, Next.js, and TypeScript.",
    url: "https://nikhildabhade.com/",
    siteName: "Nikhil Dabhade",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Dabhade - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Dabhade | Frontend Developer",
    description: "Nikhil Dabhade is a Frontend Developer and Open Source Builder specializing in React, Next.js, and TypeScript. Explore projects, blogs, and developer tools.",
    images: ["/og-image.png"],
    creator: "@nikhilsdabhade",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikhil Dabhade",
  url: "https://nikhildabhade.com",
  jobTitle: "Frontend Developer",
  sameAs: [
    "https://github.com/nikhilsdabhade",
    "https://www.linkedin.com/in/nikhil-dabhade/",
    "https://x.com/nikhilsdabhade"
  ]
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { HeroBackground } from "@/components/HeroBackground";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="relative bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <HeroBackground />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
