export default function AboutMe() {
  return (
    <section className="flex flex-col min-h-[70vh] py-12 md:py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Nikhil Dabhade
      </h1>
      <div className="mt-8 space-y-6 text-base font-normal text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          I'm a Frontend Developer and Open Source Builder.
        </p>
        <p>
          For the past 2 years, I've been building React and TypeScript
          applications focused on performance and developer experience.
          Currently building <a
            href="https://github.com/ParallelBytes/IngestX"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
          >
            IngestX
          </a> and <a
            href="https://github.com/ParallelBytes/React-Virtualized-Tree"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
          >
            React-Virtualized-Tree.
          </a>
        </p>
      </div>
    </section>
  );
}
