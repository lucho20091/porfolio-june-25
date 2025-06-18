import HomeHero from "@/components/HomeHero";
import Tabs from "@/components/HomeProjectsTabs";
import Contact from "@/components/HomeContact";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);

  function scrollToTarget() {
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="">
      <HomeHero scrollToTarget={scrollToTarget} />
      <div className="container p-4 md:p-8 " ref={targetRef}>
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="mt-16 text-center text-2xl font-bold">
            My Recent Projects
          </h2>
          <p className="text-lg text-center max-w-xl mx-auto text-gray-700">
            A collection of my recent work showcasing my skills and experience
            in front-end development
          </p>
        </div>
        <div className="mt-4 md:mt-8 relative">
          <FaArrowLeft className="absolute top-[-24px] md:top-[-24px] left-4 animate-bounce text-2xl" />
          <FaArrowRight className="absolute top-[-24px] md:top-[-24px] right-4 animate-bounce text-2xl" />
          <Tabs />
        </div>
      </div>
      <div className="container p-4 pb-8 md:p-8 md:pb-24">
        <Contact />
      </div>
    </div>
  );
}
