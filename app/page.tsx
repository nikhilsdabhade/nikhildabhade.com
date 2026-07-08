import AboutMe from "@/components/AboutMe";
import HelloWorld from "@/components/HelloWorld";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <HelloWorld>
        <AboutMe />
      </HelloWorld>
      <FeaturedProjects />
    </div>
  );
}
