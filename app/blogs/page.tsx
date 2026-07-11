export default function BlogsPage() {
  return (
    <section className="flex flex-col py-12 md:py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8">
        Blogs
      </h1>

      <div className="flex flex-col gap-6">
        <a
          href="https://dev.to/nikhilsdabhade/build-your-own-react-usestate-hook-under-40-lines-5f9k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-2 hover:text-white transition-colors">
                Build Your Own React useState Hook Under 40 Lines
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm italic">
                Published on DEV Community
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
