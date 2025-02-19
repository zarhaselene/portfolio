"use client";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed
            bottom-8
            right-8
            p-3
            bg-primary
            border
            border-secondary/20
            rounded-full
            shadow-lg
            transition-all
            duration-300
            focus:outline-none
            focus:ring-1
            focus:ring-secondary
            group
            hover:border-secondary
            hover:animate-jello
          `}
          aria-label="Back to top"
        >
          <HiArrowNarrowUp className="w-5 h-5 text-secondary group-hover:text-secondary transition-colors duration-300" />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;
