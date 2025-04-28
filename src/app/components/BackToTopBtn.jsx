"use client";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [hasMounted]);

  const scrollToTop = () => {
    if (hasMounted) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!hasMounted) return null; // Prevents hydration mismatch

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-3 md:bottom-8 md:right-8 p-3 bg-primary border border-secondary/20 !rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary group hover:border-secondary hover:animate-jello focus-ring"
          aria-label="Back to top"
          tabIndex={0}
        >
          <HiArrowNarrowUp className="w-5 h-5 text-secondary group-hover:text-secondary transition-colors duration-300" />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;
