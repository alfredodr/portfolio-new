import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Saira, Nunito } from "next/font/google";
import { FaMinus } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

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

const Header = () => {
  const [blackBackground, setblackBackground] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>("");

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 1) {
      setblackBackground(true);
    } else {
      setblackBackground(false);
    }

    if (winScroll < 700) {
      setCurrentSection("section-top");
    } else if (winScroll > 700 && winScroll < 2000) {
      setCurrentSection("section-about");
    } else if (winScroll > 2000 && winScroll < 2700) {
      setCurrentSection("section-work");
    } else if (winScroll > 2700 && winScroll < 3500) {
      setCurrentSection("section-portfolio");
    } else if (winScroll > 3500 && winScroll < 5000) {
      setCurrentSection("section-resume");
    } else if (winScroll > 5000 && winScroll < 5500) {
      setCurrentSection("section-contact");
    } else {
      setCurrentSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const toggleMobileMenu = () => {
    setActive(!isActive);
  };

  return (
    <header
      className={cn(
        "z-20 fixed left-0 right-0 top-0 transition ease-in-out delay-150 duration-500",
        { "bg-[#171a1d]": blackBackground },
        { "bg-transparent": !blackBackground }
      )}
    >
      <div className="relative group">
        <div className="max-w-[76rem] min-h-[5.6748125rem] px-8 mx-auto flex justify-between items-center">
          <Link href={"/"} aria-label="home">
            <div className="flex flex-col justify-center items-center whitespace-nowrap">
              <div className="flex items-center">
                <FaMinus color="#9E1030" />
                <span
                  className={`text-2xl text-[#fff] font-semibold ${saira.variable} font-saira`}
                >
                  Alfredo
                </span>
                <FaMinus color="#9E1030" />
              </div>
              <span
                className={`text-base text-[#fff] ${nunito.variable} font-nunito font-semibold`}
              >
                Web Developer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex flex-col md:flex-row m-0 p-0 list-none gap-0 md:gap-16 justify-center md:justify-center items-center">
              <li className="text-sm font-semibold text-[#fff]">
                <Link
                  href={"#section-top"}
                  className={cn(
                    "focus:text-[#cf1f1f] transition-colors delay-200 duration-300 ease-in-out",
                    { "text-[#cf1f1f]": currentSection === "section-top" },
                    { "text-[#fff]": currentSection !== "section-top" }
                  )}
                  aria-label="scroll to section top"
                >
                  Home
                </Link>
              </li>
              <li className="text-sm font-semibold text-[#fff] whitespace-nowrap">
                <Link
                  href={"#section-about"}
                  className={cn(
                    "focus:text-[#cf1f1f] transition-colors delay-200 duration-300 ease-in-out",
                    { "text-[#cf1f1f]": currentSection === "section-about" },
                    { "text-[#fff]": currentSection !== "section-about" }
                  )}
                  aria-label="scroll to section about"
                >
                  About me
                </Link>
              </li>
              <li className="text-sm font-semibold text-[#fff] whitespace-nowrap">
                <Link
                  href={"#section-work"}
                  className={cn(
                    "focus:text-[#cf1f1f] transition-colors delay-200 duration-300 ease-in-out",
                    { "text-[#cf1f1f]": currentSection === "section-work" },
                    { "text-[#fff]": currentSection !== "section-work" }
                  )}
                  aria-label="scroll to section services"
                >
                  What I do
                </Link>
              </li>
              <li className="text-sm font-semibold text-[#fff] whitespace-nowrap">
                <Link
                  href={"#section-portfolio"}
                  className={cn(
                    "focus:text-[#cf1f1f] transition-colors delay-200 duration-300 ease-in-out",
                    {
                      "text-[#cf1f1f]": currentSection === "section-portfolio",
                    },
                    { "text-[#fff]": currentSection !== "section-portfolio" }
                  )}
                  aria-label="scroll to section portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="text-sm font-semibold text-[#fff] whitespace-nowrap">
                <Link
                  href={"#section-resume"}
                  className={cn(
                    "focus:text-[#cf1f1f] transition-colors delay-200 duration-300 ease-in-out",
                    { "text-[#cf1f1f]": currentSection === "section-resume" },
                    { "text-[#fff]": currentSection !== "section-resume" }
                  )}
                  aria-label="scroll to section resume"
                >
                  My Resume
                </Link>
              </li>
              <li className="text-sm font-semibold text-[#fff] whitespace-nowrap">
                <Link
                  href={"#section-contact"}
                  className={cn(
                    "focus:text-[#cf1f1f] transition-colors delay-200 duration-300 ease-in-out",
                    { "text-[#cf1f1f]": currentSection === "section-contact" },
                    { "text-[#fff]": currentSection !== "section-contact" }
                  )}
                  aria-label="scroll to section contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
          {/* Hamburger Icon */}
          <button
            aria-label="menu button"
            className={cn(
              "flex items-center justify-center cursor-pointer relative w-8 h-8 lg:hidden text-[#fff] text-2xl hover:bg-[#fff] hover:text-[#000] hover:transition hover:delay-150 duration-500 ease-in-out",
              { "bg-[#fff] text-[#171a1d]": isActive }
            )}
            onClick={toggleMobileMenu}
          >
            <FiMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className="w-full lg:hidden">
          <ul
            className={cn(
              "flex flex-col justify-start items-center",
              { "opacity-100 visible": isActive },
              {
                "invisible delay-1000 absolute top-full w-full": !isActive,
              }
            )}
          >
            <li
              className={cn(
                "text-sm font-semibold text-[#fff] border-y border-[#ffffff1a] border-t-transparent w-full py-3 bg-[#171a1d] px-8 transition-opacity",
                { "opacity-100": isActive },
                {
                  "opacity-0 delay-[450ms]": !isActive,
                }
              )}
            >
              <Link
                href={"#section-top"}
                onClick={toggleMobileMenu}
                aria-label="scroll to section top"
              >
                Home
              </Link>
            </li>
            <li
              className={cn(
                "text-sm font-semibold text-[#fff] border-y border-[#ffffff1a] border-t-transparent w-full whitespace-nowrap px-8 py-3 bg-[#171a1d] transition-opacity",
                { "opacity-100 delay-100": isActive },
                {
                  "opacity-0 delay-[400ms]": !isActive,
                }
              )}
            >
              <Link
                href={"#section-about"}
                onClick={toggleMobileMenu}
                aria-label="scroll to section about"
              >
                About me
              </Link>
            </li>
            <li
              className={cn(
                "text-sm font-semibold text-[#fff] border-y border-[#ffffff1a] border-t-transparent w-full whitespace-nowrap px-8 py-3 bg-[#171a1d] transition-opacity",
                { "opacity-100 delay-150": isActive },
                {
                  "opacity-0 delay-300 ": !isActive,
                }
              )}
            >
              <Link
                href={"#section-services"}
                onClick={toggleMobileMenu}
                aria-label="scroll to section services"
              >
                What I do
              </Link>
            </li>
            <li
              className={cn(
                "text-sm font-semibold text-[#fff] border-y border-[#ffffff1a] border-t-transparent w-full whitespace-nowrap px-8 py-3 bg-[#171a1d] transition-opacity",
                { "opacity-100 delay-200": isActive },
                {
                  "opacity-0 delay-200 ": !isActive,
                }
              )}
            >
              <Link
                href={"#section-portfolio"}
                onClick={toggleMobileMenu}
                aria-label="scroll to section porftolio"
              >
                Portfolio
              </Link>
            </li>
            <li
              className={cn(
                "text-sm font-semibold text-[#fff] border-y border-[#ffffff1a] border-t-transparent w-full whitespace-nowrap px-8 py-3 bg-[#171a1d] transition-opacity",
                { "opacity-100 delay-300": isActive },
                {
                  "opacity-0 delay-150 ": !isActive,
                }
              )}
            >
              <Link
                href={"#section-resume"}
                onClick={toggleMobileMenu}
                aria-label="scroll to section resume"
              >
                My Resume
              </Link>
            </li>
            <li
              className={cn(
                "text-sm font-semibold text-[#fff] border-y border-[#ffffff1a] border-t-transparent w-full whitespace-nowrap px-8 py-3 bg-[#171a1d] transition-opacity",
                { "opacity-100 delay-500": isActive },
                {
                  "opacity-0 delay-100 ": !isActive,
                }
              )}
            >
              <Link
                href={"#section-contact"}
                onClick={toggleMobileMenu}
                aria-label="scroll to section contact me"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
