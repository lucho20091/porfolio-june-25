import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
export default function HomeHero() {
  return (
    <div className="container h-[calc(100dvh-54px)] md:h-[calc(100dvh-70px)] p-4 md:p-8 max-w-screen-xl mx-auto relative">
      <div className="Main-Element h-full">
        <div className="Intro h-full text-center flex flex-col gap-4 md:gap-6 justify-center items-center">
          <p className="text-gray-700 text-lg">Hello, I'm</p>
          <h1 className="font-bold text-6xl">Luis M.</h1>
          <p className="text-gray-700 text-2xl">Front-End Developer</p>
          <p className="text-gray-700 text-lg max-w-xl">
            Crafting beautiful, responsive, and user-friendly web experiences
            with modern technologies
          </p>
          <Button size="lg" className="py-7">
            <span className="animate-pulse font-bold text-lg">
              View My Work
            </span>{" "}
            <FaArrowRight className="animate-pulse" />
          </Button>
          <FaArrowDown className="absolute bottom-8 md:bottom-16 text-2xl md:text-3xl animate-bounce" />
        </div>
      </div>
    </div>
  );
}
