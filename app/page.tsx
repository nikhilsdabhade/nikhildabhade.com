import AboutMe from "@/components/AboutMe";
import HelloWorld from "@/components/HelloWorld";
import { HeroBackground } from "@/components/HeroBackground";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <HelloWorld>
        <AboutMe />
      </HelloWorld>
    </div>
  );
}
