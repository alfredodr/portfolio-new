import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: "200",
});

const Resume = () => {
  return (
    <section id="section-resume" className="bg-[#191A1C]">
      <div className="max-w-[76rem] px-8 py-20 mx-auto">
        <h2 className="text-center text-4xl text-white font-bold">Resume</h2>
        <div className="text-center mb-10">
          <span className="mx-1 text-[#515356]">_____</span>
          <span className="mx-1 text-[#cf1f1f]">_____</span>
          <span className="mx-1 text-[#515356]">_____</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h3 className="text-2xl text-[#ffffff] font-bold mb-10">
              Experiences
            </h3>
            <ul className="pl-5 relative">
              <li className="text-[#ffffff] border border-[#ffffff33] border-r-transparent border-t-transparent border-b-transparent">
                <span className="absolute top-0 left-0 bg-[#CF1F1F] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
                  1
                </span>
                <div className="pl-10 pb-10">
                  <span className="gradient_resume h-10 flex items-center text-sm font-normal mb-5">
                    2021 - Present
                  </span>
                  <span className="mt-5 text-lg font-bold mb-2 block">
                    Independent Developer - Full Stack Developer
                  </span>
                  <span
                    className={`mb-2 block text-base font-bold ${nunito.variable} font-nunito text-[#cf1f1f]`}
                  >
                    Miami, Florida
                  </span>
                  <ul
                    className={`text-base font-normal ${nunito.variable} font-nunito text-[#aaaaaa]`}
                  >
                    <li className="mb-5">
                      Fishing Shirts Store: Affiliate website that offfers an
                      experience similar to e-commerce where users can find
                      their favorite fishing shirts and then buy on Amazon.
                      Built using the MERN stack( MongoDB, Express, React, and
                      Next).{" "}
                    </li>
                    <li className="mb-5">
                      Todo Tasker App: web app with authentication, where users
                      can register and safely store their to-do lists; and admin
                      users can manage other users performing all CRUD
                      operations. Built using the MERN stack.{" "}
                    </li>
                    <li className="mb-5">
                      Conversion Lab Landing Page: conversion landing page to
                      capture valuable leads for the business offering a
                      friendly and excellent user experience. Created using
                      React & Next, and Tailwind.{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-[#ffffff] border border-[#ffffff33] border-r-transparent border-t-transparent border-b-transparent relative">
                <span className="absolute top-0 -left-5 bg-[#CF1F1F] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
                  2
                </span>
                <div className="pl-10 pb-10">
                  <span className="gradient_resume h-10 flex items-center text-sm font-normal mb-5">
                    April 2022 - Present
                  </span>
                  <span className="mt-5 text-lg font-bold mb-2 block">
                    Associate Director Digital Ad Marketing - University of
                    Miami
                  </span>
                  <span
                    className={`mb-2 block text-base font-bold ${nunito.variable} font-nunito text-[#cf1f1f]`}
                  >
                    Miami, Florida
                  </span>
                  <ul
                    className={`text-base font-normal ${nunito.variable} font-nunito text-[#aaaaaa]`}
                  >
                    <li className="mb-5">
                      Setup tracking of UM License Plate form submissions using
                      JavaScript to connect the Iframe to the backend.
                    </li>
                    <li className="mb-5">
                      Integrated Facebook ads, Google ads with the backend to
                      make those systems work efficiently and get a better
                      Return on Investment.{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-[#ffffff] border border-[#ffffff33] border-r-transparent border-t-transparent border-b-transparent relative border-l-transparent">
                <span className="absolute top-0 -left-5 bg-[#CF1F1F] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
                  3
                </span>
                <div className="pl-10 pb-10">
                  <span className="gradient_resume h-10 flex items-center text-sm font-normal mb-5">
                    February 2020 - April 2022
                  </span>
                  <span className="mt-5 text-lg font-bold mb-2 block">
                    Digital Marketing Specialist - Univista Insurance
                  </span>
                  <span
                    className={`mb-2 block text-base font-bold ${nunito.variable} font-nunito text-[#cf1f1f]`}
                  >
                    Miami, Florida
                  </span>
                  <ul
                    className={`text-base font-normal ${nunito.variable} font-nunito text-[#aaaaaa]`}
                  >
                    <li className="mb-5">
                      Responsible for managing all digital marketing efforts. In
                      addition I created landing pages from scratch using HTML,
                      CSS, JavaScript, and WordPress.
                    </li>
                    <li className="mb-5">
                      Implemented a chat bot connected to the backend, which
                      made possible for customers to ask for insurance, then get
                      a call from their assigned insurance agent in an automatic
                      way.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl text-[#ffffff] font-bold mb-10">
              Education
            </h3>
            <ul className="pl-5 relative">
              <li className="text-[#ffffff] border border-[#ffffff33] border-r-transparent border-t-transparent border-b-transparent">
                <span className="absolute top-0 left-0 bg-[#CF1F1F] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
                  1
                </span>
                <div className="pl-10 pb-10">
                  <span className="gradient_resume h-10 flex items-center text-sm font-normal mb-5">
                    2014 - 2017
                  </span>
                  <span className="mt-5 text-lg font-bold mb-2 block">
                    Miami Dade College
                  </span>
                  <span
                    className={`mb-2 block text-base font-bold ${nunito.variable} font-nunito text-[#cf1f1f]`}
                  >
                    Miami, Florida
                  </span>
                  <span
                    className={`text-base font-normal ${nunito.variable} font-nunito text-[#aaaaaa]`}
                  >
                    Associate in Computer Science
                  </span>
                </div>
              </li>
              <li className="text-[#ffffff] border border-[#ffffff33] border-r-transparent border-t-transparent border-b-transparent relative border-l-transparent">
                <span className="absolute top-0 -left-5 bg-[#CF1F1F] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5">
                  2
                </span>
                <div className="pl-10 pb-10">
                  <span className="gradient_resume h-10 flex items-center text-sm font-normal mb-5">
                    2007 - 2009
                  </span>
                  <span className="mt-5 text-lg font-bold mb-2 block">
                    University of Santi Spiritus{" "}
                  </span>
                  <span
                    className={`mb-2 block text-base font-bold ${nunito.variable} font-nunito text-[#cf1f1f]`}
                  >
                    Santi-Spiritus, Cuba
                  </span>
                  <span
                    className={`text-base font-normal ${nunito.variable} font-nunito text-[#aaaaaa]`}
                  >
                    Completed over 90 credits towards a Bachelor's Degree in
                    Computer Science
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
