import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const Footer = () => {
  return (
    <footer>
      <div
        className={`text-center text-base text-[#ffffff80] font-normal py-5 bg-[#171a1d] ${nunito.variable} font-nunito`}
      >
        © Copywright {new Date().getFullYear()} - Alfredo Dominguez
      </div>
    </footer>
  );
};

export default Footer;
