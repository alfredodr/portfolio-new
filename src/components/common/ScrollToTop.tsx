import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!isBrowser()) return;

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const halfPageHeight = document.documentElement.scrollHeight / 2;

    setShowButton(scrollPosition > halfPageHeight);
  };

  useEffect(() => {
    if (!isBrowser()) return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBrowser, handleScroll]);

  return (
    <button
      className={`fixed right-[1%] bottom-[1%] z-40 bg-[#171A1D] border border-[#ffffff33] w-10 h-10 rounded-full flex flex-col items-center justify-evenly p-5 ${
        showButton ? "" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <span>
        <IoIosArrowUp color={"#ffffff"} />
      </span>
    </button>
  );
};

export default ScrollToTop;
