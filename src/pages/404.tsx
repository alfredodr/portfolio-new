import React from "react";
import Link from "next/link";
import { Saira, Nunito } from "next/font/google";
import { FaMinus } from "react-icons/fa";

const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
  weight: "200",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

export default function Custom404() {
  return (
    <>
      <div className="px-8 flex justify-between items-center bg-[#171a1d]">
        <div className="mx-auto">
          <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <h1 className="text-[#fff] text-lg sm:text-4xl">
              404 - Page Not Found
            </h1>
            <p
              className={`text-lg text-[#fff] ${nunito.variable} font-nunito my-5`}
            >
              Could not find requested resource
            </p>
            <Link href={"/"} passHref>
              <span
                className={`text- text-[#fff] ${nunito.variable} font-nunito `}
              >
                Return Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
