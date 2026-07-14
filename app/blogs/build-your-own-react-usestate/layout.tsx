export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col py-12 md:py-24 px-6 max-w-4xl mx-auto">
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
  )
}
