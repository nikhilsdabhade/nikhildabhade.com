import Link from "next/link";
import { blogs } from "./constants";

export default function BlogsPage() {
  return (
    <section className="flex flex-col py-12 md:py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8">
        Blogs
      </h1>

      {blogs.map((blog) => {
        return (
          <div className="flex flex-col gap-6" key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>
              <div className="flex items-start justify-between gap-4 p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer group">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-[#00b377] dark:group-hover:text-[#00e59b] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    {blog.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
