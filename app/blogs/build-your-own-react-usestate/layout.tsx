import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Own React useState Hook Under 40 Lines",
  description:
    "Learn how to build React's useState hook from scratch in under 40 lines. Understand state persistence, re-rendering, closures, and useSyncExternalStore with a simple implementation.",
  alternates: {
    canonical: "https://nikhildabhade.com/blogs/build-your-own-react-usestate",
  },
  openGraph: {
    title: "Build Your Own React useState Hook",
    description:
      "Learn how to create a custom React useState hook from scratch and understand how React state actually works under the hood.",
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
    authors: ["Nikhil Dabhade"],
    url: "https://nikhildabhade.com/blogs/build-your-own-react-usestate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Own React useState Hook Under 40 Lines",
    description:
      "Learn how to create a custom React useState hook from scratch and understand how React state works under the hood.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Build Your Own React useState Hook Under 40 Lines",
  description:
    "Learn how to create a custom React useState hook from scratch. Understand the mental model behind useState, persistent state, and re-rendering.",
  image: "https://nikhildabhade.com/og-image.png",
  author: {
    "@type": "Person",
    name: "Nikhil Dabhade",
    url: "https://nikhildabhade.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Nikhil Dabhade",
    logo: {
      "@type": "ImageObject",
      url: "https://nikhildabhade.com/icon.png",
    },
  },
  datePublished: "2026-07-14T08:00:00+08:00",
  dateModified: "2026-07-14T08:00:00+08:00",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://nikhildabhade.com/blogs/build-your-own-react-usestate",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col py-12 md:py-24 px-6 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          Build Your Own React useState Hook Under 40 Lines
        </h1>
        <div className="mt-4 flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
          <time dateTime="2023-11-01">July 14, 2026</time>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
}
