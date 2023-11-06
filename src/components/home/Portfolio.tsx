import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimateScroll from "../common/AnimateScroll";

const Portfolio = () => {
  return (
    <section id="section-portfolio" className="bg-[#191A1C]">
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
                  Portfolio
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimateScroll triggerOnce>
            {({ inView, ref }) => {
              return (
                <div
                  ref={ref}
                  className={cn(
                    "row-span-2 hover:cursor-pointer overflow-hidden invisible",
                    {
                      "visible animate-fadeInUp delay-150": inView,
                    }
                  )}
                >
                  <div className="relative flex flex-col items-center justify-center w-full h-[20.625rem] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 text-[#ffffff]/0 hover:text-[#ffffff]/100 scale-110 hover:scale-100">
                    <Link href={"/project/1"}>
                      <h3 className="text-2xl font-bold">
                        Fishing Shirts Store
                      </h3>
                      <h5 className="text-sm font-light absolute bottom-[5%]">
                        Website
                      </h5>
                      <Image
                        src={"/boat-fishing.jpg"}
                        alt={"Fishing Shirts Website"}
                        fill
                        className="object-cover -z-10"
                      />
                    </Link>
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
                  className={cn(
                    "hover:cursor-pointer overflow-hidden invisible",
                    {
                      "visible animate-fadeInUp delay-150": inView,
                    }
                  )}
                >
                  <div className="relative flex flex-col items-center justify-center w-full h-[13.75rem] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 text-[#ffffff]/0 hover:text-[#ffffff]/100 scale-110 hover:scale-100">
                    <Link href={"/project/2"}>
                      <h3 className="text-2xl font-bold">Find an Agent</h3>
                      <h5 className="text-sm font-light absolute bottom-[5%]">
                        Landing Pages
                      </h5>
                      <Image
                        src={"/women-searching.jpg"}
                        alt={"Find an Agent Landing Pages"}
                        fill
                        className="object-cover -z-10"
                      />
                    </Link>
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
                  className={cn(
                    "row-span-2 hover:cursor-pointer overflow-hidden invisible",
                    {
                      "visible animate-fadeInUp delay-150": inView,
                    }
                  )}
                >
                  <div className="relative flex flex-col items-center justify-center w-full h-[20.625rem] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 text-[#ffffff]/0 hover:text-[#ffffff]/100 scale-110 hover:scale-100">
                    <Link href={"/project/3"}>
                      <h3 className="text-2xl font-bold">Conversion Lab</h3>
                      <h5 className="text-sm font-light absolute bottom-[5%]">
                        Landing Page
                      </h5>
                      <Image
                        src={"/consulting.jpg"}
                        alt={"Working at the office"}
                        fill
                        className="object-cover -z-10"
                      />
                    </Link>
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
                  className={cn(
                    "row-span-2 hover:cursor-pointer overflow-hidden invisible",
                    {
                      "visible animate-fadeInUp delay-150": inView,
                    }
                  )}
                >
                  <div className="relative flex flex-col items-center justify-center w-full h-[20.625rem] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 text-[#ffffff]/0 hover:text-[#ffffff]/100 scale-110 hover:scale-100">
                    <Link href={"/project/4"}>
                      <h3 className="text-2xl font-bold">Todo Tasker App</h3>
                      <h5 className="text-sm font-light absolute bottom-[5%]">
                        Application
                      </h5>
                      <Image
                        src={"/paper.jpg"}
                        alt={"Todo List"}
                        fill
                        className="object-cover -z-10"
                      />
                    </Link>
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
                  className={cn(
                    "hover:cursor-pointer overflow-hidden invisible",
                    {
                      "visible animate-fadeInUp delay-150": inView,
                    }
                  )}
                >
                  <div className="relative flex flex-col items-center justify-center w-full h-[13.75rem] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 text-[#ffffff]/0 hover:text-[#ffffff]/100 scale-110 hover:scale-100">
                    <Link href={"/project/5"}>
                      <h3 className="text-2xl font-bold">Portfolio</h3>
                      <h5 className="text-sm font-light absolute bottom-[5%]">
                        Website
                      </h5>
                      <Image
                        src={"/alfredo-headshot-portfolio.webp"}
                        alt={"Alfredo Headshot Portfolio"}
                        fill
                        className="object-cover -z-10"
                      />
                    </Link>
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
                  className={cn(
                    "hover:cursor-pointer overflow-hidden invisible",
                    {
                      "visible animate-fadeInUp delay-150": inView,
                    }
                  )}
                >
                  <div className="relative flex flex-col items-center justify-center w-full h-[13.75rem] transition-all duration-500 ease-in-out grayscale hover:grayscale-0 text-[#ffffff]/0 hover:text-[#ffffff]/100 scale-110 hover:scale-100">
                    <Link href={"/project/6"}>
                      <h3 className="text-2xl font-bold">
                        Breaking Bad Quotes
                      </h3>
                      <h5 className="text-sm font-light absolute bottom-[5%]">
                        Application
                      </h5>
                      <Image
                        src={"/breaking-bad.jpg"}
                        alt={"Brealking Bad"}
                        fill
                        className="object-cover -z-10"
                      />
                    </Link>
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

export default Portfolio;
