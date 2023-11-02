import React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const Contact = () => {
  return (
    <section className="relative w-full">
      <Image
        src={"/contact.jpg"}
        alt={"contact"}
        fill
        className="object-cover -z-10"
      />
      <div className="max-w-[63.083125rem] min-h-[963px] px-8 flex flex-col justify-center">
        <h2 className="text-center text-4xl text-white font-bold">
          Contact Me
        </h2>
        <div className="text-center mb-10">
          <span className="mx-1 text-[#515356]">_____</span>
          <span className="mx-1 text-[#cf1f1f]">_____</span>
          <span className="mx-1 text-[#515356]">_____</span>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <input
            type="text"
            name="fullName"
            placeholder="Your Name"
            className="text-[#ffffff] border border-[#ffffff33] placeholder:text-[#ffffff33] bg-transparent outline-none h-10 p-2 focus:bg-[#251415] focus:bg-opacity-40"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="text-[#ffffff] border border-[#ffffff33] placeholder:text-[#ffffff33] bg-transparent outline-none h-10 p-2 focus:bg-[#251415] focus:bg-opacity-40"
          ></input>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="text-[#ffffff] border border-[#ffffff33] placeholder:text-[#ffffff33] bg-transparent outline-none h-10 p-2 focus:bg-[#251415] focus:bg-opacity-40"
          ></input>
          <textarea
            name="message"
            placeholder="Your Message"
            className="text-[#ffffff] border border-[#ffffff33] placeholder:text-[#ffffff33] bg-transparent outline-none h-40 md:col-span-3 p-2 focus:bg-[#251415] focus:bg-opacity-40"
          ></textarea>

          <button
            type="submit"
            className="bg-[#cf1f1f] py-3 px-7 text-[#fff] text-sm font-bold cursor-pointer mx-auto md:col-start-2"
          >
            Send Message
          </button>
        </form>
        <h5 className="mt-14 text-center text-base text-[#ffffff] font-bold mb-2">
          Email Me
        </h5>
        <span
          className={`text-center text-base text-[#aaaaaa] font-normal ${nunito.variable} font-nunito`}
        >
          support@alfredojdominguez.com
        </span>
      </div>
    </section>
  );
};

export default Contact;
