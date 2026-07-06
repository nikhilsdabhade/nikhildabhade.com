import AboutMe from "@/components/AboutMe";
import HelloWorld from "@/components/HelloWorld";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <HelloWorld>
        <AboutMe />
      </HelloWorld>
    </div>
  );
}
