import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "./TypingAnimation";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [hideMouse, setHideMouse] = useState<boolean>(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 1) {
      setHideMouse(true);
    } else {
      setHideMouse(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section id="section-top" className="relative bg-[#191A1C]">
      <div className="max-w-[76rem] min-h-screen px-8 mx-auto flex flex-col justify-center">
        <span className="text-[#cf1f1f] text-base font-bold mb-5 z-20">
          I am Alfredo J Dominguez
        </span>
        <Typewriter />
      </div>
      <div className="absolute right-0 top-0 w-3/4 md:w-2/4 lg:w-4/12 h-screen">
        <Image
          src={"/alfredo-headshot.png"}
          alt={"Alfredo J Dominguez portrait image"}
          fill
          priority
        />
      </div>
      <div
        className={cn(
          "border-2 border-[#ffffff40] w-5 h-10 absolute bottom-10 left-1/2 rounded-full block",
          { hidden: hideMouse }
        )}
      >
        <div className="w-4 h-4 relative animate-scroll_mouse">
          <span className="text-[#fff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            .
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
