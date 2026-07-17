import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { socials } from "@/content/socials";

function LinkSection({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconDefinition;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors pb-0.5"
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-[18px] h-[18px] text-neutral-900 dark:text-neutral-100"
      />
      <span className="text-neutral-900 dark:text-neutral-100 font-medium">
        {label}
      </span>
    </a>
  );
}

export default function AboutMe() {
  return (
    <section className="flex flex-col py-12 md:py-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Nikhil Dabhade
      </h1>
      <div className="mt-8 space-y-6 text-base font-normal text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          Frontend Developer building React applications and open source
          projects.
        </p>
        <p>
          For the past 2 years, I&apos;ve been building React and TypeScript
          applications focused on performance and developer experience.
          Currently building{" "}
          <a
            href="https://github.com/ParallelBytes/IngestX"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
          >
            IngestX
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ParallelBytes/React-Virtualized-Tree"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
          >
            React-Virtualized-Tree.
          </a>
        </p>
        <p>
          I also{" "}
          <a
            href="/blogs"
            rel="noopener noreferrer"
            className="border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
          >
            write
          </a>{" "}
          about React, rendering performance, and developer tooling, sharing
          things I learn while building.
        </p>
        <p>
          When I&apos;m not coding you&apos;ll probably find me reading, playing
          chess, running or swimming.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-4 text-base font-normal text-neutral-700 dark:text-neutral-300">
        <p>Find me on</p>
        <div className="flex flex-wrap gap-6">
         {socials.map((social) => (
          <LinkSection key={social.label} href={social.href} icon={social.icon} label={social.label} />
         ))}
        </div>
        <p>
          Or Reach me at{" "}
          <a
            href="mailto: nikhild12377@gmail.com"
            className="border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors pb-0.5"
          >
            nikhild12377@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
