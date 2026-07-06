import AboutMe from "@/components/AboutMe";
import HelloWorld from "@/components/HelloWorld";
import { HeroBackground } from "@/components/HeroBackground";

export default function Page() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <HeroBackground />
      <HelloWorld>
        <AboutMe />
      </HelloWorld>
    </div>
  );
}
