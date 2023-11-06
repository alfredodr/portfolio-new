import React from "react";
import { Nunito } from "next/font/google";
import { BiLogoReact } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { cn } from "@/lib/utils";
import AnimateScroll from "../common/AnimateScroll";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const Work = () => {
  return (
    <section id="section-work" className="bg-[#191A1C]">
      <div className="max-w-[76rem] px-8 py-20 mx-auto">
        <AnimateScroll triggerOnce>
          {({ inView, ref }) => {
            return (
              <div
                ref={ref}
                className={cn("invisible", {
                  "visible animate-fadeInUp": inView,
                })}
              >
                <h2 className="text-center text-4xl text-white font-bold">
                  What I Do
                </h2>
                <div className="text-center mb-10">
                  <span className="mx-1 text-[#515356]">_____</span>
                  <span className="mx-1 text-[#cf1f1f]">_____</span>
                  <span className="mx-1 text-[#515356]">_____</span>
                </div>
              </div>
            );
          }}
        </AnimateScroll>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <div
                  ref={ref}
                  className={cn("invisible", {
                    "visible animate-fadeIn delay-500": inView,
                  })}
                >
                  <div className="p-10 border border-t-transparent border-r-transparent border-b-transparent border-[#ffffff33]">
                    <div className="flex items-center justify-start mb-5">
                      <span className="text-4xl sm:text-5xl md:text-5xl">
                        <BiLogoReact color={"#cf1f1f"} />
                      </span>

                      <h3 className="text-[#ffffff] text-2xl font-bold ml-5">
                        Front End
                      </h3>
                    </div>
                    <p
                      className={`text-[#909090] text-base md:text-lg ${nunito.variable} font-nunito`}
                    >
                      I craft web front-end experiences by harnessing the power
                      of HTML, CSS, JavaScript, and React. In my development
                      journey, I often explore a diverse array of libraries and
                      tools to tackle specific challenges head-on.
                    </p>
                  </div>
                </div>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <div
                  ref={ref}
                  className={cn("invisible", {
                    "visible animate-fadeIn delay-700": inView,
                  })}
                >
                  <div className="p-10 border border-t-transparent border-r-transparent border-b-transparent border-[#ffffff33]">
                    <div className="flex items-center justify-start mb-5">
                      <span className="text-4xl sm:text-5xl md:text-5xl">
                        <FiDatabase color={"#cf1f1f"} />
                      </span>

                      <h3 className="text-[#ffffff] text-2xl font-bold ml-5">
                        Backend
                      </h3>
                    </div>
                    <p
                      className={`text-[#909090] text-base md:text-lg ${nunito.variable} font-nunito`}
                    >
                      My expertise extends to constructing robust backend APIs
                      with a strong focus on user authentication and
                      authorization. To achieve this, I leverage tools like
                      Node.js, and Express, ensuring the security and
                      functionality of the systems I create.
                    </p>
                  </div>
                </div>
              );
            }}
          </AnimateScroll>
        </div>
      </div>
    </section>
  );
};

export default Work;
