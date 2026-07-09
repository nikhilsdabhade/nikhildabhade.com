"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering the theme toggle after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Fallback for browsers that don't support View Transitions API
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00e59b]"></div>
        <span className="text-xs font-mono tracking-[0.2em] text-neutral-800 dark:text-white/90 uppercase">
          NIKHIL_DABHADE <span className="text-neutral-400 dark:text-white/40 mx-1">/ V2.3.0</span>
        </span>
      </div>

      <div className="flex items-center gap-5">
        <Link href="#" className="text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors">Blog</Link>
        <Link 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link href="https://github.com/nikhilsdabhade" target="_blank" className="text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors">
          <FontAwesomeIcon icon={faGithub} className="w-[18px] h-[18px]" />
        </Link>
        <Link href="https://www.linkedin.com/in/nikhil-dabhade/" target="_blank" className="text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLinkedin} className="w-[18px] h-[18px]" />
        </Link>
        <button
          suppressHydrationWarning
          onClick={toggleTheme}
          className="text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors flex items-center justify-center w-[18px] h-[18px]"
          aria-label="Toggle theme"
        >
          {mounted ? (
            <FontAwesomeIcon icon={resolvedTheme === "dark" ? faSun : faMoon} className="w-[18px] h-[18px] cursor-pointer" />
          ) : (
            <div className="w-[18px] h-[18px]"></div> // Placeholder to prevent layout shift
          )}
        </button>
      </div>
    </nav>
  );
}
