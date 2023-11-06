import React from "react";
import { Nunito } from "next/font/google";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { cn } from "@/lib/utils";
import AnimateScroll from "../common/AnimateScroll";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const About = () => {
  return (
    <section id="section-about" className="bg-[#191A1C]">
      <div className="px-8 py-20">
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
                  About Me
                </h2>
                <div className="text-center mb-10">
                  <span className="mx-1 text-[#515356]">_____</span>
                  <span className="mx-1 text-[#cf1f1f]">_____</span>
                  <span className="mx-1 text-[#515356]">_____</span>
                </div>

                <p
                  className={`${nunito.variable} font-nunito font-normal text-base sm:text-lg text-[#aaaaaa] text-center mb-10 max-w-[46rem] mx-auto`}
                >
                  I am a full stack web developer with a keen emphasis on
                  crafting exceptional web experiences. My passion lies in
                  mastering the intricacies of both front-end and back-end
                  development, ensuring that users enjoy seamless, aesthetically
                  pleasing, and highly functional websites. With an insatiable
                  thirst for knowledge, I constantly seek out new challenges and
                  learning opportunities to enhance my skill set.
                </p>
              </div>
            );
          }}
        </AnimateScroll>
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ${nunito.variable} font-nunito`}
        >
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn delay-500": inView,
                  })}
                >
                  <DiHtml5 style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">HTML5</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "600ms" }}
                >
                  <DiCss3 style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">CSS3</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "700ms" }}
                >
                  <DiSass style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">SASS</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "800ms" }}
                >
                  <SiTailwindcss style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">
                    Tailwindcss
                  </h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "900ms" }}
                >
                  <DiJavascript style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">
                    JavaScript
                  </h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1000ms" }}
                >
                  <BiLogoTypescript style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">
                    TypesCript
                  </h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1100ms" }}
                >
                  <DiReact style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">React</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1200ms" }}
                >
                  <SiNextdotjs style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">Next.js</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1300ms" }}
                >
                  <svg
                    fill="#ffffff"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Material-UI icon</title>
                    <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
                  </svg>
                  <h3 className="text-xl font-bold text-[#ffffff]">
                    Material UI
                  </h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1400ms" }}
                >
                  <FaNodeJs style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">Node.js</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1500ms" }}
                >
                  <DiMongodb style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">Mongodb</h3>
                </span>
              );
            }}
          </AnimateScroll>
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <span
                  ref={ref}
                  className={cn("flex flex-col items-center invisible", {
                    "visible animate-fadeIn": inView,
                  })}
                  style={{ animationDelay: "1600ms" }}
                >
                  <SiExpress style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold text-[#ffffff]">
                    Express.js
                  </h3>
                </span>
              );
            }}
          </AnimateScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
