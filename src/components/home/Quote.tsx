import React from "react";
import Image from "next/image";
import { RxQuote } from "react-icons/rx";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const Quote = () => {
  return (
    <section className="relative w-full h-[963px]">
      <div className="absolute top-0 w-full gradient_top h-[30%] text-2xl"></div>
      <Image
        src={"/man-walking.jpg"}
        alt={"man walking"}
        fill
        className="object-cover -z-10"
      />

      <div className="max-w-[63.083125rem] min-h-[963px] px-8 m-auto flex flex-col justify-center">
        <span className="text-4xl sm:text-5xl md:text-8xl">
          <RxQuote color={"#cf1f1f"} />
        </span>
        <blockquote
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ffffff] text-left font-bold ${nunito.variable} font-nunito my-4`}
        >
          "Through unwavering dedication and relentless effort, we can achieve
          anything we set our minds on."
        </blockquote>
        <span
          className={`text-sm md:text-base lg:text-lg font-normal text-[#ffffff] ${nunito.variable} font-nunito border border-t-transparent border-r-transparent border-b-transparent border-[#ffffff33] pl-5`}
        >
          Alfredo Dominguez
        </span>
      </div>
      <div className="absolute bottom-0 w-full gradient_bottom h-[30%]  text-2xl "></div>
    </section>
  );
};

export default Quote;
