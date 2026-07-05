import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#00e59b]"></div>
        <span className="text-xs font-mono tracking-[0.2em] text-white/90 uppercase">
          NIKHIL_DABHADE <span className="text-white/40 mx-1">/ V2.3.0</span>
        </span>
      </div>

      <div className="flex items-center gap-5">
        <Link href="https://github.com/nikhilsdabhade" target="_blank" className="text-white/50 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faGithub} className="w-[18px] h-[18px]" />
        </Link>
        <Link href="https://www.linkedin.com/in/nikhil-dabhade/" target="_blank" className="text-white/50 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLinkedin} className="w-[18px] h-[18px]" />
        </Link>
        <button className="text-white/50 hover:text-white transition-colors flex items-center justify-center">
          <FontAwesomeIcon icon={faMoon} className="w-[18px] h-[18px]" />
        </button>
      </div>
    </nav>
  );
}
