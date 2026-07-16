import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-neutral-200 dark:border-[#2A2A2A]/50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md">
      <div className="container mx-auto px-4 flex flex-col justify-left gap-2 text-right text-sm md:text-base text-neutral-500 dark:text-white/50">
        <p>&copy; 2026 Nikhil Dabhade</p>
      </div>
    </footer>
  );
}
