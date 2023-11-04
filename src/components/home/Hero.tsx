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
    <section id="section-top" className="relative bg-[#191A1C] -z-10">
      <div className="max-w-[76rem] min-h-screen px-8 mx-auto flex flex-col justify-center">
        <span className="text-[#cf1f1f] text-base font-bold mb-5 z-10">
          I am Alfredo J Dominguez
        </span>
        {/* <Typewriter /> */}
      </div>
      {/* Desktop */}
      <Image
        src={"/alfredo-headshot-1.webp"}
        alt={"Alfredo J Dominguez portrait image"}
        fill
        priority
        className="hidden lg:block"
      />
      {/*Mobile*/}
      <Image
        src={"/alfredo-headshot.webp"}
        alt={"Alfredo J Dominguez portrait image"}
        fill
        priority
        className="block lg:hidden object-contain"
      />
      <div
        className={cn(
          "border-2 border-[#ffffff40] border-solid w-5 h-10 absolute bottom-[5%] left-1/2 rounded-full block z-10",
          { hidden: hideMouse }
        )}
      >
        <div className="w-4 h-4 relative animate-scroll_mouse">
          <span className="text-[#fff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            .
          </span>
        </div>
      </div>
      <div className="absolute w-full bottom-0 gradient_bottom h-[30%]"></div>
    </section>
  );
};

export default Hero;
