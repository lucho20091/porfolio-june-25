import HomeHero from "@/components/HomeHero";
import Tabs from "@/components/HomeProjectsTabs";
import Contact from "@/components/HomeContact";

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
      <div
        className="container p-4 md:p-8 max-w-screen-xl mx-auto"
        ref={targetRef}
      >
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="mt-16 text-center text-2xl font-bold">
            My Recent Projects
          </h2>
          <p className="text-lg text-center max-w-xl mx-auto text-gray-700">
            A collection of my recent work showcasing my skills and experience
            in front-end development
          </p>
        </div>
        <div className="mt-8 md:mt-12 relative">
          <Tabs />
        </div>
      </div>
      <div className="container p-4 pb-8 md:p-8 md:pb-24 max-w-screen-xl mx-auto">
        <Contact />
      </div>
    </div>
  );
}
