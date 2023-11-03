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

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const About = () => {
  return (
    <section id="section-about" className="bg-[#191A1C]">
      <div className="max-w-[46rem] px-8 py-20 mx-auto">
        <h2 className="text-center text-4xl text-white font-bold">About Me</h2>
        <div className="text-center mb-10">
          <span className="mx-1 text-[#515356]">_____</span>
          <span className="mx-1 text-[#cf1f1f]">_____</span>
          <span className="mx-1 text-[#515356]">_____</span>
        </div>
        <p
          className={`${nunito.variable} font-nunito font-normal text-base sm:text-lg text-[#aaaaaa] text-center`}
        >
          I am a full stack web developer with a keen emphasis on crafting
          exceptional web experiences. My passion lies in mastering the
          intricacies of both front-end and back-end development, ensuring that
          users enjoy seamless, aesthetically pleasing, and highly functional
          websites. With an insatiable thirst for knowledge, I constantly seek
          out new challenges and learning opportunities to enhance my skill set.
        </p>
        <h3 className="text-[#ffffff] text-2xl text-center font-bold my-10">
          Skills
        </h3>
        <div
          className={`text-[#ffffff] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ${nunito.variable} font-nunito`}
        >
          <span className="flex flex-col items-center">
            <DiHtml5 style={{ fontSize: 40 }} />
            <span>HTML5</span>
          </span>
          <span className="flex flex-col items-center">
            <DiCss3 style={{ fontSize: 40 }} />
            <span>CSS3</span>
          </span>
          <span className="flex flex-col items-center">
            <DiSass style={{ fontSize: 40 }} />
            <span>SASS</span>
          </span>
          <span className="flex flex-col items-center">
            <SiTailwindcss style={{ fontSize: 40 }} />
            <span>Tailwindcss</span>
          </span>
          <span className="flex flex-col items-center">
            <DiJavascript style={{ fontSize: 40 }} />
            <span>JavaScript</span>
          </span>
          <span className="flex flex-col items-center">
            <BiLogoTypescript style={{ fontSize: 40 }} />
            <span>TypesCript</span>
          </span>
          <span className="flex flex-col items-center">
            <DiReact style={{ fontSize: 40 }} />
            <span>React</span>
          </span>
          <span className="flex flex-col items-center">
            <SiNextdotjs style={{ fontSize: 40 }} />
            <span>Next.js</span>
          </span>
          <span className="flex flex-col items-center">
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
            <span>Material UI</span>
          </span>
          <span className="flex flex-col items-center">
            <FaNodeJs style={{ fontSize: 40 }} />
            <span>Node.js</span>
          </span>
          <span className="flex flex-col items-center">
            <DiMongodb style={{ fontSize: 40 }} />
            <span>Mongodb</span>
          </span>
          <span className="flex flex-col items-center">
            <SiExpress style={{ fontSize: 40 }} />
            <span>Express.js</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
