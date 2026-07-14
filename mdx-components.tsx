import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id} className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mt-8 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-relaxed text-lg text-neutral-700 dark:text-neutral-300 mb-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 text-lg text-neutral-700 dark:text-neutral-300 space-y-2">
        {children}
      </ul>
    ),
    li: ({ children }) => <li>{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-[#00b377] dark:text-[#00e59b] hover:text-[#009460] dark:hover:text-[#00c987] underline underline-offset-4 decoration-2 decoration-[#00b377]/30 dark:decoration-[#00e59b]/30 transition-colors">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-lg px-6 py-4 my-8 italic text-lg text-neutral-600 dark:text-neutral-400">
        {children}
      </blockquote>
    ),
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 my-10 w-full object-cover"
        {...(props as any)}
      />
    ),
    pre: ({ children, ...props }) => (
      <pre 
        className="p-4 md:p-6 rounded-xl overflow-x-auto my-8 bg-[#0d1117] text-neutral-100 shadow-xl border border-neutral-800/50 text-sm md:text-base leading-relaxed" 
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ children, className, ...props }) => {
      // rehype-pretty-code adds specific attributes like data-language to block code.
      // We can use the presence of className or data attributes to know if it's block code or inline code.
      const isBlockCode = className?.includes('language-') || ('data-language' in props) || ('data-theme' in props);
      
      if (isBlockCode) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }

      // Inline code styling
      return (
        <code className="bg-neutral-100 dark:bg-neutral-800/80 text-[#00b377] dark:text-[#00e59b] rounded-md px-1.5 py-0.5 text-[0.9em] font-medium border border-neutral-200 dark:border-neutral-700" {...props}>
          {children}
        </code>
      )
    },
    ...components,
  }
}
