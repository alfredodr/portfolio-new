import React from "react";
import { Nunito } from "next/font/google";

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
      </div>
    </section>
  );
};

export default About;
