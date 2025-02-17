import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  //Show button when page is scrolled

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="back-to-top">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="back-to-top-btn flex flex-direction-row flex-justify-center"
        >
          <span>Back to top</span>
          <span className="flex flex-direction-column flex-justify-center">
            <HiOutlineArrowNarrowRight className="arrow" />
          </span>
        </div>
      )}
    </div>
  );
};

export default BackToTopBtn;
